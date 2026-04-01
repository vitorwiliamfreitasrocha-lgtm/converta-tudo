import React, { useEffect } from 'react';

interface GoogleAdsProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
}

/**
 * Componente para exibir anúncios do Google AdSense
 *
 * Slots sugeridos:
 * - Topo: 728x90 (leaderboard) ou 300x250 (medium rectangle)
 * - Sidebar: 300x250 (medium rectangle) ou 300x600 (half page)
 * - Rodapé: 728x90 (leaderboard)
 * - Entre seções: 300x250 (medium rectangle)
 */
const GoogleAds: React.FC<GoogleAdsProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  style = {},
}) => {
  const adRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore - adsbygoogle é injetado pelo script do Google
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: 'ca-pub-xxxxxxxxxxxxxxxx', // Substituir com seu ID
          adsbygoogle: true,
          enable_page_level_ads: true,
        });
      }
    } catch (error) {
      console.log('AdSense não disponível em desenvolvimento');
    }
  }, []);

  return (
    <div
      ref={adRef}
      className="flex justify-center my-8"
      style={style}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...(!responsive && {
            width: '300px',
            height: '250px',
          }),
          ...(responsive && {
            display: 'block',
          }),
        }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Substituir com seu ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  );
};

export default GoogleAds;

/**
 * Placeholder para desenvolvimento
 * Mostra um espaço cinzento onde o anúncio aparecerá
 */
export const GoogleAdsPlaceholder: React.FC<{ label?: string }> = ({
  label = 'Google AdSense',
}) => {
  return (
    <div className="flex justify-center my-8">
      <div className="bg-light-border rounded-lg p-8 w-full max-w-lg text-center">
        <p className="text-neutral-muted text-sm font-medium">
          📺 {label}
        </p>
        <p className="text-xs text-neutral-muted mt-1">
          (Anúncio será exibido aqui)
        </p>
      </div>
    </div>
  );
};
