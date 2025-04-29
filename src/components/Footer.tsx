
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Riad Osman. {t('footer.copyright')}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
