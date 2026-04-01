# 🚀 Quick Start - Converta Tudo!

Começar em 5 minutos.

## 1️⃣ Instalar Dependências (Local)

```bash
npm install
```

## 2️⃣ Testar Localmente

```bash
npm run dev
```

Abre em `http://localhost:3000`

## 3️⃣ Build para Produção

```bash
npm run build
```

Gera pasta `dist/` pronta para deploy.

## 4️⃣ Deploy no GitHub Pages

### Opção A: Automático (Recomendado)
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

O GitHub Actions faz tudo automaticamente! ✅

### Opção B: Manual
```bash
npm run deploy
```

---

## 🌐 Acessar o Site

Após deploy:
```
https://vitorwiliamfreitasrocha-lgtm.github.io/converta-tudo/
```

Ou com domínio customizado (depois):
```
https://convertatudo.com.br
```

---

## 🛠️ Estrutura de Pastas

```
src/
├── components/    # React components
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── types/         # TypeScript types
├── App.tsx        # Main component
└── main.tsx       # Entry point
```

---

## 📝 Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build |
| `npm run deploy` | Deploy (requer gh-pages) |

---

## 🐛 Problemas Comuns

**Página em branco?**
→ Pressione F12 (console) e veja erros

**404 error?**
→ Verifique se `vite.config.ts` tem `base: '/converta-tudo/'`

**Styles não carregam?**
→ Verifique Tailwind CSS no `tailwind.config.js`

---

## 📚 Documentação Completa

- **[SETUP.md](./SETUP.md)** - Instalação detalhada
- **[ESTRUTURA.md](./ESTRUTURA.md)** - Arquitetura do projeto
- **[README.md](./README.md)** - Visão geral

---

**Pronto para começar? 🚀**

```bash
npm install && npm run dev
```
