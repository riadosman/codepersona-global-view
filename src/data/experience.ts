
export type ExperienceItem = {
  id: string;
  type: 'work' | 'education';
  title: {
    en: string;
    ar: string;
    tr: string;
  };
  organization: {
    en: string;
    ar: string;
    tr: string;
  };
  location: {
    en: string;
    ar: string;
    tr: string;
  };
  startDate: string; // YYYY-MM format
  endDate: string | null; // YYYY-MM format or null for present
  description: {
    en: string;
    ar: string;
    tr: string;
  };
  technologies?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    type: "work",
    title: {
      en: "Senior Frontend Developer",
      ar: "مطور واجهة أمامية أول",
      tr: "Kıdemli Frontend Geliştirici",
    },
    organization: {
      en: "Tech Innovations Inc.",
      ar: "تك إنوفيشنز",
      tr: "Tech Innovations Inc.",
    },
    location: {
      en: "San Francisco, CA",
      ar: "سان فرانسيسكو، كاليفورنيا",
      tr: "San Francisco, CA",
    },
    startDate: "2021-03",
    endDate: null,
    description: {
      en: "Lead the frontend development team in building responsive web applications. Implemented new features and optimized performance.",
      ar: "قيادة فريق تطوير الواجهة الأمامية في بناء تطبيقات الويب المتجاوبة. تنفيذ ميزات جديدة وتحسين الأداء.",
      tr: "Duyarlı web uygulamaları oluşturmada frontend geliştirme ekibine liderlik. Yeni özellikler uyguladı ve performansı optimize etti.",
    },
    technologies: ["React", "TypeScript", "GraphQL", "Jest"],
  },
  {
    id: "2",
    type: "work",
    title: {
      en: "Full Stack Developer",
      ar: "مطور الويب المتكامل",
      tr: "Full Stack Geliştirici",
    },
    organization: {
      en: "WebSolutions Ltd.",
      ar: "ويب سولوشنز المحدودة",
      tr: "WebSolutions Ltd.",
    },
    location: {
      en: "New York, NY",
      ar: "نيويورك",
      tr: "New York, NY",
    },
    startDate: "2018-06",
    endDate: "2021-02",
    description: {
      en: "Developed and maintained web applications for clients. Worked on both frontend and backend components.",
      ar: "تطوير وصيانة تطبيقات الويب للعملاء. عملت على كل من مكونات الواجهة الأمامية والخلفية.",
      tr: "Müşteriler için web uygulamaları geliştirdi ve sürdürdü. Hem frontend hem de backend bileşenleri üzerinde çalıştı.",
    },
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "3",
    type: "work",
    title: {
      en: "Web Developer",
      ar: "مطور ويب",
      tr: "Web Geliştirici",
    },
    organization: {
      en: "Digital Craft Agency",
      ar: "وكالة ديجيتال كرافت",
      tr: "Digital Craft Agency",
    },
    location: {
      en: "Boston, MA",
      ar: "بوسطن",
      tr: "Boston, MA",
    },
    startDate: "2016-08",
    endDate: "2018-05",
    description: {
      en: "Created responsive websites for clients across various industries. Collaborated with designers to implement UI/UX designs.",
      ar: "إنشاء مواقع ويب متجاوبة للعملاء في مختلف الصناعات. تعاونت مع المصممين لتنفيذ تصميمات واجهة المستخدم/تجربة المستخدم.",
      tr: "Çeşitli sektörlerdeki müşteriler için duyarlı web siteleri oluşturdu. UI/UX tasarımlarını uygulamak için tasarımcılarla işbirliği yaptı.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: "4",
    type: "education",
    title: {
      en: "Master of Computer Science",
      ar: "ماجستير علوم الحاسوب",
      tr: "Bilgisayar Bilimi Yüksek Lisansı",
    },
    organization: {
      en: "Stanford University",
      ar: "جامعة ستانفورد",
      tr: "Stanford Üniversitesi",
    },
    location: {
      en: "Stanford, CA",
      ar: "ستانفورد، كاليفورنيا",
      tr: "Stanford, CA",
    },
    startDate: "2014-09",
    endDate: "2016-06",
    description: {
      en: "Specialized in Software Engineering and Human-Computer Interaction. Thesis on improving web accessibility.",
      ar: "تخصص في هندسة البرمجيات وتفاعل الإنسان والحاسوب. أطروحة حول تحسين إمكانية الوصول إلى الويب.",
      tr: "Yazılım Mühendisliği ve İnsan-Bilgisayar Etkileşimi üzerine uzmanlaşmış. Web erişilebilirliğini geliştirme üzerine tez.",
    },
  },
  {
    id: "5",
    type: "education",
    title: {
      en: "Bachelor of Science in Computer Science",
      ar: "بكالوريوس العلوم في علوم الحاسوب",
      tr: "Bilgisayar Bilimlerinde Lisans Derecesi",
    },
    organization: {
      en: "MIT",
      ar: "معهد ماساتشوستس للتكنولوجيا",
      tr: "MIT",
    },
    location: {
      en: "Cambridge, MA",
      ar: "كامبريدج، ماساتشوستس",
      tr: "Cambridge, MA",
    },
    startDate: "2010-09",
    endDate: "2014-05",
    description: {
      en: "Graduated with honors. Focused on web development and algorithms.",
      ar: "تخرجت بمرتبة الشرف. ركزت على تطوير الويب والخوارزميات.",
      tr: "Onur derecesi ile mezun oldu. Web geliştirme ve algoritmalar üzerine odaklandı.",
    },
  },
];
