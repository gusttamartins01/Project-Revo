
import React from 'react';
import { useLanguage } from './LanguageProvider';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToWaitingList = () => {
    const element = document.getElementById('waiting-list');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revo
            </span>
          </div>
          
          <button
            onClick={scrollToWaitingList}
            className="text-foreground hover:text-blue-600 transition-colors font-medium"
          >
            {t('waitingList')}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLanguage('pt')}
            className={`px-2 py-1 rounded transition-colors ${
              language === 'pt' 
                ? 'bg-blue-600 text-white' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            PT
          </button>
          <span className="text-muted-foreground">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 rounded transition-colors ${
              language === 'en' 
                ? 'bg-blue-600 text-white' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
