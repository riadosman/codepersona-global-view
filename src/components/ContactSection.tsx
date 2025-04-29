
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill all fields',
        variant: 'destructive',
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Success',
        description: t('contact.success'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.formTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className={`space-y-6 ${language === 'ar' ? 'text-right' : ''}`}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('contact.name')}:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.email')}:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('contact.message')}:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/40">
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent className={`${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>contact@johndoe.dev</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Social</h3>
                  <div className="flex gap-4 mt-2">
                    {/* Social icons would go here */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Twitter
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium">CV/Resume</h3>
                  <div className="mt-2">
                    <Button variant="outline" asChild>
                      <a href="#" download>
                        Download CV ({language.toUpperCase()})
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
