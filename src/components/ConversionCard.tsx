import React from 'react';

interface ConversionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  formats: string[];
  onSelect: () => void;
  badge?: string;
}

const ConversionCard: React.FC<ConversionCardProps> = ({
  icon,
  title,
  description,
  formats,
  onSelect,
  badge,
}) => {
  return (
    <div className="card group hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={onSelect}
    >
      {/* Badge */}
      {badge && (
        <div className="flex justify-end mb-3">
          <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Ícone */}
      <div className="mb-4 p-4 bg-primary-50 rounded-lg w-fit group-hover:bg-primary-100 transition">
        <div className="text-3xl">{icon}</div>
      </div>

      {/* Título */}
      <h3 className="text-lg font-bold text-neutral-text mb-2">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-sm text-neutral-muted mb-4">
        {description}
      </p>

      {/* Formatos */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-neutral-text mb-2">
          Formatos suportados:
        </p>
        <div className="flex flex-wrap gap-2">
          {formats.map((format) => (
            <span
              key={format}
              className="px-3 py-1 bg-light-border text-neutral-muted text-xs rounded-md"
            >
              {format}
            </span>
          ))}
        </div>
      </div>

      {/* Botão */}
      <button className="w-full btn-primary text-sm">
        Começar Conversão →
      </button>
    </div>
  );
};

export default ConversionCard;
