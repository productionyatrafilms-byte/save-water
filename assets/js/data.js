// ======================================================
// TRANSLATION DATA
// ======================================================
// Loaded with a plain <script> tag instead of fetch() so
// the pages also work when opened directly over file://,
// where fetch() is blocked by CORS.
//
// Keys in translationsData map 1:1 to the data-lang-key
// attributes in the HTML. Every language must carry the
// same set of keys.
// ======================================================

const translationsData = {

  // ----------------------------------------------------
  // ENGLISH
  // ----------------------------------------------------
  "English": {
    "title": "Save Water",
    "save": "Save",
    "water": "Water",
    "title-1": "Uses of Water",
    "title-2": "How can we SAVE WATER?",
    "title-3": "Why should we SAVE WATER?",
    "num-1": "1",
    "num-2": "2",
    "num-3": "3",
    "num-4": "4",
    "home": "Home",
    "pranam": "Pranam",
    "click": "Click"
  },

  // ----------------------------------------------------
  // HINDI
  // ----------------------------------------------------
  "Hindi": {
    "title": "पानी बचाएँ",
    "save": "बचाएँ",
    "water": "पानी",
    "title-1": "पानी की उपयोगिता",
    "title-2": "हम पानी कैसे बचा सकते हैं?",
    "title-3": "हमें पानी क्यों बचाना चाहिए?",
    "num-1": "१",
    "num-2": "२",
    "num-3": "३",
    "num-4": "४",
    "home": "घर",
    "pranam": "प्रणाम",
    "click": "क्लिक करें"
  },

  // ----------------------------------------------------
  // GUJARATI
  // ----------------------------------------------------
  "Gujarati": {
    "title": "પાણી બચાવો",
    "save": "બચાવો",
    "water": "પાણી",
    "title-1": "પાણીનો ઉપયોગ",
    "title-2": "આપણે પાણીની બચત કેવી રીતે કરી શકીએ?",
    "title-3": "આપણે પાણીની બચત શા માટે કરવી જોઈએ?",
    "num-1": "૧",
    "num-2": "૨",
    "num-3": "૩",
    "num-4": "૪",
    "home": "ઘર",
    "pranam": "પ્રણામ",
    "click": "ક્લિક કરો"
  }
};

// ======================================================
// TOPIC POINTS (slides)
// ======================================================
// Each topic page (topic-1.html, topic-2.html, topic-3.html)
// renders its slides from the matching array below instead of
// hardcoding them in HTML. To add a new point:
//   1. Add an entry here with the next id and its 3 translations.
//   2. Drop a matching video at assets/videos/<topic>-<id>.mp4.
// That's it — no HTML changes needed, the slide (and its video
// slide) appears automatically.
//
// A point may optionally carry subEnglish/subHindi/subGuj for a
// secondary line under the main slide text (see topic 3, id 4).
// ======================================================

const topicPoints = {
  1: [
    { id: 1, english: "For Drinking", hindi: "पीने के लिए", guj: "પીવા માટે" },

  { id: 2, english: "For Cooking", hindi: "खाना बनाने के लिए", guj: "રસોઈ બનાવવા માટે" },

  { id: 3, english: "For Brushing", hindi: "ब्रश करने के लिए", guj: "બ્રશ કરવા માટે" },

  { id: 4, english: "For Bathing", hindi: "नहाने के लिए", guj: "નાહવા માટે" },

  { id: 5, english: "For Washing Hands", hindi: "हाथ धोने के लिए", guj: "હાથ ધોવા માટે" },

  { id: 6, english: "For Washing Clothes", hindi: "कपड़े धोने के लिए", guj: "કપડાં ધોવા માટે" },

  { id: 7, english: "For Washing Car", hindi: "गाड़ी धोने के लिए", guj: "કાર ધોવા માટે" },

  { id: 8, english: "For Washing Dishes", hindi: "बर्तन धोने के लिए", guj: "વાસણ ધોવા માટે" },

  { id: 9, english: "For Washing Floors", hindi: "फर्श धोने के लिए", guj: "જમીન ધોવા માટે" },

  { id: 10, english: "For Gardening", hindi: "बागवानी के लिए", guj: "બગીચાના કામ માટે" },

  { id: 11, english: "For Toilet", hindi: "शौचालय के लिए", guj: "શૌચાલય માટે" },
  ],

  2: [
    { id: 1, english: "Turn off the tap while brushing.", hindi: "ब्रश करते समय नल बंद कर दें।", guj: "બ્રશ કરતી વખતે નળ બંધ રાખો." },
    { id: 2, english: "Always open the water tap at the minimum level necessary.", hindi: "नल को हमेशा आवश्यकतानुसार \nकम से कम खोलें।", guj: "નળ હંમેશા જરૂર મુજબ \nઓછામાં ઓછું ખોલો." },
    { id: 3, english: "Ensure to close the tap properly.", hindi: "नल को पूरी तरह से बंद जरूर करें।", guj: "નળ સરખી રીતે બંધ કરો." },
    { id: 4, english: "Use a bucket to \ntake a bath instead of \na shower / bath tub.", hindi: "नहाने के लिए शावर / बाथ-टब के बदले बाल्टी का इस्तेमाल करें।", guj: "નહાવા માટે શાવર / બાથટબને બદલે ડોલનો ઉપયોગ કરો." },
    { id: 5, english: "Avoid soap, shampoo at least once a week.", hindi: "हफ्ते में कम से कम एक दिन साबुन-शैम्पू का इस्तेमाल ना करें।", guj: "અઠવાડિયામાં ઓછામાં ઓછો એક દિવસ સાબુ-શેમ્પૂનો ઉપયોગ ન કરો." },
    { id: 6, english: "Use less water while washing hands.", hindi: "हाथ धोते समय \nकम पानी इस्तेमाल करें।", guj: "હાથ ધોતી વખતે ઓછું પાણી વાપરો." },
    { id: 7, english: "Do not play Holi.", hindi: "होली न खेलें।", guj: "હોળી ન રમો." },
    { id: 8, english: "Do not splash water for fun.", hindi: "मस्ती-मज़ाक के लिए \nपानी बर्बाद ना करें।", guj: "મસ્તી-મજાક માટે \nપાણીનો બગાડ ન કરો." },
    { id: 9, english: "Take only as much water as you can drink.", hindi: "जितनी जरूरत हो, उतना ही \nपानी पीने के लिए लें।", guj: "જરૂર હોય તેટલું જ \nપાણી પીવા માટે લો." },
    { id: 10, english: "Always carry your water bottle while going out.", hindi: "बाहर जाते समय हमेशा पानी की बोतल साथ ले जाएँ।", guj: "જ્યારે તમે બહાર જાઓ ત્યારે હંમેશા તમારી સાથે પાણીની બોટલ રાખો." },
    { id: 11, english: "Use a bucket instead of flush.", hindi: "फ्लश के बदले \nबाल्टी का इस्तेमाल करें।", guj: "ફ્લશને બદલે ડોલનો ઉપયોગ કરો." },
    { id: 12, english: "Avoid going to \nswimming pools.", hindi: "स्विमिंग पूल जाने से बचें।", guj: "સ્વિમિંગ પૂલમાં જવાનું ટાળો." },
    { id: 13, english: "Fix a leaky tap.", hindi: "टपकते नलों को ठीक करवाएँ।", guj: "નળમાં લીકેજ હોય તો \nતેને રિપેર કરાવો." },
  ],

  3: [
    { id: 1, english: "Bhagwan Mahavir preached that water has life and we should save lives.", hindi: "भगवान महावीर ने कहा है कि \nजल में जीव है और हमें \nजीवों की रक्षा करनी चाहिए।", guj: "ભગવાન મહાવીરે કહ્યું કે, પાણીમાં જીવ છે અને આપણે તે જીવોની રક્ષા કરવી જોઈએ." },
    { id: 2, english: "Water is Important for the survival of all living beings.", hindi: "पानी सभी जीवों के अस्तित्व के लिए महत्वपूर्ण है।", guj: "પાણી તમામ જીવોના અસ્તિત્વ માટે જરૂરી છે." },
    { id: 3, english: "Only a limited amount of drinking water is available in the world.", hindi: "दुनिया में सीमित मात्रा में ही पीने योग्य पानी उपलब्ध है।", guj: "વિશ્વમાં માત્ર મર્યાદિત માત્રામાં જ પીવાલાયક પાણી ઉપલબ્ધ છે." },
    {
      id: 4,
      english: "There is a shortage of water in many parts of the world.",
      hindi: "दुनिया में कई जगह पानी की कमी है।",
      guj: "વિશ્વમાં ઘણી જગ્યાએ \nપાણીની અછત છે.",
      subEnglish: "",
      subHindi: "",
      subGuj: "",
    },
    { id: 5, english: "Only 3% of the total water on Earth is fresh water.", hindi: "पृथ्वी पर उपलब्ध कुल पानी में से \nकेवल ३% पानी \nमीठा(स्वच्छ) पानी है।", guj: "પૃથ્વી પર ઉપલબ્ધ કુલ પાણીમાંથી માત્ર 3% પાણી જ મીઠું(શુદ્ધ) પાણી છે " },
    { id: 6, english: "2.5% of the fresh water is locked up in glaciers, soil, and the atmosphere.", hindi: "२.५% मीठा(स्वच्छ) पानी ग्लेशियरों, मिट्टी और वायुमंडल में कैद है।", guj: "2.5% શુધ્ધ પાણી ગ્લેશિયર, માટી અને વાતાવરણમાં બંધાયેલું છે." },
    { id: 7, english: "Only 0.5% water is available for drinking", hindi: "केवल ०.५% स्वच्छ पानी ही पीने के लिए उपलब्ध है।", guj: "પીવા માટે માત્ર 0.5% શુધ્ધ પાણી ઉપલબ્ધ છે." },
    { id: 8, english: "“If there is water, \nthere is a future.”", hindi: "“जल है तो कल है”", guj: "“જો પાણી છે, તો ભવિષ્ય છે.”" },
  ],
};
