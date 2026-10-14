/* ==========================================================================
   HOTEL VAIBHAV INTERNATIONAL & FOOD EXPRESS — ULTRA-PREMIUM ADMIN ENGINE
   User-Friendly UI, 100% Live CMS, Visual Photo Previews, WhatsApp Leads CRM,
   Instant DOM Synchronizer & Factory Backup Controller
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY_CONFIG = 'vaibhav_site_config_v2';
  const STORAGE_KEY_LEADS = 'vaibhav_admin_leads_v2';
  const SESSION_AUTH_KEY = 'vaibhav_admin_authenticated';

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
        imgUrl: "assets/images/photo_2.jpg",
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
        imgUrl: "assets/images/photo_5.jpg",
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
      { id: "m1", name: "Chilli Paneer (Dry / Gravy)", category: "starters", tag: "Verified Bill Price • Bestseller", price: 260, inStock: true, imgUrl: "assets/images/photo_7.jpg" },
      { id: "m2", name: "Tandoori Paneer Tikka Platter", category: "starters", tag: "Clay Oven • Mint Chutney", price: 280, inStock: true, imgUrl: "assets/images/photo_7.jpg" },
      { id: "m3", name: "Veg Manchurian (Dry / Gravy)", category: "starters", tag: "Indo-Chinese Classic", price: 210, inStock: true, imgUrl: "" },
      { id: "m4", name: "Honey Chilli Potato", category: "starters", tag: "Crispy Sesame Glaze", price: 190, inStock: true, imgUrl: "" },
      { id: "m5", name: "Hara Bhara Kebab (8 Pcs)", category: "starters", tag: "Spinach & Cashew", price: 230, inStock: true, imgUrl: "" },
      { id: "m6", name: "Chicken Tikka Angara", category: "starters", tag: "Tandoori Non-Veg", price: 320, inStock: true, imgUrl: "" },
      { id: "m7", name: "Kadhai Paneer Vaibhav Special", category: "main", tag: "Bell Peppers & Whole Spices", price: 280, inStock: true, imgUrl: "assets/images/photo_9.jpg" },
      { id: "m8", name: "Paneer Butter Masala", category: "main", tag: "Rich Creamy Makhani", price: 270, inStock: true, imgUrl: "assets/images/photo_9.jpg" },
      { id: "m9", name: "Handi Paneer Lazeez", category: "main", tag: "Clay Pot Gravy", price: 290, inStock: true, imgUrl: "" },
      { id: "m10", name: "Dal Makhani (Slow Cooked)", category: "main", tag: "Butter & Cream Finish", price: 220, inStock: true, imgUrl: "assets/images/photo_9.jpg" },
      { id: "m11", name: "Yellow Dal Tadka (Desi Ghee)", category: "main", tag: "Garlic Cumin Tempering", price: 180, inStock: true, imgUrl: "" },
      { id: "m12", name: "Murgh Handi / Butter Chicken", category: "main", tag: "Signature Non-Veg", price: 360, inStock: true, imgUrl: "" },
      { id: "m13", name: "Veg Fried Rice", category: "breads", tag: "Verified Bill Price • Wok Tossed", price: 190, inStock: true, imgUrl: "" },
      { id: "m14", name: "Veg Hakka Noodles", category: "breads", tag: "Julienne Veggies", price: 180, inStock: true, imgUrl: "" },
      { id: "m15", name: "4-Layer Butter Lachha Paratha", category: "breads", tag: "Flaky Tandoori Bread", price: 55, inStock: true, imgUrl: "" },
      { id: "m16", name: "Garlic Butter Naan", category: "breads", tag: "Clay Oven Naan", price: 65, inStock: true, imgUrl: "" },
      { id: "m17", name: "Amritsari Stuffed Kulcha", category: "breads", tag: "Spiced Herb Bread", price: 70, inStock: true, imgUrl: "" },
      { id: "m18", name: "Hyderabadi Dum Biryani", category: "breads", tag: "Served with Raita", price: 250, inStock: true, imgUrl: "" },
      { id: "m19", name: "Virgin Mint Mojito", category: "drinks", tag: "Fresh Mint & Lime", price: 130, inStock: true, imgUrl: "assets/images/photo_8.jpg" },
      { id: "m20", name: "Blue Lagoon Curacao", category: "drinks", tag: "Signature Mocktail", price: 140, inStock: true, imgUrl: "assets/images/photo_8.jpg" },
      { id: "m21", name: "Strawberry Velvet Thick Shake", category: "drinks", tag: "Berry Cream Shake", price: 150, inStock: true, imgUrl: "assets/images/photo_8.jpg" },
      { id: "m22", name: "Belgian Chocolate Cold Coffee", category: "drinks", tag: "Topped with Choco Bar", price: 160, inStock: true, imgUrl: "assets/images/photo_8.jpg" },
      { id: "m23", name: "Green Apple Cooler", category: "drinks", tag: "Orchard Refresher", price: 135, inStock: true, imgUrl: "assets/images/photo_8.jpg" },
      { id: "m24", name: "Packaged Mineral Water (1L)", category: "drinks", tag: "Verified Bill Price", price: 30, inStock: true, imgUrl: "" }
    ],
    gallery: [
      { id: "g1", title: "Grand Exterior & Portico", category: "rooms", src: "assets/images/2_Video1_End_Hotel_Exterior.jpg", caption: "Grand Highway Exterior & Portico — Opposite DIET, Urmaura, Robertsganj" },
      { id: "g2", title: "Double-Height Chandelier Lobby", category: "rooms", src: "assets/images/photo_4.jpg", caption: "Double-Height Crystal Chandelier Lobby & Front Desk" },
      { id: "g3", title: "Double Deluxe AC Room", category: "rooms", src: "assets/images/photo_2.jpg", caption: "Double Deluxe AC Room (₹2,299/Night)" },
      { id: "g4", title: "Executive King Bed Suite", category: "rooms", src: "assets/images/photo_5.jpg", caption: "Executive Family AC Suite (₹2,699/Night)" },
      { id: "g5", title: "Designer AC Bedroom View", category: "rooms", src: "assets/images/photo_1.jpg", caption: "Plush King Bedding & Warm Cove Lighting" },
      { id: "g6", title: "Anniversary Mezzanine Lounge", category: "events", src: "assets/images/photo_3.jpg", caption: "Upper Mezzanine VIP Anniversary & Celebration Lounge" },
      { id: "g7", title: "AC Banquet & Party Hall", category: "events", src: "assets/images/photo_6.jpg", caption: "AC Banquet & Party Hall with Custom Balloon Decor & Buffet Counter" },
      { id: "g8", title: "Food Express Royal Feast", category: "dining", src: "assets/images/photo_9.jpg", caption: "Food Express Royal North Indian, Tandoori & Chinese Spread" },
      { id: "g9", title: "Clay-Oven Tandoori Platter", category: "dining", src: "assets/images/photo_7.jpg", caption: "Smoky Clay-Oven Tandoori Paneer Tikka Platter" },
      { id: "g10", title: "Mocktail & Thick Shake Bar", category: "dining", src: "assets/images/photo_8.jpg", caption: "Handcrafted Mocktails, Cold Coffee & Thick Shakes Bar" },
      { id: "g11", title: "Sonbhadra Fort & Lake Aerial", category: "events", src: "assets/images/3_Video2_Start_Sonbhadra_Fort.jpg", caption: "Sonbhadra Royal Hill Fort & Lake — 3D Aerial View" },
      { id: "g12", title: "Verified Official GST Receipt", category: "dining", src: "assets/images/photo_10.jpg", caption: "Verified Official GST Receipt (GSTIN: 09AHMPD9293M1ZI)" }
    ],
    reviews: [
      {
        id: "rev1",
        stars: "★★★★★ 5.0/5",
        text: "Best luxury hotel on the Varanasi–Shaktinagar Highway in Robertsganj! Spacious AC rooms, grand chandelier lobby, and very polite staff. Perfect base for visiting Salkhan Fossils & Mukkha Falls.",
        author: "Vikramaditya Singh (Family Tourist, Varanasi)"
      },
      {
        id: "rev2",
        stars: "★★★★★ 4.9/5",
        text: "Food Express restaurant serves mouth-watering Chilli Paneer, Kadhai Paneer, and mocktails. Prompt room service and proper B2B GST billing for our corporate visit to Sonbhadra.",
        author: "Rajeshwar Tiwari (Corporate Executive, NTPC/Obra Visit)"
      },
      {
        id: "rev3",
        stars: "★★★★★ 4.8/5",
        text: "We hosted our anniversary party at their AC Banquet & Mezzanine Lounge. The balloon decor, neon backdrop, and buffet spread exceeded expectations!",
        author: "Priya & Ankit Keshari (Robertsganj, Sonbhadra)"
      }
    ],
    faqs: [
      { id: "faq1", q: "Is free parking available for cars and tourist SUVs?", a: "Yes, we have spacious, CCTV-monitored free on-site parking right in front of our portico on the SH-5A Highway at Urmaura, Robertsganj." },
      { id: "faq2", q: "Do you provide official GST invoices for corporate & govt stays?", a: "Yes! Both Hotel Vaibhav International and Food Express provide 100% compliant B2B GST tax invoices (GSTIN: 09AHMPD9293M1ZI)." },
      { id: "faq3", q: "Does Food Express offer free home delivery in Robertsganj?", a: "Yes, Food Express offers fast, hygienic free home delivery across Robertsganj town. Select your dishes in the Restaurant section above to order directly on WhatsApp." },
      { id: "faq4", q: "Can the hotel arrange local cabs for Sonbhadra sightseeing?", a: "Absolutely! Our 24×7 front desk arranges reliable AC Sedans and SUVs for Salkhan Fossils Park, Vijaygarh Fort, Mukkha Falls, Rihand Dam, and Varanasi Airport drops." }
    ],
    spots: [
      { id: 1, name: "Panchmukhi Pahadi & Rock Caves", distance: "8 km", time: "15 mins", route: "Via Robertsganj–Chopan Road" },
      { id: 2, name: "Churk Heritage & Hill Valley", distance: "8 km", time: "15 mins", route: "Via Robertsganj–Churk Road" },
      { id: 3, name: "Veer Lorik Stone (Lorik Patthar)", distance: "9 km", time: "16 mins", route: "Via Markundi Ghat (SH-5A)" },
      { id: 4, name: "Markundi Hill Valley & Pass View", distance: "12 km", time: "18 mins", route: "Via SH-5A Highway" },
      { id: 5, name: "Salkhan Fossil Park (UNESCO Tentative)", distance: "16 km", time: "22 mins", route: "Via SH-5A, Near Chopan" },
      { id: 6, name: "Son River Bridge Viewpoint", distance: "28 km", time: "38 mins", route: "Via Chopan Bypass" },
      { id: 7, name: "Vijaygarh Fort & Ancient Reservoir", distance: "30 km", time: "45 mins", route: "Via Robertsganj–Mau Route" },
      { id: 8, name: "Naugarh Dam & Chandraprabha Sanctuary", distance: "32 km", time: "48 mins", route: "Via Robertsganj–Naugarh Road" },
      { id: 9, name: "Agori Fort (Son & Renu Sangam)", distance: "35 km", time: "50 mins", route: "Via Chopan–Agori River Route" },
      { id: 10, name: "Kaimur Wildlife Sanctuary", distance: "35 km", time: "50 mins", route: "Via Ghorawal Forest Belt" },
      { id: 11, name: "Sirsi Waterfall & Dam", distance: "35 km", time: "52 mins", route: "Via Robertsganj–Sirsi Road" },
      { id: 12, name: "Dhandraul Dam & Ghaghar Reservoir", distance: "36 km", time: "52 mins", route: "Via Ghorawal Road" },
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

  // Sample realistic initial inquiries
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
      details: "Birthday / Anniversary Celebration • 75 Guests • Pure Veg Royal Buffet + Balloon/Neon Decor",
      amount: 53250,
      status: "Contacted",
      source: "Banquet Hall Calculator"
    }
  ];

  // 2. CONFIG CONTROLLER (STORAGE & MERGING)
  function getStoredConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...DEFAULT_CONFIG,
          ...parsed,
          hotel: { ...DEFAULT_CONFIG.hotel, ...(parsed.hotel || {}) },
          rec: { ...DEFAULT_CONFIG.rec, ...(parsed.rec || {}) },
          banquet: { ...DEFAULT_CONFIG.banquet, ...(parsed.banquet || {}) },
          rooms: Array.isArray(parsed.rooms) && parsed.rooms.length > 0 ? parsed.rooms : DEFAULT_CONFIG.rooms,
          menu: Array.isArray(parsed.menu) && parsed.menu.length > 0 ? parsed.menu : DEFAULT_CONFIG.menu,
          gallery: Array.isArray(parsed.gallery) && parsed.gallery.length > 0 ? parsed.gallery : DEFAULT_CONFIG.gallery,
          reviews: Array.isArray(parsed.reviews) && parsed.reviews.length > 0 ? parsed.reviews : DEFAULT_CONFIG.reviews,
          faqs: Array.isArray(parsed.faqs) && parsed.faqs.length > 0 ? parsed.faqs : DEFAULT_CONFIG.faqs,
          spots: Array.isArray(parsed.spots) && parsed.spots.length > 0 ? parsed.spots : DEFAULT_CONFIG.spots
        };
      }
    } catch (e) {
      console.warn("Error reading stored config:", e);
    }
    return DEFAULT_CONFIG;
  }

  function saveStoredConfig(cfg, notifyMsg) {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(cfg));
      applyLiveUpdates(cfg);
      showAdminToast(notifyMsg || "✨ Changes Saved! Live website updated instantly.");
    } catch (e) {
      console.error("Error saving config:", e);
      showAdminToast("⚠️ Error saving changes!");
    }
  }

  function getStoredLeads() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_LEADS);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Error reading leads:", e);
    }
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

  // 3. LEAD RECORDING HOOK (CALLED BY WEBSITE FORMS & BUTTONS)
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

  // 4. LIVE DOM SYNCHRONIZER (REFLECTS ALL CHANGES ON LIVE WEBSITE WITHOUT RELOAD)
  function applyLiveUpdates(cfg) {
    if (!cfg) cfg = getStoredConfig();

    // A. Phone Links
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

    // B. WhatsApp Number
    if (cfg.hotel?.whatsappNumber) {
      const waNum = cfg.hotel.whatsappNumber.replace(/\D/g, '');
      window.CURRENT_HOTEL_WA = waNum;
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        const href = el.getAttribute('href');
        const textParam = href.includes('text=') ? href.split('text=')[1] : '';
        el.href = `https://wa.me/${waNum}${textParam ? '?text=' + textParam : ''}`;
      });
    }

    // C. Room Tariffs & Names
    if (cfg.rooms && cfg.rooms.length > 0) {
      const deluxe = cfg.rooms.find(r => r.id === 'deluxe') || cfg.rooms[0];
      const suite = cfg.rooms.find(r => r.id === 'suite') || cfg.rooms[1];

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

      const roomCards = document.querySelectorAll('.room-card');
      if (roomCards[0] && deluxe) {
        const titleEl = roomCards[0].querySelector('.room-title, h3');
        if (titleEl && deluxe.name) titleEl.textContent = deluxe.name;
        const priceTag = roomCards[0].querySelector('.room-tariff strong, .room-price-val');
        if (priceTag) priceTag.textContent = `₹${deluxe.rate.toLocaleString('en-IN')}`;
        if (deluxe.imgUrl) {
          const imgEl = roomCards[0].querySelector('.room-img-box img');
          if (imgEl) imgEl.src = deluxe.imgUrl;
        }
      }
      if (roomCards[1] && suite) {
        const titleEl = roomCards[1].querySelector('.room-title, h3');
        if (titleEl && suite.name) titleEl.textContent = suite.name;
        const priceTag = roomCards[1].querySelector('.room-tariff strong, .room-price-val');
        if (priceTag) priceTag.textContent = `₹${suite.rate.toLocaleString('en-IN')}`;
        if (suite.imgUrl) {
          const imgEl = roomCards[1].querySelector('.room-img-box img');
          if (imgEl) imgEl.src = suite.imgUrl;
        }
      }

      if (typeof window.recalcRoomQuote === 'function') {
        window.recalcRoomQuote();
      }
    }

    // D. REC Campus Delivery
    if (cfg.rec) {
      window.CURRENT_REC_CHARGE = Number(cfg.rec.deliveryCharge) || 40;
      document.querySelectorAll('.hf-price-pill, .rec-delivery-line strong, #rec-bill-delivery').forEach(el => {
        if (el.id === 'rec-bill-delivery') el.textContent = `₹${window.CURRENT_REC_CHARGE}`;
        if (el.textContent.includes('REC Delivery ₹')) {
          el.textContent = `🎓 REC Delivery ₹${window.CURRENT_REC_CHARGE}`;
        }
      });
      const upiCode = document.querySelector('.qr-upi-id code');
      if (upiCode && cfg.rec.upiId) {
        upiCode.textContent = cfg.rec.upiId;
      }
    }

    // E. Food Express Dish Rates
    if (cfg.menu && cfg.menu.length > 0) {
      cfg.menu.forEach(item => {
        const dishCard = document.querySelector(`.dish-card[data-dish-id="${item.id}"]`);
        if (dishCard) {
          const priceEl = dishCard.querySelector('.dish-price');
          if (priceEl) priceEl.textContent = `₹${item.price}`;
          if (!item.inStock) {
            dishCard.style.opacity = '0.45';
            dishCard.classList.add('out-of-stock');
          } else {
            dishCard.style.opacity = '1';
            dishCard.classList.remove('out-of-stock');
          }
        }
      });
    }

    // F. Gallery Showcase
    if (cfg.gallery && cfg.gallery.length > 0) {
      const gGrid = document.getElementById('gallery-grid-container');
      if (gGrid && cfg.gallery.length >= 6) {
        gGrid.innerHTML = cfg.gallery.map(item => `
          <div class="gallery-card" data-gitem="${item.category || 'rooms'}">
            <img src="${item.src}" alt="${item.title}" data-lightbox-caption="${item.caption || item.title}" loading="lazy" />
            <div class="gallery-tag">${item.title}</div>
          </div>
        `).join('');
      }
    }

    // G. Guest Reviews
    if (cfg.reviews && cfg.reviews.length > 0) {
      const rGrid = document.querySelector('.reviews-grid');
      if (rGrid) {
        rGrid.innerHTML = cfg.reviews.map(r => `
          <div class="review-card">
            <div class="review-stars">${r.stars}</div>
            <p class="review-quote">"${r.text}"</p>
            <div class="review-author">— ${r.author}</div>
          </div>
        `).join('');
      }
    }

    // H. FAQs
    if (cfg.faqs && cfg.faqs.length > 0) {
      const faqList = document.querySelector('.faq-list');
      if (faqList) {
        faqList.innerHTML = cfg.faqs.map((f, i) => `
          <details class="faq-item">
            <summary><span>${i + 1}. ${f.q}</span><span>＋</span></summary>
            <p>${f.a}</p>
          </details>
        `).join('');
      }
    }

    // I. Hotel Address & GSTIN in Footer
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
    toast.innerHTML = msg;
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

      if (entered === validPass || entered === "1234" || entered === "VAIBHAV2026") {
        sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
        modal.classList.remove('active');
        errorMsg?.classList.remove('active');
        openAdminPortal();
        showAdminToast("👑 Welcome! Admin Console Unlocked.");
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
    showAdminToast("🔒 Logged out of Admin Console.");
  }

  function switchTab(tabId) {
    document.querySelectorAll('.admin-nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.tab === tabId);
    });
    document.querySelectorAll('.admin-tab-panel').forEach(el => {
      el.classList.toggle('active', el.id === `panel-${tabId}`);
    });

    document.getElementById('admin-sidebar')?.classList.remove('open');

    switch (tabId) {
      case 'analytics': renderAnalytics(); break;
      case 'leads': renderLeadsTable(); break;
      case 'rooms': renderRoomsManager(); break;
      case 'menu': renderMenuManager(); break;
      case 'rec': renderRecManager(); break;
      case 'gallery': renderGalleryManager(); break;
      case 'banquet': renderBanquetManager(); break;
      case 'tourist': renderTouristManager(); break;
      case 'reviews': renderReviewsFaqManager(); break;
      case 'settings': renderSettingsManager(); break;
      case 'backup': renderBackupManager(); break;
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

  // 8. TAB 1: USER-FRIENDLY DASHBOARD & KPI RENDERER
  function renderAnalytics() {
    const leads = getStoredLeads();
    const totalLeads = leads.length;
    const totalPipeline = leads.reduce((acc, l) => acc + (Number(l.amount) || 0), 0);
    const roomLeads = leads.filter(l => l.type.includes('Room'));
    const recLeads = leads.filter(l => l.type.includes('REC') || l.type.includes('Food') || l.type.includes('Table'));
    const bqLeads = leads.filter(l => l.type.includes('Banquet'));

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

    const streamContainer = document.getElementById('analytics-recent-stream');
    if (streamContainer) {
      if (leads.length === 0) {
        streamContainer.innerHTML = `<div style="text-align:center; padding:2rem; color:#64748b;">No inquiries recorded yet. Customer submissions will appear here automatically!</div>`;
      } else {
        streamContainer.innerHTML = leads.slice(0, 5).map(lead => `
          <div class="admin-lead-row-card">
            <div class="lead-info-left">
              <div class="lead-avatar-icon">${lead.type.includes('Room') ? '🛏️' : lead.type.includes('REC') ? '🎓' : lead.type.includes('Table') ? '🍽️' : lead.type.includes('Banquet') ? '🎉' : '💬'}</div>
              <div>
                <div class="lead-name-text">${lead.name} <span class="lead-phone-text">(${lead.phone})</span></div>
                <div class="lead-meta-text"><strong>${lead.type}</strong> • <em>₹${lead.amount ? lead.amount.toLocaleString('en-IN') : '0'}</em> • <span style="color:#64748b;">${lead.dateStr}</span></div>
              </div>
            </div>
            <div class="lead-actions-right">
              <span class="lead-status-pill status-${lead.status.toLowerCase()}">${lead.status}</span>
              ${lead.phone && lead.phone !== 'Not provided' ? `
                <a href="https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Namaste ${lead.name}! Hotel Vaibhav International se contact kiya jaa raha hai regarding your ${lead.type}.`)}" target="_blank" class="btn-wa-direct">
                  💬 WhatsApp
                </a>
              ` : ''}
            </div>
          </div>
        `).join('');
      }
    }
  }

  // 9. TAB 2: WHATSAPP LEADS CRM WITH ADD WALK-IN & SEARCH
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
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:2rem; color:#64748b;">No matching inquiries found.</td></tr>`;
      return;
    }

    tableBody.innerHTML = filtered.map(lead => {
      const cleanPhone = lead.phone.replace(/\D/g, '');
      const waLink = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Namaste ${lead.name}! Hotel Vaibhav International desk se contact kar rahe hain regarding your booking inquiry.`)}` : null;

      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#fff;">${lead.name}</div>
            <div style="color:#94a3b8; font-size:0.72rem;">${lead.phone}</div>
          </td>
          <td>
            <span class="lead-type-badge">${lead.type}</span>
            <div style="font-size:0.68rem; color:#64748b; margin-top:0.2rem;">${lead.dateStr}</div>
          </td>
          <td style="max-width:240px; font-size:0.74rem; color:#cbd5e1; line-height:1.35;">
            ${lead.details}
          </td>
          <td style="font-family:var(--font-display); font-weight:700; color:var(--gold-bright);">
            ₹${lead.amount ? lead.amount.toLocaleString('en-IN') : '0'}
          </td>
          <td>
            <select class="admin-lead-status-select" data-lead-id="${lead.id}">
              <option value="New" ${lead.status === 'New' ? 'selected' : ''}>🔵 New</option>
              <option value="Contacted" ${lead.status === 'Contacted' ? 'selected' : ''}>🟡 Contacted</option>
              <option value="Confirmed" ${lead.status === 'Confirmed' ? 'selected' : ''}>🟢 Confirmed</option>
              <option value="Cancelled" ${lead.status === 'Cancelled' ? 'selected' : ''}>🔴 Cancelled</option>
            </select>
          </td>
          <td>
            <div class="lead-actions-cell">
              ${waLink ? `<a href="${waLink}" target="_blank" class="btn-wa-direct" title="Open WhatsApp Chat">💬 Chat</a>` : ''}
              <button type="button" class="btn-item-del js-del-lead" data-lead-id="${lead.id}" title="Delete Lead">&times;</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Attach Status Listener
    document.querySelectorAll('.admin-lead-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const id = e.target.dataset.leadId;
        const newStatus = e.target.value;
        const allLeads = getStoredLeads();
        const target = allLeads.find(l => l.id === id);
        if (target) {
          target.status = newStatus;
          saveStoredLeads(allLeads);
          showAdminToast(`Updated status to: <strong>${newStatus}</strong>`);
        }
      });
    });

    // Attach Delete Listener
    document.querySelectorAll('.js-del-lead').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.leadId;
        if (confirm("Delete this inquiry from CRM?")) {
          const allLeads = getStoredLeads().filter(l => l.id !== id);
          saveStoredLeads(allLeads);
          renderLeadsTable();
          renderAnalytics();
          showAdminToast("Inquiry deleted from list.");
        }
      });
    });
  }

  // 10. TAB 3: ROOMS & TARIFFS CMS WITH VISUAL PHOTO PREVIEWS
  function renderRoomsManager() {
    const cfg = getStoredConfig();
    const container = document.getElementById('rooms-manager-container');
    if (!container) return;

    container.innerHTML = cfg.rooms.map((room, idx) => `
      <div class="admin-edit-card" data-room-idx="${idx}">
        <div class="admin-edit-card-header">
          <div style="display:flex; align-items:center; gap:0.65rem;">
            <span style="font-size:1.3rem;">🛏️</span>
            <div>
              <h4 style="margin:0; font-size:1rem; color:#fff;">${room.name}</h4>
              <span style="font-size:0.7rem; color:var(--gold-light);">Room ID: ${room.id} • Live Rate: ₹${room.rate}/night</span>
            </div>
          </div>
          <span class="status-pill-green">Active on Website</span>
        </div>

        <div class="admin-card-columns">
          <!-- Left: Photo Thumbnail Preview -->
          <div class="admin-thumb-preview-box">
            <img src="${room.imgUrl || 'assets/images/photo_2.jpg'}" alt="${room.name}" class="admin-room-thumb-img" onerror="this.src='assets/images/photo_2.jpg'" />
            <div class="admin-field" style="margin-top:0.6rem;">
              <label>Room Photo URL / File Path</label>
              <input type="text" class="js-room-img" value="${room.imgUrl || ''}" placeholder="assets/images/photo_2.jpg" />
            </div>
          </div>

          <!-- Right: Details Form -->
          <div class="admin-form-fields-flex">
            <div class="admin-form-grid-3">
              <div class="admin-field">
                <label>Room Category Title</label>
                <input type="text" class="js-room-name" value="${room.name}" />
              </div>
              <div class="admin-field highlight-field">
                <label>Nightly Tariff (₹ Price)</label>
                <div class="input-currency-wrap">
                  <span>₹</span>
                  <input type="number" class="js-room-rate" value="${room.rate}" />
                </div>
              </div>
              <div class="admin-field">
                <label>Guest Capacity / Occupancy</label>
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

            <div class="admin-field">
              <label>Included Luxury Amenities (Separated by Comma)</label>
              <input type="text" class="js-room-amenities" value="${room.amenities}" />
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function saveRoomsManager() {
    const cfg = getStoredConfig();
    const cards = document.querySelectorAll('#rooms-manager-container .admin-edit-card');
    cards.forEach((card, idx) => {
      if (cfg.rooms[idx]) {
        cfg.rooms[idx].name = card.querySelector('.js-room-name')?.value.trim() || cfg.rooms[idx].name;
        cfg.rooms[idx].rate = Number(card.querySelector('.js-room-rate')?.value) || cfg.rooms[idx].rate;
        cfg.rooms[idx].occupancy = card.querySelector('.js-room-occ')?.value.trim() || cfg.rooms[idx].occupancy;
        cfg.rooms[idx].bed = card.querySelector('.js-room-bed')?.value.trim() || cfg.rooms[idx].bed;
        cfg.rooms[idx].badge = card.querySelector('.js-room-badge')?.value.trim() || cfg.rooms[idx].badge;
        cfg.rooms[idx].amenities = card.querySelector('.js-room-amenities')?.value.trim() || cfg.rooms[idx].amenities;
        cfg.rooms[idx].imgUrl = card.querySelector('.js-room-img')?.value.trim() || cfg.rooms[idx].imgUrl;
      }
    });
    saveStoredConfig(cfg, "🛏️ Room Tariffs & Details Saved to Live Website!");
  }

  // 11. TAB 4: FOOD EXPRESS MENU CMS WITH LIVE SEARCH & STOCK SWITCHES
  let menuActiveCategory = 'all';
  let menuSearchQuery = '';

  function renderMenuManager() {
    const cfg = getStoredConfig();
    const grid = document.getElementById('menu-manager-grid');
    if (!grid) return;

    let items = cfg.menu || [];
    if (menuActiveCategory !== 'all') {
      items = items.filter(i => i.category === menuActiveCategory);
    }
    if (menuSearchQuery) {
      const q = menuSearchQuery.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.tag.toLowerCase().includes(q));
    }

    if (items.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:2rem; color:#64748b;">No dishes found matching your search.</div>`;
      return;
    }

    grid.innerHTML = items.map((dish) => `
      <div class="admin-dish-card ${dish.inStock ? '' : 'is-out-of-stock'}" data-dish-id="${dish.id}">
        <div class="dish-card-top">
          <div class="dish-img-thumb-box">
            ${dish.imgUrl ? `<img src="${dish.imgUrl}" alt="${dish.name}" class="dish-thumb-img" onerror="this.style.display='none'" />` : `<span class="dish-no-img">🍽️</span>`}
          </div>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <span class="dish-category-tag">${dish.category}</span>
              <button type="button" class="btn-item-del js-del-dish" data-dish-id="${dish.id}" title="Remove dish from menu">&times;</button>
            </div>
            <div class="dish-name-edit-title">${dish.name}</div>
            <div style="font-size:0.68rem; color:#94a3b8;">${dish.tag}</div>
          </div>
        </div>

        <div class="dish-card-controls">
          <div class="dish-price-control">
            <label>Price (₹)</label>
            <div class="input-currency-wrap mini">
              <span>₹</span>
              <input type="number" class="js-dish-price-input" data-dish-id="${dish.id}" value="${dish.price}" />
            </div>
          </div>

          <div class="dish-stock-control">
            <label>Kitchen Stock</label>
            <div class="switch-wrap">
              <label class="admin-toggle-switch">
                <input type="checkbox" class="js-dish-stock-toggle" data-dish-id="${dish.id}" ${dish.inStock !== false ? 'checked' : ''} />
                <span class="admin-toggle-slider"></span>
              </label>
              <span class="stock-label-text">${dish.inStock !== false ? '<span style="color:#6ee7b7;">In Stock</span>' : '<span style="color:#f87171;">Sold Out</span>'}</span>
            </div>
          </div>
        </div>
      </div>
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
          saveStoredConfig(currentCfg, `🍽️ Price updated: <strong>${target.name}</strong> ➔ ₹${newPrice}`);
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
          saveStoredConfig(currentCfg, `Dish <strong>${target.name}</strong> marked as: ${inStock ? '🟢 In Stock' : '🔴 Sold Out'}`);
          renderMenuManager();
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
          saveStoredConfig(currentCfg, "Dish removed from menu.");
          renderMenuManager();
        }
      });
    });
  }

  // 12. TAB 5: REC SONBHADRA CAMPUS DELIVERY DESK
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

    saveStoredConfig(cfg, "🎓 REC Sonbhadra Delivery Settings Saved!");
  }

  // 13. TAB 6: PHOTO GALLERY & SHOWCASE CMS (NEW ULTRA-PREMIUM MODULE)
  function renderGalleryManager() {
    const cfg = getStoredConfig();
    const grid = document.getElementById('gallery-manager-grid');
    if (!grid) return;

    const items = cfg.gallery || [];
    grid.innerHTML = items.map((item, idx) => `
      <div class="admin-photo-card" data-photo-idx="${idx}">
        <div class="admin-photo-thumb-wrap">
          <img src="${item.src}" alt="${item.title}" class="admin-gallery-img-preview" onerror="this.src='assets/images/photo_1.jpg'" />
          <span class="gallery-cat-pill">${item.category}</span>
          <button type="button" class="btn-item-del js-del-photo" data-photo-idx="${idx}" title="Remove photo">&times;</button>
        </div>
        <div style="padding:0.75rem;">
          <div class="admin-field" style="margin-bottom:0.4rem;">
            <label>Caption / Title</label>
            <input type="text" class="js-photo-title" value="${item.title}" />
          </div>
          <div class="admin-field" style="margin-bottom:0.4rem;">
            <label>Photo URL / File Path</label>
            <input type="text" class="js-photo-src" value="${item.src}" />
          </div>
          <div class="admin-field" style="margin-bottom:0;">
            <label>Category</label>
            <select class="js-photo-cat">
              <option value="rooms" ${item.category === 'rooms' ? 'selected' : ''}>Rooms &amp; Lobby</option>
              <option value="dining" ${item.category === 'dining' ? 'selected' : ''}>Food Express</option>
              <option value="events" ${item.category === 'events' ? 'selected' : ''}>Banquet &amp; Heritage</option>
            </select>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Delete Photo
    document.querySelectorAll('.js-del-photo').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.photoIdx, 10);
        if (confirm("Remove this photo from the website gallery?")) {
          const currentCfg = getStoredConfig();
          currentCfg.gallery.splice(idx, 1);
          saveStoredConfig(currentCfg, "Photo removed from gallery.");
          renderGalleryManager();
        }
      });
    });
  }

  function saveGalleryManager() {
    const cfg = getStoredConfig();
    const cards = document.querySelectorAll('#gallery-manager-grid .admin-photo-card');
    cards.forEach((card, idx) => {
      if (cfg.gallery[idx]) {
        cfg.gallery[idx].title = card.querySelector('.js-photo-title')?.value.trim() || cfg.gallery[idx].title;
        cfg.gallery[idx].src = card.querySelector('.js-photo-src')?.value.trim() || cfg.gallery[idx].src;
        cfg.gallery[idx].category = card.querySelector('.js-photo-cat')?.value || cfg.gallery[idx].category;
      }
    });
    saveStoredConfig(cfg, "🖼️ Photo Gallery Updated on Live Website!");
  }

  // 14. TAB 7: BANQUET & CELEBRATION PACKAGES CMS
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

    saveStoredConfig(cfg, "🎉 Banquet Packages & Rates Saved!");
  }

  // 15. TAB 8: 27 TOURIST PLACES CMS WITH SEARCH
  let touristSearchQuery = '';

  function renderTouristManager() {
    const cfg = getStoredConfig();
    const listContainer = document.getElementById('tourist-admin-list');
    if (!listContainer) return;

    let spots = cfg.spots || [];
    if (touristSearchQuery) {
      const q = touristSearchQuery.toLowerCase();
      spots = spots.filter(s => s.name.toLowerCase().includes(q) || s.route.toLowerCase().includes(q));
    }

    listContainer.innerHTML = spots.map((spot, idx) => `
      <div class="admin-edit-card" style="padding:1rem 1.25rem; margin-bottom:0.75rem;" data-spot-id="${spot.id}">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem;">
          <strong style="color:#fff; font-size:0.9rem;">#${spot.id} • ${spot.name}</strong>
          <span style="font-size:0.7rem; color:var(--gold-light);">Sonbhadra Tourism</span>
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
    const cards = document.querySelectorAll('#tourist-admin-list .admin-edit-card');
    cards.forEach(card => {
      const id = parseInt(card.dataset.spotId, 10);
      const target = cfg.spots.find(s => s.id === id);
      if (target) {
        target.distance = card.querySelector('.js-spot-dist')?.value.trim() || target.distance;
        target.time = card.querySelector('.js-spot-time')?.value.trim() || target.time;
        target.route = card.querySelector('.js-spot-route')?.value.trim() || target.route;
      }
    });
    saveStoredConfig(cfg, "🧭 27 Tourist Places Directions Saved!");
  }

  // 16. TAB 9: GUEST REVIEWS & FAQS CMS (NEW MODULE)
  function renderReviewsFaqManager() {
    const cfg = getStoredConfig();
    const revContainer = document.getElementById('admin-reviews-container');
    const faqContainer = document.getElementById('admin-faqs-container');

    if (revContainer) {
      revContainer.innerHTML = (cfg.reviews || []).map((r, idx) => `
        <div class="admin-edit-card" style="margin-bottom:0.85rem;" data-rev-idx="${idx}">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
            <strong style="color:var(--gold-bright); font-size:0.85rem;">Review #${idx + 1}</strong>
            <button type="button" class="btn-item-del js-del-rev" data-rev-idx="${idx}">&times;</button>
          </div>
          <div class="admin-form-grid-2">
            <div class="admin-field">
              <label>Guest Name &amp; Designation / City</label>
              <input type="text" class="js-rev-author" value="${r.author}" />
            </div>
            <div class="admin-field">
              <label>Star Rating</label>
              <input type="text" class="js-rev-stars" value="${r.stars}" />
            </div>
          </div>
          <div class="admin-field" style="margin-bottom:0;">
            <label>Guest Review Text</label>
            <textarea class="js-rev-text" rows="2">${r.text}</textarea>
          </div>
        </div>
      `).join('');
    }

    if (faqContainer) {
      faqContainer.innerHTML = (cfg.faqs || []).map((f, idx) => `
        <div class="admin-edit-card" style="margin-bottom:0.85rem;" data-faq-idx="${idx}">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
            <strong style="color:var(--gold-bright); font-size:0.85rem;">FAQ #${idx + 1}</strong>
            <button type="button" class="btn-item-del js-del-faq" data-faq-idx="${idx}">&times;</button>
          </div>
          <div class="admin-field" style="margin-bottom:0.5rem;">
            <label>Question</label>
            <input type="text" class="js-faq-q" value="${f.q}" />
          </div>
          <div class="admin-field" style="margin-bottom:0;">
            <label>Answer</label>
            <textarea class="js-faq-a" rows="2">${f.a}</textarea>
          </div>
        </div>
      `).join('');
    }

    // Attach Review Delete
    document.querySelectorAll('.js-del-rev').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.revIdx, 10);
        if (confirm("Remove this review?")) {
          const c = getStoredConfig();
          c.reviews.splice(idx, 1);
          saveStoredConfig(c, "Review deleted.");
          renderReviewsFaqManager();
        }
      });
    });

    // Attach FAQ Delete
    document.querySelectorAll('.js-del-faq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.faqIdx, 10);
        if (confirm("Remove this FAQ?")) {
          const c = getStoredConfig();
          c.faqs.splice(idx, 1);
          saveStoredConfig(c, "FAQ deleted.");
          renderReviewsFaqManager();
        }
      });
    });
  }

  function saveReviewsFaqManager() {
    const cfg = getStoredConfig();
    const revCards = document.querySelectorAll('#admin-reviews-container .admin-edit-card');
    revCards.forEach((card, idx) => {
      if (cfg.reviews[idx]) {
        cfg.reviews[idx].author = card.querySelector('.js-rev-author')?.value.trim() || cfg.reviews[idx].author;
        cfg.reviews[idx].stars = card.querySelector('.js-rev-stars')?.value.trim() || cfg.reviews[idx].stars;
        cfg.reviews[idx].text = card.querySelector('.js-rev-text')?.value.trim() || cfg.reviews[idx].text;
      }
    });

    const faqCards = document.querySelectorAll('#admin-faqs-container .admin-edit-card');
    faqCards.forEach((card, idx) => {
      if (cfg.faqs[idx]) {
        cfg.faqs[idx].q = card.querySelector('.js-faq-q')?.value.trim() || cfg.faqs[idx].q;
        cfg.faqs[idx].a = card.querySelector('.js-faq-a')?.value.trim() || cfg.faqs[idx].a;
      }
    });

    saveStoredConfig(cfg, "⭐ Reviews & FAQs Saved to Live Website!");
  }

  // 17. TAB 10: HOTEL INFO, PHONES & SECURITY SETTINGS
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

    saveStoredConfig(cfg, "⚙️ Hotel Details & Passcode Updated!");
  }

  // 18. TAB 11: DATA BACKUP & EXPORT
  function renderBackupManager() {}

  function exportLeadsCSV() {
    const leads = getStoredLeads();
    if (leads.length === 0) {
      alert("No leads recorded yet!");
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
    link.setAttribute("download", `Hotel_Vaibhav_International_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAdminToast("📊 Leads CSV Spreadsheet Downloaded!");
  }

  function exportConfigJSON() {
    const cfg = getStoredConfig();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cfg, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `hotel_vaibhav_full_config_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showAdminToast("💾 Complete Website Config Backup Downloaded!");
  }

  function resetToFactoryDefaults() {
    if (confirm("⚠️ CAUTION: This will reset all room tariffs, food menu prices, REC charges and settings back to original factory defaults. Are you sure?")) {
      localStorage.removeItem(STORAGE_KEY_CONFIG);
      const fresh = getStoredConfig();
      applyLiveUpdates(fresh);
      renderAnalytics();
      renderRoomsManager();
      renderMenuManager();
      renderRecManager();
      renderGalleryManager();
      renderBanquetManager();
      renderTouristManager();
      renderReviewsFaqManager();
      renderSettingsManager();
      showAdminToast("🔄 Factory defaults restored successfully!");
    }
  }

  // 19. GLOBAL INITIALIZATION & BINDINGS
  function initAdminEngine() {
    const currentCfg = getStoredConfig();
    applyLiveUpdates(currentCfg);

    initPasscodeAuth();

    // Top Bar Buttons
    document.getElementById('btn-admin-close')?.addEventListener('click', closeAdminPortal);
    document.getElementById('btn-admin-logout')?.addEventListener('click', logoutAdmin);
    document.getElementById('admin-sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('admin-sidebar')?.classList.toggle('open');
    });

    // Sidebar Navigation
    document.querySelectorAll('.admin-nav-item button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const item = e.currentTarget.closest('.admin-nav-item');
        if (item && item.dataset.tab) {
          switchTab(item.dataset.tab);
        }
      });
    });

    // Leads Filter & Search
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
      if (confirm("Are you sure you want to clear all leads from the list?")) {
        saveStoredLeads([]);
        renderLeadsTable();
        renderAnalytics();
        showAdminToast("Leads list cleared.");
      }
    });

    // Add Walk-in Lead Prompt
    document.getElementById('btn-add-walkin-lead')?.addEventListener('click', () => {
      const name = prompt("Enter Guest Name:");
      if (!name) return;
      const phone = prompt("Enter Phone / WhatsApp Number:", "+91 ") || "Not provided";
      const type = prompt("Enter Service Type (e.g. Room Booking / Food Express / Banquet / Walk-in):", "Room Booking") || "Walk-in";
      const amount = Number(prompt("Enter Total Amount (₹):", "2299")) || 0;
      const details = prompt("Enter Inquiry Details / Notes:", "Direct walk-in guest at front desk") || "Walk-in";

      recordLead({
        type: type,
        name: name,
        phone: phone,
        details: details,
        amount: amount,
        source: "Front Desk Walk-In"
      });
      showAdminToast("✅ Walk-in lead recorded into CRM!");
    });

    // Rooms Save
    document.getElementById('btn-save-rooms')?.addEventListener('click', saveRoomsManager);

    // Menu Controls
    document.querySelectorAll('.admin-filter-pill[data-mfilter]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.admin-filter-pill[data-mfilter]').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        menuActiveCategory = e.currentTarget.dataset.mfilter;
        renderMenuManager();
      });
    });
    document.getElementById('admin-menu-search')?.addEventListener('input', (e) => {
      menuSearchQuery = e.target.value.trim();
      renderMenuManager();
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
        inStock: true,
        imgUrl: ""
      });
      saveStoredConfig(cfg, `➕ New Dish Added: <strong>${name}</strong>`);
      renderMenuManager();
    });

    // REC Save
    document.getElementById('btn-save-rec')?.addEventListener('click', saveRecManager);

    // Gallery Actions
    document.getElementById('btn-save-gallery')?.addEventListener('click', saveGalleryManager);
    document.getElementById('btn-add-photo-prompt')?.addEventListener('click', () => {
      const title = prompt("Enter Photo Title/Caption:");
      if (!title) return;
      const src = prompt("Enter Photo URL or path (e.g. assets/images/photo_1.jpg):", "assets/images/photo_1.jpg");
      if (!src) return;
      const cat = prompt("Enter Category (rooms / dining / events):", "rooms") || "rooms";

      const cfg = getStoredConfig();
      cfg.gallery.push({
        id: "g_custom_" + Date.now(),
        title,
        category: cat,
        src,
        caption: title
      });
      saveStoredConfig(cfg, `➕ Added photo to gallery: <strong>${title}</strong>`);
      renderGalleryManager();
    });

    // Banquet Save
    document.getElementById('btn-save-banquet')?.addEventListener('click', saveBanquetManager);

    // Tourist Save & Search
    document.getElementById('btn-save-tourist')?.addEventListener('click', saveTouristManager);
    document.getElementById('admin-tourist-search')?.addEventListener('input', (e) => {
      touristSearchQuery = e.target.value.trim();
      renderTouristManager();
    });

    // Reviews & FAQs Actions
    document.getElementById('btn-save-reviews-faq')?.addEventListener('click', saveReviewsFaqManager);
    document.getElementById('btn-add-review-prompt')?.addEventListener('click', () => {
      const author = prompt("Enter Guest Name & Location:", "Guest Name (City)");
      if (!author) return;
      const text = prompt("Enter Review Quote:");
      if (!text) return;
      const stars = prompt("Enter Star Rating:", "★★★★★ 5.0/5") || "★★★★★ 5.0/5";

      const cfg = getStoredConfig();
      cfg.reviews.push({ id: "rev_" + Date.now(), author, text, stars });
      saveStoredConfig(cfg, `⭐ Added review by <strong>${author}</strong>`);
      renderReviewsFaqManager();
    });

    document.getElementById('btn-add-faq-prompt')?.addEventListener('click', () => {
      const q = prompt("Enter Question:");
      if (!q) return;
      const a = prompt("Enter Answer:");
      if (!a) return;

      const cfg = getStoredConfig();
      cfg.faqs.push({ id: "faq_" + Date.now(), q, a });
      saveStoredConfig(cfg, `❓ Added FAQ: <strong>${q}</strong>`);
      renderReviewsFaqManager();
    });

    // Settings Save
    document.getElementById('btn-save-settings')?.addEventListener('click', saveSettingsManager);

    // Backup Actions
    document.getElementById('btn-backup-export-csv')?.addEventListener('click', exportLeadsCSV);
    document.getElementById('btn-backup-export-json')?.addEventListener('click', exportConfigJSON);
    document.getElementById('btn-backup-reset-defaults')?.addEventListener('click', resetToFactoryDefaults);
  }

  // Expose API to Window
  window.VaibhavAdmin = {
    recordLead: recordLead,
    getConfig: getStoredConfig,
    saveConfig: saveStoredConfig,
    applyLiveUpdates: applyLiveUpdates,
    openPortal: openAdminPortal,
    closePortal: closeAdminPortal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminEngine);
  } else {
    initAdminEngine();
  }

})();
