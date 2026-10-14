/* ==========================================================================
   HOTEL VAIBHAV INTERNATIONAL & FOOD EXPRESS — MASTER INTERACTIVE ENGINE
   1. Intro Entry + Scroll Animation (Seq 1: ezgif-6b12a81c647c9012-jpg, 240 frames)
   2. Real Google/Justdial Hotel Photos with Start & End Blur-Fade Transitions
   3. Tourist Places Scroll + Auto-Play Animation (Seq 2: ezgif-6c7b11141a46062c-jpg, 240 frames)
   4. Automatic WhatsApp Quote Builders for Rooms, Restaurant, Banquet, Tourist & Contact
   ========================================================================== */

const HOTEL_WHATSAPP = "917311100788";
const HOTEL_ORIGIN = "Hotel Vaibhav International, Urmaura, Robertsganj, Sonbhadra, Uttar Pradesh 231216";
const HOTEL_FULL_ADDRESS = "Hotel Vaibhav International & Food Express, Opposite DIET Campus, Near Tata Motors, Urmaura, Varanasi-Shaktinagar Highway (SH-5A), Robertsganj, Sonbhadra, UP - 231216";

// ==========================================================================
// 1. ALL 27 MAJOR TOURIST PLACES FROM HOTEL VAIBHAV INTERNATIONAL (ROBERTSGANJ)
// ==========================================================================
const SONBHADRA_SPOTS = [
  { id: 1, name: "Panchmukhi Pahadi & Rock Caves", hindi: "पंचमुखी पहाड़ी और शैलचित्र", distance: "8 km", time: "15 mins", circuit: "near", category: "Heritage & Cave Art", route: "Via Robertsganj–Chopan Road", query: "Panchmukhi Pahadi Robertsganj Sonbhadra", desc: "Ancient Five-Faced Lord Shiva hilltop shrine surrounded by prehistoric Mesolithic rock paintings." },
  { id: 2, name: "Churk Heritage & Hill Valley", hindi: "चुर्क पहाड़ी और हेरिटेज", distance: "8 km", time: "15 mins", circuit: "near", category: "Scenic Valley", route: "Via Robertsganj–Churk Road", query: "Churk Sonbhadra Uttar Pradesh", desc: "Historic township nestled in Kaimur hills with lush green ghat roads and valley views." },
  { id: 3, name: "Veer Lorik Stone (Lorik Patthar)", hindi: "वीर लोरिक पत्थर, मारकुंडी", distance: "9 km", time: "16 mins", circuit: "near", category: "Folklore Landmark", route: "Via Markundi Ghat (SH-5A)", query: "Veer Lorik Stone Markundi Sonbhadra", desc: "Massive split boulder on Markundi Hill immortalizing the folklore love story of Veer Lorik & Manjari." },
  { id: 4, name: "Son View Point (Son Eco Point)", hindi: "सोन व्यू पॉइंट / इको पॉइंट", distance: "10 km", time: "18 mins", circuit: "near", category: "Panoramic Viewpoint", route: "Via Markundi Hills (SH-5A)", query: "Son View Point Markundi Robertsganj Sonbhadra", desc: "Breathtaking cliff-top viewpoint overlooking the vast Son Valley, hairpin ghat roads, and forests." },
  { id: 5, name: "Kaimur Wildlife Sanctuary", hindi: "कैमूर वन्यजीव अभयारण्य", distance: "12 km", time: "20 mins", circuit: "near", category: "Wildlife & Nature", route: "Via Markundi–Gurma Forest", query: "Kaimur Wildlife Sanctuary Sonbhadra", desc: "Dense Vindhya-Kaimur forest reserve rich in blackbucks, sloth bears, waterfalls, and caves." },
  { id: 6, name: "Salkhan Fossils Park (1.4B Yrs)", hindi: "सल्खन जीवाश्म पार्क", distance: "14 km", time: "22 mins", circuit: "near", category: "World Geo-Heritage", route: "Via SH-5A (Salkhan)", query: "Salkhan Fossils Park Sonbhadra", desc: "140-Crore-year-old stromatolite algae fossils—older than America's Yellowstone National Park." },
  { id: 7, name: "Dhandhraul Dam & Reservoir", hindi: "धंधरौल बांध", distance: "22 km", time: "35 mins", circuit: "short", category: "Dam & Sunset Lake", route: "Via Churk–Vijaygarh Road", query: "Dhandhraul Dam Sonbhadra", desc: "Tranquil reservoir cradled by Kaimur hills, famous for golden sunsets and picnics." },
  { id: 8, name: "Kandakot Pahadi & Ancient Fort", hindi: "कंडाकोट पहाड़ी और किला", distance: "25 km", time: "40 mins", circuit: "short", category: "Historic Hill", route: "Via Robertsganj Highway Belt", query: "Kandakot Sonbhadra", desc: "Scenic rocky hillock and ancient ruins offering raw natural trekking trails." },
  { id: 9, name: "Vijaygarh Fort (Chandrakanta)", hindi: "विजयगढ़ किला", distance: "28 km", time: "45 mins", circuit: "short", category: "Royal Hill Fort", route: "Via Churk–Mau Kalan Road", query: "Vijaygarh Fort Sonbhadra", desc: "400-ft high Kaimur cliff fort from 'Chandrakanta', featuring perennial Ram Sagar & Miran Sagar ponds." },
  { id: 10, name: "Chopan Son River Ghat & Bridge", hindi: "चोपन सोन नदी तट", distance: "28 km", time: "40 mins", circuit: "short", category: "Riverfront", route: "Via SH-5A Highway (Chopan)", query: "Son River Bridge Chopan Sonbhadra", desc: "Wide golden sand banks of the mighty Son River framed by iconic rail and road bridges." },
  { id: 11, name: "Agori Fort (Sangam Citadel)", hindi: "अगोरी किला", distance: "35 km", time: "55 mins", circuit: "short", category: "Royal River Fort", route: "Via Chopan–Agori Route", query: "Agori Fort Chopan Sonbhadra", desc: "Mystical fort surrounded on three sides by the confluence of Son, Rihand, and Bijul rivers." },
  { id: 12, name: "Maa Vaishno Devi Temple, Dalla", hindi: "माँ वैष्णो देवी मंदिर, डाला", distance: "36 km", time: "50 mins", circuit: "short", category: "Spiritual Shrine", route: "Via SH-5A Highway (Dalla)", query: "Maa Vaishno Devi Temple Dalla Sonbhadra", desc: "Magnificent hilltop cave shrine modeled after Jammu's Mata Vaishno Devi Darbar." },
  { id: 13, name: "Mukkha Falls (Mukkha Dari)", hindi: "मुक्खा दरी जलप्रपात", distance: "38 km", time: "55 mins", circuit: "short", category: "Majestic Waterfall", route: "Via Robertsganj–Ghorawal Road", query: "Mukkha Falls Ghorawal Sonbhadra", desc: "Sonbhadra's most famous waterfall where the Belan River plunges into a dramatic rocky gorge." },
  { id: 14, name: "Lakhma & Lekhania Cave Art", hindi: "लखमा और लेखनिया शैलचित्र", distance: "38 km", time: "55 mins", circuit: "short", category: "Prehistoric Art", route: "Via Kaimur Forest Belt", query: "Lekhania Dari Cave Paintings Sonbhadra", desc: "4,000-year-old ochre and white cave shelters depicting ancient hunting and dance scenes." },
  { id: 15, name: "Shivdwar Dham Temple", hindi: "शिवद्वार धाम, घोरावल", distance: "40 km", time: "60 mins", circuit: "short", category: "11th-Century Temple", route: "Via Ghorawal Road", query: "Shivdwar Temple Ghorawal Sonbhadra", desc: "Houses a rare 11th-century black-stone idol of Uma-Maheshwar (Lord Shiva & Maa Parvati)." },
  { id: 16, name: "Lakhaniya Dari & Chuna Dari", hindi: "लखनिया दरी और चुना दरी", distance: "40 km", time: "60 mins", circuit: "short", category: "Waterfall & Trek", route: "Via Ahraura Ghat (SH-5A)", query: "Lakhaniya Dari Waterfall", desc: "Popular boulder trek leading to crystal-clear mountain waterfalls inside rock cliffs." },
  { id: 17, name: "Obra Dam & Reservoir", hindi: "ओबरा डैम", distance: "42 km", time: "60 mins", circuit: "short", category: "Dam & Viewpoint", route: "Via Chopan–Obra Road", query: "Obra Dam Sonbhadra", desc: "Scenic dam and reservoir built across the Rihand River surrounded by green hills." },
  { id: 18, name: "Aurwatand Waterfall & Naugarh", hindi: "औरवाटांड जलप्रपात और नौगढ़", distance: "42 km", time: "65 mins", circuit: "short", category: "Canyon Waterfall", route: "Via Robertsganj–Naugarh Route", query: "Aurwatand Waterfall Naugarh", desc: "Spectacular horseshoe canyon waterfall and historic Chandrakanta-era Naugarh fort." },
  { id: 19, name: "Gauri Shankar Mahadev Temple", hindi: "गौरी शंकर मंदिर", distance: "45 km", time: "1 hr 05 mins", circuit: "south", category: "Spiritual", route: "Via Chopan Belt", query: "Gauri Shankar Temple Sonbhadra", desc: "Serene ancient Shiva temple nestled amidst quiet hills and forest groves." },
  { id: 20, name: "Kudari Devi Hill Temple", hindi: "कुड़ारी देवी मंदिर", distance: "50 km", time: "1 hr 15 mins", circuit: "south", category: "Hilltop Temple", route: "Via Kudari Forest Road", query: "Kudari Devi Temple Sonbhadra", desc: "Revered forest goddess shrine perched atop a scenic hill." },
  { id: 21, name: "Renukeshwar Mahadev (Birla Temple)", hindi: "रेणुकेश्वर महादेव मंदिर, रेणुकूट", distance: "68 km", time: "1 hr 35 mins", circuit: "south", category: "Birla Architecture", route: "Via SH-5A (Renukoot)", query: "Renukeshwar Mahadev Temple Renukoot", desc: "Built by the Birla Group in 1972 with classical stone carvings and manicured gardens." },
  { id: 22, name: "Rihand Dam (Pant Sagar Lake)", hindi: "रिहंद बांध", distance: "75 km", time: "1 hr 45 mins", circuit: "south", category: "Mega Dam & Lake", route: "Via Pipri, Near Renukoot", query: "Rihand Dam Pipri Sonbhadra", desc: "India's largest artificial lake by volume offering ocean-like water vistas." },
  { id: 23, name: "Jharo Khas & Duddhi Heritage", hindi: "झारो खास और दुद्धी", distance: "75 km", time: "1 hr 50 mins", circuit: "south", category: "Eco & Tribal Culture", route: "Via Hathinala–Duddhi Road", query: "Duddhi Sonbhadra", desc: "Heartland of indigenous Karma folk culture and serene forest hills." },
  { id: 24, name: "Kanhar Dam (Amwar Reservoir)", hindi: "कनहर बांध (अमवार)", distance: "80 km", time: "1 hr 55 mins", circuit: "south", category: "Mega Dam", route: "Via Duddhi–Amwar Route", query: "Kanhar Dam Amwar Duddhi Sonbhadra", desc: "Newly built grand spillway dam at the confluence of Kanhar and Pagan rivers." },
  { id: 25, name: "Baba Baram & Paraspani Temple", hindi: "बरम बाबा मंदिर, परासपानी", distance: "90 km", time: "2 hrs 05 mins", circuit: "south", category: "Highway Shrine", route: "Via SH-5A (Paraspani)", query: "Paraspani Sonbhadra", desc: "Popular spiritual stopover surrounded by lush bamboo and sal forests." },
  { id: 26, name: "Maa Jwalamukhi Shaktipeeth", hindi: "माँ ज्वालामुखी मंदिर, शक्तिनगर", distance: "108 km", time: "2 hrs 25 mins", circuit: "south", category: "Ancient Shaktipeeth", route: "Via SH-5A (Shaktinagar)", query: "Jwalamukhi Temple Shaktinagar Sonbhadra", desc: "Historic divine Shaktipeeth after which Shaktinagar is named." },
  { id: 27, name: "Chilka Lake Eco Park", hindi: "चिल्का झील पार्क, शक्तिनगर", distance: "110 km", time: "2 hrs 30 mins", circuit: "south", category: "Lake Park", route: "Via NTPC Shaktinagar", query: "Chilka Lake Park Shaktinagar Sonbhadra", desc: "Landscaped lakeside promenade, fountains, and boating park." }
];

// ==========================================================================
// 2. FOOD EXPRESS MENU (WITH QUANTITY STEPPERS FOR AUTOMATIC WHATSAPP QUOTE)
// ==========================================================================
const FOOD_MENU = [
  { id: "m1", name: "Chilli Paneer (Dry / Gravy)", category: "starters", tag: "Verified Bill Price • Bestseller", price: 260 },
  { id: "m2", name: "Tandoori Paneer Tikka Platter", category: "starters", tag: "Clay Oven • Mint Chutney", price: 280 },
  { id: "m3", name: "Veg Manchurian (Dry / Gravy)", category: "starters", tag: "Indo-Chinese Classic", price: 210 },
  { id: "m4", name: "Honey Chilli Potato", category: "starters", tag: "Crispy Sesame Glaze", price: 190 },
  { id: "m5", name: "Hara Bhara Kebab (8 Pcs)", category: "starters", tag: "Spinach & Cashew", price: 230 },
  { id: "m6", name: "Chicken Tikka Angara", category: "starters", tag: "Tandoori Non-Veg", price: 320 },
  { id: "m7", name: "Kadhai Paneer Vaibhav Special", category: "main", tag: "Bell Peppers & Whole Spices", price: 280 },
  { id: "m8", name: "Paneer Butter Masala", category: "main", tag: "Rich Creamy Makhani", price: 270 },
  { id: "m9", name: "Handi Paneer Lazeez", category: "main", tag: "Clay Pot Gravy", price: 290 },
  { id: "m10", name: "Dal Makhani (Slow Cooked)", category: "main", tag: "Butter & Cream Finish", price: 220 },
  { id: "m11", name: "Yellow Dal Tadka (Desi Ghee)", category: "main", tag: "Garlic Cumin Tempering", price: 180 },
  { id: "m12", name: "Murgh Handi / Butter Chicken", category: "main", tag: "Signature Non-Veg", price: 360 },
  { id: "m13", name: "Veg Fried Rice", category: "breads", tag: "Verified Bill Price • Wok Tossed", price: 190 },
  { id: "m14", name: "Veg Hakka Noodles", category: "breads", tag: "Julienne Veggies", price: 180 },
  { id: "m15", name: "4-Layer Butter Lachha Paratha", category: "breads", tag: "Flaky Tandoori Bread", price: 55 },
  { id: "m16", name: "Garlic Butter Naan", category: "breads", tag: "Clay Oven Naan", price: 65 },
  { id: "m17", name: "Amritsari Stuffed Kulcha", category: "breads", tag: "Spiced Herb Bread", price: 70 },
  { id: "m18", name: "Hyderabadi Dum Biryani", category: "breads", tag: "Served with Raita", price: 250 },
  { id: "m19", name: "Virgin Mint Mojito", category: "drinks", tag: "Fresh Mint & Lime", price: 130 },
  { id: "m20", name: "Blue Lagoon Curacao", category: "drinks", tag: "Signature Mocktail", price: 140 },
  { id: "m21", name: "Strawberry Velvet Thick Shake", category: "drinks", tag: "Berry Cream Shake", price: 150 },
  { id: "m22", name: "Belgian Chocolate Cold Coffee", category: "drinks", tag: "Topped with Choco Bar", price: 160 },
  { id: "m23", name: "Green Apple Cooler", category: "drinks", tag: "Orchard Refresher", price: 135 },
  { id: "m24", name: "Packaged Mineral Water (1L)", category: "drinks", tag: "Verified Bill Price", price: 30 }
];

// ==========================================================================
// 3. CANVAS SEQUENCE PLAYER CLASS (FOR SEQ 1 INTRO & SEQ 2 TOURIST)
// ==========================================================================
class FrameCanvasPlayer {
  constructor(canvasId, folderPath, frameCount) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d', { alpha: false }) : null;
    this.folderPath = folderPath;
    this.frameCount = frameCount;
    this.frames = new Array(frameCount);
    this.targetFrame = 0;
    this.currentFrame = 0;
    this.lastDrawn = -1;
    this.lastW = 0;
    this.lastH = 0;

    if (this.canvas) {
      this.resize(true);
      window.addEventListener('resize', () => {
        if (this.resize(false)) {
          this.draw(Math.round(this.currentFrame), true);
        }
      });
    }
  }

  resize(force = false) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Ignore minor vertical resize events caused by mobile browser URL bar hiding/showing
    if (!force && Math.abs(w - this.lastW) < 2 && Math.abs(h - this.lastH) < 130) {
      return false;
    }
    this.lastW = w;
    this.lastH = h;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    return true;
  }

  preload(onFrame) {
    let loaded = 0;
    return new Promise((resolve) => {
      for (let i = 0; i < this.frameCount; i++) {
        const img = new Image();
        const num = String(i + 1).padStart(3, '0');
        img.src = `${this.folderPath}/ezgif-frame-${num}.jpg`;
        img.onload = () => {
          this.frames[i] = img;
          loaded++;
          if (i === 0) this.draw(0, true);
          if (onFrame) onFrame();
          if (loaded === this.frameCount) resolve();
        };
        img.onerror = () => {
          loaded++;
          if (onFrame) onFrame();
          if (loaded === this.frameCount) resolve();
        };
      }
    });
  }

  setProgress(progress) {
    const p = Math.max(0, Math.min(1, progress));
    this.targetFrame = p * (this.frameCount - 1);
  }

  tick(lerpSpeed = 0.14) {
    this.currentFrame += (this.targetFrame - this.currentFrame) * lerpSpeed;
    const idx = Math.max(0, Math.min(this.frameCount - 1, Math.round(this.currentFrame)));
    if (idx !== this.lastDrawn) {
      this.draw(idx);
    }
    return idx;
  }

  draw(idx, force = false) {
    if (!this.ctx || !this.canvas) return;
    let img = this.frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let s = 1; s < 25; s++) {
        if (idx - s >= 0 && this.frames[idx - s]?.complete) { img = this.frames[idx - s]; break; }
        if (idx + s < this.frameCount && this.frames[idx + s]?.complete) { img = this.frames[idx + s]; break; }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;
    if (!force && idx === this.lastDrawn) return;

    this.lastDrawn = idx;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'high';

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    this.ctx.drawImage(img, dx, dy, dw, dh);
  }
}

// ==========================================================================
// 4. INITIALIZE MULTI-STAGE BACKGROUND & ALL INTERACTIVE FORMS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const preloaderInfo = document.getElementById('preloader-info');

  // Create Sequence 1 (Intro) & Sequence 2 (Tourist Places) Players
  const seq1Player = new FrameCanvasPlayer('canvas-seq1', 'ezgif-6b12a81c647c9012-jpg', 240);
  const seq2Player = new FrameCanvasPlayer('canvas-seq2', 'ezgif-6c7b11141a46062c-jpg', 240);

  const layerHeroHotel = document.getElementById('bg-layer-hero-hotel');
  const layerSeq1 = document.getElementById('bg-layer-seq1');
  const layerPhotos = document.getElementById('bg-layer-photos');
  const layerSeq2 = document.getElementById('bg-layer-seq2');
  const photoSlides = document.querySelectorAll('.bg-photo-slide');

  const hudText = document.getElementById('bg-mode-text');
  const hudFill = document.getElementById('bg-mode-fill');

  let loadedCount = 0;
  const totalFrames = 480;
  let introAutoFrame = 0;
  let introInterval = null;
  let seq2AutoPlaying = false;
  let seq2AutoFrame = 0;

  function dismissPreloader() {
    if (preloader && !preloader.classList.contains('loaded')) {
      preloader.classList.add('loaded');
    }
  }

  // Manual "Replay 3D Intro" button plays the 240 frames on demand
  function playIntroAnimation() {
    dismissPreloader();
    if (introInterval) clearInterval(introInterval);
    introAutoFrame = 0;
    seq1Player.currentFrame = 0;
    seq1Player.targetFrame = 0;
    activeMode = 'seq1';
    layerHeroHotel?.classList.remove('active');
    layerSeq1?.classList.add('active');
    layerPhotos?.classList.remove('active');
    layerSeq2?.classList.remove('active');

    introInterval = setInterval(() => {
      if (introAutoFrame >= 239) {
        clearInterval(introInterval);
        introInterval = null;
        return;
      }
      introAutoFrame += 1.6;
      seq1Player.targetFrame = Math.min(239, introAutoFrame);
    }, 24);
  }

  document.getElementById('btn-replay-intro')?.addEventListener('click', () => {
    playIntroAnimation();
  });

  const onAnyFrameLoad = () => {
    loadedCount++;
    const pct = Math.min(100, Math.round((loadedCount / totalFrames) * 100));
    if (preloaderBar) preloaderBar.style.width = `${pct}%`;
    if (preloaderInfo) preloaderInfo.textContent = `Loading 3D Frames... ${pct}% (${loadedCount}/${totalFrames})`;
    if (loadedCount === 65) {
      dismissPreloader();
    }
  };

  Promise.all([
    seq1Player.preload(onAnyFrameLoad),
    seq2Player.preload(onAnyFrameLoad)
  ]).then(() => {
    dismissPreloader();
  });

  setTimeout(dismissPreloader, 1800);

  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  mobileToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.toggle('open');
    mobileToggle.textContent = mobileDrawer?.classList.contains('open') ? '✕' : '☰';
  });
  mobileDrawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      if (mobileToggle) mobileToggle.textContent = '☰';
    });
  });

  // ========================================================================
  // SCROLL DIRECTOR: HOTEL HERO IMAGE (TOP) -> SEQ 1 -> HOTEL PHOTOS -> SEQ 2
  // ========================================================================
  const aboutSec = document.getElementById('about');
  const roomsSec = document.getElementById('rooms');
  const restSec = document.getElementById('restaurant');
  const galSec = document.getElementById('gallery');
  const banqSec = document.getElementById('banquet');
  const touristSec = document.getElementById('tourist');

  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-grid a, .mobile-quick-strip a');
  const quickStrip = document.querySelector('.mobile-quick-strip');
  const navbar = document.querySelector('.navbar');
  let lastActiveSecId = '';

  let activeMode = 'hero-hotel'; // 'hero-hotel' | 'seq1' | 'photos' | 'seq2'
  let activePhotoIndex = 0;

  function setPhotoSlide(idx, edgeBlurPx = 0) {
    if (idx !== activePhotoIndex) {
      activePhotoIndex = idx;
      photoSlides.forEach((slide, i) => {
        if (i === idx) {
          slide.classList.add('active');
          slide.classList.remove('leaving');
        } else if (slide.classList.contains('active')) {
          slide.classList.remove('active');
          slide.classList.add('leaving');
        } else {
          slide.classList.remove('active', 'leaving');
        }
      });
    }
    // Apply subtle start/end section depth-of-field blur as requested by user
    if (layerPhotos) {
      layerPhotos.style.filter = edgeBlurPx > 0.3 ? `blur(${edgeBlurPx.toFixed(1)}px)` : 'none';
    }
  }

  function computeEdgeBlur(sy, secStart, secEnd) {
    const span = Math.max(1, secEnd - secStart);
    const p = Math.max(0, Math.min(1, (sy - secStart) / span));
    if (p < 0.12) return ((0.12 - p) / 0.12) * 9;
    if (p > 0.88) return ((p - 0.88) / 0.12) * 9;
    return 0;
  }

  function updateBackgroundOnScroll() {
    const sy = window.scrollY;
    const vh = window.innerHeight;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    const globalPct = Math.max(0, Math.min(100, (sy / maxScroll) * 100));
    if (hudFill) hudFill.style.height = `${globalPct.toFixed(1)}%`;

    if (sy > 40) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');

    const aboutTop = aboutSec ? aboutSec.offsetTop - vh * 0.25 : 900;
    const touristTop = touristSec ? touristSec.offsetTop - vh * 0.5 : 3500;

    // STAGE 0: INITIAL WEBSITE OPEN AT TOP (sy <= 8px) -> SHOW FRAME 1 FIRST IMAGE (ezgif-frame-001.jpg)!
    if (sy <= 8 && !introInterval) {
      activeMode = 'hero-hotel';
      layerHeroHotel?.classList.add('active');
      layerSeq1?.classList.remove('active');
      layerPhotos?.classList.remove('active');
      layerSeq2?.classList.remove('active');
      seq1Player.targetFrame = 0;
      seq1Player.currentFrame = 0;
      if (hudText) hudText.textContent = "FRAME 001/240";
    }
    // STAGE 1: AS USER SCROLLS IN #HOME (8px < sy < aboutTop) -> SCRUB FRAME 1 FROM 001 TO LAST (240)!
    else if (sy < aboutTop) {
      if (introInterval && sy > 25) {
        clearInterval(introInterval);
        introInterval = null;
      }
      activeMode = 'seq1';
      layerHeroHotel?.classList.remove('active');
      layerSeq1?.classList.add('active');
      layerPhotos?.classList.remove('active');
      layerSeq2?.classList.remove('active');

      const scrollSpan = Math.max(1, aboutTop - 8);
      const homeProgress = Math.max(0, Math.min(1, (sy - 8) / scrollSpan));
      // Keep the final Hotel Exterior frames (200-240) 100% sharp during the Arrival Row;
      // only apply a subtle blur in the final 5% right as #about transitions in
      if (homeProgress > 0.95) {
        const blurPx = ((homeProgress - 0.95) / 0.05) * 7;
        if (layerSeq1) layerSeq1.style.filter = `blur(${blurPx.toFixed(1)}px)`;
      } else {
        if (layerSeq1) layerSeq1.style.filter = 'blur(0px)';
      }

      if (!introInterval) {
        const frameMapping = Math.min(1, homeProgress / 0.9);
        seq1Player.targetFrame = frameMapping * 239;
      }
    }
    // STAGE 2: HOTEL GOOGLE/REAL PHOTOS WITH START & END BLUR-FADE TRANSITIONS
    else if (sy >= aboutTop && sy < touristTop) {
      activeMode = 'photos';
      layerHeroHotel?.classList.remove('active');
      layerSeq1?.classList.remove('active');
      layerPhotos?.classList.add('active');
      layerSeq2?.classList.remove('active');

      const rTop = roomsSec ? roomsSec.offsetTop - vh * 0.48 : aboutTop + 500;
      const dTop = restSec ? restSec.offsetTop - vh * 0.48 : rTop + 500;
      const gTop = galSec ? galSec.offsetTop - vh * 0.48 : dTop + 500;
      const bTop = banqSec ? banqSec.offsetTop - vh * 0.48 : gTop + 500;

      if (sy < rTop) {
        setPhotoSlide(0, computeEdgeBlur(sy, aboutTop, rTop));
        if (hudText) hudText.textContent = "LOBBY VIEW";
      } else if (sy < dTop) {
        setPhotoSlide(1, computeEdgeBlur(sy, rTop, dTop));
        if (hudText) hudText.textContent = "AC ROOMS";
      } else if (sy < gTop) {
        setPhotoSlide(2, computeEdgeBlur(sy, dTop, gTop));
        if (hudText) hudText.textContent = "FOOD EXPRESS";
      } else if (sy < bTop) {
        setPhotoSlide(3, computeEdgeBlur(sy, gTop, bTop));
        if (hudText) hudText.textContent = "HOTEL GALLERY";
      } else {
        setPhotoSlide(4, computeEdgeBlur(sy, bTop, touristTop));
        if (hudText) hudText.textContent = "BANQUET HALL";
      }
    }
    // STAGE 3: TOURIST PLACES & BEYOND (Frame Sequence 2: 240 Frames!)
    else {
      activeMode = 'seq2';
      layerHeroHotel?.classList.remove('active');
      layerSeq1?.classList.remove('active');
      layerPhotos?.classList.remove('active');
      layerSeq2?.classList.add('active');

      if (!seq2AutoPlaying) {
        const seq2Scrollable = Math.max(1, maxScroll - touristTop);
        const seq2Progress = Math.max(0, Math.min(1, (sy - touristTop) / seq2Scrollable));
        seq2Player.setProgress(seq2Progress);
      }
    }

    // Highlight active section in Navbar, Mobile Quick Strip & Mobile Drawer
    const sections = ['home', 'about', 'rooms', 'restaurant', 'gallery', 'banquet', 'tourist', 'contact', 'location', 'policy'];
    let currentSecId = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && sy >= el.offsetTop - vh * 0.45) {
        currentSecId = id;
      }
    }
    if (currentSecId !== lastActiveSecId) {
      lastActiveSecId = currentSecId;
      navLinks.forEach(a => {
        const isMatch = a.getAttribute('href') === `#${currentSecId}`;
        a.classList.toggle('active', isMatch);
        if (isMatch && quickStrip && a.parentElement === quickStrip) {
          const targetScroll = a.offsetLeft - (quickStrip.clientWidth / 2) + (a.clientWidth / 2);
          quickStrip.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
        }
      });
    }
  }

  window.addEventListener('scroll', updateBackgroundOnScroll, { passive: true });

  function masterRenderLoop() {
    if (activeMode === 'seq1') {
      const f1 = seq1Player.tick(0.14);
      if (hudText) hudText.textContent = `FRAME ${String(f1 + 1).padStart(3, '0')}/240`;
    } else if (activeMode === 'seq2') {
      if (seq2AutoPlaying) {
        seq2AutoFrame = (seq2AutoFrame + 0.65) % 240;
        seq2Player.targetFrame = seq2AutoFrame;
      }
      const f2 = seq2Player.tick(0.14);
      if (hudText) hudText.textContent = `TOUR ${String(f2 + 1).padStart(3, '0')}/240`;
    }
    requestAnimationFrame(masterRenderLoop);
  }
  updateBackgroundOnScroll();
  requestAnimationFrame(masterRenderLoop);

  // Scroll Reveal Observer
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  // ========================================================================
  // 5. ROOM BOOKING FORM -> LIVE QUOTE & AUTOMATIC WHATSAPP GENERATOR
  // ========================================================================
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const rmCheckin = document.getElementById('rm-checkin');
  const rmCheckout = document.getElementById('rm-checkout');
  if (rmCheckin) {
    rmCheckin.valueAsDate = today;
    rmCheckin.min = today.toISOString().split('T')[0];
  }
  if (rmCheckout) {
    rmCheckout.valueAsDate = tomorrow;
    rmCheckout.min = tomorrow.toISOString().split('T')[0];
  }

  // Room card "Select & Get Quote" buttons
  const roomCards = document.querySelectorAll('[data-room-card]');
  document.querySelectorAll('.js-select-room').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.roomIdx || "0", 10);
      const catSelect = document.getElementById('rm-category');
      if (catSelect) {
        catSelect.selectedIndex = idx;
        calculateRoomQuote();
      }
      roomCards.forEach((c, i) => c.classList.toggle('selected-room', i === idx));
      const formBox = document.getElementById('room-booking-form');
      if (formBox) {
        formBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        formBox.classList.add('pulse-highlight');
        setTimeout(() => formBox.classList.remove('pulse-highlight'), 1400);
      }
    });
  });

  function calculateRoomQuote() {
    const typeEl = document.getElementById('rm-category');
    const countEl = document.getElementById('rm-count');
    const extraEl = document.getElementById('rm-addon');
    const nameVal = document.getElementById('rm-name')?.value.trim();

    // Ensure checkout is always at least 1 day after checkin
    if (rmCheckin?.value && rmCheckout?.value) {
      const d1 = new Date(rmCheckin.value);
      const d2 = new Date(rmCheckout.value);
      if (d2 <= d1) {
        const nextDay = new Date(d1);
        nextDay.setDate(d1.getDate() + 1);
        rmCheckout.valueAsDate = nextDay;
      }
    }

    const ciVal = rmCheckin?.value;
    const coVal = rmCheckout?.value;
    const rate = parseInt(typeEl?.selectedOptions[0]?.dataset.rate || "2299", 10);
    const rooms = parseInt(countEl?.value || "1", 10);

    let nights = 1;
    if (ciVal && coVal) {
      const d1 = new Date(ciVal);
      const d2 = new Date(coVal);
      const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
      if (diff > 0) nights = diff;
    }

    const addonPerNight = parseInt(extraEl?.selectedOptions[0]?.dataset.addon || "0", 10);
    const addonCost = addonPerNight * nights * rooms;
    const total = (rate * rooms * nights) + addonCost;

    const previewEl = document.getElementById('room-quote-preview');
    if (previewEl) {
      previewEl.innerHTML = `Estimated Stay Quote: <strong>₹${total.toLocaleString('en-IN')}</strong> (${rooms} Room × ${nights} Night${nights > 1 ? 's' : ''} @ ₹${rate}/night ${addonCost ? `+ ₹${addonCost.toLocaleString('en-IN')} Add-on` : ''})`;
    }

    const waLiveEl = document.getElementById('room-wa-preview-text');
    if (waLiveEl) {
      const shortCat = (typeEl?.value || 'Deluxe AC Room').split('(')[0].trim();
      waLiveEl.innerHTML = `📲 <strong>WhatsApp Quote Ready${nameVal ? ` for ${nameVal}` : ''}:</strong> ${rooms}× ${shortCat} (${nights} Night${nights > 1 ? 's' : ''}, ${ciVal || 'Today'} → ${coVal || 'Tomorrow'}) — <strong>₹${total.toLocaleString('en-IN')}</strong>`;
    }

    return { total, nights, rate, rooms };
  }

  ['rm-name', 'rm-phone', 'rm-category', 'rm-count', 'rm-checkin', 'rm-checkout', 'rm-addon', 'rm-guests', 'rm-gst'].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('change', calculateRoomQuote);
    el?.addEventListener('input', calculateRoomQuote);
  });
  calculateRoomQuote();

  document.getElementById('btn-room-whatsapp')?.addEventListener('click', () => {
    const name = document.getElementById('rm-name')?.value.trim() || 'Guest';
    const phone = document.getElementById('rm-phone')?.value.trim() || 'Not provided';
    const cat = document.getElementById('rm-category')?.value || 'Double Deluxe AC Room';
    const guests = document.getElementById('rm-guests')?.value || '2 Adults';
    const ci = rmCheckin?.value || 'Today';
    const co = rmCheckout?.value || 'Tomorrow';
    const addon = document.getElementById('rm-addon')?.value || 'Standard Stay';
    const gst = document.getElementById('rm-gst')?.value || 'Standard Personal Receipt';
    const { total, nights, rooms } = calculateRoomQuote();

    window.VaibhavAdmin?.recordLead({
      type: "Room Booking",
      name: name,
      phone: phone,
      details: `${cat} (${rooms} Room × ${nights} Night) • In: ${ci} • Out: ${co} • ${guests} • ${addon} • ${gst}`,
      amount: total,
      source: "Room Booking Engine"
    });

    const msg = `Namaste *Hotel Vaibhav International* (Robertsganj, Sonbhadra)!\n\n` +
      `🏨 *NEW ROOM RESERVATION & QUOTE REQUEST*\n` +
      `• *Guest Name:* ${name}\n` +
      `• *Contact Phone:* ${phone}\n` +
      `• *Room Type:* ${cat}\n` +
      `• *No. of Rooms:* ${rooms} Room(s) for ${nights} Night(s)\n` +
      `• *Check-In:* ${ci} (12:00 PM)\n` +
      `• *Check-Out:* ${co} (10:00 AM)\n` +
      `• *Guests:* ${guests}\n` +
      `• *Add-On / Meal Plan:* ${addon}\n` +
      `• *Billing:* ${gst}\n` +
      `• *Estimated Quote:* *₹${total.toLocaleString('en-IN')}*\n\n` +
      `Please confirm room availability and share booking confirmation.`;

    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ========================================================================
  // 6. FOOD EXPRESS MENU + REC SONBHADRA CAMPUS DELIVERY (₹40 DELIVERY CHARGE,
  //    QR PAYMENT, PAID [UTR/REF/TXN NO.] vs UNPAID, & CALL TO CONFIRM MODAL)
  // ========================================================================
  const REC_DELIVERY_CHARGE = 40; // Fixed ₹40 Campus Delivery Charge for REC Sonbhadra
  const dishQuantities = new Map(); // Empty cart by default (0 items selected)
  let activeFoodCat = 'all';
  const menuContainer = document.getElementById('menu-cards-container');
  const menuTabs = document.querySelectorAll('[data-fcat]');

  function updateFoodQuotePreview() {
    const items = [];
    let sum = 0;
    dishQuantities.forEach((qty, id) => {
      if (qty > 0) {
        const dish = FOOD_MENU.find(d => d.id === id);
        if (dish) {
          const lineTotal = dish.price * qty;
          sum += lineTotal;
          items.push({ ...dish, qty, lineTotal });
        }
      }
    });
    const gst = Math.round(sum * 0.05);
    const net = sum + gst;
    const recGrandTotal = sum > 0 ? (net + REC_DELIVERY_CHARGE) : 0;

    // Update Table Reservation Preview
    const el = document.getElementById('food-quote-preview');
    if (el) {
      if (items.length === 0) {
        el.innerHTML = `No dishes pre-selected (Currently: <strong>Table Reservation Only</strong> — Tap <strong>＋</strong> on menu above if you wish to pre-order dishes)`;
      } else {
        const summaryStr = items.map(i => `${i.qty}× ${i.name}`).join(', ');
        el.innerHTML = `Selected Dishes (${items.reduce((a, b) => a + b.qty, 0)} items): <strong>₹${net.toLocaleString('en-IN')}</strong> (Subtotal ₹${sum} + 5% GST ₹${gst}) — <em>${summaryStr}</em>`;
      }
    }

    // Update REC Sonbhadra Campus Live Bill & QR Payable Amount
    const recDishesEl = document.getElementById('rec-selected-dishes-list');
    const recSubEl = document.getElementById('rec-bill-subtotal');
    const recGstEl = document.getElementById('rec-bill-gst');
    const recDelEl = document.getElementById('rec-bill-delivery');
    const recTotEl = document.getElementById('rec-bill-total');
    const recQrAmtEl = document.getElementById('rec-qr-payable-amt');
    const recUpiLink = document.getElementById('rec-upi-deep-link');

    if (recDishesEl) {
      if (items.length === 0) {
        recDishesEl.innerHTML = `⚠️ No dishes selected yet — Tap <strong>＋</strong> on any dish in the menu above to add to your REC Campus order!`;
      } else {
        recDishesEl.innerHTML = items.map(i => `<strong>${i.qty}× ${i.name}</strong> (₹${i.lineTotal})`).join(' &nbsp;•&nbsp; ');
      }
    }
    if (recSubEl) recSubEl.textContent = `₹${sum.toLocaleString('en-IN')}`;
    if (recGstEl) recGstEl.textContent = `₹${gst.toLocaleString('en-IN')}`;
    if (recDelEl) recDelEl.textContent = sum > 0 ? `₹${REC_DELIVERY_CHARGE}` : `₹0`;
    if (recTotEl) recTotEl.textContent = `₹${recGrandTotal.toLocaleString('en-IN')}`;
    if (recQrAmtEl) recQrAmtEl.textContent = `₹${recGrandTotal.toLocaleString('en-IN')}`;
    if (recUpiLink) {
      recUpiLink.href = recGrandTotal > 0
        ? `upi://pay?pa=7311100944@upi&pn=Food%20Express%20Hotel%20Vaibhav&am=${recGrandTotal}&cu=INR`
        : '#';
    }

    return { items, sum, gst, net, recDelivery: REC_DELIVERY_CHARGE, recGrandTotal };
  }

  function renderFoodMenu(cat = activeFoodCat) {
    activeFoodCat = cat;
    if (!menuContainer) return;
    const list = cat === 'all' ? FOOD_MENU : FOOD_MENU.filter(d => d.category === cat);
    menuContainer.innerHTML = list.map(d => {
      const qty = dishQuantities.get(d.id) || 0;
      return `
        <div class="dish-card ${qty > 0 ? 'selected' : ''}" data-id="${d.id}">
          <div>
            <div class="dish-name">${qty > 0 ? '✅ ' : ''}${d.name}</div>
            <div class="dish-meta">${d.tag}</div>
          </div>
          <div class="dish-right">
            <div class="dish-price">₹${d.price}</div>
            <div class="qty-box">
              <button type="button" class="qty-btn js-qty-minus" data-id="${d.id}" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${qty}</span>
              <button type="button" class="qty-btn js-qty-plus" data-id="${d.id}" aria-label="Increase quantity">＋</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    menuContainer.querySelectorAll('.js-qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        dishQuantities.set(id, (dishQuantities.get(id) || 0) + 1);
        renderFoodMenu(activeFoodCat);
        updateFoodQuotePreview();
      });
    });

    menuContainer.querySelectorAll('.js-qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const curr = dishQuantities.get(id) || 0;
        if (curr <= 1) dishQuantities.delete(id);
        else dishQuantities.set(id, curr - 1);
        renderFoodMenu(activeFoodCat);
        updateFoodQuotePreview();
      });
    });

    menuContainer.querySelectorAll('.dish-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const curr = dishQuantities.get(id) || 0;
        if (curr === 0) dishQuantities.set(id, 1);
        else dishQuantities.delete(id);
        renderFoodMenu(activeFoodCat);
        updateFoodQuotePreview();
      });
    });
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFoodMenu(tab.dataset.fcat);
    });
  });

  document.getElementById('btn-clear-dishes')?.addEventListener('click', () => {
    dishQuantities.clear();
    renderFoodMenu(activeFoodCat);
    updateFoodQuotePreview();
  });

  renderFoodMenu('all');
  updateFoodQuotePreview();

  // Scroll to REC Sonbhadra Campus Order Panel when clicking REC buttons
  function scrollToRecOrderPanel() {
    const recBox = document.getElementById('rec-campus-order-box');
    if (recBox) {
      recBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
      recBox.classList.add('pulse-highlight');
      setTimeout(() => recBox.classList.remove('pulse-highlight'), 1500);
    }
  }
  document.getElementById('btn-jump-rec-order')?.addEventListener('click', scrollToRecOrderPanel);
  document.getElementById('btn-menu-rec-trigger')?.addEventListener('click', scrollToRecOrderPanel);
  document.getElementById('tb-type')?.addEventListener('change', (e) => {
    if (e.target.value.includes('REC Sonbhadra')) {
      scrollToRecOrderPanel();
    }
  });

  // Payment Status Radio Marking (PAID with UTR/Ref/Txn No. vs UNPAID)
  const radioPaid = document.getElementById('rec-status-paid');
  const radioUnpaid = document.getElementById('rec-status-unpaid');
  const pmCardPaid = document.getElementById('pm-card-paid');
  const pmCardUnpaid = document.getElementById('pm-card-unpaid');
  const utrFieldWrap = document.getElementById('rec-utr-field-wrap');
  const unpaidNoteWrap = document.getElementById('rec-unpaid-note-wrap');
  const utrInput = document.getElementById('rec-utr-input');
  const utrError = document.getElementById('rec-utr-error');

  function syncPaymentStatusUI() {
    const isPaid = radioPaid?.checked;
    pmCardPaid?.classList.toggle('active', !!isPaid);
    pmCardUnpaid?.classList.toggle('active', !isPaid);
    if (utrFieldWrap) utrFieldWrap.style.display = isPaid ? 'block' : 'none';
    if (unpaidNoteWrap) unpaidNoteWrap.style.display = isPaid ? 'none' : 'block';
    if (!isPaid && utrError) utrError.style.display = 'none';
  }
  radioPaid?.addEventListener('change', syncPaymentStatusUI);
  radioUnpaid?.addEventListener('change', syncPaymentStatusUI);
  utrInput?.addEventListener('input', () => {
    if (utrInput.value.trim().length > 0 && utrError) {
      utrError.style.display = 'none';
    }
  });
  syncPaymentStatusUI();

  // Build REC Sonbhadra Order Data & WhatsApp Message
  let lastRecOrderWhatsAppMsg = '';
  function buildRecOrderData() {
    // Ensure at least 1 dish is in the order if user cleared everything
    if (dishQuantities.size === 0) {
      dishQuantities.set('m1', 1);
      renderFoodMenu(activeFoodCat);
    }
    const { items, sum, gst, recDelivery, recGrandTotal } = updateFoodQuotePreview();
    const name = document.getElementById('rec-name')?.value.trim() || 'REC Student / Faculty';
    const phone = document.getElementById('rec-phone')?.value.trim() || 'Not provided';
    const hostel = document.getElementById('rec-hostel')?.value || 'Boys Hostel 1 (BH-1) — REC Sonbhadra, Churk';
    const branch = document.getElementById('rec-branch')?.value || 'B.Tech — CSE';
    const yearSlot = document.getElementById('rec-year')?.value || 'Immediate Delivery';
    const roomNote = document.getElementById('rec-room')?.value.trim() || 'Main Gate / Hostel Gate';
    const isPaid = radioPaid?.checked;
    const utrVal = utrInput?.value.trim() || '';
    const orderId = `REC-${Math.floor(1000 + Math.random() * 9000)}`;

    const paymentLine = isPaid
      ? `✅ *PAID ONLINE (UPI / QR)* — UTR / Ref / Txn No: *${utrVal}*`
      : `⏳ *UNPAID (Pay on Campus Delivery)* — Will pay ₹${recGrandTotal} via Cash/UPI on delivery`;

    const dishLines = items.map(c => `  - ${c.qty}× ${c.name} (₹${c.lineTotal})`).join('\n');

    const waMsg = `Namaste *Food Express — Hotel Vaibhav International* (Robertsganj)!\n\n` +
      `🎓 *NEW REC SONBHADRA CAMPUS FOOD ORDER (${orderId})*\n` +
      `• *College:* Rajkiya Engineering College (REC), Churk, Sonbhadra – 231206\n` +
      `• *Student / Faculty Name:* ${name}\n` +
      `• *Mobile / WhatsApp:* ${phone}\n` +
      `• *REC Campus Delivery Point:* ${hostel}\n` +
      `• *Department / Branch:* ${branch}\n` +
      `• *Year / Slot:* ${yearSlot}\n` +
      `• *Room No. / Landmark Note:* ${roomNote}\n\n` +
      `🍛 *ORDERED DISHES:*\n${dishLines}\n` +
      `• *Food Subtotal:* ₹${sum} | *5% GST:* ₹${gst}\n` +
      `• *REC Campus Delivery Charge:* *₹${recDelivery} (Fixed)*\n` +
      `• *Grand Total Bill:* *₹${recGrandTotal.toLocaleString('en-IN')}*\n` +
      `• *Payment Status:* ${paymentLine}\n\n` +
      `Please confirm my REC Sonbhadra campus delivery order!`;

    return {
      orderId, name, phone, hostel, branch, yearSlot, roomNote,
      isPaid, utrVal, items, sum, gst, recDelivery, recGrandTotal, waMsg
    };
  }

  const recModal = document.getElementById('rec-confirm-modal');
  const recModalSummary = document.getElementById('rec-modal-summary');
  const recSubmittedBanner = document.getElementById('rec-order-submitted-banner');

  document.getElementById('btn-submit-rec-order')?.addEventListener('click', () => {
    const isPaid = radioPaid?.checked;
    const utrVal = utrInput?.value.trim() || '';

    // If marked as PAID, require UTR / Reference / Transaction Number
    if (isPaid && utrVal.length < 4) {
      if (utrError) utrError.style.display = 'block';
      utrInput?.focus();
      return;
    }
    if (utrError) utrError.style.display = 'none';

    const data = buildRecOrderData();
    lastRecOrderWhatsAppMsg = data.waMsg;

    window.VaibhavAdmin?.recordLead({
      type: "REC Campus Food Order",
      name: data.name,
      phone: data.phone,
      details: `${data.hostel} (${data.roomNote}) • ${data.items.map(i => `${i.qty}× ${i.name}`).join(', ')} • ${data.isPaid ? 'PAID UTR: ' + data.utrVal : 'UNPAID (Cash/UPI at Campus)'}`,
      amount: data.recGrandTotal,
      source: "REC Sonbhadra Delivery Desk"
    });

    const statusBadgeHtml = data.isPaid
      ? `<span style="color:#6ee7b7; font-weight:700;">✅ PAID ONLINE (UTR / Ref No: ${data.utrVal})</span>`
      : `<span style="color:#fde68a; font-weight:700;">⏳ UNPAID (Pay ₹${data.recGrandTotal} on Delivery at REC Campus)</span>`;

    // 1. Show Inline Confirmation Alert Banner with Call to Confirm Prompt
    if (recSubmittedBanner) {
      const idEl = document.getElementById('rsa-order-id');
      const sumEl = document.getElementById('rsa-summary-text');
      if (idEl) idEl.textContent = `Order #${data.orderId}`;
      if (sumEl) {
        sumEl.innerHTML = `<strong>${data.name}</strong> (${data.hostel}) — Total Bill: <strong>₹${data.recGrandTotal}</strong> (Incl. ₹40 REC Delivery Charge) • Status: ${statusBadgeHtml}.<br/>👉 <strong>Abhi niche diye gaye button se Restaurant mein call karke apna order confirm kar lein!</strong>`;
      }
      recSubmittedBanner.style.display = 'block';
    }

    // 2. Open Confirmation Popup Modal Instructing User to Call Restaurant to Confirm
    if (recModalSummary) {
      recModalSummary.innerHTML = `
        <div><strong>Order ID:</strong> <span style="color:var(--gold-light);">#${data.orderId}</span> &nbsp;|&nbsp; <strong>College:</strong> REC Sonbhadra (Churk – 231206)</div>
        <div><strong>Name &amp; Phone:</strong> ${data.name} (${data.phone})</div>
        <div><strong>Delivery Drop Point:</strong> ${data.hostel} (${data.roomNote})</div>
        <div><strong>Branch &amp; Year:</strong> ${data.branch} • ${data.yearSlot}</div>
        <div><strong>Ordered Items:</strong> ${data.items.map(i => `${i.qty}× ${i.name}`).join(', ')}</div>
        <div><strong>Bill Breakdown:</strong> Food ₹${data.sum} + GST ₹${data.gst} + <strong>REC Delivery ₹${data.recDelivery}</strong> = <strong style="color:var(--gold-bright); font-size:0.95rem;">₹${data.recGrandTotal}</strong></div>
        <div><strong>Payment Marking:</strong> ${statusBadgeHtml}</div>
      `;
    }
    recModal?.classList.add('active');
  });

  document.getElementById('rec-modal-close')?.addEventListener('click', () => {
    recModal?.classList.remove('active');
  });
  recModal?.addEventListener('click', (e) => {
    if (e.target === recModal) recModal.classList.remove('active');
  });

  function sendRecOrderOnWhatsApp() {
    if (!lastRecOrderWhatsAppMsg) {
      lastRecOrderWhatsAppMsg = buildRecOrderData().waMsg;
    }
    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(lastRecOrderWhatsAppMsg)}`, '_blank');
  }
  document.getElementById('btn-modal-send-wa')?.addEventListener('click', sendRecOrderOnWhatsApp);
  document.getElementById('btn-rec-resend-wa')?.addEventListener('click', sendRecOrderOnWhatsApp);

  const tbDate = document.getElementById('tb-date');
  if (tbDate) tbDate.valueAsDate = today;

  document.getElementById('btn-table-whatsapp')?.addEventListener('click', () => {
    const name = document.getElementById('tb-name')?.value.trim() || 'Guest';
    const phone = document.getElementById('tb-phone')?.value.trim() || 'Not provided';
    const type = document.getElementById('tb-type')?.value || 'Reserve AC Dining Table';
    const date = tbDate?.value || 'Today';
    const time = document.getElementById('tb-time')?.value || '08:00 PM (Dinner)';
    const guests = document.getElementById('tb-guests')?.value || '4 Guests';
    const notes = document.getElementById('tb-notes')?.value.trim() || 'None';
    const { items, sum, gst, net } = updateFoodQuotePreview();
    const finalBill = net;

    window.VaibhavAdmin?.recordLead({
      type: "Dining Table Reservation",
      name: name,
      phone: phone,
      details: `${type} • ${date} at ${time} • ${guests} • ${items.length > 0 ? items.map(c => `${c.qty}× ${c.name}`).join(', ') : 'No pre-selected food'} • Notes: ${notes}`,
      amount: finalBill,
      source: "Food Express Table Booking"
    });

    const dishText = items.length > 0
      ? items.map(c => `  - ${c.qty}× ${c.name} (₹${c.lineTotal})`).join('\n') + `\n• *Pre-Order Subtotal:* ₹${sum} | *5% GST:* ₹${gst}\n• *Estimated Total Bill:* *₹${finalBill.toLocaleString('en-IN')}*`
      : `  - None pre-selected (Will order at restaurant)`;

    const msg = `Namaste *Food Express — Hotel Vaibhav International* (Robertsganj)!\n\n` +
      `🍽️ *TABLE RESERVATION REQUEST*\n` +
      `• *Guest Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Dining Table Type:* ${type}\n` +
      `• *Date & Time:* ${date} at ${time}\n` +
      `• *Party Size:* ${guests}\n` +
      `• *Pre-Selected Dishes:*\n${dishText}\n` +
      `• *Special Request / Table Preference:* ${notes}\n\n` +
      `Please confirm my dining table reservation.`;

    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ========================================================================
  // 7. BANQUET & EVENT INQUIRY LIVE QUOTE & WHATSAPP GENERATOR
  // ========================================================================
  const bqDate = document.getElementById('bq-date');
  if (bqDate) bqDate.valueAsDate = tomorrow;

  function calculateBanquetQuote() {
    const gEl = document.getElementById('bq-guests');
    const pEl = document.getElementById('bq-package');
    const gCount = parseInt(gEl?.selectedOptions[0]?.dataset.gcount || "75", 10);
    const perPlate = parseInt(pEl?.selectedOptions[0]?.dataset.pplate || "550", 10);
    const decorBase = gCount <= 40 ? 6000 : gCount <= 100 ? 12000 : 20000;
    const estTotal = (gCount * perPlate) + decorBase;

    const preview = document.getElementById('banquet-quote-preview');
    if (preview) {
      preview.innerHTML = `Estimated Event Quote: <strong>~₹${estTotal.toLocaleString('en-IN')}</strong> (Approx. ${gCount} Guests @ ₹${perPlate}/plate + Hall & Theme Decor ₹${decorBase.toLocaleString('en-IN')})`;
    }
    return { estTotal, gCount, perPlate, decorBase };
  }

  ['bq-guests', 'bq-package', 'bq-event'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', calculateBanquetQuote);
  });
  calculateBanquetQuote();

  document.getElementById('btn-banquet-whatsapp')?.addEventListener('click', () => {
    const name = document.getElementById('bq-name')?.value.trim() || 'Guest';
    const phone = document.getElementById('bq-phone')?.value.trim() || 'Not provided';
    const eventType = document.getElementById('bq-event')?.value || 'Birthday / Anniversary Celebration';
    const date = bqDate?.value || 'Upcoming';
    const guests = document.getElementById('bq-guests')?.value || '50 - 100 Guests';
    const packageType = document.getElementById('bq-package')?.value || 'Pure Veg Royal Buffet + Balloon/Neon Decor';
    const { estTotal } = calculateBanquetQuote();

    window.VaibhavAdmin?.recordLead({
      type: "Banquet Hall Quote",
      name: name,
      phone: phone,
      details: `${eventType} • ${date} • ${guests} • ${packageType}`,
      amount: estTotal,
      source: "Banquet Hall Calculator"
    });

    const msg = `Namaste *Hotel Vaibhav International* Event Desk!\n\n` +
      `🎉 *BANQUET HALL & PARTY QUOTE INQUIRY*\n` +
      `• *Host Name:* ${name}\n` +
      `• *Contact Phone:* ${phone}\n` +
      `• *Occasion / Event:* ${eventType}\n` +
      `• *Event Date:* ${date}\n` +
      `• *Expected Guests:* ${guests}\n` +
      `• *Package Selected:* ${packageType}\n` +
      `• *Estimated Package Quote:* *~₹${estTotal.toLocaleString('en-IN')}*\n\n` +
      `Please share final customizable menu tariff and hall availability.`;

    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ========================================================================
  // 8. ALL 27 SONBHADRA TOURIST PLACES (SEARCH + MULTI-SPOT TRIP BUILDER + MAPS)
  // ========================================================================
  const touristContainer = document.getElementById('tourist-cards-container');
  const touristTabs = document.querySelectorAll('[data-tcircuit]');
  const touristSearch = document.getElementById('tourist-search');
  const selectedTripIds = new Set();
  let activeCircuit = 'all';

  function updateTripBar() {
    const chosen = SONBHADRA_SPOTS.filter(s => selectedTripIds.has(s.id));
    const textEl = document.getElementById('custom-trip-text');
    if (!textEl) return;
    if (chosen.length === 0) {
      textEl.innerHTML = `🗺️ <strong>Custom Sightseeing Itinerary:</strong> Click <em>"➕ Add to Trip"</em> on any tourist spots below to request a combined Hotel Stay + Local Cab package on WhatsApp!`;
    } else {
      textEl.innerHTML = `🚗 <strong>Selected Sightseeing Spots (${chosen.length}):</strong> <em>${chosen.map(c => `${c.name} (${c.distance})`).join(' → ')}</em>`;
    }
  }

  function renderTouristSpots() {
    if (!touristContainer) return;
    const q = (touristSearch?.value || '').trim().toLowerCase();
    const list = SONBHADRA_SPOTS.filter(s => {
      const matchCircuit = activeCircuit === 'all' || s.circuit === activeCircuit;
      const matchSearch = !q ||
        s.name.toLowerCase().includes(q) ||
        s.hindi.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.route.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q);
      return matchCircuit && matchSearch;
    });

    if (list.length === 0) {
      touristContainer.innerHTML = `<div style="grid-column:1/-1; padding:1.5rem; text-align:center; color:var(--text-muted);">No tourist spots matched "${q}". Try clearing the search filter.</div>`;
      return;
    }

    touristContainer.innerHTML = list.map(s => {
      const mapsNavUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(HOTEL_ORIGIN)}&destination=${encodeURIComponent(s.query)}&travelmode=driving`;
      const inTrip = selectedTripIds.has(s.id);
      return `
        <div class="tourist-card ${inTrip ? 'in-trip' : ''}">
          <div>
            <div class="t-head">
              <span class="t-cat">#${s.id} • ${s.category}</span>
              <div class="t-badges">
                <span class="t-pill">📍 ${s.distance}</span>
                <span class="t-pill">⏱️ ${s.time}</span>
              </div>
            </div>
            <div class="t-name">${s.name}</div>
            <div class="t-hindi">${s.hindi}</div>
            <div class="t-route">🛣️ ${s.route}</div>
            <p class="t-desc">${s.desc}</p>
          </div>
          <div class="t-actions">
            <a href="${mapsNavUrl}" target="_blank" class="t-nav-link">🧭 Live Navigation from Hotel</a>
            <button type="button" class="t-trip-btn ${inTrip ? 'added' : ''}" data-spot-id="${s.id}">
              ${inTrip ? '✓ Added to Trip' : '➕ Add to Trip'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    touristContainer.querySelectorAll('.t-trip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.spotId || "0", 10);
        if (selectedTripIds.has(id)) selectedTripIds.delete(id);
        else selectedTripIds.add(id);
        renderTouristSpots();
        updateTripBar();
      });
    });
  }

  touristTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      touristTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCircuit = btn.dataset.tcircuit || 'all';
      renderTouristSpots();
    });
  });

  touristSearch?.addEventListener('input', renderTouristSpots);
  renderTouristSpots();

  document.getElementById('btn-trip-whatsapp')?.addEventListener('click', () => {
    const chosen = SONBHADRA_SPOTS.filter(s => selectedTripIds.has(s.id));
    const spotsList = chosen.length > 0
      ? chosen.map((c, i) => `  ${i + 1}. *${c.name}* (${c.distance} / ${c.time} — ${c.route})`).join('\n')
      : `  - Top Sonbhadra Attractions (Salkhan Fossils Park, Vijaygarh Fort & Mukkha Falls)`;

    window.VaibhavAdmin?.recordLead({
      type: "Tourist Sightseeing Package",
      name: "Sightseeing Guest",
      phone: "Via WhatsApp",
      details: chosen.length > 0 ? chosen.map(c => c.name).join(', ') : 'Top 3 Sonbhadra Attractions',
      amount: 0,
      source: "27 Tourist Spots Navigator"
    });

    const msg = `Namaste *Hotel Vaibhav International* (Robertsganj, Sonbhadra)!\n\n` +
      `🧭 *HOTEL STAY + SONBHADRA SIGHTSEEING CAB QUOTE*\n` +
      `• *Planned Tourist Places from Hotel:*\n${spotsList}\n\n` +
      `Please share AC Room tariff + local sightseeing cab quote for this circuit.`;

    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // ========================================================================
  // 9. GENERAL CONTACT WHATSAPP FORM & COPY HOTEL ADDRESS
  // ========================================================================
  document.getElementById('btn-contact-whatsapp')?.addEventListener('click', () => {
    const name = document.getElementById('ct-name')?.value.trim() || 'Guest';
    const phone = document.getElementById('ct-phone')?.value.trim() || 'Not provided';
    const purpose = document.getElementById('ct-purpose')?.value || 'Room Booking Inquiry';
    const message = document.getElementById('ct-msg')?.value.trim() || 'Please call me back with details.';

    window.VaibhavAdmin?.recordLead({
      type: "Front Desk Inquiry",
      name: name,
      phone: phone,
      details: `${purpose} • ${message}`,
      amount: 0,
      source: "Contact Us Form"
    });

    const msg = `Namaste *Hotel Vaibhav International* (Robertsganj, Sonbhadra)!\n\n` +
      `📩 *WEBSITE INQUIRY*\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Inquiry For:* ${purpose}\n` +
      `• *Message:* ${message}`;

    window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  const btnCopyAddr = document.getElementById('btn-copy-address');
  btnCopyAddr?.addEventListener('click', () => {
    navigator.clipboard?.writeText(HOTEL_FULL_ADDRESS);
    const orig = btnCopyAddr.textContent;
    btnCopyAddr.textContent = "✅ Address Copied!";
    setTimeout(() => { btnCopyAddr.textContent = orig; }, 2200);
  });

  // ========================================================================
  // 10. GALLERY CATEGORY TABS & FULL LIGHTBOX WITH PREV / NEXT / KEYBOARD
  // ========================================================================
  const galTabs = document.querySelectorAll('[data-gcat]');
  const galCards = document.querySelectorAll('[data-gitem]');
  galTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.gcat;
      galCards.forEach(card => {
        if (cat === 'all' || card.dataset.gitem === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const lb = document.getElementById('lightbox-modal');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');
  const clickableImgs = Array.from(document.querySelectorAll('.gallery-card img, .about-photo-collage img, .room-img-box img'));
  let currentLbIndex = 0;

  function openLightboxAt(index) {
    if (!lb || !lbImg || clickableImgs.length === 0) return;
    currentLbIndex = (index + clickableImgs.length) % clickableImgs.length;
    const targetImg = clickableImgs[currentLbIndex];
    lbImg.src = targetImg.src;
    if (lbCap) lbCap.textContent = targetImg.dataset.lightboxCaption || targetImg.alt || '';
    lb.classList.add('active');
  }

  clickableImgs.forEach((img, idx) => {
    const triggerEl = img.closest('.gallery-card') || img;
    triggerEl.addEventListener('click', () => openLightboxAt(idx));
  });

  document.getElementById('lightbox-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    openLightboxAt(currentLbIndex - 1);
  });
  document.getElementById('lightbox-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    openLightboxAt(currentLbIndex + 1);
  });
  document.getElementById('lightbox-close')?.addEventListener('click', () => lb?.classList.remove('active'));
  lb?.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('active'); });

  window.addEventListener('keydown', (e) => {
    if (!lb?.classList.contains('active')) return;
    if (e.key === 'Escape') lb.classList.remove('active');
    if (e.key === 'ArrowLeft') openLightboxAt(currentLbIndex - 1);
    if (e.key === 'ArrowRight') openLightboxAt(currentLbIndex + 1);
  });

  // Mobile Touch Swipe Left / Right inside Lightbox
  let touchStartX = 0;
  lb?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0]?.screenX || 0;
  }, { passive: true });
  lb?.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0]?.screenX || 0;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) openLightboxAt(currentLbIndex + 1);
      else openLightboxAt(currentLbIndex - 1);
    }
  }, { passive: true });

  // ========================================================================
  // 11. CENTERED HERO LIVE EXPERIENCE ROTATOR & SHOWCASE STRIP SYNC
  // ========================================================================
  const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
  const heroDots = Array.from(document.querySelectorAll('.slide-dot'));
  const showcaseCards = Array.from(document.querySelectorAll('.showcase-card'));
  const heroCenterStage = document.querySelector('.hero-center-stage');

  if (heroSlides.length > 0) {
    let currentHeroSlide = 0;
    let heroTimer = null;

    function setHeroSlide(idx) {
      currentHeroSlide = (idx + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((s, i) => s.classList.toggle('active', i === currentHeroSlide));
      heroDots.forEach((d, i) => d.classList.toggle('active', i === currentHeroSlide));
      showcaseCards.forEach((c, i) => c.classList.toggle('active', i === currentHeroSlide));

      const activeCard = showcaseCards[currentHeroSlide];
      const strip = document.getElementById('hero-showcase-strip');
      if (activeCard && strip && window.innerWidth <= 768) {
        strip.scrollTo({
          left: Math.max(0, activeCard.offsetLeft - 16),
          behavior: 'smooth'
        });
      }
    }

    function startHeroRotator() {
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = setInterval(() => {
        setHeroSlide(currentHeroSlide + 1);
      }, 3800);
    }

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        setHeroSlide(i);
        startHeroRotator();
      });
    });

    showcaseCards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => {
        setHeroSlide(i);
      });
    });

    heroCenterStage?.addEventListener('mouseenter', () => {
      if (heroTimer) clearInterval(heroTimer);
    });
    heroCenterStage?.addEventListener('mouseleave', () => {
      startHeroRotator();
    });

    startHeroRotator();
  }
});

