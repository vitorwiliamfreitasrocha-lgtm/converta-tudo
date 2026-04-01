import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-light-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-text">
                Converta <span className="text-primary-500">Tudo!</span>
              </h1>
              <p className="text-xs sm:text-sm text-neutral-muted">
                Conversão rápida e gratuita de arquivos
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#conversores" className="text-neutral-muted hover:text-primary-500 transition">
              Conversores
            </a>
            <a href="#como-funciona" className="text-neutral-muted hover:text-primary-500 transition">
              Como Funciona
            </a>
            <a href="#faq" className="text-neutral-muted hover:text-primary-500 transition">
              FAQ
            </a>
          </nav>

          {/* Badge */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary-500">100% Gratuito</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
