import React from 'react';
import { ConversionRecord } from '../types/index';
import { formatFileSize } from '../utils';

interface ConversionsListProps {
  conversions: ConversionRecord[];
  onClear: () => void;
}

const ConversionsList: React.FC<ConversionsListProps> = ({ conversions, onClear }) => {
  if (conversions.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t border-light-border">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-text">
            Conversões Recentes
          </h2>
          <button
            onClick={onClear}
            className="text-sm text-neutral-muted hover:text-primary-500 transition"
          >
            Limpar Histórico
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conversions.map((conversion) => (
            <div key={conversion.id} className="card">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-neutral-text truncate">
                    {conversion.fileName}
                  </p>
                  <p className="text-sm text-neutral-muted mt-1">
                    {conversion.inputFormat.toUpperCase()} →{' '}
                    {conversion.outputFormat.toUpperCase()}
                  </p>
                  <p className="text-xs text-neutral-muted mt-2">
                    {formatFileSize(conversion.size)} •{' '}
                    {new Date(conversion.timestamp).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full">
                  {conversion.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionsList;
