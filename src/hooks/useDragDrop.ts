import { useState, useRef } from 'react';

/**
 * Hook para drag and drop
 */
export const useDragDrop = (onDrop: (files: File[]) => void, acceptedTypes?: string[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;

    const { files } = e.dataTransfer;
    const fileList = Array.from(files);

    // Filtra por tipo aceito se especificado
    const filtered = acceptedTypes
      ? fileList.filter(file =>
          acceptedTypes.some(type => {
            if (type.endsWith('/*')) {
              return file.type.startsWith(type.slice(0, -2));
            }
            return file.type === type;
          })
        )
      : fileList;

    if (filtered.length > 0) {
      onDrop(filtered);
    }
  };

  return {
    isDragging,
    bind: {
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
    },
  };
};
