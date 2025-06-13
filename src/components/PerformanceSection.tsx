
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
      color: 'text-primary'
    },
    {
      icon: Target,
      value: '92%',
      label: 'Precisão técnica',
      color: 'text-primary'
    },
    {
      icon: Zap,
      value: '3x',
      label: 'Evolução mais rápida',
      color: 'text-primary'
    },
    {
      icon: Award,
      value: '15k+',
      label: 'Treinos analisados',
      color: 'text-primary'
    }
  ];

  return (
    <section className="section-full bg-gradient-to-b from-muted/20 to-background relative">
      <div className="container mx-auto px-4 text-center flex items-center min-h-screen">
        <div className="w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-gradient leading-tight">
            {t('strongerFaster')}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/30">
                    <metric.icon className="w-8 h-8 text-background" />
                  </div>
                </div>
                
                <div className={`text-3xl md:text-4xl font-bold mb-3 ${metric.color}`}>
                  {metric.value}
                </div>
                
                <div className="text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 w-32 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
