
import React from 'react';
import { useLanguage } from './LanguageProvider';

const PocketTrainerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      <div className="container mx-auto px-4 text-center flex items-center min-h-screen relative z-10">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 text-gradient leading-tight animate-fade-in">
            {t('pocketTrainer')}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed animate-slide-up">
            {t('aiDescription')}
          </p>

          <div className="mt-12 md:mt-16 w-24 md:w-32 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default PocketTrainerSection;
