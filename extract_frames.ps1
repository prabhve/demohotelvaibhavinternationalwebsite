Add-Type -AssemblyName PresentationCore, PresentationFramework, WindowsBase, System.Drawing

function Extract-VideoFrames {
    param(
        [string]$VideoPath,
        [string]$OutDir,
        [int]$FrameCount = 120,
        [bool]$SmartCropDrones = $false
    )
    New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

    $mp = New-Object System.Windows.Media.MediaPlayer
    $mp.ScrubbingEnabled = $true
    $mp.Volume = 0
    $mp.Open([Uri]$VideoPath)

    # Wait until media is loaded
    $tries = 0
    while (-not $mp.NaturalDuration.HasTimeSpan -and $tries -lt 50) {
        Start-Sleep -Milliseconds 100
        $tries++
    }
    $mp.Pause()
    Start-Sleep -Milliseconds 400

    $durationSec = $mp.NaturalDuration.TimeSpan.TotalSeconds
    $w = $mp.NaturalVideoWidth
    $h = $mp.NaturalVideoHeight
    Write-Output "Opened $VideoPath -> ${w}x${h}, Duration: ${durationSec}s"

    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)

    for ($i = 0; $i -lt $FrameCount; $i++) {
        $sec = ($durationSec * 0.985) * ($i / ($FrameCount - 1))
        $mp.Position = [TimeSpan]::FromSeconds($sec)
        Start-Sleep -Milliseconds 65

        $dv = New-Object System.Windows.Media.DrawingVisual
        $dc = $dv.RenderOpen()

        if ($SmartCropDrones -and $sec -le 4.65) {
            # Smoothly crop out bottom 32% where the 2 toy drones appear in Video 1 (0s to 4.6s)
            $t = 1.0
            if ($sec -ge 4.15) {
                $t = 1.0 - (($sec - 4.15) / 0.50)
            }
            $scale = 1.0 + (0.45 * $t) # Zoom in 1.45x anchored at top-center
            $drawW = $w * $scale
            $drawH = $h * $scale
            $offsetX = - (($drawW - $w) / 2.0)
            $offsetY = 0.0 # Keep top sky/sun/waterfall anchored, push bottom drones below canvas!
            $rect = New-Object System.Windows.Rect($offsetX, $offsetY, $drawW, $drawH)
            $dc.DrawVideo($mp, $rect)
        } else {
            $rect = New-Object System.Windows.Rect(0, 0, $w, $h)
            $dc.DrawVideo($mp, $rect)
        }
        $dc.Close()

        $rtb = New-Object System.Windows.Media.Imaging.RenderTargetBitmap($w, $h, 96, 96, [System.Windows.Media.PixelFormats]::Pbgra32)
        $rtb.Render($dv)

        $encoder = New-Object System.Windows.Media.Imaging.BmpBitmapEncoder
        $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($rtb))

        $ms = New-Object System.IO.MemoryStream
        $encoder.Save($ms)
        $ms.Position = 0

        $bmp = [System.Drawing.Bitmap]::new($ms)
        $frameNum = ($i + 1).ToString("0000")
        $outPath = Join-Path $OutDir "frame_$frameNum.jpg"
        $bmp.Save($outPath, $jpegCodec, $encParams)

        $bmp.Dispose()
        $ms.Dispose()
    }

    $mp.Close()
    Write-Output "Successfully extracted $FrameCount frames to $OutDir"
}

Extract-VideoFrames -VideoPath "D:\VYUVIK PROJECTS\WEBSITES\assets\video1_valley_to_hotel.mp4" -OutDir "D:\VYUVIK PROJECTS\WEBSITES\assets\frames\seq1" -FrameCount 120 -SmartCropDrones $true
Extract-VideoFrames -VideoPath "D:\VYUVIK PROJECTS\WEBSITES\assets\video2_fort_to_lobby.mp4" -OutDir "D:\VYUVIK PROJECTS\WEBSITES\assets\frames\seq2" -FrameCount 120 -SmartCropDrones $false
