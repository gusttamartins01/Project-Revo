
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Camera, BarChart3, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t('capture'),
      description: t('captureDesc'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: t('transform'),
      description: t('transformDesc'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('monitor'),
      description: t('monitorDesc'),
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/10 hover:border-border/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
