
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Globe } from 'lucide-react';

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
            <img 
              src="/lovable-uploads/22baf2dd-b724-4a2a-9b38-cb13cfbea051.png" 
              alt="Revo Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-primary">
              Revo
            </span>
          </div>
          
          <button
            onClick={scrollToWaitingList}
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-2"
          >
            <span>Waitlist</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-primary" />
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                language === 'pt' 
                  ? 'bg-primary text-primary-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`}
            >
              PT
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-primary text-primary-foreground font-semibold' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
