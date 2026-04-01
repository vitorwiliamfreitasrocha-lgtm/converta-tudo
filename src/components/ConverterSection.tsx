import React, { useState } from 'react';
import DropZone from './DropZone';
import { useConversion } from '../hooks';
import { downloadBlob, formatFileSize } from '../utils';

interface ConverterSectionProps {
  title: string;
  description?: string;
  acceptedTypes: string[];
  formats: string[];
  onConvert: (file: File, targetFormat: string) => Promise<Blob>;
  icon?: string;
}

const ConverterSection: React.FC<ConverterSectionProps> = ({
  title,
  description,
  acceptedTypes,
  formats,
  onConvert,
  icon = '⚡',
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);
  const { status, progress, error, result, setStatus, setProgress, setError, setResult, reset } =
    useConversion();

  const handleFileSelected = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setError(null);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      setError('Selecione um arquivo');
      return;
    }

    try {
      setStatus('processing');
      setProgress(0, 100);

      const blob = await onConvert(selectedFile, selectedFormat);
      setResult(blob);
      setProgress(100, 100);

      // Baixa automaticamente
      const outputName = selectedFile.name.split('.')[0] + '.' + selectedFormat;
      downloadBlob(blob, outputName);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro na conversão');
    }
  };

  return (
    <section className="mb-12 scroll-mt-20" id={title.toLowerCase()}>
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{icon}</span>
            <h2 className="text-3xl font-bold text-neutral-text">{title}</h2>
          </div>
          {description && (
            <p className="text-neutral-muted">{description}</p>
          )}
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Drop Zone */}
          <div className="lg:col-span-2">
            <DropZone
              onFilesSelected={handleFileSelected}
              acceptedTypes={acceptedTypes}
              disabled={status === 'processing'}
            />

            {/* Arquivo selecionado */}
            {selectedFile && (
              <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm font-medium text-neutral-text">
                  📄 {selectedFile.name}
                </p>
                <p className="text-xs text-neutral-muted mt-1">
                  Tamanho: {formatFileSize(selectedFile.size)}
                </p>
              </div>
            )}

            {/* Progresso */}
            {status === 'processing' && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-neutral-text">
                    Convertendo...
                  </p>
                  <span className="text-xs text-neutral-muted">
                    {Math.round(progress.percentage)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Sucesso */}
            {status === 'success' && result && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-700">
                  ✓ Conversão concluída com sucesso!
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Tamanho final: {formatFileSize(result.size)}
                </p>
              </div>
            )}

            {/* Erro */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm font-medium text-red-700">
                  ✗ {error}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Configurações */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="text-lg font-bold text-neutral-text mb-4">
                Configurações
              </h3>

              {/* Formato de saída */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-text mb-2">
                  Formato de Saída
                </label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  disabled={status === 'processing'}
                  className="w-full"
                >
                  {formats.map((format) => (
                    <option key={format} value={format}>
                      {format.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botão Converter */}
              <button
                onClick={handleConvert}
                disabled={!selectedFile || status === 'processing'}
                className="w-full btn-primary"
              >
                {status === 'processing' ? 'Convertendo...' : 'Converter Agora'}
              </button>

              {/* Botão Limpar */}
              {selectedFile && status !== 'processing' && (
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    reset();
                  }}
                  className="w-full btn-secondary mt-3"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;
