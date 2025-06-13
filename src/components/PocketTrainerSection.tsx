
import React from 'react';
import { useLanguage } from './LanguageProvider';

const PocketTrainerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-full bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto px-4 text-center flex items-center min-h-screen">
        <div className="w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gradient leading-tight">
            {t('pocketTrainer')}
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {t('aiDescription')}
          </p>

          <div className="mt-16 w-32 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PocketTrainerSection;
