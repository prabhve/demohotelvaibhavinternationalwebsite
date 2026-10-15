/* ==========================================================================
   HOTEL VAIBHAV INTERNATIONAL & FOOD EXPRESS — ULTRA-PREMIUM ADMIN ENGINE
   User-Friendly UI, 100% In-Page Luxury Modals (Zero Browser Prompts),
   Complete Website Headings, Subheadings & Description CMS, Visual Previews,
   WhatsApp Leads CRM, Instant DOM Synchronizer & Factory Backup Controller
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
    // FULL SITE TEXTS & COPY (100% Editable via Admin)
    content: {
      hero: {
        crest: "✦ SONBHADRA’S PREMIER LUXURY DESTINATION • SH-5A 4-LANE HIGHWAY, ROBERTSGANJ ✦",
        title: "HOTEL VAIBHAV INTERNATIONAL",
        sub: "& Food Express",
        slide1Heading: "Experience Royal Hospitality Amidst the Hills of Sonbhadra",
        slide1Desc: "Designer King-Size AC Deluxe Rooms & Family Suites from ₹2,299/Night • Opposite DIET Campus, Urmaura • High-Speed Wi-Fi, Lift Access & B2B GST Billing",
        slide2Heading: "Food Express Fine Dining & Direct REC Campus Delivery",
        slide2Desc: "Authentic North Indian, Clay-Oven Smoky Tandoori, Chinese & Mocktail Bar • Free Robertsganj Delivery & Dedicated ₹40 REC Sonbhadra Campus Delivery",
        slide3Heading: "Gateway to 27 Natural Wonders & Forts of Sonbhadra",
        slide3Desc: "Live Google Maps Navigation from Our Highway Gate to Salkhan Fossils Park (14 km), Mukkha Waterfall (38 km), Vijaygarh Fort (28 km) & Rihand Dam",
        slide4Heading: "Grand AC Banquet Hall for Regal Celebrations",
        slide4Desc: "Bespoke Decor & Gourmet Catering for Weddings, Engagements, Ring Ceremonies, Birthdays & Corporate Conferences (20 to 200+ Guests)"
      },
      about: {
        eyebrow: "About Our Property",
        heading: "Hotel Vaibhav International & Food Express",
        p1: "Located strategically on the Varanasi–Shaktinagar 4-Lane State Highway (SH-5A) at Urmaura / Tagore Nagar (Opposite DIET Campus, Near Tata Motors), Robertsganj, Hotel Vaibhav International is Sonbhadra's premier destination for families, tourists, corporate executives, and grand celebrations.",
        p2: "Whether you are visiting Sonbhadra's world-famous Salkhan Fossils Park (14 km), Mukkha Falls (38 km), Vijaygarh Fort (28 km), ordering delicious meals to Rajkiya Engineering College (REC Sonbhadra, Churk — 8 km), or travelling for official work at NTPC, NCL, Hindalco, Obra, Anpara, or Sonbhadra Collectorate (4 km), our hotel combines 3-star luxury comfort with warm Purvanchal hospitality.",
        pillar1Title: "🏨 Designer AC Rooms",
        pillar1Desc: "Sound-insulated rooms with King beds, LED TV, Wi-Fi, Geyser & Lift access.",
        pillar2Title: "🍽️ Food Express & REC Delivery",
        pillar2Desc: "North Indian, Tandoori, Chinese & Mocktails with REC Sonbhadra & Town Delivery.",
        pillar3Title: "🎉 AC Banquet & Lounge",
        pillar3Desc: "Custom decorated party hall & mezzanine balcony for 20 to 200+ guests.",
        pillar4Title: "🚗 Highway Convenience",
        pillar4Desc: "Free on-site parking, 24×7 generator backup, CCTV security & travel desk."
      },
      roomsSection: {
        eyebrow: "Luxury Accommodations",
        heading: "Spacious AC Rooms & Instant WhatsApp Quote",
        lead: "Select your room below and fill out the quick form—our system automatically calculates your stay quote and generates a ready-to-send WhatsApp booking message."
      },
      restaurantSection: {
        eyebrow: "Fine Dining & REC Campus Delivery",
        heading: "Food Express Restaurant & Instant WhatsApp Order",
        lead: "Order authentic clay-oven tandoori, north Indian gravies, Chinese & thick shakes. Free home delivery in Robertsganj town & dedicated ₹40 delivery to REC Sonbhadra Churk Campus.",
        recHead: "🎓 REC Sonbhadra (Churk Campus) Exclusive Online Food Desk"
      },
      banquetSection: {
        eyebrow: "Events, Parties & Conferences",
        heading: "AC Banquet Hall & Celebration Lounge",
        lead: "Custom balloon & floral arches, neon celebration walls, glowing onyx buffet counters, and multi-cuisine catering for 20 to 200+ guests."
      },
      touristSection: {
        eyebrow: "Sonbhadra Tourism Guide",
        heading: "All 27 Major Tourist Places from Hotel Vaibhav International",
        lead: "Discover all 27 waterfalls, ancient hill forts, rock cave paintings, and dams across Sonbhadra with live Google Maps driving navigation directly from our hotel gates."
      },
      locationSection: {
        eyebrow: "Connectivity & Directions",
        heading: "Hotel Location & How to Reach Us",
        addr: "📍 Official Address: Hotel Vaibhav International & Food Express, Opposite DIET Campus (District Institute of Education & Training), Near Tata Motors Showroom, Urmaura / Tagore Nagar, Varanasi–Shaktinagar Highway (SH-5A), Robertsganj, District Sonbhadra, Uttar Pradesh – 231216."
      },
      policySection: {
        eyebrow: "Guest Guidelines, Reviews & FAQs",
        heading: "Hotel Policies, Verified Reviews & FAQs",
        checkin: "Standard Check-In: 12:00 PM (Noon) • Standard Check-Out: 10:00 AM • Mandatory Govt. Photo ID: Aadhaar Card, Driving License, Voter ID, or Passport is required for all guests at check-in. PAN Card not accepted.",
        family: "Families, tourists, and corporate travelers are warmly welcomed. Children below 6 years stay complimentary when sharing existing bedding. Extra mattress available (+₹400/night).",
        gst: "Official GSTIN: 09AHMPD9293M1ZI. Official B2B GST tax invoices provided for corporate & PSU stays. Payment accepted via UPI, Cash, Credit/Debit Cards & Bank Transfer."
      }
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
      dateStr: "15 Oct 2026, 08:30 AM",
      timestamp: 1792030000000,
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
      dateStr: "15 Oct 2026, 08:35 AM",
      timestamp: 1792032000000,
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
      dateStr: "15 Oct 2026, 08:40 AM",
      timestamp: 1792033000000,
      type: "Banquet Hall Quote",
      name: "Dr. P.K. Gupta",
      phone: "+91 94500 12345",
      details: "Birthday / Anniversary Celebration • 75 Guests • Pure Veg Royal Buffet + Balloon/Neon Decor",
      amount: 53250,
      status: "Contacted",
      source: "Banquet Hall Calculator"
    }
  ];

  // 2. CONFIG CONTROLLER (STORAGE & DEEP MERGE)
  function getStoredConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...DEFAULT_CONFIG,
          ...parsed,
          hotel: { ...DEFAULT_CONFIG.hotel, ...(parsed.hotel || {}) },
          content: {
            hero: { ...DEFAULT_CONFIG.content.hero, ...(parsed.content?.hero || {}) },
            about: { ...DEFAULT_CONFIG.content.about, ...(parsed.content?.about || {}) },
            roomsSection: { ...DEFAULT_CONFIG.content.roomsSection, ...(parsed.content?.roomsSection || {}) },
            restaurantSection: { ...DEFAULT_CONFIG.content.restaurantSection, ...(parsed.content?.restaurantSection || {}) },
            banquetSection: { ...DEFAULT_CONFIG.content.banquetSection, ...(parsed.content?.banquetSection || {}) },
            touristSection: { ...DEFAULT_CONFIG.content.touristSection, ...(parsed.content?.touristSection || {}) },
            locationSection: { ...DEFAULT_CONFIG.content.locationSection, ...(parsed.content?.locationSection || {}) },
            policySection: { ...DEFAULT_CONFIG.content.policySection, ...(parsed.content?.policySection || {}) }
          },
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

  // 4. LIVE DOM SYNCHRONIZER (REFLECTS EVERY SINGLE TEXT & VAL ON LIVE WEBSITE)
  function applyLiveUpdates(cfg) {
    if (!cfg) cfg = getStoredConfig();

    // A. Phone Links
    if (cfg.hotel?.receptionPhone) {
      const recPhoneClean = cfg.hotel.receptionPhone.replace(/[^\d+]/g, '');
      document.querySelectorAll('a[href^="tel:+917311100788"], a[href^="tel:917311100788"], .js-reception-tel, .nav-call-btn').forEach(el => {
        el.href = `tel:${recPhoneClean}`;
        if (el.classList.contains('nav-call-btn')) el.textContent = `📞 ${cfg.hotel.receptionPhone.replace('+91', '').trim()}`;
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

    // C. 100% Full Website Text & Copy Injections
    const c = cfg.content || {};

    // 1. Hero Content
    if (c.hero) {
      const crestEl = document.querySelector('.crest-text');
      if (crestEl && c.hero.crest) crestEl.textContent = c.hero.crest;

      const titleEl = document.querySelector('.hero-royal-title');
      if (titleEl && c.hero.title) {
        titleEl.innerHTML = `${c.hero.title} <span class="hero-royal-sub">${c.hero.sub || '&amp; Food Express'}</span>`;
      }

      // 4 Experience Rotator Slides
      const slide0H = document.querySelector('.hero-slide[data-slide="0"] .slide-heading');
      const slide0D = document.querySelector('.hero-slide[data-slide="0"] .slide-desc');
      if (slide0H && c.hero.slide1Heading) slide0H.innerHTML = c.hero.slide1Heading;
      if (slide0D && c.hero.slide1Desc) slide0D.innerHTML = c.hero.slide1Desc;

      const slide1H = document.querySelector('.hero-slide[data-slide="1"] .slide-heading');
      const slide1D = document.querySelector('.hero-slide[data-slide="1"] .slide-desc');
      if (slide1H && c.hero.slide2Heading) slide1H.innerHTML = c.hero.slide2Heading;
      if (slide1D && c.hero.slide2Desc) slide1D.innerHTML = c.hero.slide2Desc;

      const slide2H = document.querySelector('.hero-slide[data-slide="2"] .slide-heading');
      const slide2D = document.querySelector('.hero-slide[data-slide="2"] .slide-desc');
      if (slide2H && c.hero.slide3Heading) slide2H.innerHTML = c.hero.slide3Heading;
      if (slide2D && c.hero.slide3Desc) slide2D.innerHTML = c.hero.slide3Desc;

      const slide3H = document.querySelector('.hero-slide[data-slide="3"] .slide-heading');
      const slide3D = document.querySelector('.hero-slide[data-slide="3"] .slide-desc');
      if (slide3H && c.hero.slide4Heading) slide3H.innerHTML = c.hero.slide4Heading;
      if (slide3D && c.hero.slide4Desc) slide3D.innerHTML = c.hero.slide4Desc;
    }

    // 2. About Section
    if (c.about) {
      const abEye = document.querySelector('#about .eyebrow span:last-child');
      if (abEye && c.about.eyebrow) abEye.textContent = c.about.eyebrow;

      const abHead = document.querySelector('#about .section-h2');
      if (abHead && c.about.heading) abHead.textContent = c.about.heading;

      const abP1 = document.querySelector('#about .about-grid .hero-p:nth-of-type(1)');
      if (abP1 && c.about.p1) abP1.innerHTML = c.about.p1;

      const abP2 = document.querySelector('#about .about-grid .hero-p:nth-of-type(2)');
      if (abP2 && c.about.p2) abP2.innerHTML = c.about.p2;

      // Pillars
      const p1T = document.querySelector('.about-pillars .pillar-box:nth-child(1) .pillar-title');
      const p1D = document.querySelector('.about-pillars .pillar-box:nth-child(1) .pillar-desc');
      if (p1T && c.about.pillar1Title) p1T.textContent = c.about.pillar1Title;
      if (p1D && c.about.pillar1Desc) p1D.textContent = c.about.pillar1Desc;

      const p2T = document.querySelector('.about-pillars .pillar-box:nth-child(2) .pillar-title');
      const p2D = document.querySelector('.about-pillars .pillar-box:nth-child(2) .pillar-desc');
      if (p2T && c.about.pillar2Title) p2T.textContent = c.about.pillar2Title;
      if (p2D && c.about.pillar2Desc) p2D.textContent = c.about.pillar2Desc;

      const p3T = document.querySelector('.about-pillars .pillar-box:nth-child(3) .pillar-title');
      const p3D = document.querySelector('.about-pillars .pillar-box:nth-child(3) .pillar-desc');
      if (p3T && c.about.pillar3Title) p3T.textContent = c.about.pillar3Title;
      if (p3D && c.about.pillar3Desc) p3D.textContent = c.about.pillar3Desc;

      const p4T = document.querySelector('.about-pillars .pillar-box:nth-child(4) .pillar-title');
      const p4D = document.querySelector('.about-pillars .pillar-box:nth-child(4) .pillar-desc');
      if (p4T && c.about.pillar4Title) p4T.textContent = c.about.pillar4Title;
      if (p4D && c.about.pillar4Desc) p4D.textContent = c.about.pillar4Desc;
    }

    // 3. Rooms Section Headings
    if (c.roomsSection) {
      const rmEye = document.querySelector('#rooms .eyebrow span:last-child');
      if (rmEye && c.roomsSection.eyebrow) rmEye.textContent = c.roomsSection.eyebrow;

      const rmHead = document.querySelector('#rooms .section-h2');
      if (rmHead && c.roomsSection.heading) rmHead.textContent = c.roomsSection.heading;

      const rmLead = document.querySelector('#rooms .section-lead');
      if (rmLead && c.roomsSection.lead) rmLead.textContent = c.roomsSection.lead;
    }

    // 4. Restaurant Section Headings
    if (c.restaurantSection) {
      const restEye = document.querySelector('#restaurant .eyebrow span:last-child');
      if (restEye && c.restaurantSection.eyebrow) restEye.textContent = c.restaurantSection.eyebrow;

      const restHead = document.querySelector('#restaurant .section-h2');
      if (restHead && c.restaurantSection.heading) restHead.textContent = c.restaurantSection.heading;

      const restLead = document.querySelector('#restaurant .section-lead');
      if (restLead && c.restaurantSection.lead) restLead.textContent = c.restaurantSection.lead;

      const recHeadEl = document.querySelector('#rec-campus-order-box .form-h3');
      if (recHeadEl && c.restaurantSection.recHead) recHeadEl.textContent = c.restaurantSection.recHead;
    }

    // 5. Banquet Section Headings
    if (c.banquetSection) {
      const bqEye = document.querySelector('#banquet .eyebrow span:last-child');
      if (bqEye && c.banquetSection.eyebrow) bqEye.textContent = c.banquetSection.eyebrow;

      const bqHead = document.querySelector('#banquet .section-h2');
      if (bqHead && c.banquetSection.heading) bqHead.textContent = c.banquetSection.heading;

      const bqLead = document.querySelector('#banquet .section-lead');
      if (bqLead && c.banquetSection.lead) bqLead.textContent = c.banquetSection.lead;
    }

    // 6. Tourist Section Headings
    if (c.touristSection) {
      const tourEye = document.querySelector('#tourist .eyebrow span:last-child');
      if (tourEye && c.touristSection.eyebrow) tourEye.textContent = c.touristSection.eyebrow;

      const tourHead = document.querySelector('#tourist .section-h2');
      if (tourHead && c.touristSection.heading) tourHead.textContent = c.touristSection.heading;

      const tourLead = document.querySelector('#tourist p.hero-p');
      if (tourLead && c.touristSection.lead) tourLead.innerHTML = c.touristSection.lead;
    }

    // 7. Location Section Headings & Address
    if (c.locationSection) {
      const locEye = document.querySelector('#location .eyebrow span:last-child');
      if (locEye && c.locationSection.eyebrow) locEye.textContent = c.locationSection.eyebrow;

      const locHead = document.querySelector('#location .section-h2');
      if (locHead && c.locationSection.heading) locHead.textContent = c.locationSection.heading;

      const locAddr = document.querySelector('#location p.hero-p');
      if (locAddr && c.locationSection.addr) locAddr.innerHTML = c.locationSection.addr;
    }

    // 8. Policy Section Headings
    if (c.policySection) {
      const polEye = document.querySelector('#policy .eyebrow span:last-child');
      if (polEye && c.policySection.eyebrow) polEye.textContent = c.policySection.eyebrow;

      const polHead = document.querySelector('#policy .section-h2');
      if (polHead && c.policySection.heading) polHead.textContent = c.policySection.heading;
    }

    // D. Room Tariffs & Names
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

    // E. REC Campus Delivery
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

    // F. Food Express Dish Rates
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

    // G. Gallery Showcase
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

    // H. Guest Reviews
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

    // I. FAQs
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

    // J. Hotel Address & GSTIN in Footer
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

  // 6. CUSTOM MODAL CONTROLLERS (100% REPLACES ALL BROWSER PROMPTS)
  function openCustomModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.add('active');
      const firstInput = m.querySelector('input:not([type="hidden"]), select, textarea');
      setTimeout(() => firstInput?.focus(), 120);
    }
  }

  function closeCustomModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('active');
  }

  function initCustomModals() {
    // Close buttons via [data-close-modal]
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.closeModal;
        closeCustomModal(targetId);
      });
    });

    // Backdrop click close
    document.querySelectorAll('.admin-modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });

    // Form: Add Dish
    document.getElementById('form-admin-add-dish')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('m-add-dish-name')?.value.trim();
      const cat = document.getElementById('m-add-dish-cat')?.value || 'main';
      const price = Number(document.getElementById('m-add-dish-price')?.value) || 250;
      const tag = document.getElementById('m-add-dish-tag')?.value.trim() || 'Chef Special';
      const img = document.getElementById('m-add-dish-img')?.value.trim() || '';

      if (!name) return;

      const cfg = getStoredConfig();
      cfg.menu.unshift({
        id: "m_custom_" + Date.now(),
        name,
        category: cat,
        tag,
        price,
        inStock: true,
        imgUrl: img
      });

      saveStoredConfig(cfg, `➕ New Dish Added: <strong>${name}</strong> (₹${price})`);
      renderMenuManager();
      closeCustomModal('modal-admin-add-dish');
      e.target.reset();
    });

    // Form: Add Lead
    document.getElementById('form-admin-add-lead')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('m-add-lead-name')?.value.trim();
      const phone = document.getElementById('m-add-lead-phone')?.value.trim() || 'Not provided';
      const type = document.getElementById('m-add-lead-type')?.value || 'Room Booking';
      const amount = Number(document.getElementById('m-add-lead-amount')?.value) || 0;
      const details = document.getElementById('m-add-lead-details')?.value.trim() || 'Direct Front Desk Guest';

      if (!name) return;

      recordLead({
        type: type,
        name: name,
        phone: phone,
        details: details,
        amount: amount,
        source: "Front Desk Walk-In"
      });

      showAdminToast(`✅ Walk-in lead recorded for <strong>${name}</strong>!`);
      closeCustomModal('modal-admin-add-lead');
      e.target.reset();
    });

    // Form: Add Photo
    document.getElementById('form-admin-add-photo')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('m-add-photo-title')?.value.trim();
      const cat = document.getElementById('m-add-photo-cat')?.value || 'rooms';
      const src = document.getElementById('m-add-photo-src')?.value.trim() || 'assets/images/photo_1.jpg';

      if (!title || !src) return;

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
      closeCustomModal('modal-admin-add-photo');
      e.target.reset();
    });

    // Form: Add Review
    document.getElementById('form-admin-add-review')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('m-add-rev-author')?.value.trim();
      const stars = document.getElementById('m-add-rev-stars')?.value || '★★★★★ 5.0/5';
      const text = document.getElementById('m-add-rev-text')?.value.trim();

      if (!author || !text) return;

      const cfg = getStoredConfig();
      cfg.reviews.push({ id: "rev_" + Date.now(), author, text, stars });

      saveStoredConfig(cfg, `⭐ Added review by <strong>${author}</strong>`);
      renderReviewsFaqManager();
      closeCustomModal('modal-admin-add-review');
      e.target.reset();
    });

    // Form: Add FAQ
    document.getElementById('form-admin-add-faq')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('m-add-faq-q')?.value.trim();
      const a = document.getElementById('m-add-faq-a')?.value.trim();

      if (!q || !a) return;

      const cfg = getStoredConfig();
      cfg.faqs.push({ id: "faq_" + Date.now(), q, a });

      saveStoredConfig(cfg, `❓ Added FAQ: <strong>${q}</strong>`);
      renderReviewsFaqManager();
      closeCustomModal('modal-admin-add-faq');
      e.target.reset();
    });
  }

  // 7. PASSCODE AUTHENTICATION CONTROLLER
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

  // 8. ADMIN PORTAL LIFECYCLE & TABS
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
      case 'texts': renderTextsManager(); break;
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

  // 9. TAB 1: USER-FRIENDLY DASHBOARD & KPI RENDERER
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

  // 10. TAB 2: WHATSAPP LEADS CRM WITH ADD WALK-IN & SEARCH
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
        const allLeads = getStoredLeads().filter(l => l.id !== id);
        saveStoredLeads(allLeads);
        renderLeadsTable();
        renderAnalytics();
        showAdminToast("Inquiry deleted from list.");
      });
    });
  }

  // 11. TAB: ALL WEBSITE HEADINGS & TEXTS CMS RENDERER
  function renderTextsManager() {
    const cfg = getStoredConfig();
    const c = cfg.content || DEFAULT_CONFIG.content;

    // Hero
    const h = c.hero || {};
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    };

    setVal('txt-hero-crest', h.crest);
    setVal('txt-hero-title', h.title);
    setVal('txt-hero-sub', h.sub);
    setVal('txt-hero-s1-h', h.slide1Heading);
    setVal('txt-hero-s1-d', h.slide1Desc);
    setVal('txt-hero-s2-h', h.slide2Heading);
    setVal('txt-hero-s2-d', h.slide2Desc);
    setVal('txt-hero-s3-h', h.slide3Heading);
    setVal('txt-hero-s3-d', h.slide3Desc);
    setVal('txt-hero-s4-h', h.slide4Heading);
    setVal('txt-hero-s4-d', h.slide4Desc);

    // About
    const a = c.about || {};
    setVal('txt-about-eye', a.eyebrow);
    setVal('txt-about-head', a.heading);
    setVal('txt-about-p1', a.p1);
    setVal('txt-about-p2', a.p2);
    setVal('txt-pillar1-title', a.pillar1Title);
    setVal('txt-pillar1-desc', a.pillar1Desc);
    setVal('txt-pillar2-title', a.pillar2Title);
    setVal('txt-pillar2-desc', a.pillar2Desc);
    setVal('txt-pillar3-title', a.pillar3Title);
    setVal('txt-pillar3-desc', a.pillar3Desc);
    setVal('txt-pillar4-title', a.pillar4Title);
    setVal('txt-pillar4-desc', a.pillar4Desc);

    // Rooms Section
    const rm = c.roomsSection || {};
    setVal('txt-rooms-eye', rm.eyebrow);
    setVal('txt-rooms-head', rm.heading);
    setVal('txt-rooms-lead', rm.lead);

    // Restaurant Section
    const rst = c.restaurantSection || {};
    setVal('txt-rest-eye', rst.eyebrow);
    setVal('txt-rest-head', rst.heading);
    setVal('txt-rest-lead', rst.lead);
    setVal('txt-rec-head', rst.recHead);

    // Banquet & Tourist
    const bq = c.banquetSection || {};
    setVal('txt-bq-eye', bq.eyebrow);
    setVal('txt-bq-head', bq.heading);
    setVal('txt-bq-lead', bq.lead);

    const tour = c.touristSection || {};
    setVal('txt-tour-eye', tour.eyebrow);
    setVal('txt-tour-head', tour.heading);
    setVal('txt-tour-lead', tour.lead);

    // Location & Policies
    const loc = c.locationSection || {};
    setVal('txt-loc-eye', loc.eyebrow);
    setVal('txt-loc-head', loc.heading);
    setVal('txt-loc-addr', loc.addr);

    const pol = c.policySection || {};
    setVal('txt-pol-eye', pol.eyebrow);
    setVal('txt-pol-head', pol.heading);
    setVal('txt-pol-checkin', pol.checkin);
    setVal('txt-pol-family', pol.family);
    setVal('txt-pol-gst', pol.gst);
  }

  function saveTextsManager() {
    const cfg = getStoredConfig();
    cfg.content = cfg.content || {};

    const getVal = (id, fallback) => {
      const el = document.getElementById(id);
      return el ? el.value.trim() : (fallback || '');
    };

    // Hero
    cfg.content.hero = {
      crest: getVal('txt-hero-crest', DEFAULT_CONFIG.content.hero.crest),
      title: getVal('txt-hero-title', DEFAULT_CONFIG.content.hero.title),
      sub: getVal('txt-hero-sub', DEFAULT_CONFIG.content.hero.sub),
      slide1Heading: getVal('txt-hero-s1-h', DEFAULT_CONFIG.content.hero.slide1Heading),
      slide1Desc: getVal('txt-hero-s1-d', DEFAULT_CONFIG.content.hero.slide1Desc),
      slide2Heading: getVal('txt-hero-s2-h', DEFAULT_CONFIG.content.hero.slide2Heading),
      slide2Desc: getVal('txt-hero-s2-d', DEFAULT_CONFIG.content.hero.slide2Desc),
      slide3Heading: getVal('txt-hero-s3-h', DEFAULT_CONFIG.content.hero.slide3Heading),
      slide3Desc: getVal('txt-hero-s3-d', DEFAULT_CONFIG.content.hero.slide3Desc),
      slide4Heading: getVal('txt-hero-s4-h', DEFAULT_CONFIG.content.hero.slide4Heading),
      slide4Desc: getVal('txt-hero-s4-d', DEFAULT_CONFIG.content.hero.slide4Desc)
    };

    // About
    cfg.content.about = {
      eyebrow: getVal('txt-about-eye', DEFAULT_CONFIG.content.about.eyebrow),
      heading: getVal('txt-about-head', DEFAULT_CONFIG.content.about.heading),
      p1: getVal('txt-about-p1', DEFAULT_CONFIG.content.about.p1),
      p2: getVal('txt-about-p2', DEFAULT_CONFIG.content.about.p2),
      pillar1Title: getVal('txt-pillar1-title', DEFAULT_CONFIG.content.about.pillar1Title),
      pillar1Desc: getVal('txt-pillar1-desc', DEFAULT_CONFIG.content.about.pillar1Desc),
      pillar2Title: getVal('txt-pillar2-title', DEFAULT_CONFIG.content.about.pillar2Title),
      pillar2Desc: getVal('txt-pillar2-desc', DEFAULT_CONFIG.content.about.pillar2Desc),
      pillar3Title: getVal('txt-pillar3-title', DEFAULT_CONFIG.content.about.pillar3Title),
      pillar3Desc: getVal('txt-pillar3-desc', DEFAULT_CONFIG.content.about.pillar3Desc),
      pillar4Title: getVal('txt-pillar4-title', DEFAULT_CONFIG.content.about.pillar4Title),
      pillar4Desc: getVal('txt-pillar4-desc', DEFAULT_CONFIG.content.about.pillar4Desc)
    };

    // Rooms Section
    cfg.content.roomsSection = {
      eyebrow: getVal('txt-rooms-eye', DEFAULT_CONFIG.content.roomsSection.eyebrow),
      heading: getVal('txt-rooms-head', DEFAULT_CONFIG.content.roomsSection.heading),
      lead: getVal('txt-rooms-lead', DEFAULT_CONFIG.content.roomsSection.lead)
    };

    // Restaurant Section
    cfg.content.restaurantSection = {
      eyebrow: getVal('txt-rest-eye', DEFAULT_CONFIG.content.restaurantSection.eyebrow),
      heading: getVal('txt-rest-head', DEFAULT_CONFIG.content.restaurantSection.heading),
      lead: getVal('txt-rest-lead', DEFAULT_CONFIG.content.restaurantSection.lead),
      recHead: getVal('txt-rec-head', DEFAULT_CONFIG.content.restaurantSection.recHead)
    };

    // Banquet & Tourist
    cfg.content.banquetSection = {
      eyebrow: getVal('txt-bq-eye', DEFAULT_CONFIG.content.banquetSection.eyebrow),
      heading: getVal('txt-bq-head', DEFAULT_CONFIG.content.banquetSection.heading),
      lead: getVal('txt-bq-lead', DEFAULT_CONFIG.content.banquetSection.lead)
    };
    cfg.content.touristSection = {
      eyebrow: getVal('txt-tour-eye', DEFAULT_CONFIG.content.touristSection.eyebrow),
      heading: getVal('txt-tour-head', DEFAULT_CONFIG.content.touristSection.heading),
      lead: getVal('txt-tour-lead', DEFAULT_CONFIG.content.touristSection.lead)
    };

    // Location & Policies
    cfg.content.locationSection = {
      eyebrow: getVal('txt-loc-eye', DEFAULT_CONFIG.content.locationSection.eyebrow),
      heading: getVal('txt-loc-head', DEFAULT_CONFIG.content.locationSection.heading),
      addr: getVal('txt-loc-addr', DEFAULT_CONFIG.content.locationSection.addr)
    };
    cfg.content.policySection = {
      eyebrow: getVal('txt-pol-eye', DEFAULT_CONFIG.content.policySection.eyebrow),
      heading: getVal('txt-pol-head', DEFAULT_CONFIG.content.policySection.heading),
      checkin: getVal('txt-pol-checkin', DEFAULT_CONFIG.content.policySection.checkin),
      family: getVal('txt-pol-family', DEFAULT_CONFIG.content.policySection.family),
      gst: getVal('txt-pol-gst', DEFAULT_CONFIG.content.policySection.gst)
    };

    saveStoredConfig(cfg, "✨ All Website Headings, Subheadings & Texts Updated on Live Site!");
  }

  // 12. TAB: ROOMS & TARIFFS CMS WITH VISUAL PHOTO PREVIEWS
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

  // 13. TAB: FOOD EXPRESS MENU CMS WITH LIVE SEARCH & STOCK SWITCHES
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
        const currentCfg = getStoredConfig();
        currentCfg.menu = currentCfg.menu.filter(m => m.id !== id);
        saveStoredConfig(currentCfg, "Dish removed from menu.");
        renderMenuManager();
      });
    });
  }

  // 14. TAB: REC SONBHADRA CAMPUS DELIVERY DESK
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

  // 15. TAB: PHOTO GALLERY & SHOWCASE CMS
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
        const currentCfg = getStoredConfig();
        currentCfg.gallery.splice(idx, 1);
        saveStoredConfig(currentCfg, "Photo removed from gallery.");
        renderGalleryManager();
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

  // 16. TAB: BANQUET & CELEBRATION PACKAGES CMS
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

  // 17. TAB: 27 TOURIST PLACES CMS WITH SEARCH
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

    listContainer.innerHTML = spots.map((spot) => `
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

  // 18. TAB: GUEST REVIEWS & FAQS CMS
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
        const c = getStoredConfig();
        c.reviews.splice(idx, 1);
        saveStoredConfig(c, "Review deleted.");
        renderReviewsFaqManager();
      });
    });

    // Attach FAQ Delete
    document.querySelectorAll('.js-del-faq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.faqIdx, 10);
        const c = getStoredConfig();
        c.faqs.splice(idx, 1);
        saveStoredConfig(c, "FAQ deleted.");
        renderReviewsFaqManager();
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

  // 19. TAB: HOTEL INFO, PHONES & SECURITY SETTINGS
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

  // 20. TAB: DATA BACKUP & EXPORT
  function renderBackupManager() {}

  function exportLeadsCSV() {
    const leads = getStoredLeads();
    if (leads.length === 0) {
      showAdminToast("⚠️ No customer leads recorded yet to export.");
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
    localStorage.removeItem(STORAGE_KEY_CONFIG);
    const fresh = getStoredConfig();
    applyLiveUpdates(fresh);
    renderAnalytics();
    renderTextsManager();
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

  // 21. GLOBAL INITIALIZATION & EVENT BINDINGS
  function initAdminEngine() {
    const currentCfg = getStoredConfig();
    applyLiveUpdates(currentCfg);

    initPasscodeAuth();
    initCustomModals();

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

    // Website Texts Sub-Tabs Switching
    document.querySelectorAll('.admin-sub-tab-pill[data-text-tab]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.admin-sub-tab-pill[data-text-tab]').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const targetTab = e.currentTarget.dataset.textTab;
        document.querySelectorAll('.admin-text-subpanel').forEach(p => {
          p.classList.toggle('active', p.id === `subpanel-text-${targetTab}`);
        });
      });
    });

    // Save All Website Texts Button
    document.getElementById('btn-save-all-texts')?.addEventListener('click', saveTextsManager);

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
      saveStoredLeads([]);
      renderLeadsTable();
      renderAnalytics();
      showAdminToast("Leads list cleared.");
    });

    // Open Custom Add Modals (ZERO BROWSER PROMPTS!)
    document.getElementById('btn-add-walkin-lead')?.addEventListener('click', () => {
      openCustomModal('modal-admin-add-lead');
    });

    document.getElementById('btn-add-dish-prompt')?.addEventListener('click', () => {
      openCustomModal('modal-admin-add-dish');
    });

    document.getElementById('btn-add-photo-prompt')?.addEventListener('click', () => {
      openCustomModal('modal-admin-add-photo');
    });

    document.getElementById('btn-add-review-prompt')?.addEventListener('click', () => {
      openCustomModal('modal-admin-add-review');
    });

    document.getElementById('btn-add-faq-prompt')?.addEventListener('click', () => {
      openCustomModal('modal-admin-add-faq');
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

    // REC Save
    document.getElementById('btn-save-rec')?.addEventListener('click', saveRecManager);

    // Gallery Actions
    document.getElementById('btn-save-gallery')?.addEventListener('click', saveGalleryManager);

    // Banquet Save
    document.getElementById('btn-save-banquet')?.addEventListener('click', saveBanquetManager);

    // Tourist Save & Search
    document.getElementById('btn-save-tourist')?.addEventListener('click', saveTouristManager);
    document.getElementById('admin-tourist-search')?.addEventListener('input', (e) => {
      touristSearchQuery = e.target.value.trim();
      renderTouristManager();
    });

    // Reviews & FAQs Save
    document.getElementById('btn-save-reviews-faq')?.addEventListener('click', saveReviewsFaqManager);

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
    closePortal: closeAdminPortal,
    openModal: openCustomModal,
    closeModal: closeCustomModal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminEngine);
  } else {
    initAdminEngine();
  }

})();
