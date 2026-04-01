import React, { useState } from 'react';
import {
  Header,
  ConverterSection,
  QuickShortcuts,
  GoogleAdsPlaceholder,
  ConversionsList,
} from './components';
import { convertImage } from './utils/imageConverter';
import { ConversionRecord } from './types/index';

const App: React.FC = () => {
  const [conversions, setConversions] = useState<ConversionRecord[]>([]);

  const imageFormats = ['jpeg', 'png', 'webp', 'gif'];

  const handleImageConvert = async (file: File, targetFormat: string): Promise<Blob> => {
    const result = await convertImage(file, targetFormat, { quality: 0.9 });

    // Salva no histórico
    const record: ConversionRecord = {
      id: `${Date.now()}-${Math.random()}`,
      type: 'image',
      inputFormat: file.name.split('.').pop() || 'unknown',
      outputFormat: targetFormat,
      fileName: file.name,
      timestamp: Date.now(),
      size: result.size,
    };

    setConversions((prev) => [record, ...prev.slice(0, 9)]);

    return result;
  };

  const shortcuts = [
    {
      title: 'JPG → PNG',
      icon: '🖼️',
      description: 'Converter para PNG',
      action: () => document.getElementById('converter-image')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'Comprimir',
      icon: '📦',
      description: 'Reduzir tamanho',
      action: () => document.getElementById('converter-image')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'PDF',
      icon: '📄',
      description: 'Criar PDF',
      action: () => alert('Em desenvolvimento!'),
    },
    {
      title: 'Vídeo',
      icon: '🎬',
      description: 'Converter vídeo',
      action: () => alert('Em desenvolvimento!'),
    },
  ];

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-light-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-text mb-4">
            Converta qualquer arquivo
            <span className="text-primary-500"> em segundos</span>
          </h2>
          <p className="text-lg text-neutral-muted mb-8">
            Imagens, vídeos, PDFs e muito mais. Rápido, fácil e 100% gratuito.
            Seus arquivos não saem do seu navegador.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('converter-image')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Começar Agora →
          </button>
        </div>
      </section>

      {/* Anúncio Superior */}
      <GoogleAdsPlaceholder label="Anúncio - Topo" />

      {/* Quick Shortcuts */}
      <QuickShortcuts shortcuts={shortcuts} />

      {/* Conversor de Imagens */}
      <section className="py-12 sm:py-20">
        <div id="converter-image" className="scroll-mt-20">
          <ConverterSection
            title="Conversor de Imagens"
            description="Converta entre JPG, PNG, WebP, GIF e mais formatos populares"
            icon="🖼️"
            acceptedTypes={['image/*']}
            formats={imageFormats}
            onConvert={handleImageConvert}
          />
        </div>
      </section>

      {/* Anúncio do Meio */}
      <GoogleAdsPlaceholder label="Anúncio - Meio" />

      {/* Seção Em Desenvolvimento */}
      <section className="py-12 sm:py-20 border-t border-light-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-text mb-8 text-center">
            Mais Conversores em Desenvolvimento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎬', title: 'Vídeos', desc: 'MP4, WebM, AVI' },
              { icon: '📄', title: 'PDFs', desc: 'Criar, editar, mesclar' },
              { icon: '⚙️', title: 'Documentos', desc: 'DOCX, TXT, HTML' },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-neutral-text mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-muted text-sm">
                  {item.desc}
                </p>
                <div className="mt-4 px-4 py-2 bg-primary-50 rounded-lg text-sm text-primary-600 font-medium">
                  Em Breve
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anúncio */}
      <GoogleAdsPlaceholder label="Anúncio - Laterai" />

      {/* Histórico de Conversões */}
      <ConversionsList
        conversions={conversions}
        onClear={() => setConversions([])}
      />

      {/* Footer */}
      <footer className="border-t border-light-border py-12 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-neutral-text mb-2">
            Converta Tudo!
          </h3>
          <p className="text-neutral-muted text-sm mb-6">
            Conversão de arquivos online rápida, fácil e segura
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-neutral-muted hover:text-primary-500 transition">
              Privacidade
            </a>
            <a href="#" className="text-neutral-muted hover:text-primary-500 transition">
              Termos
            </a>
            <a href="#" className="text-neutral-muted hover:text-primary-500 transition">
              Contato
            </a>
            <a href="#" className="text-neutral-muted hover:text-primary-500 transition">
              GitHub
            </a>
          </div>

          <p className="text-xs text-neutral-muted">
            © 2024 Converta Tudo! - Todos os direitos reservados •
            Desenvolvido com ❤️ para web
          </p>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-light-border flex flex-col sm:flex-row justify-center gap-6 text-xs text-neutral-muted">
            <span>🔒 Conversão local (sem envio de dados)</span>
            <span>⚡ Processamento rápido no navegador</span>
            <span>💰 100% gratuito</span>
          </div>
        </div>
      </footer>

      {/* Anúncio Rodapé */}
      <GoogleAdsPlaceholder label="Anúncio - Rodapé" />
    </div>
  );
};

export default App;
