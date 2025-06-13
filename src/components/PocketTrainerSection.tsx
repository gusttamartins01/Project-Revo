
import React from 'react';
import { useLanguage } from './LanguageProvider';

const PocketTrainerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('pocketTrainer')}
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {t('aiDescription')}
        </p>
      </div>
    </section>
  );
};

export default PocketTrainerSection;
