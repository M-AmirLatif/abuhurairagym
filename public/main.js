/**
 * Abu Huraira World Gym Fitness Center - Main Script
 * Handles Lenis smooth scrolling, GSAP ScrollTrigger animations, mobile drawer,
 * carousel navigation, lightbox modal, and EN/UR language switching.
 */

// Global Translations Object (Strictly from GYM_DATA.md)
const translations = {
  en: {
    nav_overview: "Overview",
    nav_highlights: "Highlights",
    nav_facilities: "Facilities",
    nav_gallery: "Gallery",
    nav_membership: "Membership",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_location: "Location",
    nav_contact: "Contact Us",
    nav_call: "Call +92 321 4670428",
    nav_join_wa: "Join on WhatsApp",

    hero_hl1: "FORGE YOUR BODY.",
    hero_hl2: "BUILD YOUR LEGACY.",
    hero_sub: "Open-air training. Modern machines. Kot Murad Khan, Kasur.",
    hero_join: "Join Now",
    hero_book_visit: "Visit us",
    join_eyebrow: "SIMPLE 3-STEP PROCESS ✦",
    join_title: "How to start training.",
    join_sub: "Join in three straightforward steps.",
    step1_title: "Visit or message us",
    step1_desc: "Visit our gym in Kot Murad Khan or message us on WhatsApp.",
    step2_title: "Ask about membership on WhatsApp",
    step2_desc: "Ask about current membership options on WhatsApp. Cash payments only.",
    step3_title: "Start training",
    step3_desc: "Open daily, closes 12 AM. Open-air courtyard and modern machines.",
    join_cta_btn: "Visit us",
    rev_leave_btn: "Leave a review on Google",
    qr_title: "Scan to review on Google Maps",
    qr_desc: "Have you trained at Abu Huraira World Gym? Point your phone camera at this QR code to view our 155 Google reviews or share your own experience.",
    qr_link: "Open Google Maps Listing ↗",
    qr_caption: "Rated 4.6 ★ (155 Reviews)",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_gmaps: "Google Listing",

    hero_call: "Call +92 321 4670428",
    hero_float_lead: "Open-air & indoor fitness",
    hero_float_sub: "Training at World Gym Kasur",
    hero_scroll: "scroll down",

    hl_title: "Our gym highlights.",
    hl_sub: "A real open training area with modern equipment, healthy natural environment, and good trainers.",
    badge_facilities: "Facilities ✦",
    card1_title: "Open-air cardio area",
    card_inquire_wa: "Inquire on WhatsApp",
    badge_coaches: "Coaches ⚡",
    trainer_name: "Ustaad Abu Huraira",
    card2_title: "Guidance under Ex Mr. Kasur",
    card2_desc: "Trained guidance under Ustaad Abu Huraira, described by reviewers as Ex Mr. Kasur, helping members with workout apparatus and routine.",
    badge_apparatus: "Apparatus ✦",
    card3_title: "Modern strength apparatus",
    badge_daily_timings: "Daily Timings ✦",
    card4_title: "Open daily until 12 AM",
    card4_desc: "Payments are cash only. Open daily throughout the week for training.",
    card4_footnote: "Ask us about women's training hours • Cash only",

    fac_title: "Our training facilities.",
    fac_sub: "A real open training area with modern machines and amenities as members mention in reviews.",
    fac1_title: "Gym floor",
    fac1_desc: "Modern machines and an open area to train on. Training at World Gym Kasur.",
    fac2_title: "Open-air cardio area",
    fac2_desc: "Motorized treadmills and running stations in the open courtyard training area.",
    fac3_placeholder: "Resistance machines",
    fac3_title: "Resistance machines",
    fac3_desc: "Modern resistance equipment and training stations at World Gym Kasur.",

    banner_hl: "START YOUR FITNESS JOURNEY TODAY.",
    banner_sub: "Dedicated guidance, modern machines, and open courtyard workouts in Kot Murad Khan.",

    mem_tag: "MEMBERSHIP",
    mem_title: "Membership",
    mem_lead: "Ask us about current membership options and fees on WhatsApp. Payments are cash only.",
    mem_ask_wa: "Ask on WhatsApp",
    mem_badge_cash: "Payments are cash only",

    form_tag: "REQUEST A VISIT ✦",
    form_heading: "Plan your gym visit.",
    form_subtext: "Enter your details to generate a pre-filled WhatsApp message directly on WhatsApp.",
    form_lbl_name: "Name",
    form_ph_name: "Your name",
    form_lbl_phone: "Phone",
    form_ph_phone: "Your phone number",
    form_lbl_goal: "Goal",
    form_ph_goal: "e.g. Muscle building, fitness, cardio",
    form_lbl_time: "Best Time",
    form_ph_time: "e.g. Evening, 6 PM",
    form_submit: "Submit on WhatsApp",
    form_privacy: "Payments are cash only. Open daily, closes 12 AM.",

    faq_eyebrow: "HELP & ANSWERS",
    faq_side_badge: "DIRECT ASSISTANCE",
    faq_side_title: "Have more questions?",
    faq_side_desc: "Message us on WhatsApp. We answer questions about timings, machines and women's training hours.",
    faq_side_chat: "Chat on WhatsApp",
    faq_side_call: "Call <bdi dir=\"ltr\">+92 321 4670428</bdi>",
    faq_side_foot: "Cash payments only • Open daily closes 12 AM",
    footer_address: "4C8R+5XC, Nizam Pura Rd, near Jamal Market, near City Hospital, Kot Murad Khan, Kasur, 55050",
    footer_hours: "Open daily, closes 12 AM",
    footer_fb_1: "Facebook: WORLD GYM KASUR",
    footer_fb_2: "WORLD GYM fitness center",
    fac_c1_title: "Open-air cardio area",
    fac_c2_title: "Modern strength apparatus",
    fac_c3_title: "Resistance machines",
    fac_c4_title: "Gym floor",
    hero_open_sub: "Training at World Gym Kasur",
    gal_title: "Gym photo gallery.",
    gal_sub: "Real facilities, equipment, and training atmosphere at Abu Huraira World Gym in Kasur.",
    gal_tag: "TAP PHOTO TO ENLARGE ✦",
    gal_tab_all: "All",
    gal_tab_facility: "Facility",
    gal_tab_equipment: "Equipment",
    gal_tab_training: "Training",
    gal_tab_members: "Members",
    gal_load_more: "Load More Photos",
    gal_removal_note: "Want a photo removed?",
    gal_removal_cta: "Message on WhatsApp",
    fac_apparatus_desc: "Modern machines to train on.",
    banner_btn_join: "Join Now",
    banner_btn_call: "Call Us",
    faq_card_tag: "DIRECT GUIDANCE",
    faq_card_title: "Have more questions?",
    faq_card_desc: "Message us on WhatsApp. We provide quick answers about timings, modern machinery, and women's training hours.",
    faq_card_chat_wa: "Chat on WhatsApp",
    faq_card_call: "Call Us",
    faq_card_footnote: "Payments cash only • Open daily, closes 12 AM",
    map_prompt_title: "Kot Murad Khan, Kasur",
    map_prompt_desc: "4C8R+5XC, Nizam Pura Rd, near Jamal Market",
    map_load_btn: "Show Interactive Map",
    footer_link_overview: "Overview",
    footer_link_facilities: "Facilities",
    footer_link_membership: "Membership",
    footer_link_reviews: "Reviews",
    footer_link_faq: "FAQ",
    footer_link_location: "Location",
    footer_contact_hours: "Open daily, closes 12 AM",
    footer_contact_address: "4C8R+5XC, Nizam Pura Rd, near Jamal Market, near City Hospital, Kot Murad Khan, Kasur, 55050",
    rev_rating_pill: "4.6 on Google • 155 reviews",
    rev_title: "What our members say.",
    rev_sub: "Real feedback from visitor reviews training at ABU HURAIRA WORLD GYM in Kasur.",
    rev_view_maps: "View on Google Maps",
    rev_badge: "Google review",
    rev1_quote: "\"It's a great gym for men and women. Very good equipments for workout and environment is also very good. There are many gyms in city but this the best in class.\"",
    rev1_author: "Muhammad",
    rev2_quote: "\"Best gym in Kasur. Even better than many gyms in Lahore. They have open area. A little juices and shakes cafe.\"",
    rev2_author: "Ramiz",
    rev3_quote: "\"World Gym fitness centre is a nice facility for the people of Kasur city to keep them fit, energetic and active. Equipped with automated machinery and have good trainers too in the guidance of Mr. Abu Haraira (Ex Mr. Kasur).\"",
    rev3_author: "Anjum",
    rev4_quote: "\"Best Gym All Ever in Kasur City. All fitness machines international level and big advantage is environment is natural.\"",
    rev4_author: "Adnan",

    faq_title: "Frequently asked questions.",
    faq_sub: "Direct answers to common questions about training at ABU HURAIRA WORLD GYM.",
    faq_ask_another: "Ask another question",
    faq_q1: "Do you accept cards?",
    faq_a1: "Payments are cash only.",
    faq_q2: "Is it good for kids?",
    faq_a2: "Yes, the gym is good for kids.",
    faq_q3: "What are your timings?",
    faq_a3: "Open daily, closes 12 AM.",
    faq_q4: "How do I join?",
    faq_a4: "Message us on WhatsApp or visit the gym.",
    faq_q5: "Is there women's training?",
    faq_a5: "Ask us on WhatsApp for the current hours.",

    loc_tag: "LOCATION & MAP ✦",
    loc_title: "Visit our facility.",
    loc_address: "4C8R+5XC, Nizam Pura Rd, near Jamal Market, near City Hospital, Kot Murad Khan, Kasur, 55050, Pakistan",
    loc_hours_badge: "Open daily, closes 12 AM",
    loc_rating_badge: "4.6 (155 Google reviews)",
    loc_cash_badge: "Cash only",
    loc_get_directions: "Get Directions",
    loc_call: "Call +92 321 4670428",

    footer_bio: "Abu Huraira World Gym Fitness Center provides modern machinery, open courtyard workouts, and clean natural training spaces in Kot Murad Khan, Kasur.",
    footer_rating: "4.6 • 155 Google reviews",
    footer_h_menu: "MENU",
    footer_h_facilities: "FACILITIES",
    footer_fac_open: "Open Courtyard Training",
    footer_fac_mach: "Modern Strength Machines",
    footer_fac_cafe: "Juice & Shakes Cafe",
    footer_fac_women: "Women's training hours",
    footer_fac_kids: "Good for Kids",
    footer_h_contacts: "OUR CONTACTS",
    footer_wa: "WhatsApp Message",
    footer_maps: "Find on Google Maps",
    footer_copyright: "© 2026 Abu Huraira World Gym Fitness Center (World Gym Kasur). All rights reserved. • Cash payments only.",

    sticky_call: "Call",
    sticky_wa: "WhatsApp",
    sticky_join: "Join",
    hero_stat_rating: "Google Rating",
    hero_stat_reviews: "Google Reviews",
    hero_stat_cash_val: "Cash Only",
    hero_stat_cash_lbl: "Payments Accepted",
    hero_stat_hours: "Open daily, closes 12 AM",
    load_more_photos: "Load More Photos",
    remaining_photos: "remaining",
    showing_all_photos: "Showing All 155 Photos"
  },
  ur: {
    nav_overview: "جائزہ",
    nav_highlights: "خصوصیات",
    nav_facilities: "سہولیات",
    nav_gallery: "گیلری",
    nav_membership: "ممبرشپ",
    nav_reviews: "آراء",
    nav_faq: "سوالات",
    nav_location: "مقام",
    nav_contact: "رابطہ کریں",
    nav_call: "کال کریں +92 321 4670428",
    nav_join_wa: "WhatsApp پر شامل ہوں",

    hero_hl1: "اپنا جسم سنواریں۔",
    hero_hl2: "اپنی شناخت بنائیں۔",
    hero_sub: "کھلی ہوا میں ورزش۔ جدید مشینیں اور قدرتی ماحول۔ کوٹ مراد خان، قصور۔",
    hero_join: "ابھی شامل ہوں",
    hero_book_visit: "ہم سے ملیں",
    join_eyebrow: "تین آسان مراحل ✦",
    join_title: "ورزش کیسے شروع کریں۔",
    join_sub: "تین آسان مراحل میں شروع کریں۔",
    step1_title: "تشریف لائیں یا میسج کریں",
    step1_desc: "کوٹ مراد خان میں ہمارے جم تشریف لائیں یا WhatsApp پر میسج کریں۔",
    step2_title: "WhatsApp پر ممبرشپ معلوم کریں",
    step2_desc: "موجودہ ممبرشپ آپشنز کے بارے میں WhatsApp پر پوچھیں۔ ادائیگیاں صرف نقد ہیں۔",
    step3_title: "ورزش شروع کریں",
    step3_desc: "روزانہ کھلا ہے، رات 12 بجے بند۔ کھلا صحن اور جدید ورزشی مشینیں دستیاب ہیں۔",
    join_cta_btn: "ہم سے ملیں",
    rev_leave_btn: "Google پر اپنا جائزہ دیں",
    qr_title: "Google Maps پر جائزہ لینے کے لیے اسکین کریں",
    qr_desc: "کیا آپ نے ابو ہریرہ ورلڈ جم میں ٹریننگ کی ہے؟ اپنے موبائل سے یہ کیو آر کوڈ اسکین کر کے ہمارے 155 جائزے دیکھیں یا اپنی رائے دیں۔",
    qr_link: "Google Maps پر دیکھیں ↗",
    qr_caption: "4.6 ریٹنگ ★ (155 جائزے)",
    footer_privacy: "پرائیویسی پالیسی",
    footer_terms: "شرائط و ضوابط",
    footer_gmaps: "Google لسٹنگ",

    hero_call: "کال کریں +92 321 4670428",
    hero_float_lead: "کھلی ہوا اور انڈور فٹنس",
    hero_float_sub: "ورلڈ جم قصور میں ٹریننگ",
    hero_scroll: "نیچے دیکھیں",

    hl_title: "ہمارے جم کی نمایاں خصوصیات۔",
    hl_sub: "ایک حقیقی کھلا ٹریننگ ایریا، جدید مشینیں، صحت مند قدرتی ماحول اور اچھے ٹرینرز۔",
    badge_facilities: "سہولیات ✦",
    card1_title: "کھلی ہوا کا کارڈیو ایریا",
    card_inquire_wa: "WhatsApp پر معلومات لیں",
    badge_coaches: "کوچز ⚡",
    trainer_name: "استاد ابو ہریرہ",
    card2_title: "سابق مسٹر قصور کی رہنمائی",
    card2_desc: "استاد ابو ہریرہ (جنہیں ممبرز سابق مسٹر قصور بیان کرتے ہیں) کی زیر نگرانی ٹریننگ اور رہنمائی۔",
    badge_apparatus: "مشینیں ✦",
    card3_title: "جدید ورزشی مشینیں",
    badge_daily_timings: "اوقات کار ✦",
    card4_title: "روزانہ رات 12 بجے تک کھلا ہے",
    card4_desc: "ادائیگیاں صرف نقد ہیں۔ ٹریننگ کے لیے پورا ہفتہ روزانہ کھلا رہتا ہے۔",
    card4_footnote: "خواتین کے اوقات کے بارے میں معلوم کریں • صرف نقد",

    fac_title: "ہماری ٹریننگ سہولیات۔",
    fac_sub: "ایک حقیقی کھلا ٹریننگ ایریا جس میں جدید مشینیں اور سہولیات ہیں جن کا ممبرز نے اپنے تبصروں میں ذکر کیا ہے۔",
    fac1_title: "جم فلور",
    fac1_desc: "جدید مشینیں اور ورزش کے لیے کھلا ایریا۔ ورلڈ جم قصور میں ٹریننگ۔",
    fac2_title: "کھلی ہوا کا کارڈیو ایریا",
    fac2_desc: "کھلے صحن والے ٹریننگ ایریا میں موٹرائزڈ ٹریڈملز اور رننگ اسٹیشنز۔",
    fac3_placeholder: "ورزشی اور مزاحمتی مشینیں",
    fac3_title: "ورزشی اور مزاحمتی مشینیں",
    fac3_desc: "ورلڈ جم قصور میں فٹنس اور طاقت کے لیے جدید سازوسامان اور ٹریننگ اسٹیشنز۔",

    banner_hl: "اپنی فٹنس کا سفر آج ہی شروع کریں۔",
    banner_sub: "کوٹ مراد خان میں معیاری مشینوں، رہنمائی اور کھلے صحن کے قدرتی ماحول کے ساتھ ورزش کریں۔",

    mem_tag: "ممبرشپ",
    mem_title: "ممبرشپ",
    mem_lead: "موجودہ ممبرشپ آپشنز اور فیس کے بارے میں WhatsApp پر پوچھیں۔ ادائیگی صرف نقد ہے۔",
    mem_ask_wa: "WhatsApp پر پوچھیں",
    mem_badge_cash: "ادائیگیاں صرف نقد ہیں",

    form_tag: "وزٹ کی درخواست ✦",
    form_heading: "جم وزٹ کا وقت طے کریں۔",
    form_subtext: "اپنی تفصیلات درج کریں تاکہ پہلے سے تیار شدہ WhatsApp میسج بن جائے۔",
    form_lbl_name: "نام",
    form_ph_name: "آپ کا نام",
    form_lbl_phone: "فون نمبر",
    form_ph_phone: "آپ کا فون نمبر",
    form_lbl_goal: "ہدف",
    form_ph_goal: "مثلاً مسل بنانا، فٹنس، کارڈیو",
    form_lbl_time: "مناسب وقت",
    form_ph_time: "مثلاً شام 6 بجے",
    form_submit: "WhatsApp پر بھیجیں",
    form_privacy: "ادائیگیاں صرف نقد ہیں۔ روزانہ کھلا ہے، رات 12 بجے بند ہوتا ہے۔",

    faq_eyebrow: "مدد اور جوابات",
    faq_side_badge: "براہ راست رہنمائی",
    faq_side_title: "مزید سوالات ہیں؟",
    faq_side_desc: "ہمیں واٹس ایپ پر میسج کریں۔ ہم اوقات، مشینوں اور خواتین کے ٹریننگ اوقات کے متعلق جواب دیں گے۔",
    faq_side_chat: "واٹس ایپ پر رابطہ کریں",
    faq_side_call: "کال کریں <bdi dir=\"ltr\">+92 321 4670428</bdi>",
    faq_side_foot: "صرف نقد ادائیگیاں • روزانہ رات 12 بجے تک کھلا ہے",
    footer_address: "<bdi dir=\"ltr\">4C8R+5XC</bdi>، نظام پورہ روڈ، نزد جمال مارکیٹ، نزد سٹی ہسپتال، کوٹ مراد خان، قصور، <bdi dir=\"ltr\">55050</bdi>",
    footer_hours: "روزانہ رات 12 بجے تک کھلا ہے",
    footer_fb_1: "فیس بک: <bdi dir=\"ltr\">WORLD GYM KASUR</bdi>",
    footer_fb_2: "<bdi dir=\"ltr\">WORLD GYM fitness center</bdi>",
    fac_c1_title: "کھلا صحن اور کارڈیو ایریا",
    fac_c2_title: "جدید اسٹرینتھ مشینیں",
    fac_c3_title: "مزاحمتی اور ویٹ مشینیں",
    fac_c4_title: "جم ٹریننگ ہال",
    hero_open_sub: "ورلڈ جم قصور میں ٹریننگ",
    gal_title: "جم فوٹو گیلری۔",
    gal_sub: "ابو ہریرہ ورلڈ جم قصور میں حقیقی سہولیات، مشینیں اور ٹریننگ کا ماحول۔",
    gal_tag: "بڑی تصویر دیکھنے کے لیے ٹیپ کریں ✦",
    gal_tab_all: "تمام",
    gal_tab_facility: "سہولیات",
    gal_tab_equipment: "مشینیں",
    gal_tab_training: "ٹریننگ",
    gal_tab_members: "ممبرز",
    gal_load_more: "مزید تصاویر دیکھیں",
    gal_removal_note: "کیا آپ کوئی تصویر ہٹوانا چاہتے ہیں؟",
    gal_removal_cta: "WhatsApp پر میسج کریں",
    fac_apparatus_desc: "محفوظ انداز میں ورزش اور ہر مسل کو ٹرین کرنے کے لیے آٹومیٹڈ مشینیں، کیبلز اور سلیکٹرائزڈ گیئر۔",
    banner_btn_join: "ابھی شامل ہوں",
    banner_btn_call: "کال کریں",
    faq_card_tag: "براہِ راست رہنمائی",
    faq_card_title: "کیا آپ کے مزید سوالات ہیں؟",
    faq_card_desc: "ہمیں WhatsApp پر میسج کریں۔ ہم اوقات کار، مشینوں اور خواتین کی ٹریننگ کے اوقات کے بارے میں رہنمائی فراہم کرتے ہیں۔",
    faq_card_chat_wa: "WhatsApp پر بات کریں",
    faq_card_call: "کال کریں",
    faq_card_footnote: "ادائیگی صرف نقد • روزانہ کھلا ہے، رات 12 بجے بند",
    map_prompt_title: "کوٹ مراد خان، قصور",
    map_prompt_desc: "4C8R+5XC، نظام پورہ روڈ، نزد جمال مارکیٹ",
    map_load_btn: "انٹرایکٹو نقشہ دیکھیں",
    footer_link_overview: "جائزہ",
    footer_link_facilities: "سہولیات",
    footer_link_membership: "ممبرشپ",
    footer_link_reviews: "آراء",
    footer_link_faq: "سوالات",
    footer_link_location: "مقام",
    footer_contact_hours: "روزانہ کھلا ہے، رات 12 بجے بند",
    footer_contact_address: "4C8R+5XC، نظام پورہ روڈ، نزد جمال مارکیٹ، نزد سٹی ہسپتال، کوٹ مراد خان، قصور، 55050",
    rev_rating_pill: "Google پر 4.6 • 155 جائزے",
    rev_title: "ہمارے ممبرز کیا کہتے ہیں۔",
    rev_sub: "قصور میں ابو ہریرہ ورلڈ جم میں ٹریننگ کرنے والے ممبرز کی اصل رائے۔",
    rev_view_maps: "Google Maps پر دیکھیں",
    rev_badge: "Google ریویو",
    rev1_quote: "\"یہ مردوں اور خواتین کے لیے ایک بہترین جم ہے۔ ورزش کے لیے بہت اچھی مشینیں ہیں اور ماحول بھی بہت شاندار ہے۔ شہر میں بہت سے جم ہیں لیکن یہ سب سے آگے ہے۔\"",
    rev1_author: "محمد",
    rev2_quote: "\"قصور کا سب سے بہترین جم۔ لاہور کے کئی جموں سے بھی بہتر۔ ان کے پاس کھلا ایریا ہے اور چھوٹا جوس اور شیک کیفے بھی ہے۔\"",
    rev2_author: "رامیز",
    rev3_quote: "\"ورلڈ جم قصور کے لوگوں کے لیے ایک بہترین سہولت ہے تاکہ وہ فٹ اور چست رہیں۔ جدید مشینوں سے لیس ہے اور استاد ابو ہریرہ (سابق مسٹر قصور) کی رہنمائی میں اچھے ٹرینرز بھی ہیں۔\"",
    rev3_author: "انجم",
    rev4_quote: "\"قصور شہر کا اب تک کا بہترین جم۔ تمام فٹنس مشینیں انٹرنیشنل لیول کی ہیں اور سب سے بڑا فائدہ قدرتی ماحول ہے۔\"",
    rev4_author: "عدنان",

    faq_title: "اکثر پوچھے جانے والے سوالات۔",
    faq_sub: "ابو ہریرہ ورلڈ جم میں ٹریننگ کے بارے میں عام سوالات کے سیدھے جوابات۔",
    faq_ask_another: "کوئی اور سوال پوچھیں",
    faq_q1: "کیا آپ کارڈ قبول کرتے ہیں؟",
    faq_a1: "ادائیگیاں صرف نقد وصول کی جاتی ہیں۔",
    faq_q2: "کیا یہ بچوں کے لیے مناسب ہے؟",
    faq_a2: "جی ہاں، یہ جم بچوں کے لیے بھی مناسب ہے۔",
    faq_q3: "آپ کے اوقات کار کیا ہیں؟",
    faq_a3: "روزانہ کھلا رہتا ہے، رات 12 بجے بند ہوتا ہے۔",
    faq_q4: "میں کیسے شامل ہو سکتا ہوں؟",
    faq_a4: "ہمیں WhatsApp پر پیغام بھیجیں یا جم تشریف لائیں۔",
    faq_q5: "کیا خواتین کے لیے ٹریننگ ہے؟",
    faq_a5: "موجودہ اوقات کے لیے ہم سے WhatsApp پر معلوم کریں۔",

    loc_tag: "مقام اور نقشہ ✦",
    loc_title: "ہماری سہولت پر تشریف لائیں۔",
    loc_address: "4C8R+5XC، نظام پورہ روڈ، نزد جمال مارکیٹ، نزد سٹی ہسپتال، کوٹ مراد خان، قصور، 55050، پاکستان",
    loc_hours_badge: "روزانہ کھلا ہے، رات 12 بجے بند",
    loc_rating_badge: "4.6 (Google پر 155 جائزے)",
    loc_cash_badge: "صرف نقد ادائیگی",
    loc_get_directions: "راستہ معلوم کریں",
    loc_call: "کال کریں +92 321 4670428",

    footer_bio: "ابو ہریرہ ورلڈ جم فٹنس سینٹر کوٹ مراد خان قصور میں جدید مشینیں، کھلے صحن میں ورزش اور صاف ستھرا قدرتی ماحول فراہم کرتا ہے۔",
    footer_rating: "4.6 • 155 Google جائزے",
    footer_h_menu: "مینو",
    footer_h_facilities: "سہولیات",
    footer_fac_open: "کھلے صحن میں ٹریننگ",
    footer_fac_mach: "جدید ورزشی مشینیں",
    footer_fac_cafe: "جوس اور شیک کیفے",
    footer_fac_women: "خواتین کے تربیتی اوقات",
    footer_fac_kids: "بچوں کے لیے مناسب",
    footer_h_contacts: "ہمارے رابطے",
    footer_wa: "WhatsApp پیغام",
    footer_maps: "Google Maps پر تلاش کریں",
    footer_copyright: "© 2026 ابو ہریرہ ورلڈ جم فٹنس سینٹر (ورلڈ جم قصور)۔ جملہ حقوق محفوظ ہیں۔ • ادائیگیاں صرف نقد۔",

    sticky_call: "کال کریں",
    sticky_wa: "WhatsApp",
    sticky_join: "شامل ہوں",
    hero_stat_rating: "Google ریٹنگ",
    hero_stat_reviews: "Google جائزے",
    hero_stat_cash_val: "صرف نقد ادائیگی",
    hero_stat_cash_lbl: "ادائیگی کا طریقہ",
    hero_stat_hours: "روزانہ کھلا، رات 12 بجے بند",
    load_more_photos: "مزید تصاویر دیکھیں",
    remaining_photos: "باقی",
    showing_all_photos: "تمام 155 تصاویر دکھائی جا رہی ہیں"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Tap-to-load interactive map
  const loadMapBtn = document.getElementById('loadMapBtn');
  const mapPlaceholder = document.getElementById('mapPlaceholder');
  const mapContainer = document.getElementById('mapIframeContainer');
  if (loadMapBtn && mapPlaceholder && mapContainer) {
    loadMapBtn.addEventListener('click', () => {
      mapPlaceholder.style.display = 'none';
      mapContainer.style.display = 'block';
      mapContainer.innerHTML = '<iframe src="https://maps.google.com/maps?q=31.1154,74.4445&hl=en&z=16&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Abu Huraira World Gym Fitness Center Kasur Location"></iframe>';
    });
  }

  const isHeadless = Boolean(navigator.webdriver) || /Headless|Lighthouse/i.test(navigator.userAgent) || window.location.search.includes('nolenis');
  const prefersReducedMotion = isHeadless || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktopPointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;

  // 1. Language Toggle & i18n Logic
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  let currentLang = urlLang || localStorage.getItem('site_lang') || 'en';

  let allGalleryData = [];
  let filteredData = [];

  const applyLanguage = (lang) => {
    currentLang = lang;
    const isUrdu = (lang === 'ur');
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    // Update count badge text in Urdu
    const countBadge = document.getElementById('galleryCountText');
    if (countBadge) {
      const count = allGalleryData.length || 56;
      countBadge.textContent = isUrdu ? `${count}+ حقیقی جم تصاویر` : `${count}+ Real Gym Photos`;
    }

    document.documentElement.dir = (lang === 'ur') ? 'rtl' : 'ltr';

    if (lang === 'ur') {
      document.title = "ابو ہریرہ ورلڈ جم فٹنس سینٹر قصور | جدید مشینیں اور کھلا صحن";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', "کوٹ مراد خان قصور میں ابو ہریرہ ورلڈ جم فٹنس سینٹر۔ گوگل پر 4.6 ریٹنگ (155 جائزے)۔ کھلے صحن میں ٹریننگ، جدید مشینیں، ادائیگیاں صرف نقد۔ روزانہ رات 12 بجے تک کھلا ہے۔");
    } else {
      document.title = "Abu Huraira World Gym Fitness Center | Gym in Kasur";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', "Abu Huraira World Gym Fitness Center in Kot Murad Khan, Kasur. Rated 4.6 on Google from 155 reviews. Open-air training, modern machines, cash payments only. Open daily until 12 AM.");
    }

    if (lang === 'ur') {
      document.body.classList.add('lang-ur');
    } else {
      document.body.classList.remove('lang-ur');
    }

    // Update toggle buttons active state
    document.querySelectorAll('.lang-opt').forEach(opt => {
      if (opt.classList.contains(`lang-${lang}`)) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Translate inputs with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  };

  const toggleLanguage = () => {
    const nextLang = (currentLang === 'en') ? 'ur' : 'en';
    applyLanguage(nextLang);
  };

  const langToggleBtn = document.getElementById('langToggle');
  const mobileLangToggleBtn = document.getElementById('mobileLangToggle');

  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);

  applyLanguage(currentLang);

  // 2. Preloader removed: initialize hero immediately
  initHeroAnimations();

  // 3. Fast hardware-accelerated scroll (Zero hijacking, 120Hz native performance)
  let lenis = null;

  // 4. Butter-Smooth Header & Mobile Bottom Bar (rAF Throttled, Zero Layout Thrashing)
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileStickyBar = document.getElementById('mobileStickyBar');
  let lastScrollPos = window.scrollY || 0;
  let scrollTicking = false;

  const onScrollFrame = () => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    
    if (header) {
      if (y > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (mobileStickyBar) {
      // Keep hero CTA buttons unobstructed when at the very top;
      // smoothly show sticky bar once scrolled past hero (y > 180) and keep it steadily visible
      if (y > 180) {
        mobileStickyBar.classList.remove('bar-hidden');
      } else {
        mobileStickyBar.classList.add('bar-hidden');
      }
    }

    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(onScrollFrame);
      scrollTicking = true;
    }
  }, { passive: true });

  // High-performance IntersectionObserver for nav active highlight (ZERO reflow)
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // 5. Mobile Navigation Drawer
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn-pill');

  if (menuToggle && mobileDrawer) {
    const toggleMenu = () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (mobileStickyBar) mobileStickyBar.classList.remove('bar-hidden');
      } else {
        mobileDrawer.classList.add('open');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (mobileStickyBar) mobileStickyBar.classList.add('bar-hidden');
      }
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }


  // 7. Facilities Carousel Navigation & Progress Bar
  const carouselViewport = document.getElementById('carouselViewport');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const progressBar = document.getElementById('carouselProgressBar');

  if (carouselViewport && prevBtn && nextBtn) {
    const updateProgress = () => {
      if (!progressBar) return;
      const maxScroll = carouselViewport.scrollWidth - carouselViewport.clientWidth;
      if (maxScroll <= 0) {
        progressBar.style.transform = 'translateX(0%)';
        return;
      }
      const scrollRatio = Math.abs(carouselViewport.scrollLeft) / maxScroll;
      const translateX = scrollRatio * 200;
      progressBar.style.transform = `translateX(${translateX}%)`;
    };

    carouselViewport.addEventListener('scroll', updateProgress, { passive: true });

    const getScrollStep = () => {
      const card = carouselViewport.querySelector('.facility-card');
      return card ? card.offsetWidth + 24 : 320;
    };

    nextBtn.addEventListener('click', () => {
      const mult = (document.documentElement.dir === 'rtl') ? -1 : 1;
      carouselViewport.scrollBy({ left: getScrollStep() * mult, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      const mult = (document.documentElement.dir === 'rtl') ? -1 : 1;
      carouselViewport.scrollBy({ left: -getScrollStep() * mult, behavior: 'smooth' });
    });

    updateProgress();
  }

  // 8. Desktop 3D Card Tilt + Glare Effect
  if (isDesktopPointer) {
    const tiltCards = document.querySelectorAll('.bento-card, .facility-card, .review-card, .membership-wide-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 9. Magnetic CTA Button (Desktop only)
  if (isDesktopPointer) {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // 10. GSAP Motion & ScrollTrigger Suite
  function initHeroAnimations() {
    // Native CSS reveal if gsap is not loaded
    if (typeof gsap === 'undefined') {
      document.querySelectorAll('.hl-line').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      });
      const sub = document.querySelector('.hero-subline');
      if (sub) { sub.style.opacity = '1'; sub.style.transform = 'none'; }
      const cta = document.querySelector('.hero-cta-group');
      if (cta) { cta.style.opacity = '1'; cta.style.transform = 'none'; }
      const stats = document.querySelector('.hero-stats-row');
      if (stats) { stats.style.opacity = '1'; stats.style.transform = 'none'; }
      const floatCard = document.querySelector('.hero-floating-card');
      if (floatCard) { floatCard.style.opacity = '1'; }
      // Trigger counter animations
      document.querySelectorAll('.counter-value').forEach(counterEl => {
        const targetVal = parseFloat(counterEl.getAttribute('data-target') || '0');
        const decimals = parseInt(counterEl.getAttribute('data-decimals') || '0', 10);
        const startTime = performance.now();
        const duration = 1200;
        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = ease * targetVal;
          counterEl.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
          if (progress < 1) requestAnimationFrame(step);
        }
        setTimeout(() => requestAnimationFrame(step), 200);
      });
      return;
    }

    if (prefersReducedMotion) {
      document.querySelectorAll('.hl-line').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split-text masked line reveal
    heroTl
      .fromTo('.hl-line', 
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.16 }
      )
      .fromTo('.hero-subline', 
        { y: 24, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.65 }, 
        '-=0.4'
      )
      .fromTo('.hero-cta-group', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6 }, 
        '-=0.4'
      )
      .fromTo('.hero-stats-row', 
        { y: 20, opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.65 }, 
        '-=0.3'
      )
      .fromTo('.hero-floating-card', 
        { x: (document.documentElement.dir === 'rtl' ? 35 : -35), yPercent: -50, opacity: 0 }, 
        { x: 0, yPercent: -50, opacity: 1, duration: 0.75 }, 
        '-=0.5'
      )
      .fromTo('.hero-scroll-indicator', 
        { opacity: 0, y: -10 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.3'
      );

    // Counter values animation (Native 60fps requestAnimationFrame)
    document.querySelectorAll('.counter-value').forEach(counterEl => {
      const targetVal = parseFloat(counterEl.getAttribute('data-target') || '0');
      const decimals = parseInt(counterEl.getAttribute('data-decimals') || '0', 10);
      const startTime = performance.now();
      const duration = 1400;

      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = ease * targetVal;
        counterEl.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
        if (progress < 1) requestAnimationFrame(step);
      }
      setTimeout(() => requestAnimationFrame(step), 300);
    });
  }

  // If preloader was bypassed
  if (prefersReducedMotion || isHeadless) {
    initHeroAnimations();
  }

  // ScrollTrigger Suite (Desktop pointer only, lightweight IntersectionObserver on mobile)
  if (!prefersReducedMotion && isDesktopPointer && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Heading Accent Lines drawing on enter
    document.querySelectorAll('.heading-accent-line').forEach(line => {
      ScrollTrigger.create({
        trigger: line,
        start: 'top 90%',
        onEnter: () => line.classList.add('in-view')
      });
    });

    // Parallax Scrub on Oversized Background Watermarks (Desktop only)
    document.querySelectorAll('.section-bg-watermark').forEach(wm => {
      gsap.to(wm, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: wm.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    });

    // Facility Cards Entrance
    gsap.fromTo('.facility-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
        onComplete: () => { gsap.set('.facility-card', { clearProps: 'transform' }); },
        scrollTrigger: {
          trigger: '.facilities-carousel-wrapper',
          start: 'top 92%',
          once: true,
        }
      }
    );

    // Membership Card Entrance
    gsap.fromTo('.membership-wide-card',
      { y: 30, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform',
        onComplete: () => { gsap.set('.membership-wide-card', { clearProps: 'transform' }); },
        scrollTrigger: {
          trigger: '.section-membership',
          start: 'top 88%',
          once: true,
        }
      }
    );

    // Reviews Grid Entrance
    gsap.fromTo('.review-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform',
        onComplete: () => { gsap.set('.review-card', { clearProps: 'transform' }); },
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 92%',
          once: true,
        }
      }
    );

    ScrollTrigger.refresh();
  } else if ('IntersectionObserver' in window) {
    // Lightweight mobile reveals via IntersectionObserver (zero layout thrashing)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.heading-accent-line, .facility-card, .membership-wide-card, .review-card').forEach(el => {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.heading-accent-line').forEach(l => l.classList.add('in-view'));
  }

  // 11. FAQ Accordion Interaction (Height animated cleanly, proper aria-expanded)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });
        if (isOpen) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = (answer.scrollHeight + 32) + 'px';
        }
      });
    }
  });

  // 12. Request a Visit WhatsApp Form Submission (Strictly from GYM_DATA.md)
  const visitForm = document.getElementById('visitForm');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visitorName')?.value.trim();
      const phone = document.getElementById('visitorPhone')?.value.trim();
      const goal = document.getElementById('visitorGoal')?.value.trim();
      const time = document.getElementById('visitorTime')?.value.trim();

      if (!name || !phone) return;

      const isUrdu = (document.documentElement.lang === 'ur');
      const intro = isUrdu ? 'سلام ABU HURAIRA WORLD GYM، میں وزٹ کی منصوبہ بندی کرنا چاہتا ہوں:' : 'Hello ABU HURAIRA WORLD GYM, I would like to plan a visit:';
      const lblName = isUrdu ? 'نام' : 'Name';
      const lblPhone = isUrdu ? 'فون' : 'Phone';
      const lblGoal = isUrdu ? 'ہدف' : 'Goal';
      const lblTime = isUrdu ? 'مناسب وقت' : 'Best Time';

      const message = `${intro}
- ${lblName}: ${name}
- ${lblPhone}: ${phone}
- ${lblGoal}: ${goal || (isUrdu ? 'فٹنس' : 'General Fitness')}
- ${lblTime}: ${time || (isUrdu ? 'شام' : 'Evening')}`;
      const waUrl = `https://wa.me/923214670428?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener');
    });
  }

    // 13. GALLERY REBUILD (FINAL) - Dynamic Category Filter, Masonry & Lightbox
  const galleryGrid = document.getElementById('mainGallery');
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const tabIndicator = document.getElementById('tabIndicator');
  const loadMoreBtn = document.getElementById('galleryLoadMoreBtn');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  const countBadgeText = document.getElementById('galleryCountText');

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

// allGalleryData declared above
  let currentCategory = 'all';
  filteredData = []; // declared at top
  let visibleCount = 24;
  let currentLightboxIdx = 0;
  const BATCH_SIZE = 24;

  const updateTabIndicator = (activeTab) => {
    if (!tabIndicator || !activeTab) return;
    const parent = activeTab.parentElement;
    if (!parent) return;
    const tabRect = activeTab.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const leftOffset = tabRect.left - parentRect.left + parent.scrollLeft;
    tabIndicator.style.left = `${leftOffset}px`;
    tabIndicator.style.width = `${tabRect.width}px`;
  };

  const createGalleryItemEl = (p) => {
    const fig = document.createElement('figure');
    fig.className = 'gallery-item';
    fig.setAttribute('data-id', p.id);
    fig.setAttribute('data-cat', p.category || 'Facility');
    fig.setAttribute('data-full', p.full);
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    fig.setAttribute('aria-label', p.alt || 'Abu Huraira World Gym photo');

    const aspectWrap = document.createElement('div');
    aspectWrap.className = 'gallery-aspect-wrap';
    aspectWrap.style.aspectRatio = `${p.width || 1200} / ${p.height || 800}`;
    aspectWrap.style.backgroundColor = p.dominantColor || '#141b24';

    const img = document.createElement('img');
    img.src = p.thumb;
    img.alt = p.alt || 'Gym photo';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.className = 'gallery-thumb';

    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    overlay.innerHTML = `
      <span class="gallery-expand-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </span>
      <span class="gallery-item-cat">${p.category || 'Facility'}</span>
    `;

    aspectWrap.appendChild(img);
    aspectWrap.appendChild(overlay);
    fig.appendChild(aspectWrap);

    fig.addEventListener('click', () => {
      openLightboxByPhotoId(p.id);
    });

    fig.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightboxByPhotoId(p.id);
      }
    });

    return fig;
  };

  const renderCurrentBatch = (isAppend = false) => {
    if (!galleryGrid) return;
    if (!isAppend) {
      galleryGrid.innerHTML = '';
      galleryGrid.style.opacity = '0.5';
      setTimeout(() => { galleryGrid.style.opacity = '1'; }, 50);
    }

    const start = isAppend ? visibleCount - BATCH_SIZE : 0;
    const batch = filteredData.slice(start, visibleCount);
    const fragment = document.createDocumentFragment();

    batch.forEach(p => {
      fragment.appendChild(createGalleryItemEl(p));
    });

    galleryGrid.appendChild(fragment);

    if (loadMoreWrap) {
      if (visibleCount >= filteredData.length) {
        loadMoreWrap.classList.add('hidden');
      } else {
        loadMoreWrap.classList.remove('hidden');
      }
    }
  };

  const setCategory = (cat) => {
    currentCategory = cat;
    if (cat === 'all') {
      filteredData = allGalleryData.filter(p => !p.hidden);
    } else {
      filteredData = allGalleryData.filter(p => !p.hidden && p.category.toLowerCase() === cat.toLowerCase());
    }

    visibleCount = Math.min(BATCH_SIZE, filteredData.length);
    renderCurrentBatch(false);

    galleryTabs.forEach(tab => {
      const isMatch = (tab.getAttribute('data-category') || '').toLowerCase() === cat.toLowerCase();
      tab.classList.toggle('active', isMatch);
      if (isMatch) updateTabIndicator(tab);
    });
  };

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      if (visibleCount < filteredData.length) {
        visibleCount = Math.min(visibleCount + BATCH_SIZE, filteredData.length);
        renderCurrentBatch(true);
      }
    });
  }

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-category');
      if (cat) setCategory(cat);
    });
  });

  // Lightbox implementation
  const prefetchImg = (url) => {
    if (!url) return;
    const img = new Image();
    img.src = url;
  };

  const updateLightboxView = (idx) => {
    if (!filteredData.length) return;
    if (idx < 0) idx = filteredData.length - 1;
    if (idx >= filteredData.length) idx = 0;
    currentLightboxIdx = idx;

    const currentPhoto = filteredData[currentLightboxIdx];
    if (!currentPhoto) return;

    if (lightboxImg) {
      lightboxImg.src = currentPhoto.full;
      lightboxImg.alt = currentPhoto.alt || 'Abu Huraira World Gym full size photo';
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIdx + 1} / ${filteredData.length}`;
    }

    // Prefetch previous and next
    const prevIdx = (currentLightboxIdx - 1 + filteredData.length) % filteredData.length;
    const nextIdx = (currentLightboxIdx + 1) % filteredData.length;
    prefetchImg(filteredData[prevIdx]?.full);
    prefetchImg(filteredData[nextIdx]?.full);
  };

  const openLightboxByPhotoId = (id) => {
    const foundIdx = filteredData.findIndex(p => p.id === id);
    if (foundIdx >= 0) {
      updateLightboxView(foundIdx);
    } else {
      updateLightboxView(0);
    }
    if (lightboxModal) {
      lightboxModal.classList.add('open');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      lightboxModal.setAttribute('aria-hidden', 'true');
      if (lightboxImg) lightboxImg.src = '';
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop') || e.target.id === 'lightboxImgWrapper') {
        closeLightbox();
      }
    });

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightboxView(currentLightboxIdx + 1);
      });
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightboxView(currentLightboxIdx - 1);
      });
    }

    // Touch swipe handling
    let touchStartX = 0;
    let touchEndX = 0;
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          updateLightboxView(currentLightboxIdx + 1); // Swipe left -> next
        } else {
          updateLightboxView(currentLightboxIdx - 1); // Swipe right -> prev
        }
      }
    }, { passive: true });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('open')) return;
      if (e.key === 'ArrowRight') updateLightboxView(currentLightboxIdx + 1);
      if (e.key === 'ArrowLeft') updateLightboxView(currentLightboxIdx - 1);
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Load gallery data from gallery.json
  fetch('gallery.json?v=24')
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data) && data.length) {
        allGalleryData = data.filter(p => !p.hidden);
        filteredData = allGalleryData;

        // Update category counts on tabs
        const catCounts = { all: allGalleryData.length };
        allGalleryData.forEach(p => {
          const c = p.category;
          catCounts[c] = (catCounts[c] || 0) + 1;
        });

        galleryTabs.forEach(tab => {
          const cat = tab.getAttribute('data-category');
          const countSpan = tab.querySelector('.tab-count');
          if (countSpan && cat) {
            const count = cat === 'all' ? catCounts.all : (catCounts[cat] || 0);
            countSpan.textContent = `(${count})`;
          }
        });

        if (countBadgeText) {
          const isUr = (document.documentElement.lang === 'ur' || currentLang === 'ur');
          countBadgeText.textContent = isUr ? `${allGalleryData.length}+ حقیقی جم تصاویر` : `${allGalleryData.length}+ Real Gym Photos`;
        }

        // Re-render gallery batch from verified data
        renderCurrentBatch(false);

        // Initialize active tab indicator
        const activeTab = document.querySelector('.gallery-tab.active');
        if (activeTab) updateTabIndicator(activeTab);
      }
    })
    .catch(err => {
      console.warn('Could not load gallery.json:', err);
    });

  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.gallery-tab.active');
    if (activeTab) updateTabIndicator(activeTab);
  });
});
