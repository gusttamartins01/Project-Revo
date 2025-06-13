
import React from 'react';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PocketTrainerSection from '@/components/PocketTrainerSection';
import FeaturesSection from '@/components/FeaturesSection';
import WaitingListSection from '@/components/WaitingListSection';
import PerformanceSection from '@/components/PerformanceSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <PocketTrainerSection />
        <FeaturesSection />
        <WaitingListSection />
        <PerformanceSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
