
export type Project = {
  id: string;
  title: {
    en: string;
    ar: string;
    tr: string;
  };
  description: {
    en: string;
    ar: string;
    tr: string;
  };
  image: string;
  technologies: string[];
  links: {
    live?: string;
    code?: string;
  };
};

export const projects: Project[] = [
  {
    id: "1",
    title: {
      en: "E-commerce Platform",
      ar: "منصة التجارة الإلكترونية",
      tr: "E-ticaret Platformu",
    },
    description: {
      en: "A fully functional e-commerce platform with cart, checkout, and payment integration.",
      ar: "منصة تجارة إلكترونية متكاملة مع سلة التسوق والدفع الإلكتروني.",
      tr: "Sepet, ödeme ve ödeme entegrasyonu ile tam işlevsel bir e-ticaret platformu.",
    },
    image: "https://source.unsplash.com/random/800x600/?ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    links: {
      live: "https://example.com",
      code: "https://github.com/example/ecommerce",
    },
  },
  {
    id: "2",
    title: {
      en: "Task Management App",
      ar: "تطبيق إدارة المهام",
      tr: "Görev Yönetimi Uygulaması",
    },
    description: {
      en: "A Kanban-style task management application with drag-and-drop functionality.",
      ar: "تطبيق إدارة المهام بنمط كانبان مع وظيفة السحب والإفلات.",
      tr: "Sürükle ve bırak işlevselliği ile Kanban tarzı görev yönetimi uygulaması.",
    },
    image: "https://source.unsplash.com/random/800x600/?tasks",
    technologies: ["React", "TypeScript", "Firebase"],
    links: {
      live: "https://example.com",
      code: "https://github.com/example/task-app",
    },
  },
  {
    id: "3",
    title: {
      en: "Weather Dashboard",
      ar: "لوحة معلومات الطقس",
      tr: "Hava Durumu Panosu",
    },
    description: {
      en: "Real-time weather information application with 7-day forecast and location search.",
      ar: "تطبيق معلومات الطقس في الوقت الحقيقي مع توقعات لمدة 7 أيام وبحث عن المواقع.",
      tr: "7 günlük tahmin ve konum araması ile gerçek zamanlı hava durumu bilgi uygulaması.",
    },
    image: "https://source.unsplash.com/random/800x600/?weather",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    links: {
      live: "https://example.com",
      code: "https://github.com/example/weather-app",
    },
  },
  {
    id: "4",
    title: {
      en: "Social Media Analytics",
      ar: "تحليلات وسائل التواصل الاجتماعي",
      tr: "Sosyal Medya Analitiği",
    },
    description: {
      en: "Dashboard for tracking and analyzing social media performance metrics.",
      ar: "لوحة معلومات لتتبع وتحليل مقاييس أداء وسائل التواصل الاجتماعي.",
      tr: "Sosyal medya performans metriklerini izlemek ve analiz etmek için kontrol paneli.",
    },
    image: "https://source.unsplash.com/random/800x600/?analytics",
    technologies: ["Vue.js", "Python", "D3.js"],
    links: {
      live: "https://example.com",
      code: "https://github.com/example/social-analytics",
    },
  },
];
