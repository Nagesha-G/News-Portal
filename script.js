// Translation Dictionary Object
const translations = {
  en: {
    dir: "ltr",
    category: "Technology",
    title: "Global AI Summit 2025 Announced in New Delhi",
    date: "October 15, 2025",
    authorLabel: "By",
    caption: "Delegates attending the opening ceremony of the tech summit.",
    p1: "Leaders from over 50 countries are gathering to discuss the ethical future of Artificial Intelligence and quantum computing standards.",
    p2: "The summit aims to establish unified global policies for AI safety, open-source technology sharing, and digital infrastructure expansion across developing economies.",
    quote: '"Innovation must be accessible, safe, and beneficial to every human being regardless of geography."',
    p3: "Special workshops will also focus on regional language technology development, ensuring non-English speaking populations benefit from machine learning tools.",
    commentsTitle: "Community Reactions"
  },
  hi: {
    dir: "ltr",
    category: "प्रौद्योगिकी",
    title: "नई दिल्ली में ग्लोबल एआई समिट 2025 की घोषणा की गई",
    date: "15 अक्टूबर, 2025",
    authorLabel: "द्वारा",
    caption: "टेक शिखर सम्मेलन के उद्घाटन समारोह में भाग लेते प्रतिनिधि।",
    p1: "आर्टिफिशियल इंटेलिजेंस और क्वांटम कंप्यूटिंग मानकों के नैतिक भविष्य पर चर्चा करने के लिए 50 से अधिक देशों के नेता एकत्र हो रहे हैं।",
    p2: "शिखर सम्मेलन का उद्देश्य एआई सुरक्षा, ओपन-सोर्स प्रौद्योगिकी साझाकरण और विकासशील अर्थव्यवस्थाओं में डिजिटल बुनियादी ढांचे के विस्तार के लिए एकीकृत वैश्विक नीतियां स्थापित करना है।",
    quote: '"नवाचार भूगोल की परवाह किए बिना प्रत्येक नागरिक के लिए सुलभ, सुरक्षित और लाभदायक होना चाहिए।"',
    p3: "विशेष कार्यशालाएं क्षेत्रीय भाषा प्रौद्योगिकी विकास पर भी ध्यान केंद्रित करेंगी, जिससे गैर-अंग्रेजी भाषी आबादी को मशीन लर्निंग टूल्स का लाभ मिल सके।",
    commentsTitle: "समुदाय की प्रतिक्रियाएँ"
  },
  ar: {
    dir: "rtl",
    category: "تكنولوجيا",
    title: "الإعلان عن القمة العالمية للذكاء الاصطناعي 2025 في نيودلهي",
    date: "١٥ أكتوبر ٢٠٢٥",
    authorLabel: "بقلم",
    caption: "المندوبون يحضرون حفل افتتاح القمة التقنية.",
    p1: "يجتمع قادة من أكثر من 50 دولة لمناقشة المستقبل الأخلاقي للذكاء الاصطناعي ومعايير الحوسبة الكمومية.",
    p2: "تهدف القمة إلى وضع سياسات عالمية موحدة لسلامة الذكاء الاصطناعي، ومشاركة التقنيات مفتوحة المصدر، وتوسيع البنية التحتية الرقمية.",
    quote: '"يجب أن يكون الابتكار متاحًا وآمنًا ومفيدًا لكل انسان بغض النظر عن الجغرافيا."',
    p3: "ستركز ورش العمل الخاصة أيضًا على تطوير تكنولوجيا اللغات الإقليمية، مما يضمن استفادة الناطقين بغير اللغة الإنجليزية.",
    commentsTitle: "ردود فعل المجتمع"
  }
};

// DOM Elements
const languageSelect = document.getElementById('language-select');
const htmlElement = document.documentElement;

// Function to Update Language & Text
function setLanguage(langKey) {
  const data = translations[langKey];

  if (!data) return;

  // 1. Update document 'lang' and 'dir' attributes
  htmlElement.lang = langKey;
  htmlElement.dir = data.dir;

  // 2. Update Article Content dynamically
  document.getElementById('art-category').textContent = data.category;
  document.getElementById('art-title').textContent = data.title;
  document.getElementById('art-date').textContent = data.date;
  document.getElementById('art-author-label').textContent = data.authorLabel;
  document.getElementById('art-caption').textContent = data.caption;
  document.getElementById('art-p1').textContent = data.p1;
  document.getElementById('art-p2').textContent = data.p2;
  document.getElementById('art-quote-text').textContent = data.quote;
  document.getElementById('art-p3').textContent = data.p3;
  document.getElementById('comments-title').textContent = data.commentsTitle;
}

// Event Listener for Language Change
languageSelect.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});