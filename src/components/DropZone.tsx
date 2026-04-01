import React from 'react';
import { useDragDrop } from '../hooks';

interface DropZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string[];
  title?: string;
  description?: string;
  disabled?: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({
  onFilesSelected,
  acceptedTypes = ['*/*'],
  title = 'Arraste arquivos aqui',
  description = 'ou clique para selecionar',
  disabled = false,
}) => {
  const { isDragging, bind } = useDragDrop(onFilesSelected, acceptedTypes);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      onFilesSelected(Array.from(files));
    }
  };

  return (
    <div
      {...bind}
      className={`card cursor-pointer transition-all duration-200 ${
        isDragging ? 'drag-over' : ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-medium'}`}
    >
      <div className="flex flex-col items-center justify-center py-12 px-6">
        {/* Ícone */}
        <div className={`mb-4 p-4 rounded-full transition-all ${
          isDragging
            ? 'bg-primary-500 text-white scale-110'
            : 'bg-primary-50 text-primary-500'
        }`}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-neutral-text mb-2">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-neutral-muted text-sm mb-4">
          {description}
        </p>

        {/* Tipos aceitos */}
        {acceptedTypes && acceptedTypes[0] !== '*/*' && (
          <p className="text-xs text-neutral-muted mb-4">
            Formatos: {acceptedTypes.join(', ')}
          </p>
        )}

        {/* Input invisível */}
        <input
          ref={inputRef}
          type="file"
          multiple
          disabled={disabled}
          onChange={handleInputChange}
          accept={acceptedTypes?.join(',')}
          className="hidden"
        />

        {/* Botão */}
        <button
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
          className="btn-primary"
        >
          Selecionar Arquivos
        </button>
      </div>
    </div>
  );
};

export default DropZone;
