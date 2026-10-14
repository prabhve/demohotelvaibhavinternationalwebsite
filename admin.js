/* ==========================================================================
   HOTEL VAIBHAV INTERNATIONAL & FOOD EXPRESS — ADMIN & MANAGEMENT ENGINE
   Passcode Security, Full-Screen Left Sidebar Console, Live Analytics,
   WhatsApp Leads CRM, Dynamic Rooms/Menu/REC/Settings CMS
   ========================================================================== */

(function () {
  'use strict';

  // 1. DEFAULT MASTER SITE CONFIGURATION
  const DEFAULT_CONFIG = {
    passcode: "VAIBHAV2026",
    hotel: {
      name: "Hotel Vaibhav International",
      subtitle: "Hotel & Food Express • Robertsganj",
      receptionPhone: "+91 73111 00788",
      restaurantPhone: "+91 73111 00944",
      whatsappNumber: "917311100788",
      address: "Opposite DIET Campus, Near Tata Motors, Urmaura, Varanasi-Shaktinagar Highway (SH-5A), Robertsganj, Sonbhadra, UP - 231216",
      gstin: "09AHMPD9293M1ZI",
      announcement: "⚡ 5-Star Luxury Stay & Fine Dining in Robertsganj • Sonbhadra"
    },
    rooms: [
      {
        id: "deluxe",
        name: "Double Deluxe AC Room",
        rate: 2299,
        occupancy: "2 Adults (Up to 3 Guests with Mattress)",
        bed: "1x King Size Luxury Spring Bed",
        badge: "⭐ Popular Choice • Mountain / Garden View",
        amenities: "Split AC & Geyser, 32\" LED Smart TV, High-Speed Wi-Fi, B2B GST Invoice, 24h In-Room Dining",
        status: "available"
      },
      {
        id: "suite",
        name: "Executive Family AC Suite",
        rate: 2699,
        occupancy: "3–4 Adults / Family",
        bed: "1x Master King Bed + Plush Living Couch",
        badge: "👑 Royal Suite • Extra Spacious",
        amenities: "Dual Climate Split AC, 43\" 4K Smart TV, Mini Fridge, Work Desk, Luxury Bath Toiletries, Priority Room Service",
        status: "available"
      }
    ],
    rec: {
      enabled: true,
      deliveryCharge: 40,
      upiId: "7311100944@upi",
      merchantPhone: "+91 73111 00944",
      deliveryTiming: "11:00 AM – 10:30 PM",
      hostels: [
        "Boys Hostel 1 (BH-1) — REC Churk Campus",
        "Boys Hostel 2 (BH-2) — REC Churk Campus",
        "Boys Hostel 3 (BH-3) — REC Churk Campus",
        "Girls Hostel (GH) — REC Churk Campus",
        "REC Sonbhadra Main Gate (Churk Campus Entry)",
        "Academic Block (CSE / EE / ECE Dept Building)",
        "Administrative Block / Director Office",
        "Faculty Residence / Transit Hostel / Guest House",
        "Student Activity Centre (SAC) / Campus Lawn"
      ]
    },
    banquet: {
      hallCapacity: "20 – 200+ Guests",
      hallRent: 12000,
      vegBuffetRate: 550,
      highTeaRate: 380,
      royalBuffetRate: 650,
      decorBaseRate: 8000
    },
    menu: [
      { id: "m1", name: "Chilli Paneer (Dry / Gravy)", category: "starters", tag: "Verified Bill Price • Bestseller", price: 260, inStock: true },
      { id: "m2", name: "Tandoori Paneer Tikka Platter", category: "starters", tag: "Clay Oven • Mint Chutney", price: 280, inStock: true },
      { id: "m3", name: "Veg Manchurian (Dry / Gravy)", category: "starters", tag: "Indo-Chinese Classic", price: 210, inStock: true },
      { id: "m4", name: "Honey Chilli Potato", category: "starters", tag: "Crispy Sesame Glaze", price: 190, inStock: true },
      { id: "m5", name: "Hara Bhara Kebab (8 Pcs)", category: "starters", tag: "Spinach & Cashew", price: 230, inStock: true },
      { id: "m6", name: "Chicken Tikka Angara", category: "starters", tag: "Tandoori Non-Veg", price: 320, inStock: true },
      { id: "m7", name: "Kadhai Paneer Vaibhav Special", category: "main", tag: "Bell Peppers & Whole Spices", price: 280, inStock: true },
      { id: "m8", name: "Paneer Butter Masala", category: "main", tag: "Rich Creamy Makhani", price: 270, inStock: true },
      { id: "m9", name: "Handi Paneer Lazeez", category: "main", tag: "Clay Pot Gravy", price: 290, inStock: true },
      { id: "m10", name: "Dal Makhani (Slow Cooked)", category: "main", tag: "Butter & Cream Finish", price: 220, inStock: true },
      { id: "m11", name: "Yellow Dal Tadka (Desi Ghee)", category: "main", tag: "Garlic Cumin Tempering", price: 180, inStock: true },
      { id: "m12", name: "Murgh Handi / Butter Chicken", category: "main", tag: "Signature Non-Veg", price: 360, inStock: true },
      { id: "m13", name: "Veg Fried Rice", category: "breads", tag: "Verified Bill Price • Wok Tossed", price: 190, inStock: true },
      { id: "m14", name: "Veg Hakka Noodles", category: "breads", tag: "Julienne Veggies", price: 180, inStock: true },
      { id: "m15", name: "4-Layer Butter Lachha Paratha", category: "breads", tag: "Flaky Tandoori Bread", price: 55, inStock: true },
      { id: "m16", name: "Garlic Butter Naan", category: "breads", tag: "Clay Oven Naan", price: 65, inStock: true },
      { id: "m17", name: "Amritsari Stuffed Kulcha", category: "breads", tag: "Spiced Herb Bread", price: 70, inStock: true },
      { id: "m18", name: "Hyderabadi Dum Biryani", category: "breads", tag: "Served with Raita", price: 250, inStock: true },
      { id: "m19", name: "Virgin Mint Mojito", category: "drinks", tag: "Fresh Mint & Lime", price: 130, inStock: true },
      { id: "m20", name: "Blue Lagoon Curacao", category: "drinks", tag: "Signature Mocktail", price: 140, inStock: true },
      { id: "m21", name: "Strawberry Velvet Thick Shake", category: "drinks", tag: "Berry Cream Shake", price: 150, inStock: true },
      { id: "m22", name: "Belgian Chocolate Cold Coffee", category: "drinks", tag: "Topped with Choco Bar", price: 160, inStock: true },
      { id: "m23", name: "Green Apple Cooler", category: "drinks", tag: "Orchard Refresher", price: 135, inStock: true },
      { id: "m24", name: "Packaged Mineral Water (1L)", category: "drinks", tag: "Verified Bill Price", price: 30, inStock: true }
    ],
    spots: [
      { id: 1, name: "Panchmukhi Pahadi & Rock Caves", distance: "8 km", time: "15 mins", route: "Via Robertsganj–Chopan Road" },
      { id: 2, name: "Churk Heritage & Hill Valley", distance: "8 km", time: "15 mins", route: "Via Robertsganj–Churk Road" },
      { id: 3, name: "Veer Lorik Stone (Lorik Patthar)", distance: "9 km", time: "16 mins", route: "Via Markundi Ghat (SH-5A)" },
      { id: 4, name: "Son View Point (Son Eco Point)", distance: "10 km", time: "18 mins", route: "Via Markundi Hills (SH-5A)" },
      { id: 5, name: "Kaimur Wildlife Sanctuary", distance: "12 km", time: "20 mins", route: "Via Markundi–Gurma Forest" },
      { id: 6, name: "Salkhan Fossils Park (1.4B Yrs)", distance: "14 km", time: "22 mins", route: "Via SH-5A (Salkhan)" },
      { id: 7, name: "Dhandhraul Dam & Reservoir", distance: "22 km", time: "35 mins", route: "Via Churk–Vijaygarh Road" },
      { id: 8, name: "Kandakot Pahadi & Ancient Fort", distance: "25 km", time: "40 mins", route: "Via Robertsganj Highway Belt" },
      { id: 9, name: "Vijaygarh Fort (Chandrakanta)", distance: "28 km", time: "45 mins", route: "Via Churk–Mau Kalan Road" },
      { id: 10, name: "Chopan Son River Ghat & Bridge", distance: "28 km", time: "40 mins", route: "Via SH-5A Highway (Chopan)" },
      { id: 11, name: "Agori Fort (Sangam Citadel)", distance: "35 km", time: "55 mins", route: "Via Chopan–Agori Route" },
      { id: 12, name: "Maa Vaishno Devi Temple, Dalla", distance: "36 km", time: "50 mins", route: "Via SH-5A Highway (Dalla)" },
      { id: 13, name: "Mukkha Falls (Mukkha Dari)", distance: "38 km", time: "55 mins", route: "Via Robertsganj–Ghorawal Road" },
      { id: 14, name: "Lakhma & Lekhania Cave Art", distance: "38 km", time: "55 mins", route: "Via Kaimur Forest Belt" },
      { id: 15, name: "Shivdwar Dham Temple", distance: "40 km", time: "60 mins", route: "Via Ghorawal Road" },
      { id: 16, name: "Lakhaniya Dari & Chuna Dari", distance: "40 km", time: "60 mins", route: "Via Ahraura Ghat (SH-5A)" },
      { id: 17, name: "Obra Dam & Reservoir", distance: "42 km", time: "60 mins", route: "Via Chopan–Obra Road" },
      { id: 18, name: "Aurwatand Waterfall & Naugarh", distance: "42 km", time: "65 mins", route: "Via Robertsganj–Naugarh Route" },
      { id: 19, name: "Gauri Shankar Mahadev Temple", distance: "45 km", time: "1 hr 05 mins", route: "Via Chopan Belt" },
      { id: 20, name: "Kudari Devi Hill Temple", distance: "50 km", time: "1 hr 15 mins", route: "Via Kudari Forest Road" },
      { id: 21, name: "Renukeshwar Mahadev (Birla Temple)", distance: "68 km", time: "1 hr 35 mins", route: "Via SH-5A (Renukoot)" },
      { id: 22, name: "Rihand Dam (Pant Sagar Lake)", distance: "75 km", time: "1 hr 45 mins", route: "Via Pipri, Near Renukoot" },
      { id: 23, name: "Jharo Khas & Duddhi Heritage", distance: "75 km", time: "1 hr 50 mins", route: "Via Hathinala–Duddhi Road" },
      { id: 24, name: "Kanhar Dam (Amwar Reservoir)", distance: "80 km", time: "1 hr 55 mins", route: "Via Duddhi–Amwar Route" },
      { id: 25, name: "Baba Baram & Paraspani Temple", distance: "90 km", time: "2 hrs 05 mins", route: "Via SH-5A (Paraspani)" },
      { id: 26, name: "Maa Jwalamukhi Shaktipeeth", distance: "108 km", time: "2 hrs 25 mins", route: "Via SH-5A (Shaktinagar)" },
      { id: 27, name: "Chilka Lake Eco Park", distance: "110 km", time: "2 hrs 30 mins", route: "Via NTPC Shaktinagar" }
    ]
  };

  // Sample initial leads so owner sees analytics on first login
  const INITIAL_SAMPLE_LEADS = [
    {
      id: "LEAD-17289001",
      dateStr: "14 Oct 2026, 09:30 AM",
      timestamp: 1791950000000,
      type: "Room Booking",
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      details: "Double Deluxe AC Room (1 Room × 1 Night) • Check-In: 15 Oct • 2 Adults • Personal Receipt",
      amount: 2299,
      status: "Confirmed",
      source: "Room Booking Engine"
    },
    {
      id: "LEAD-17289002",
      dateStr: "14 Oct 2026, 11:15 AM",
      timestamp: 1791955000000,
      type: "REC Campus Food Order",
      name: "Aman Singh (B.Tech CSE)",
      phone: "+91 87654 32109",
      details: "Boys Hostel 2 (BH-2, Room 204) • 2x Kadhai Paneer, 4x Butter Lachha Paratha • Paid via QR UPI",
      amount: 470,
      status: "New",
      source: "REC Sonbhadra Delivery Desk"
    },
    {
      id: "LEAD-17289003",
      dateStr: "14 Oct 2026, 01:45 PM",
      timestamp: 1791965000000,
      type: "Banquet Hall Quote",
      name: "Dr. P.K. Gupta",
      phone: "+91 94500 12345",
      details: "Birthday Celebration • 75 Guests • Pure Veg Royal Buffet + Balloon Decor",
      amount: 53250,
      status: "Contacted",
      source: "Banquet Hall Calculator"
    }
  ];

  // 2. STORAGE CONTROLLER
  const STORAGE_KEY_CONFIG = "vaibhav_site_config_v2";
  const STORAGE_KEY_LEADS = "vaibhav_admin_leads_v2";
  const SESSION_AUTH_KEY = "vaibhav_admin_session_auth";

  function getStoredConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Error reading stored config:", e);
    }
    // Return default copy
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  function saveStoredConfig(cfg) {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(cfg));
      applyLiveUpdates(cfg);
      showAdminToast("✅ Website updated successfully & changes are live!");
    } catch (e) {
      console.error("Error saving config:", e);
      showAdminToast("❌ Storage error. Please check browser space.");
    }
  }

  function getStoredLeads() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_LEADS);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Error reading leads:", e);
    }
    // Seed sample leads if empty
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(INITIAL_SAMPLE_LEADS));
    return INITIAL_SAMPLE_LEADS;
  }

  function saveStoredLeads(leads) {
    try {
      localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));
      updateLeadsCountBadge();
    } catch (e) {
      console.error("Error saving leads:", e);
    }
  }

  // 3. LEAD RECORDING HOOK (CALLED WHEN VISITOR INTERACTS ON WHATSAPP)
  function recordLead(leadData) {
    const leads = getStoredLeads();
    const newLead = {
      id: "LEAD-" + Date.now().toString().slice(-6),
      dateStr: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      timestamp: Date.now(),
      type: leadData.type || "General Inquiry",
      name: leadData.name || "Guest",
      phone: leadData.phone || "Not provided",
      details: leadData.details || "Inquiry through WhatsApp",
      amount: Number(leadData.amount) || 0,
      status: "New",
      source: leadData.source || "Website Form"
    };
    leads.unshift(newLead);
    saveStoredLeads(leads);
    console.log("Recorded Lead in Vaibhav Admin CRM:", newLead);
    if (isAdminPortalOpen()) {
      renderAnalytics();
      renderLeadsTable();
    }
  }

  // 4. LIVE DOM SYNCHRONIZER (REFLECTS ALL ADMIN CHANGES ON THE REAL SITE IMMEDIATELY)
  function applyLiveUpdates(cfg) {
    if (!cfg) cfg = getStoredConfig();

    // A. Update Phone Links & Text Across Site
    if (cfg.hotel?.receptionPhone) {
      const recPhoneClean = cfg.hotel.receptionPhone.replace(/[^\d+]/g, '');
      document.querySelectorAll('a[href^="tel:+917311100788"], a[href^="tel:917311100788"], .js-reception-tel').forEach(el => {
        el.href = `tel:${recPhoneClean}`;
      });
    }
    if (cfg.hotel?.restaurantPhone) {
      const restPhoneClean = cfg.hotel.restaurantPhone.replace(/[^\d+]/g, '');
      document.querySelectorAll('a[href^="tel:+917311100944"], a[href^="tel:917311100944"], .js-restaurant-tel').forEach(el => {
        el.href = `tel:${restPhoneClean}`;
      });
    }

    // B. Update WhatsApp Number Across All Links
    if (cfg.hotel?.whatsappNumber) {
      const waNum = cfg.hotel.whatsappNumber.replace(/\D/g, '');
      window.CURRENT_HOTEL_WA = waNum;
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        const href = el.getAttribute('href');
        const textParam = href.includes('text=') ? href.split('text=')[1] : '';
        el.href = `https://wa.me/${waNum}${textParam ? '?text=' + textParam : ''}`;
      });
    }

    // C. Update Room Tariffs in DOM
    if (cfg.rooms && cfg.rooms.length > 0) {
      const deluxe = cfg.rooms.find(r => r.id === 'deluxe') || cfg.rooms[0];
      const suite = cfg.rooms.find(r => r.id === 'suite') || cfg.rooms[1];

      // Update Select Options in booking form
      const optDeluxe = document.querySelector('#rm-category option[value*="Double Deluxe"]');
      if (optDeluxe && deluxe) {
        optDeluxe.dataset.rate = deluxe.rate;
        optDeluxe.textContent = `${deluxe.name} (₹${deluxe.rate.toLocaleString('en-IN')}/night)`;
      }
      const optSuite = document.querySelector('#rm-category option[value*="Executive Family"]');
      if (optSuite && suite) {
        optSuite.dataset.rate = suite.rate;
        optSuite.textContent = `${suite.name} (₹${suite.rate.toLocaleString('en-IN')}/night)`;
      }

      // Update Room Cards Tariffs in #rooms section
      const roomCards = document.querySelectorAll('.room-card');
      if (roomCards[0] && deluxe) {
        const priceTag = roomCards[0].querySelector('.room-tariff strong, .room-price-val');
        if (priceTag) priceTag.textContent = `₹${deluxe.rate.toLocaleString('en-IN')}`;
      }
      if (roomCards[1] && suite) {
        const priceTag = roomCards[1].querySelector('.room-tariff strong, .room-price-val');
        if (priceTag) priceTag.textContent = `₹${suite.rate.toLocaleString('en-IN')}`;
      }

      // Trigger recalculation if room booking form is present
      if (typeof window.recalcRoomQuote === 'function') {
        window.recalcRoomQuote();
      }
    }

    // D. Update REC Campus Delivery Settings
    if (cfg.rec) {
      window.CURRENT_REC_CHARGE = Number(cfg.rec.deliveryCharge) || 40;
      // Update delivery fee tags
      document.querySelectorAll('.hf-price-pill, .rec-delivery-line strong, #rec-bill-delivery').forEach(el => {
        if (el.id === 'rec-bill-delivery') el.textContent = `₹${window.CURRENT_REC_CHARGE}`;
        if (el.textContent.includes('REC Delivery ₹')) {
          el.textContent = `🎓 REC Delivery ₹${window.CURRENT_REC_CHARGE}`;
        }
      });

      // Update UPI ID text
      const upiCode = document.querySelector('.qr-upi-id code');
      if (upiCode && cfg.rec.upiId) {
        upiCode.textContent = cfg.rec.upiId;
      }
    }

    // E. Update Food Menu Item Prices
    if (cfg.menu && cfg.menu.length > 0) {
      cfg.menu.forEach(item => {
        const dishCard = document.querySelector(`.dish-card[data-dish-id="${item.id}"]`);
        if (dishCard) {
          const priceEl = dishCard.querySelector('.dish-price');
          if (priceEl) priceEl.textContent = `₹${item.price}`;
          if (!item.inStock) {
            dishCard.style.opacity = '0.5';
            dishCard.title = "Currently Out of Stock";
          } else {
            dishCard.style.opacity = '1';
            dishCard.title = "";
          }
        }
      });
    }

    // F. Update Hotel Address & GSTIN in Footer
    if (cfg.hotel?.address) {
      const footerAddr = document.querySelector('.footer-bar div:nth-child(2)');
      if (footerAddr) {
        footerAddr.innerHTML = `
          ${cfg.hotel.address} &nbsp;|&nbsp;
          📞 ${cfg.hotel.receptionPhone}, ${cfg.hotel.restaurantPhone} &nbsp;|&nbsp; GSTIN: ${cfg.hotel.gstin}
        `;
      }
    }
  }

  // 5. TOAST NOTIFICATION HELPER
  function showAdminToast(msg) {
    let toast = document.getElementById('admin-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'admin-toast';
      toast.className = 'admin-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 6. PASSCODE AUTHENTICATION CONTROLLER
  function initPasscodeAuth() {
    const btnOpen = document.getElementById('btn-open-admin');
    const modal = document.getElementById('admin-login-modal');
    const btnClose = document.getElementById('admin-login-close');
    const btnUnlock = document.getElementById('admin-btn-unlock');
    const inputPass = document.getElementById('admin-passcode-input');
    const togglePass = document.getElementById('admin-passcode-toggle');
    const errorMsg = document.getElementById('admin-error-msg');
    const card = modal?.querySelector('.admin-login-card');

    if (!btnOpen || !modal) return;

    btnOpen.addEventListener('click', () => {
      // If already logged in this session, open portal directly
      if (sessionStorage.getItem(SESSION_AUTH_KEY) === 'true') {
        openAdminPortal();
      } else {
        modal.classList.add('active');
        if (inputPass) {
          inputPass.value = '';
          errorMsg?.classList.remove('active');
          setTimeout(() => inputPass.focus(), 150);
        }
      }
    });

    btnClose?.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    togglePass?.addEventListener('click', () => {
      if (inputPass.type === 'password') {
        inputPass.type = 'text';
        togglePass.textContent = '🙈';
      } else {
        inputPass.type = 'password';
        togglePass.textContent = '👁️';
      }
    });

    function attemptUnlock() {
      const entered = inputPass?.value.trim();
      const cfg = getStoredConfig();
      const validPass = cfg.passcode || DEFAULT_CONFIG.passcode;

      // Allow default passcode, configured passcode, or quick pin 1234
      if (entered === validPass || entered === "1234" || entered === "VAIBHAV2026") {
        sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
        modal.classList.remove('active');
        errorMsg?.classList.remove('active');
        openAdminPortal();
        showAdminToast("🔐 Admin Console Unlocked!");
      } else {
        errorMsg?.classList.add('active');
        card?.classList.add('admin-shake');
        setTimeout(() => card?.classList.remove('admin-shake'), 400);
      }
    }

    btnUnlock?.addEventListener('click', attemptUnlock);
    inputPass?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') attemptUnlock();
    });
  }

  // 7. ADMIN PORTAL LIFECYCLE & TABS
  function isAdminPortalOpen() {
    const portal = document.getElementById('admin-portal');
    return portal && portal.classList.contains('active');
  }

  function openAdminPortal() {
    const portal = document.getElementById('admin-portal');
    if (!portal) return;
    portal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Set default tab to Analytics
    switchTab('analytics');
    updateLeadsCountBadge();
  }

  function closeAdminPortal() {
    const portal = document.getElementById('admin-portal');
    if (!portal) return;
    portal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function logoutAdmin() {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    closeAdminPortal();
    showAdminToast("🔒 Logged out of Admin Console");
  }

  function switchTab(tabId) {
    // Nav Items
    document.querySelectorAll('.admin-nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
    // Panels
    document.querySelectorAll('.admin-tab-panel').forEach(el => {
      el.classList.toggle('active', el.id === `panel-${tabId}`);
    });

    // Close mobile sidebar if open
    document.getElementById('admin-sidebar')?.classList.remove('open');

    // Trigger Render for tab
    switch (tabId) {
      case 'analytics':
        renderAnalytics();
        break;
      case 'leads':
        renderLeadsTable();
        break;
      case 'rooms':
        renderRoomsManager();
        break;
      case 'menu':
        renderMenuManager();
        break;
      case 'rec':
        renderRecManager();
        break;
      case 'banquet':
        renderBanquetManager();
        break;
      case 'tourist':
        renderTouristManager();
        break;
      case 'settings':
        renderSettingsManager();
        break;
      case 'backup':
        renderBackupManager();
        break;
    }
  }

  function updateLeadsCountBadge() {
    const leads = getStoredLeads();
    const newCount = leads.filter(l => l.status === 'New').length;
    const badge = document.getElementById('badge-leads-count');
    if (badge) {
      badge.textContent = newCount > 0 ? newCount : leads.length;
      badge.style.display = leads.length > 0 ? 'inline-block' : 'none';
    }
  }

  // 8. TAB 1: DASHBOARD & LIVE ANALYTICS RENDERER
  function renderAnalytics() {
    const leads = getStoredLeads();
    const totalLeads = leads.length;
    const totalPipeline = leads.reduce((acc, l) => acc + (Number(l.amount) || 0), 0);
    const roomLeads = leads.filter(l => l.type.includes('Room'));
    const recLeads = leads.filter(l => l.type.includes('REC') || l.type.includes('Food') || l.type.includes('Table'));
    const bqLeads = leads.filter(l => l.type.includes('Banquet'));
    const tourLeads = leads.filter(l => l.type.includes('Sightseeing') || l.type.includes('Tourist'));

    // Populate KPI Cards
    const kpiTotal = document.getElementById('kpi-total-leads');
    if (kpiTotal) kpiTotal.textContent = totalLeads;

    const kpiVal = document.getElementById('kpi-pipeline-val');
    if (kpiVal) kpiVal.textContent = `₹${totalPipeline.toLocaleString('en-IN')}`;

    const kpiRooms = document.getElementById('kpi-room-leads');
    if (kpiRooms) kpiRooms.textContent = roomLeads.length;

    const kpiRec = document.getElementById('kpi-rec-leads');
    if (kpiRec) kpiRec.textContent = recLeads.length;

    const kpiBq = document.getElementById('kpi-bq-leads');
    if (kpiBq) kpiBq.textContent = bqLeads.length;

    // Recent 5 Leads Stream
    const streamContainer = document.getElementById('analytics-recent-stream');
    if (streamContainer) {
      if (leads.length === 0) {
        streamContainer.innerHTML = `<div style="text-align:center; padding:2rem; color:#64748b;">No inquiries recorded yet. Customer submissions will appear here live!</div>`;
      } else {
        streamContainer.innerHTML = leads.slice(0, 5).map(lead => `
          <div class="admin-metric-card" style="margin-bottom:0.65rem; padding:0.9rem 1.1rem; flex-direction:row; align-items:center; justify-content:space-between;">
            <div>
              <div style="font-weight:700; color:#fff; font-size:0.84rem;">${lead.name} &nbsp;<span style="color:#94a3b8; font-weight:400; font-size:0.74rem;">(${lead.phone})</span></div>
              <div style="font-size:0.72rem; color:var(--gold-light); margin-top:0.2rem;">${lead.type} • <strong>₹${lead.amount ? lead.amount.toLocaleString('en-IN') : '0'}</strong> &nbsp;|&nbsp; <span style="color:#64748b;">${lead.dateStr}</span></div>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="lead-status-tag status-${lead.status.toLowerCase()}">${lead.status}</span>
              ${lead.phone && lead.phone !== 'Not provided' ? `
                <a href="https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Namaste ${lead.name}! Hotel Vaibhav International reception se baat ho rahi hai regarding your ${lead.type}.`)}" target="_blank" class="btn-lead-wa">💬 WhatsApp</a>
              ` : ''}
            </div>
          </div>
        `).join('');
      }
    }
  }

  // 9. TAB 2: WHATSAPP LEADS & INQUIRIES CRM RENDERER
  let currentLeadFilter = 'all';
  let leadSearchQuery = '';

  function renderLeadsTable() {
    const leads = getStoredLeads();
    const tableBody = document.getElementById('leads-table-body');
    if (!tableBody) return;

    let filtered = leads;
    if (currentLeadFilter !== 'all') {
      filtered = filtered.filter(l => {
        if (currentLeadFilter === 'room') return l.type.includes('Room');
        if (currentLeadFilter === 'rec') return l.type.includes('REC');
        if (currentLeadFilter === 'table') return l.type.includes('Table');
        if (currentLeadFilter === 'banquet') return l.type.includes('Banquet');
        if (currentLeadFilter === 'tourist') return l.type.includes('Tourist') || l.type.includes('Sightseeing');
        return true;
      });
    }

    if (leadSearchQuery) {
      const q = leadSearchQuery.toLowerCase();
      filtered = filtered.filter(l => 
        l.name.toLowerCase().includes(q) || 
        l.phone.toLowerCase().includes(q) || 
        l.details.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem; color:#64748b;">No matching inquiries found.</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(lead => {
      const cleanPhone = lead.phone.replace(/\D/g, '');
      const waLink = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Namaste ${lead.name}! Hotel Vaibhav International se contact kiya jaa raha hai regarding your recent inquiry.`)}` : null;

      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#fff;">${lead.name}</div>
            <div style="color:#94a3b8; font-size:0.7rem;">${lead.phone}</div>
          </td>
          <td>
            <span style="font-weight:600; color:var(--gold-light);">${lead.type}</span>
            <div style="font-size:0.68rem; color:#64748b;">${lead.dateStr}</div>
          </td>
          <td style="max-width:240px; font-size:0.74rem; color:#cbd5e1; line-height:1.35;">
            ${lead.details}
          </td>
          <td style="font-family:var(--font-display); font-weight:700; color:var(--gold-bright);">
            ₹${lead.amount ? lead.amount.toLocaleString('en-IN') : '0'}
          </td>
          <td>
            <select class="admin-lead-status-select" data-lead-id="${lead.id}" style="padding:0.25rem 0.45rem; font-size:0.7rem; border-radius:6px; background:#040907; color:#fff; border:1px solid rgba(212,175,55,0.35);">
              <option value="New" ${lead.status === 'New' ? 'selected' : ''}>🔵 New</option>
              <option value="Contacted" ${lead.status === 'Contacted' ? 'selected' : ''}>🟡 Contacted</option>
              <option value="Confirmed" ${lead.status === 'Confirmed' ? 'selected' : ''}>🟢 Confirmed</option>
              <option value="Cancelled" ${lead.status === 'Cancelled' ? 'selected' : ''}>🔴 Cancelled</option>
            </select>
          </td>
          <td>
            <div class="lead-actions-cell">
              ${waLink ? `<a href="${waLink}" target="_blank" class="btn-lead-wa" title="Open WhatsApp Chat">💬 Chat</a>` : ''}
              <button type="button" class="btn-lead-del js-del-lead" data-lead-id="${lead.id}" title="Delete Lead">&times;</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Attach Status Change Listener
    document.querySelectorAll('.admin-lead-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = e.target.dataset.leadId;
        const newStatus = e.target.value;
        const allLeads = getStoredLeads();
        const target = allLeads.find(l => l.id === id);
        if (target) {
          target.status = newStatus;
          saveStoredLeads(allLeads);
          showAdminToast(`Updated status to: ${newStatus}`);
        }
      });
    });

    // Attach Delete Listener
    document.querySelectorAll('.js-del-lead').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.leadId;
        if (confirm("Are you sure you want to delete this lead?")) {
          const allLeads = getStoredLeads().filter(l => l.id !== id);
          saveStoredLeads(allLeads);
          renderLeadsTable();
          renderAnalytics();
          showAdminToast("Lead deleted.");
        }
      });
    });
  }

  // 10. TAB 3: ROOMS & TARIFFS CMS RENDERER
  function renderRoomsManager() {
    const cfg = getStoredConfig();
    const container = document.getElementById('rooms-manager-container');
    if (!container) return;

    container.innerHTML = cfg.rooms.map((room, idx) => `
      <div class="admin-card-box" data-room-idx="${idx}">
        <div class="admin-card-header">
          <h4 class="admin-card-title">🛏️ ${room.name}</h4>
          <span style="font-size:0.75rem; color:#6ee7b7; font-weight:700;">Rate ID: ${room.id}</span>
        </div>
        <div class="admin-form-grid-3">
          <div class="admin-field">
            <label>Room Category Name</label>
            <input type="text" class="js-room-name" value="${room.name}" />
          </div>
          <div class="admin-field">
            <label>Nightly Tariff (₹ Price)</label>
            <input type="number" class="js-room-rate" value="${room.rate}" />
          </div>
          <div class="admin-field">
            <label>Occupancy Capacity</label>
            <input type="text" class="js-room-occ" value="${room.occupancy}" />
          </div>
        </div>
        <div class="admin-form-grid-2">
          <div class="admin-field">
            <label>Bedding Configuration</label>
            <input type="text" class="js-room-bed" value="${room.bed}" />
          </div>
          <div class="admin-field">
            <label>Promotional Badge / Highlight</label>
            <input type="text" class="js-room-badge" value="${room.badge}" />
          </div>
        </div>
        <div class="admin-field" style="margin-bottom:0.75rem;">
          <label>Included Luxury Amenities (Comma Separated)</label>
          <input type="text" class="js-room-amenities" value="${room.amenities}" />
        </div>
      </div>
    `).join('');
  }

  function saveRoomsManager() {
    const cfg = getStoredConfig();
    const cards = document.querySelectorAll('#rooms-manager-container .admin-card-box');
    cards.forEach((card, idx) => {
      if (cfg.rooms[idx]) {
        cfg.rooms[idx].name = card.querySelector('.js-room-name')?.value.trim() || cfg.rooms[idx].name;
        cfg.rooms[idx].rate = Number(card.querySelector('.js-room-rate')?.value) || cfg.rooms[idx].rate;
        cfg.rooms[idx].occupancy = card.querySelector('.js-room-occ')?.value.trim() || cfg.rooms[idx].occupancy;
        cfg.rooms[idx].bed = card.querySelector('.js-room-bed')?.value.trim() || cfg.rooms[idx].bed;
        cfg.rooms[idx].badge = card.querySelector('.js-room-badge')?.value.trim() || cfg.rooms[idx].badge;
        cfg.rooms[idx].amenities = card.querySelector('.js-room-amenities')?.value.trim() || cfg.rooms[idx].amenities;
      }
    });
    saveStoredConfig(cfg);
  }

  // 11. TAB 4: FOOD EXPRESS MENU CMS RENDERER
  let menuActiveCategory = 'all';

  function renderMenuManager() {
    const cfg = getStoredConfig();
    const tableBody = document.getElementById('menu-manager-table-body');
    if (!tableBody) return;

    let items = cfg.menu || [];
    if (menuActiveCategory !== 'all') {
      items = items.filter(i => i.category === menuActiveCategory);
    }

    tableBody.innerHTML = items.map((dish) => `
      <tr data-dish-id="${dish.id}">
        <td>
          <div style="font-weight:700; color:#fff;">${dish.name}</div>
          <div style="font-size:0.68rem; color:#94a3b8;">${dish.tag}</div>
        </td>
        <td>
          <span style="text-transform:uppercase; font-size:0.7rem; color:var(--gold-light); font-weight:700;">${dish.category}</span>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:0.3rem;">
            <span>₹</span>
            <input type="number" class="js-dish-price-input" data-dish-id="${dish.id}" value="${dish.price}" style="width:75px; padding:0.25rem 0.4rem; background:#040907; color:#fff; border:1px solid rgba(212,175,55,0.4); border-radius:6px; font-weight:700;" />
          </div>
        </td>
        <td>
          <label class="admin-switch">
            <input type="checkbox" class="js-dish-stock-toggle" data-dish-id="${dish.id}" ${dish.inStock !== false ? 'checked' : ''} />
            <span class="admin-slider"></span>
          </label>
        </td>
        <td>
          <button type="button" class="btn-lead-del js-del-dish" data-dish-id="${dish.id}" title="Remove Dish from Menu">&times;</button>
        </td>
      </tr>
    `).join('');

    // Attach Price Inputs Change
    document.querySelectorAll('.js-dish-price-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = e.target.dataset.dishId;
        const newPrice = Number(e.target.value);
        const currentCfg = getStoredConfig();
        const target = currentCfg.menu.find(m => m.id === id);
        if (target && newPrice > 0) {
          target.price = newPrice;
          saveStoredConfig(currentCfg);
        }
      });
    });

    // Attach Stock Toggles
    document.querySelectorAll('.js-dish-stock-toggle').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.dataset.dishId;
        const inStock = e.target.checked;
        const currentCfg = getStoredConfig();
        const target = currentCfg.menu.find(m => m.id === id);
        if (target) {
          target.inStock = inStock;
          saveStoredConfig(currentCfg);
        }
      });
    });

    // Attach Delete Dish
    document.querySelectorAll('.js-del-dish').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.dishId;
        if (confirm("Are you sure you want to remove this dish from the menu?")) {
          const currentCfg = getStoredConfig();
          currentCfg.menu = currentCfg.menu.filter(m => m.id !== id);
          saveStoredConfig(currentCfg);
          renderMenuManager();
        }
      });
    });
  }

  // 12. TAB 5: REC SONBHADRA CAMPUS DELIVERY CMS RENDERER
  function renderRecManager() {
    const cfg = getStoredConfig();
    const chargeInput = document.getElementById('rec-admin-charge');
    const upiInput = document.getElementById('rec-admin-upi');
    const phoneInput = document.getElementById('rec-admin-phone');
    const timingInput = document.getElementById('rec-admin-timing');
    const hostelsArea = document.getElementById('rec-admin-hostels');

    if (chargeInput) chargeInput.value = cfg.rec?.deliveryCharge || 40;
    if (upiInput) upiInput.value = cfg.rec?.upiId || "7311100944@upi";
    if (phoneInput) phoneInput.value = cfg.rec?.merchantPhone || "+91 73111 00944";
    if (timingInput) timingInput.value = cfg.rec?.deliveryTiming || "11:00 AM – 10:30 PM";
    if (hostelsArea) hostelsArea.value = (cfg.rec?.hostels || []).join('\n');
  }

  function saveRecManager() {
    const cfg = getStoredConfig();
    cfg.rec = cfg.rec || {};
    cfg.rec.deliveryCharge = Number(document.getElementById('rec-admin-charge')?.value) || 40;
    cfg.rec.upiId = document.getElementById('rec-admin-upi')?.value.trim() || "7311100944@upi";
    cfg.rec.merchantPhone = document.getElementById('rec-admin-phone')?.value.trim() || "+91 73111 00944";
    cfg.rec.deliveryTiming = document.getElementById('rec-admin-timing')?.value.trim() || "11:00 AM – 10:30 PM";
    
    const hostelsRaw = document.getElementById('rec-admin-hostels')?.value || '';
    cfg.rec.hostels = hostelsRaw.split('\n').map(h => h.trim()).filter(Boolean);

    saveStoredConfig(cfg);
  }

  // 13. TAB 6: BANQUET & EVENTS CMS RENDERER
  function renderBanquetManager() {
    const cfg = getStoredConfig();
    const rentInput = document.getElementById('bq-admin-rent');
    const vegInput = document.getElementById('bq-admin-veg');
    const teaInput = document.getElementById('bq-admin-tea');
    const royalInput = document.getElementById('bq-admin-royal');
    const decorInput = document.getElementById('bq-admin-decor');
    const capInput = document.getElementById('bq-admin-cap');

    if (rentInput) rentInput.value = cfg.banquet?.hallRent || 12000;
    if (vegInput) vegInput.value = cfg.banquet?.vegBuffetRate || 550;
    if (teaInput) teaInput.value = cfg.banquet?.highTeaRate || 380;
    if (royalInput) royalInput.value = cfg.banquet?.royalBuffetRate || 650;
    if (decorInput) decorInput.value = cfg.banquet?.decorBaseRate || 8000;
    if (capInput) capInput.value = cfg.banquet?.hallCapacity || "20 – 200+ Guests";
  }

  function saveBanquetManager() {
    const cfg = getStoredConfig();
    cfg.banquet = cfg.banquet || {};
    cfg.banquet.hallRent = Number(document.getElementById('bq-admin-rent')?.value) || 12000;
    cfg.banquet.vegBuffetRate = Number(document.getElementById('bq-admin-veg')?.value) || 550;
    cfg.banquet.highTeaRate = Number(document.getElementById('bq-admin-tea')?.value) || 380;
    cfg.banquet.royalBuffetRate = Number(document.getElementById('bq-admin-royal')?.value) || 650;
    cfg.banquet.decorBaseRate = Number(document.getElementById('bq-admin-decor')?.value) || 8000;
    cfg.banquet.hallCapacity = document.getElementById('bq-admin-cap')?.value.trim() || "20 – 200+ Guests";

    saveStoredConfig(cfg);
  }

  // 14. TAB 7: 27 TOURIST PLACES CMS RENDERER
  function renderTouristManager() {
    const cfg = getStoredConfig();
    const listContainer = document.getElementById('tourist-admin-list');
    if (!listContainer) return;

    listContainer.innerHTML = (cfg.spots || []).map((spot, idx) => `
      <div class="admin-card-box" style="padding:1rem 1.2rem; margin-bottom:0.75rem;" data-spot-idx="${idx}">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
          <strong style="color:#fff; font-size:0.84rem;">#${spot.id} • ${spot.name}</strong>
        </div>
        <div class="admin-form-grid-3" style="margin-bottom:0;">
          <div class="admin-field">
            <label>Distance</label>
            <input type="text" class="js-spot-dist" value="${spot.distance}" />
          </div>
          <div class="admin-field">
            <label>Driving Time</label>
            <input type="text" class="js-spot-time" value="${spot.time}" />
          </div>
          <div class="admin-field">
            <label>Highway Route Description</label>
            <input type="text" class="js-spot-route" value="${spot.route}" />
          </div>
        </div>
      </div>
    `).join('');
  }

  function saveTouristManager() {
    const cfg = getStoredConfig();
    const cards = document.querySelectorAll('#tourist-admin-list .admin-card-box');
    cards.forEach((card, idx) => {
      if (cfg.spots[idx]) {
        cfg.spots[idx].distance = card.querySelector('.js-spot-dist')?.value.trim() || cfg.spots[idx].distance;
        cfg.spots[idx].time = card.querySelector('.js-spot-time')?.value.trim() || cfg.spots[idx].time;
        cfg.spots[idx].route = card.querySelector('.js-spot-route')?.value.trim() || cfg.spots[idx].route;
      }
    });
    saveStoredConfig(cfg);
  }

  // 15. TAB 8: HOTEL GENERAL SETTINGS & PASSCODE CMS
  function renderSettingsManager() {
    const cfg = getStoredConfig();
    const recPhone = document.getElementById('cfg-admin-rec-phone');
    const restPhone = document.getElementById('cfg-admin-rest-phone');
    const waPhone = document.getElementById('cfg-admin-wa-phone');
    const address = document.getElementById('cfg-admin-address');
    const gstin = document.getElementById('cfg-admin-gstin');
    const announce = document.getElementById('cfg-admin-announcement');
    const currentPass = document.getElementById('cfg-admin-passcode');

    if (recPhone) recPhone.value = cfg.hotel?.receptionPhone || "+91 73111 00788";
    if (restPhone) restPhone.value = cfg.hotel?.restaurantPhone || "+91 73111 00944";
    if (waPhone) waPhone.value = cfg.hotel?.whatsappNumber || "917311100788";
    if (address) address.value = cfg.hotel?.address || "";
    if (gstin) gstin.value = cfg.hotel?.gstin || "09AHMPD9293M1ZI";
    if (announce) announce.value = cfg.hotel?.announcement || "";
    if (currentPass) currentPass.value = cfg.passcode || DEFAULT_CONFIG.passcode;
  }

  function saveSettingsManager() {
    const cfg = getStoredConfig();
    cfg.hotel = cfg.hotel || {};
    cfg.hotel.receptionPhone = document.getElementById('cfg-admin-rec-phone')?.value.trim() || cfg.hotel.receptionPhone;
    cfg.hotel.restaurantPhone = document.getElementById('cfg-admin-rest-phone')?.value.trim() || cfg.hotel.restaurantPhone;
    cfg.hotel.whatsappNumber = document.getElementById('cfg-admin-wa-phone')?.value.trim() || cfg.hotel.whatsappNumber;
    cfg.hotel.address = document.getElementById('cfg-admin-address')?.value.trim() || cfg.hotel.address;
    cfg.hotel.gstin = document.getElementById('cfg-admin-gstin')?.value.trim() || cfg.hotel.gstin;
    cfg.hotel.announcement = document.getElementById('cfg-admin-announcement')?.value.trim() || cfg.hotel.announcement;

    const newPass = document.getElementById('cfg-admin-passcode')?.value.trim();
    if (newPass && newPass.length >= 4) {
      cfg.passcode = newPass;
    }

    saveStoredConfig(cfg);
  }

  // 16. TAB 9: BACKUP & DATA EXPORT
  function renderBackupManager() {
    // Handled by direct event listeners
  }

  function exportLeadsCSV() {
    const leads = getStoredLeads();
    if (leads.length === 0) {
      alert("No leads to export!");
      return;
    }
    const headers = ["Lead ID", "Date", "Customer Name", "Phone", "Service Type", "Amount (INR)", "Status", "Details", "Source"];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${l.dateStr}"`,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.type}"`,
      `"${l.amount}"`,
      `"${l.status}"`,
      `"${l.details.replace(/"/g, '""')}"`,
      `"${l.source || ''}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Vaibhav_International_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function exportConfigJSON() {
    const cfg = getStoredConfig();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cfg, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `vaibhav_site_config_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }

  function resetToFactoryDefaults() {
    if (confirm("⚠️ WARNING: This will reset all room rates, menu prices, REC delivery charges, and settings back to original factory defaults. Are you sure?")) {
      localStorage.removeItem(STORAGE_KEY_CONFIG);
      const fresh = getStoredConfig();
      applyLiveUpdates(fresh);
      renderAnalytics();
      renderRoomsManager();
      renderMenuManager();
      renderRecManager();
      renderBanquetManager();
      renderTouristManager();
      renderSettingsManager();
      showAdminToast("🔄 Factory defaults restored!");
    }
  }

  // 17. GLOBAL INITIALIZATION
  function initAdminEngine() {
    // Initial DOM updates from stored config
    const currentCfg = getStoredConfig();
    applyLiveUpdates(currentCfg);

    // Init Passcode Modal
    initPasscodeAuth();

    // Top Bar actions inside admin
    document.getElementById('btn-admin-close')?.addEventListener('click', closeAdminPortal);
    document.getElementById('btn-admin-logout')?.addEventListener('click', logoutAdmin);
    document.getElementById('admin-sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('admin-sidebar')?.classList.toggle('open');
    });

    // Sidebar Nav items
    document.querySelectorAll('.admin-nav-item button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const item = e.currentTarget.closest('.admin-nav-item');
        if (item && item.dataset.tab) {
          switchTab(item.dataset.tab);
        }
      });
    });

    // CRM Leads Filter & Search
    document.querySelectorAll('.admin-filter-pill[data-lfilter]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.admin-filter-pill[data-lfilter]').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentLeadFilter = e.currentTarget.dataset.lfilter;
        renderLeadsTable();
      });
    });
    document.getElementById('admin-leads-search')?.addEventListener('input', (e) => {
      leadSearchQuery = e.target.value.trim();
      renderLeadsTable();
    });
    document.getElementById('btn-export-leads-csv')?.addEventListener('click', exportLeadsCSV);
    document.getElementById('btn-clear-leads')?.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear all leads?")) {
        saveStoredLeads([]);
        renderLeadsTable();
        renderAnalytics();
        showAdminToast("Leads list cleared.");
      }
    });

    // Rooms save
    document.getElementById('btn-save-rooms')?.addEventListener('click', saveRoomsManager);

    // Menu category filter & Add dish modal
    document.querySelectorAll('.admin-filter-pill[data-mfilter]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.admin-filter-pill[data-mfilter]').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        menuActiveCategory = e.currentTarget.dataset.mfilter;
        renderMenuManager();
      });
    });
    document.getElementById('btn-add-dish-prompt')?.addEventListener('click', () => {
      const name = prompt("Enter new dish name:");
      if (!name) return;
      const cat = prompt("Enter category (starters / main / breads / drinks):", "main") || "main";
      const price = Number(prompt("Enter price in ₹:", "250")) || 250;
      const tag = prompt("Enter tag/subtitle:", "Chef Special") || "Chef Special";

      const cfg = getStoredConfig();
      cfg.menu.unshift({
        id: "m_custom_" + Date.now(),
        name,
        category: cat,
        tag,
        price,
        inStock: true
      });
      saveStoredConfig(cfg);
      renderMenuManager();
    });

    // REC save
    document.getElementById('btn-save-rec')?.addEventListener('click', saveRecManager);

    // Banquet save
    document.getElementById('btn-save-banquet')?.addEventListener('click', saveBanquetManager);

    // Tourist save
    document.getElementById('btn-save-tourist')?.addEventListener('click', saveTouristManager);

    // Settings save
    document.getElementById('btn-save-settings')?.addEventListener('click', saveSettingsManager);

    // Backup actions
    document.getElementById('btn-backup-export-csv')?.addEventListener('click', exportLeadsCSV);
    document.getElementById('btn-backup-export-json')?.addEventListener('click', exportConfigJSON);
    document.getElementById('btn-backup-reset-defaults')?.addEventListener('click', resetToFactoryDefaults);
  }

  // Expose API for app.js and window
  window.VaibhavAdmin = {
    recordLead: recordLead,
    getConfig: getStoredConfig,
    saveConfig: saveStoredConfig,
    applyLiveUpdates: applyLiveUpdates,
    openPortal: openAdminPortal
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminEngine);
  } else {
    initAdminEngine();
  }

})();
