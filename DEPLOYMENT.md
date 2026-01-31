# 🚀 Deployment Guide - GitHub Pages

## Problema: Deploy com erro 404

Se você está vendo um erro 404 ao acessar https://fgiacobe.github.io/CO2Calculator, isso significa que o GitHub Pages não está configurado corretamente no repositório.

## Solução: Configurar GitHub Pages

### Passo 1: Habilitar GitHub Pages no Repositório

1. Acesse o repositório no GitHub: https://github.com/FGiacobe/CO2Calculator
2. Clique em **Settings** (Configurações) no menu superior
3. No menu lateral esquerdo, clique em **Pages**
4. Na seção **Build and deployment**:
   - Em **Source**, selecione **GitHub Actions**
   - Salve as alterações

### Passo 2: Executar o Deploy

Após configurar o GitHub Pages para usar GitHub Actions:

**Opção A: Re-executar o workflow que falhou**
1. Vá para a aba **Actions** no repositório
2. Encontre o workflow "Deploy to GitHub Pages" que falhou
3. Clique no workflow e depois em **Re-run all jobs**

**Opção B: Fazer um novo commit**
```bash
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

### Passo 3: Verificar o Deploy

1. Vá para a aba **Actions** no repositório
2. Aguarde o workflow "Deploy to GitHub Pages" ser concluído (ícone verde ✓)
3. Acesse https://fgiacobe.github.io/CO2Calculator

## Como Funciona

O workflow em `.github/workflows/deploy.yml` faz o deploy automático para o GitHub Pages sempre que há mudanças na branch `main`.

### Pré-requisitos do Workflow

O workflow já está configurado com:
- ✅ Permissões corretas (`pages: write`, `id-token: write`)
- ✅ Configuração do GitHub Pages via Actions
- ✅ Upload do artefato (todos os arquivos na raiz)
- ✅ Deploy automático

### Estrutura de Arquivos

```
CO2Calculator/
├── index.html      # Página principal
├── script.js       # Lógica de cálculo de CO2
├── styles.css      # Estilos da página
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow de deploy
```

## Troubleshooting

### Erro: "Not Found" no configure-pages

**Causa:** GitHub Pages não está habilitado ou não está configurado para usar GitHub Actions.

**Solução:** Siga o Passo 1 acima para configurar o GitHub Pages.

### Deploy foi bem-sucedido mas ainda vejo 404

**Possíveis causas:**
1. **Cache do navegador:** Limpe o cache ou use modo anônimo (Ctrl+Shift+N)
2. **Propagação DNS:** Aguarde alguns minutos para a propagação das mudanças
3. **URL incorreta:** Verifique se está usando a URL correta: `https://fgiacobe.github.io/CO2Calculator/`

### Como verificar se o GitHub Pages está ativo

1. Vá em **Settings** → **Pages**
2. Se configurado corretamente, você verá:
   ```
   Your site is live at https://fgiacobe.github.io/CO2Calculator/
   ```

## Manutenção

### Deploy Automático

Toda vez que você fizer push para a branch `main`, o site será automaticamente atualizado no GitHub Pages.

### Deploy Manual

Para forçar um deploy sem mudanças no código:
```bash
git commit --allow-empty -m "Deploy manual"
git push origin main
```

## Recursos Adicionais

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [GitHub Actions para Pages](https://github.com/actions/deploy-pages)
- [Configurando fonte de publicação](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
