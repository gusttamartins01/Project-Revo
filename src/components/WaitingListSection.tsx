
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const WaitingListSection = () => {
  const { t } = useLanguage();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const placeholderMessages = [
    t('strengthEvolution'),
    t('homePerformance'),
    t('techniqueImprovement'),
    t('workoutComparison'),
    t('validReps'),
    t('dataTraining'),
    t('autoTips')
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    comments: ''
  });

  useEffect(() => {
    if (!isTyping) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % placeholderMessages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [placeholderMessages.length, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Inscrição realizada!",
      description: "Você foi adicionado à nossa lista de espera. Em breve entraremos em contato!",
    });
    setFormData({ name: '', phone: '', email: '', state: '', comments: '' });
  };

  return (
    <section 
      id="waiting-list" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('beFirst')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('earlyAccess')}
            </p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/20 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={t('name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
                <Input
                  placeholder={t('phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <Input
                type="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
              
              <Input
                placeholder={t('state')}
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
                className="bg-background/50"
              />
              
              <Textarea
                placeholder={isTyping ? t('comments') : placeholderMessages[currentMessage]}
                value={formData.comments}
                onChange={(e) => {
                  setFormData({ ...formData, comments: e.target.value });
                  setIsTyping(e.target.value.length > 0);
                }}
                rows={4}
                className="bg-background/50 transition-all duration-300"
              />
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
