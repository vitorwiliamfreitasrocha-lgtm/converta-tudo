# 📐 Estrutura do Projeto - Converta Tudo!

Guia completo sobre a arquitetura e organização do código.

## 🗂️ Estrutura de Diretórios

```
converta-tudo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions - Deploy automático
├── public/                     # Assets estáticos
├── src/
│   ├── components/             # Componentes React
│   │   ├── Header.tsx         # Header com navegação
│   │   ├── DropZone.tsx       # Área de drag & drop
│   │   ├── ConverterSection.tsx # Seção de conversão
│   │   ├── ConversionCard.tsx # Card de conversão
│   │   ├── GoogleAds.tsx      # Integração AdSense
│   │   ├── QuickShortcuts.tsx # Atalhos rápidos
│   │   ├── ConversionsList.tsx # Histórico
│   │   └── index.ts           # Exports
│   ├── hooks/                  # Hooks customizados
│   │   ├── useDragDrop.ts    # Hook drag & drop
│   │   ├── useConversion.ts   # Hook de conversão
│   │   └── index.ts           # Exports
│   ├── utils/                  # Utilitários
│   │   ├── fileUtils.ts       # Manipulação de arquivos
│   │   ├── imageConverter.ts  # Conversão de imagens
│   │   ├── pdfConverter.ts    # Conversão de PDFs
│   │   └── index.ts           # Exports
│   ├── types/                  # Tipos TypeScript
│   │   └── index.ts           # Tipos principais
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais
├── index.html                  # HTML principal
├── vite.config.ts              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
├── tsconfig.node.json          # TypeScript para Node
├── postcss.config.js           # PostCSS
├── package.json                # Dependências
├── .gitignore                  # Arquivos ignorados
├── README.md                   # Documentação principal
├── SETUP.md                    # Guia de instalação
└── ESTRUTURA.md                # Este arquivo
```

## 🧩 Componentes

### Header (`src/components/Header.tsx`)

Cabeçalho da página com:
- Logo e branding
- Navegação
- Badge "100% Gratuito"

**Props**: Nenhuma
**Função**: Display apenas (sem estado)

### DropZone (`src/components/DropZone.tsx`)

Área de drag & drop com:
- Suporte a múltiplos arquivos
- Validação por tipo
- Callback onFilesSelected

**Props**:
```tsx
interface DropZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string[];
  title?: string;
  description?: string;
  disabled?: boolean;
}
```

### ConverterSection (`src/components/ConverterSection.tsx`)

Seção completa de conversão com:
- DropZone integrado
- Seletor de formato
- Progresso de conversão
- Mensagens de erro/sucesso

**Props**:
```tsx
interface ConverterSectionProps {
  title: string;
  description?: string;
  acceptedTypes: string[];
  formats: string[];
  onConvert: (file: File, targetFormat: string) => Promise<Blob>;
  icon?: string;
}
```

### ConversionCard (`src/components/ConversionCard.tsx`)

Card exibindo opção de conversão.

**Props**:
```tsx
interface ConversionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  formats: string[];
  onSelect: () => void;
  badge?: string;
}
```

### GoogleAds (`src/components/GoogleAds.tsx`)

Integração com Google AdSense.

**Props**:
```tsx
interface GoogleAdsProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
}
```

**Slots Sugeridos**:
- Topo: `728x90` (leaderboard)
- Meio: `300x250` (medium rectangle)
- Rodapé: `728x90` (leaderboard)
- Sidebar: `300x600` (half page)

### QuickShortcuts (`src/components/QuickShortcuts.tsx`)

Atalhos rápidos para conversões populares.

**Props**:
```tsx
interface QuickShortcutsProps {
  shortcuts: Shortcut[];
}
```

### ConversionsList (`src/components/ConversionsList.tsx`)

Exibe histórico de conversões salvas em localStorage.

**Props**:
```tsx
interface ConversionsListProps {
  conversions: ConversionRecord[];
  onClear: () => void;
}
```

## 🎣 Hooks

### useDragDrop

Gerencia estado de drag & drop.

```tsx
const { isDragging, bind } = useDragDrop(
  (files) => console.log(files),
  ['image/*']
);

return <div {...bind}>Drop area</div>;
```

**Retorna**:
```tsx
{
  isDragging: boolean;
  bind: {
    onDragEnter, onDragLeave, onDragOver, onDrop
  };
}
```

### useConversion

Gerencia estado de conversão.

```tsx
const {
  status,           // 'idle' | 'processing' | 'success' | 'error'
  progress,         // { current, total, percentage }
  error,            // string | null
  result,           // Blob | null
  setStatus,
  setProgress,
  setError,
  setResult,
  reset
} = useConversion();
```

## 🛠️ Utilitários

### fileUtils

```tsx
// Validação
isValidFileType(file, ['image/*']);
isValidFileSize(file, 50);  // 50 MB

// Formatação
formatFileSize(1024 * 1024);  // "1 MB"
getFileExtension('image.jpg');  // "jpg"

// Download
downloadBlob(blob, 'file.png');

// Leitura
readFileAsDataURL(file);
readFileAsArrayBuffer(file);
readFileAsText(file);
```

### imageConverter

```tsx
// Conversão básica
const blob = await convertImage(file, 'png', { quality: 0.9 });

// Redimensionamento
const resized = await resizeImage(file, 800, 600);

// Compressão
const compressed = await compressImage(file, 0.7);

// Escala de cinza
const gray = await grayscaleImage(file, 'jpeg');

// Informações
const { width, height } = await getImageDimensions(file);
```

### pdfConverter

⚠️ **Placeholders** - Implementar com `pdf-lib`

```tsx
// Serão implementados
imagesToPDF(files);
extractTextFromPDF(file);
mergePDFs(files);
rotatePDF(file, 90);
addWatermarkToPDF(file, 'texto');
pdfToImage(file, 1);
```

## 📊 Types

```tsx
export type ConversionType = 'image' | 'video' | 'pdf' | 'pdf-edit';
export type ConversionStatus = 'idle' | 'processing' | 'success' | 'error';

export interface ConversionRecord {
  id: string;
  type: ConversionType;
  inputFormat: string;
  outputFormat: string;
  fileName: string;
  timestamp: number;
  size: number;
}

export interface ConversionState {
  status: ConversionStatus;
  progress: ConversionProgress;
  error: string | null;
  result: Blob | null;
}
```

## 🎨 Estilos

### Tailwind Classes Customizadas

```css
/* Botões */
.btn-primary       /* Botão principal (vermelho) */
.btn-secondary     /* Botão secundário (outline) */

/* Cards */
.card              /* Card padrão */

/* Inputs */
input[type="file"]
input[type="text"]
textarea

/* Animações */
.animate-fade-in   /* Fade in suave */
.spinner           /* Loading spinner */
.progress-bar      /* Barra de progresso */
```

### Cores

```js
// Primária (Vermelho)
primary-50, primary-100, primary-400, primary-500, primary-600, primary-700

// Cinza (Neutro)
light-bg, light-card, light-border
neutral-text, neutral-muted
```

## 🔄 Fluxo de Dados

### Conversão de Imagem

```
User selects file
    ↓
DropZone.onFilesSelected(files)
    ↓
ConverterSection saves selectedFile
    ↓
User selects format (ConverterSection)
    ↓
User clicks "Converter"
    ↓
convertImage() runs
    ↓
setStatus('processing')
setProgress(...)
    ↓
Conversion completes
    ↓
setResult(blob)
downloadBlob(blob, filename)
    ↓
Save to ConversionRecord in App state
```

## 🔧 Adicionando Nova Conversão

### 1. Criar função de conversão

```tsx
// src/utils/newConverter.ts
export const convertNewFormat = async (
  file: File,
  targetFormat: string
): Promise<Blob> => {
  // Implementação
};
```

### 2. Criar componente ConverterSection

```tsx
// src/App.tsx
<ConverterSection
  title="Novo Conversor"
  acceptedTypes={['type/*']}
  formats={['format1', 'format2']}
  onConvert={convertNewFormat}
/>
```

### 3. Adicionar à ConversionRecord

```tsx
const record: ConversionRecord = {
  // ...
  type: 'newtype',
};
```

## 📈 Performance

### Otimizações Implementadas

- ✅ Lazy loading de componentes
- ✅ Memoization com React.memo
- ✅ CSS otimizado (Tailwind)
- ✅ Bundle otimizado (Vite)
- ✅ Processamento no navegador (sem servidor)

## 🚀 Próximas Melhorias

- [ ] Service Worker para offline
- [ ] Compressão automática de imagens
- [ ] Conversão em lote
- [ ] Upload/download de múltiplos arquivos
- [ ] Editor visual de imagens
- [ ] Histórico sincronizado (cloud)

---

**Desenvolvido com ❤️**
