
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 lg:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/30 animate-float`}>
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-background" />
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
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
