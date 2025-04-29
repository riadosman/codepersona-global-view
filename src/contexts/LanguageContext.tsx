
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'tr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Terminal
    'terminal.welcome': 'Welcome to CodePersona v1.0.0',
    'terminal.greeting': 'Hello, I am a Full Stack Developer',
    'terminal.help': 'Type "help" to see available commands',
    'terminal.commandPrompt': 'visitor@codepersona:~$',
    'terminal.helpText': 'Available commands: about, skills, projects, experience, contact, theme, language',
    
    // About 
    'about.title': 'About Me',
    'about.name': 'Name',
    'about.role': 'Full Stack Developer',
    'about.bio': 'A passionate developer who loves creating elegant solutions to complex problems. I specialize in web development with a focus on performance and user experience.',
    'about.location': 'Location',
    'about.languages': 'Languages',
    'about.quote': '"Code is like humor. When you have to explain it, it\'s bad."',
    
    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devops': 'DevOps',
    'skills.other': 'Other',
    
    // Projects
    'projects.title': 'Projects',
    'projects.viewAll': 'View All',
    'projects.filter': 'Filter',
    'projects.visitSite': 'Visit Site',
    'projects.viewCode': 'View Code',
    
    // Experience
    'experience.title': 'Experience',
    'experience.education': 'Education',
    'experience.work': 'Work',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'Your email',
    'contact.messagePlaceholder': 'Your message',
    'contact.formTitle': 'Get in touch',
    
    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    
    // Footer
    'footer.copyright': '© 2025 CodePersona. All rights reserved.',
    'footer.builtWith': 'Built with React & Tailwind',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.contact': 'اتصل بي',
    
    // Terminal
    'terminal.welcome': 'مرحبًا بك في CodePersona الإصدار 1.0.0',
    'terminal.greeting': 'مرحبًا، أنا مطور الويب الكامل',
    'terminal.help': 'اكتب "help" لمشاهدة الأوامر المتاحة',
    'terminal.commandPrompt': 'زائر@codepersona:~$',
    'terminal.helpText': 'الأوامر المتاحة: about، skills، projects، experience، contact، theme، language',
    
    // About
    'about.title': 'عني',
    'about.name': 'الاسم',
    'about.role': 'مطور الويب الكامل',
    'about.bio': 'مطور شغوف يحب إنشاء حلول أنيقة للمشاكل المعقدة. أنا متخصص في تطوير الويب مع التركيز على الأداء وتجربة المستخدم.',
    'about.location': 'الموقع',
    'about.languages': 'اللغات',
    'about.quote': '"الشفرة مثل الفكاهة. عندما تضطر لشرحها، فهي سيئة."',
    
    // Skills
    'skills.title': 'المهارات',
    'skills.frontend': 'الواجهة الأمامية',
    'skills.backend': 'الخلفية',
    'skills.devops': 'ديفوبس',
    'skills.other': 'أخرى',
    
    // Projects
    'projects.title': 'المشاريع',
    'projects.viewAll': 'عرض الكل',
    'projects.filter': 'تصفية',
    'projects.visitSite': 'زيارة الموقع',
    'projects.viewCode': 'عرض الكود',
    
    // Experience
    'experience.title': 'الخبرة',
    'experience.education': 'التعليم',
    'experience.work': 'العمل',
    
    // Contact
    'contact.title': 'اتصل بي',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    'contact.namePlaceholder': 'اسمك',
    'contact.emailPlaceholder': 'بريدك الإلكتروني',
    'contact.messagePlaceholder': 'رسالتك',
    'contact.formTitle': 'تواصل معي',
    
    // Theme
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
    
    // Footer
    'footer.copyright': '© 2025 CodePersona. جميع الحقوق محفوظة.',
    'footer.builtWith': 'بُني باستخدام React و Tailwind',
  },
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.skills': 'Beceriler',
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.contact': 'İletişim',
    
    // Terminal
    'terminal.welcome': 'CodePersona v1.0.0\'a Hoş Geldiniz',
    'terminal.greeting': 'Merhaba, Ben Full Stack Geliştiriciyim',
    'terminal.help': 'Kullanılabilir komutları görmek için "help" yazın',
    'terminal.commandPrompt': 'ziyaretçi@codepersona:~$',
    'terminal.helpText': 'Kullanılabilir komutlar: about, skills, projects, experience, contact, theme, language',
    
    // About
    'about.title': 'Hakkımda',
    'about.name': 'İsim',
    'about.role': 'Full Stack Geliştirici',
    'about.bio': 'Karmaşık sorunlara zarif çözümler yaratmayı seven tutkulu bir geliştiriciyim. Performans ve kullanıcı deneyimine odaklanarak web geliştirme konusunda uzmanım.',
    'about.location': 'Konum',
    'about.languages': 'Diller',
    'about.quote': '"Kod mizah gibidir. Açıklamak zorunda kaldığınızda, kötüdür."',
    
    // Skills
    'skills.title': 'Beceriler',
    'skills.frontend': 'Ön Yüz',
    'skills.backend': 'Arka Uç',
    'skills.devops': 'DevOps',
    'skills.other': 'Diğer',
    
    // Projects
    'projects.title': 'Projeler',
    'projects.viewAll': 'Tümünü Görüntüle',
    'projects.filter': 'Filtrele',
    'projects.visitSite': 'Siteyi Ziyaret Et',
    'projects.viewCode': 'Kodu Görüntüle',
    
    // Experience
    'experience.title': 'Deneyim',
    'experience.education': 'Eğitim',
    'experience.work': 'İş',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.name': 'İsim',
    'contact.email': 'E-posta',
    'contact.message': 'Mesaj',
    'contact.send': 'Mesaj Gönder',
    'contact.success': 'Mesaj başarıyla gönderildi!',
    'contact.error': 'Mesaj gönderimi başarısız. Lütfen tekrar deneyin.',
    'contact.namePlaceholder': 'Adınız',
    'contact.emailPlaceholder': 'E-posta adresiniz',
    'contact.messagePlaceholder': 'Mesajınız',
    'contact.formTitle': 'İletişime geçin',
    
    // Theme
    'theme.light': 'Açık',
    'theme.dark': 'Koyu',
    
    // Footer
    'footer.copyright': '© 2025 CodePersona. Tüm hakları saklıdır.',
    'footer.builtWith': 'React ve Tailwind ile oluşturulmuştur',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
