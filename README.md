# Portfólio · Atauine Dias

Portfólio pessoal de **Atauine Ferreira Souto Dias**, Desenvolvedora Full Stack.
Aplicação em Angular com fundo animado estilo *lava lamp* em tons de violeta e um mini sudoku jogável no rodapé.

🔗 **Acesse:** https://portfolio-atauine.vercel.app/

## ✨ Destaques

- **Fundo lava lamp animado** em CSS + filtro SVG (efeito de bolhas que se fundem), com suporte a `prefers-reduced-motion`.
- **Projetos dinâmicos** carregados direto da API pública do GitHub.
- **Mini sudoku 6×6** jogável, com seleção por mouse ou teclado, detecção de conflitos em tempo real e geração de novos jogos.
- **Design responsivo** e acessível, com seções de apresentação, tecnologias, projetos e contato.

## 🛠️ Tecnologias

- [Angular 21](https://angular.dev) (componentes standalone, signals e novo controle de fluxo)
- TypeScript
- SCSS
- API REST do GitHub

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) 20+ e npm.

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200`. A aplicação recarrega automaticamente ao salvar.

## 📦 Build de produção

```bash
npm run build
```

Os arquivos finais são gerados em `dist/portfolio/browser`.

## ☁️ Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com). O arquivo `vercel.json`
já define o comando de build e a pasta de saída — basta importar o repositório e publicar.

## 📁 Estrutura

```
src/app/
├── core/         # dados do perfil, serviço do GitHub e lógica do sudoku
└── components/   # lava-background, navbar, hero, about, skills,
                  # projects, sudoku e footer
```

## 📫 Contato

- **E-mail:** atauinesouto@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/atauine/
- **GitHub:** https://github.com/Q-Atalien
