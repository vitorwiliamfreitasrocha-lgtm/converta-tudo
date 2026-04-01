import { useState } from 'react';
import { ConversionState, ConversionStatus, ConversionProgress } from '../types/index';

/**
 * Hook para gerenciar estado de conversão
 */
export const useConversion = () => {
  const [state, setState] = useState<ConversionState>({
    status: 'idle',
    progress: { current: 0, total: 0, percentage: 0 },
    error: null,
    result: null,
  });

  const setStatus = (status: ConversionStatus) => {
    setState(prev => ({ ...prev, status }));
  };

  const setProgress = (current: number, total: number) => {
    const percentage = total > 0 ? (current / total) * 100 : 0;
    setState(prev => ({
      ...prev,
      progress: { current, total, percentage },
    }));
  };

  const setError = (error: string | null) => {
    setState(prev => ({ ...prev, error, status: error ? 'error' : 'idle' }));
  };

  const setResult = (result: Blob | null) => {
    setState(prev => ({
      ...prev,
      result,
      status: result ? 'success' : 'idle',
    }));
  };

  const reset = () => {
    setState({
      status: 'idle',
      progress: { current: 0, total: 0, percentage: 0 },
      error: null,
      result: null,
    });
  };

  return {
    ...state,
    setStatus,
    setProgress,
    setError,
    setResult,
    reset,
  };
};
