
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Sparkles, ArrowRight } from 'lucide-react';

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
      title: "🚀 Inscrição realizada!",
      description: "Você foi adicionado à nossa lista de espera. Em breve entraremos em contato!",
    });
    setFormData({ name: '', phone: '', email: '', state: '', comments: '' });
  };

  return (
    <section 
      id="waiting-list" 
      className="section-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>
      
      <div className="container mx-auto px-4 z-10 relative flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-primary font-semibold text-lg tracking-wide">EARLY ACCESS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
              {t('beFirst')}
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t('earlyAccess')}
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-card/90 backdrop-blur-lg p-10 rounded-3xl border border-primary/30 shadow-2xl shadow-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder={t('name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/70 border-border/30 focus:border-primary transition-colors h-12 text-lg"
                  />
                  <Input
                    placeholder={t('phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/70 border-border/30 focus:border-primary transition-colors h-12 text-lg"
                  />
                </div>
                
                <Input
                  type="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/70 border-border/30 focus:border-primary transition-colors h-12 text-lg"
                />
                
                <Input
                  placeholder={t('state')}
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                  className="bg-background/70 border-border/30 focus:border-primary transition-colors h-12 text-lg"
                />
                
                <Textarea
                  placeholder={isTyping ? t('comments') : placeholderMessages[currentMessage]}
                  value={formData.comments}
                  onChange={(e) => {
                    setFormData({ ...formData, comments: e.target.value });
                    setIsTyping(e.target.value.length > 0);
                  }}
                  rows={4}
                  className="bg-background/70 border-border/30 focus:border-primary transition-all duration-300 text-lg resize-none"
                />
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-background py-4 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 group"
                >
                  <span>{t('subscribe')}</span>
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;
