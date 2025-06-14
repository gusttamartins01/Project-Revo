
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = [t('data'), t('intelligence'), t('revo')];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="section-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex items-center min-h-screen">
        <div className="flex-1 max-w-3xl">
          <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-3xl flex items-center justify-center mb-12 animate-pulse shadow-2xl shadow-primary/30">
            <span className="text-background font-bold text-3xl">R</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            {t('reachNextLevel')}
          </h1>
          
          <div className="text-2xl md:text-5xl font-bold mb-12">
            <span className="text-muted-foreground">{t(' with ')}</span>
            <span className="text-primary animate-pulse transition-all duration-500">
              {words[currentWord]}
            </span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
