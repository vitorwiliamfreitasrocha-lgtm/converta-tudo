# 🚀 Setup - Converta Tudo!

Guia completo para configurar e deployar o **Converta Tudo!** no GitHub Pages.

## 📋 Pré-requisitos

- **Node.js** 16+ e **npm** ou **yarn**
- **Git** instalado
- Conta no **GitHub**

## 🔧 Instalação Local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/converta-tudo.git
cd converta-tudo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O site abrirá em `http://localhost:3000`

## 🛠️ Configuração

### Google AdSense

1. Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelos seus IDs em:
   - `index.html` (meta tag)
   - `src/components/GoogleAds.tsx`

2. Adicione seus slots de anúncio:
   ```tsx
   <GoogleAds slot="seu-slot-aqui" format="rectangle" />
   ```

### Google Analytics (Opcional)

1. Substitua `G-XXXXXXXXXX` em `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

## 📦 Build

### Build para produção

```bash
npm run build
```

Isso gerará uma pasta `dist/` pronta para produção.

### Preview do build

```bash
npm run preview
```

## 🚀 Deploy no GitHub Pages

### Opção 1: Automático com GitHub Actions

1. Faça push para `main`:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Vá para **Settings** → **Pages**
3. Configure para usar GitHub Actions
4. O deploy acontecerá automaticamente!

### Opção 2: Manual

```bash
npm run deploy
```

⚠️ Requer `gh-pages` configurado (já está no `package.json`)

## 🌐 Configurar Domínio Customizado

### 1. Na configuração do GitHub Pages

1. Vá para **Settings** → **Pages**
2. Em **Custom domain**, digite: `convertatudo.com.br`

### 2. Nos registros DNS do seu domínio

Configure os registros CNAME apontando para:
```
seu-usuario.github.io
```

OU configure registros A:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 3. Aguarde propagação (até 24h)

O arquivo `CNAME` será criado automaticamente pelo GitHub.

## 📊 Estrutura do Projeto

```
converta-tudo/
├── src/
│   ├── components/      # Componentes React
│   ├── hooks/           # Hooks customizados
│   ├── utils/           # Utilitários de conversão
│   ├── types/           # Tipos TypeScript
│   ├── App.tsx          # App principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── public/              # Assets estáticos
├── index.html           # HTML principal
├── vite.config.ts       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
├── tsconfig.json        # Configuração TypeScript
└── package.json         # Dependências
```

## 🎨 Customização

### Cores

Edite `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#FF4444', // Vermelho principal
    // ... outras cores
  }
}
```

### Fontes

As fontes estão configuradas em `tailwind.config.js` e `src/index.css`

## 🧪 Testes e Qualidade

### Verificar TypeScript

```bash
npx tsc --noEmit
```

### Verificar build

```bash
npm run build
```

## 📱 Responsive Design

O site é **100% responsivo**:
- Mobile first
- Breakpoints: `sm`, `md`, `lg`
- Testes em diferentes dispositivos recomendados

## 🔒 Privacidade e Segurança

- ✅ Conversão **100% local** (sem envio de dados)
- ✅ Nenhuma informação é armazenada no servidor
- ✅ Apenas localStorage para histórico local
- ✅ HTTPS automático no GitHub Pages

## 🐛 Troubleshooting

### Site não abre após deploy

1. Verifique se `base` em `vite.config.ts` está correto
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Aguarde 5 minutos para propagação

### AdSense não aparece

1. Verifique se está no domínio correto
2. Espere 24h após primeiro deploy
3. Confirme IDs em `GoogleAds.tsx`

### Build falha

```bash
npm install
npm run build
```

## 📞 Suporte

Para problemas, abra uma issue no GitHub!

## 📄 Licença

MIT - Sinta-se livre para usar e modificar

---

**Desenvolvido com ❤️ para web**
