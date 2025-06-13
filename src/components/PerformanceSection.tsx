
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { TrendingUp, Target, Zap, Award } from 'lucide-react';

const PerformanceSection = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: TrendingUp,
      value: '+47%',
      label: 'Melhoria na força',
      color: 'text-green-500'
    },
    {
      icon: Target,
      value: '92%',
      label: 'Precisão técnica',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      value: '3x',
      label: 'Evolução mais rápida',
      color: 'text-yellow-500'
    },
    {
      icon: Award,
      value: '15k+',
      label: 'Treinos analisados',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('strongerFaster')}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/10 hover:border-border/30 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
              
              <div className={`text-2xl md:text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
