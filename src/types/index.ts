// Tipos de conversão
export type ConversionType = 'image' | 'video' | 'pdf' | 'pdf-edit';

// Status de conversão
export type ConversionStatus = 'idle' | 'processing' | 'success' | 'error';

// Formatos de imagem
export type ImageFormat = 'jpg' | 'png' | 'webp' | 'gif' | 'bmp';

// Formatos de vídeo
export type VideoFormat = 'mp4' | 'webm' | 'avi';

// Histórico de conversões
export interface ConversionRecord {
  id: string;
  type: ConversionType;
  inputFormat: string;
  outputFormat: string;
  fileName: string;
  timestamp: number;
  size: number;
}

// Progresso de conversão
export interface ConversionProgress {
  current: number;
  total: number;
  percentage: number;
}

// Estado de conversão
export interface ConversionState {
  status: ConversionStatus;
  progress: ConversionProgress;
  error: string | null;
  result: Blob | null;
}

// Configurações de conversão
export interface ConversionConfig {
  quality?: number;
  width?: number;
  height?: number;
  format?: string;
  fps?: number;
}
