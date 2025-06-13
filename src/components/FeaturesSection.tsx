
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Eye, Zap, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Eye,
      title: t('capture'),
      description: t('captureDesc'),
      gradient: 'from-primary to-primary/70'
    },
    {
      icon: Zap,
      title: t('transform'),
      description: t('transformDesc'),
      gradient: 'from-primary/80 to-primary/50'
    },
    {
      icon: TrendingUp,
      title: t('monitor'),
      description: t('monitorDesc'),
      gradient: 'from-primary/60 to-primary/40'
    }
  ];

  return (
    <section className="section-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1583500178690-5bb10800b5a8?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>
      </div>

      <div className="container mx-auto px-4 flex items-center min-h-screen relative z-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/30`}>
                  <feature.icon className="w-10 h-10 text-background" />
                </div>
                
                <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
