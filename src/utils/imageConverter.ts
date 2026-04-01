/**
 * Conversor de imagens usando Canvas API
 */

import { ConversionConfig } from '../types/index';

/**
 * Converte imagem para outro formato
 */
export const convertImage = async (
  file: File,
  targetFormat: string,
  config?: ConversionConfig
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) throw new Error('Não foi possível obter contexto do canvas');

          // Define dimensões
          const width = config?.width || img.width;
          const height = config?.height || img.height;

          canvas.width = width;
          canvas.height = height;

          // Desenha imagem redimensionada
          ctx.drawImage(img, 0, 0, width, height);

          // Converte para blob
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Falha ao converter imagem'));
              }
            },
            `image/${targetFormat}`,
            config?.quality || 0.9
          );
        };

        img.onerror = () => reject(new Error('Falha ao carregar imagem'));
        img.src = e.target?.result as string;
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Falha ao ler arquivo'));
    reader.readAsDataURL(file);
  });
};

/**
 * Redimensiona imagem
 */
export const resizeImage = async (
  file: File,
  width: number,
  height: number,
  format: string = 'jpeg'
): Promise<Blob> => {
  return convertImage(file, format, { width, height });
};

/**
 * Obtém dimensões de imagem
 */
export const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };

      img.onerror = () => reject(new Error('Falha ao carregar imagem'));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error('Falha ao ler arquivo'));
    reader.readAsDataURL(file);
  });
};

/**
 * Comprime imagem
 */
export const compressImage = async (
  file: File,
  quality: number = 0.7,
  format: string = 'jpeg'
): Promise<Blob> => {
  return convertImage(file, format, { quality });
};

/**
 * Converte imagem para escala de cinza
 */
export const grayscaleImage = async (file: File, targetFormat: string): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) throw new Error('Não foi possível obter contexto do canvas');

          canvas.width = img.width;
          canvas.height = img.height;

          // Desenha imagem original
          ctx.drawImage(img, 0, 0);

          // Aplica filtro escala de cinza
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const gray = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
            data[i] = gray;
            data[i + 1] = gray;
            data[i + 2] = gray;
          }

          ctx.putImageData(imageData, 0, 0);

          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject(new Error('Falha ao converter imagem'));
            },
            `image/${targetFormat}`,
            0.9
          );
        };

        img.onerror = () => reject(new Error('Falha ao carregar imagem'));
        img.src = e.target?.result as string;
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Falha ao ler arquivo'));
    reader.readAsDataURL(file);
  });
};

/**
 * Formatos suportados por navegador
 */
export const getSupportedImageFormats = (): string[] => {
  return ['jpeg', 'png', 'webp', 'gif'];
};
