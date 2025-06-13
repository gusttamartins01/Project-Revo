
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex items-center">
        <div className="flex-1 max-w-2xl">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 animate-pulse">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('reachNextLevel')}
          </h1>
          
          <div className="text-2xl md:text-4xl font-bold mb-8">
            <span className="text-muted-foreground">Com </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
              {words[currentWord]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
