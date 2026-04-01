import React from 'react';

interface Shortcut {
  title: string;
  icon: string;
  description: string;
  action: () => void;
}

interface QuickShortcutsProps {
  shortcuts: Shortcut[];
}

const QuickShortcuts: React.FC<QuickShortcutsProps> = ({ shortcuts }) => {
  return (
    <section className="py-12 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neutral-text mb-2 text-center">
          Atalhos Rápidos
        </h2>
        <p className="text-neutral-muted text-center mb-8">
          Acesse rapidamente as conversões mais populares
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shortcuts.map((shortcut, index) => (
            <button
              key={index}
              onClick={shortcut.action}
              className="group card text-center hover:bg-white transition"
            >
              <div className="text-4xl mb-2">{shortcut.icon}</div>
              <h3 className="font-bold text-neutral-text mb-1">
                {shortcut.title}
              </h3>
              <p className="text-xs text-neutral-muted group-hover:text-primary-500 transition">
                {shortcut.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickShortcuts;
