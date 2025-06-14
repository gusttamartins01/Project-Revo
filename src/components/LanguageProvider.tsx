
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    waitingList: 'Lista de espera',
    reachNextLevel: 'Chegou a hora de alcançar seu próximo nível',
    with: 'Com',
    data: 'dados',
    intelligence: 'inteligência',
    revo: 'Revo',
    pocketTrainer: 'A Revo é o seu técnico de bolso',
    aiDescription: 'Usamos inteligência artificial e visão computacional para transformar seus treinos em dados acionáveis. Com estatísticas claras, você entende, se ajusta e evolui mais rápido. Democratizamos o acesso à alta performance com tecnologia.',
    capture: 'Captura',
    captureDesc: 'Sem sensores e sem fios',
    transform: 'Transforme',
    transformDesc: 'Métricas de força, técnica e progresso',
    monitor: 'Monitore',
    monitorDesc: 'Veja onde você está e para onde vai',
    beFirst: 'Seja um dos primeiros',
    earlyAccess: 'Estamos abrindo espaço para os primeiros usuários testarem o Revo. Inscreva-se e receba novidades em primeira mão. Sem spam. Só evolução.',
    name: 'Nome',
    phone: 'Telefone (DDD)',
    email: 'E-mail',
    state: 'Estado',
    comments: 'Comentários e sugestões',
    subscribe: 'Inscrever-se',
    strongerFaster: 'Você mais forte, mais rápido',
    strengthEvolution: 'Preciso acompanhar minha evolução de força.',
    homePerformance: 'Gostaria de medir meu desempenho nos treinos em casa.',
    techniqueImprovement: 'Meu objetivo é melhorar minha técnica em barras/push-ups/etc.',
    workoutComparison: 'Quero um comparativo com meus treinos anteriores.',
    validReps: 'Me ajudaria se mostrasse quantas repetições válidas fiz.',
    dataTraining: 'Quero treinar com dados, não no achismo.',
    autoTips: 'Seria ótimo se essas dicas automáticas com base nos meus erros.',
    improvementInStrength: 'Melhoria na força',
    technicalAccuracy: 'Precisão técnica',
    fasterEvolution: 'Evolução mais rápida',
    analyzedWorkouts: 'Treinos analisados'

  },
  en: {
    waitingList: 'Waiting List',
    reachNextLevel: "It's time to reach your next level",
    with: 'with',
    data: 'data',
    intelligence: 'intelligence',
    revo: 'Revo',
    pocketTrainer: 'Revo is your pocket trainer',
    aiDescription: 'We use artificial intelligence and computer vision to transform your workouts into actionable data. With clear statistics, you understand, adjust and evolve faster. We democratize access to high performance with technology.',
    capture: 'Capture',
    captureDesc: 'No sensors, no wires',
    transform: 'Transform',
    transformDesc: 'Strength, technique and progress metrics',
    monitor: 'Monitor',
    monitorDesc: 'See where you are and where you are going',
    beFirst: 'Be among the first',
    earlyAccess: 'We are opening space for the first users to test Revo. Sign up and receive news first hand. No spam. Just evolution.',
    name: 'Name',
    phone: 'Phone (Area Code)',
    email: 'Email',
    state: 'State',
    comments: 'Comments and suggestions',
    subscribe: 'Subscribe',
    strongerFaster: 'You stronger, faster',
    strengthEvolution: 'I need to track my strength evolution.',
    homePerformance: 'I would like to measure my performance in home workouts.',
    techniqueImprovement: 'My goal is to improve my technique in pull-ups/push-ups/etc.',
    workoutComparison: 'I want a comparison with my previous workouts.',
    validReps: 'It would help me if it showed how many valid reps I did.',
    dataTraining: 'I want to train with data, not guesswork.',
    autoTips: 'It would be great if there were automatic tips based on my mistakes.',
    improvementInStrength: 'improvement In Strength',
    technicalAccuracy: 'technical Accuracy',
    fasterEvolution: 'faster Evolution',
    analyzedWorkouts: 'analyzed Workouts'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[language];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
