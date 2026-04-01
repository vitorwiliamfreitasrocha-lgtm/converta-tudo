# ✅ Deploy Checklist - Converta Tudo!

## Antes de Fazer Push para GitHub

### 1. Verificar Dependências
- [x] `package.json` atualizado com versões corretas
- [x] Apenas React e React-DOM como dependências
- [x] DevDependencies corretas (Vite, TypeScript, Tailwind)

### 2. Configuração
- [x] `vite.config.ts` com `base: '/converta-tudo/'`
- [x] `index.html` com `src="./src/main.tsx"`
- [x] `tailwind.config.js` com cores customizadas
- [x] `tsconfig.json` correto

### 3. GitHub Actions
- [x] `.github/workflows/deploy.yml` criado
- [x] Workflow automático ativado

### 4. Documentação
- [x] `README.md` completo
- [x] `SETUP.md` com instruções
- [x] `ESTRUTURA.md` explicando arquitetura

---

## Após Fazer Push (GitHub)

### 5. Verificar Build
- [ ] Ir em **Actions**
- [ ] Confirmar que "pages-build-deployment" rodou com sucesso (✅)
- [ ] Build completou sem erros

### 6. GitHub Pages Config
- [ ] Ir em **Settings** → **Pages**
- [ ] Confirmar que está em `gh-pages` branch
- [ ] Confirmar que a URL está gerando corretamente

### 7. Teste Online
- [ ] Acessar `https://vitorwiliamfreitasrocha-lgtm.github.io/converta-tudo/`
- [ ] Verificar se página carrega
- [ ] Testar drag & drop de imagem
- [ ] Testar conversão JPG → PNG
- [ ] Verificar design responsivo no celular

---

## Quando Estiver Tudo Funcionando

### 8. Google AdSense (Futuro)
- [ ] Cadastrar no Google AdSense
- [ ] Obter Client ID
- [ ] Atualizar `index.html` com ID AdSense
- [ ] Atualizar `src/components/GoogleAds.tsx` com ID
- [ ] Aguardar aprovação (24-48h)

### 9. Domínio Customizado
- [ ] Comprar domínio `convertatudo.com.br`
- [ ] Configurar DNS (CNAME ou A records)
- [ ] Adicionar em **Settings** → **Pages** → **Custom domain**
- [ ] Esperar propagação (até 24h)

### 10. Marketing
- [ ] Submeter URL ao Google Search Console
- [ ] Verificar SEO meta tags
- [ ] Adicionar ao Google Analytics
- [ ] Compartilhar em redes sociais

---

## Troubleshooting

### Página em branco/blank
- [ ] Verificar console (F12) para erros
- [ ] Verificar se `base` em `vite.config.ts` está correto
- [ ] Limpar cache (Ctrl+Shift+Delete)
- [ ] Esperar rebuild do Action (~30s)

### 404 na conversão
- [ ] Verificar se paths nos imports estão corretos
- [ ] Verificar se todos os arquivos foram pushados
- [ ] Verificar se TypeScript não tem erros

### Drag & Drop não funciona
- [ ] Verificar se `DropZone.tsx` foi enviado
- [ ] Verificar console para erros de permissão
- [ ] Testar em navegador diferente

---

## Checklist Final ✅

```
[ ] Todos os arquivos 30 arquivos no repositório
[ ] GitHub Actions rodou com sucesso
[ ] Site acessível online
[ ] Header aparece
[ ] Hero section aparece
[ ] Conversor de imagens aparece
[ ] Drag & drop funciona
[ ] Conversão de imagem funciona
[ ] Design está responsivo
[ ] Cores estão corretas (vermelho #FF4444)
[ ] Footer aparece
```

---

**Quando tudo estiver verde (✅), o site está pronto para produção!**
