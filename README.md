<div align="center">

# 💄 Studio Tarcia Madureira

**Landing page institucional de um studio de beleza em Janaúba, Minas Gerais, com apresentação de serviços, galeria, localização e agendamento direto pelo WhatsApp.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://studio-tarcia-madureira.vercel.app/)

[🌐 Acessar site publicado](https://studio-tarcia-madureira.vercel.app/) · [✨ Funcionalidades](#-funcionalidades) · [🚀 Execução local](#-execução-local)

</div>

---

## 📌 Sobre o projeto

O site do **Studio Tarcia Madureira** apresenta o espaço e os serviços de design de sobrancelhas, maquiagem e cílios, além da galeria, das avaliações, dos horários de atendimento e da localização do studio.

O objetivo da página é oferecer uma presença digital elegante, clara e acolhedora para o negócio, transmitir profissionalismo e facilitar o contato direto com clientes pelo WhatsApp.

O projeto também integra o portfólio do desenvolvedor como uma solução web para um negócio local, com foco em presença digital, identidade visual, responsividade, conversão e publicação na web.

## ✨ Funcionalidades

- Seção principal com chamada para ação
- Apresentação do studio e de seus principais serviços
- Galeria responsiva com trabalhos realizados
- Seção de avaliações exibidas na própria página
- Horários de funcionamento com indicador de aberto ou fechado
- Localização com endereço, mapa incorporado e link para rota
- Perguntas frequentes sobre serviços e atendimento
- Botões de agendamento e contato direto pelo WhatsApp
- Menu adaptado para dispositivos móveis
- Animações de entrada durante a navegação
- Metadados para mecanismos de busca e compartilhamento em redes sociais
- Dados estruturados de negócio local com Schema.org
- Deploy em produção pela Vercel

## 📍 Informações do negócio

| Informação | Detalhes |
|---|---|
| Nome | Studio Tarcia Madureira |
| Categoria | Studio de beleza |
| Serviços | Design de sobrancelhas, maquiagem e cílios |
| Localização | Rua Osvaldo Aranha, 270 — Padre Eustáquio, Janaúba — MG |
| WhatsApp | [(38) 99220-2583](https://wa.me/5538992202583) |

## 📱 Responsividade e acessibilidade

A interface utiliza layouts flexíveis e pontos de quebra específicos para celulares, tablets, notebooks e desktops. Em telas menores, a navegação passa a usar um menu móvel, as grades são reorganizadas e os botões são ajustados para facilitar o toque.

O projeto também inclui navegação semântica, link para pular ao conteúdo, atributos ARIA, estados de foco e suporte à preferência de movimento reduzido do sistema.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura semântica, conteúdo e metadados |
| CSS3 | Identidade visual, layouts, responsividade e animações |
| JavaScript | Menu móvel, animações de entrada, cabeçalho e status de funcionamento |
| Google Fonts | Fontes Cormorant Garamond e Inter |
| Google Maps | Mapa incorporado e rota para o studio |
| WhatsApp | Contato e solicitação de agendamento |
| Git e GitHub | Versionamento e hospedagem do código |
| Vercel | Hospedagem da aplicação estática |

O projeto não utiliza framework JavaScript nem etapa de build: os arquivos são entregues diretamente pelo navegador.

## 🌐 Demonstração online

O projeto está publicado na Vercel:

**https://studio-tarcia-madureira.vercel.app/**

## 🚀 Execução local

Clone o repositório e inicie um servidor HTTP estático na pasta do projeto:

```bash
git clone https://github.com/angeloantunesdarocha/studio-tarcia-madureira.git
cd studio-tarcia-madureira
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

Também é possível usar outro servidor estático de sua preferência.

## 📂 Estrutura do projeto

```text
studio-tarcia-madureira/
├── assets/
│   ├── favicon.svg
│   ├── hero.jpg
│   ├── galeria-1.jpg
│   ├── galeria-2.jpg
│   ├── galeria-3.jpg
│   ├── galeria-4.jpg
│   ├── galeria-5.jpg
│   └── galeria-6.jpg
├── index.html
├── script.js
├── style.css
├── .gitignore
└── README.md
```

- `index.html`: conteúdo, seções, metadados e integrações da página
- `style.css`: design visual e regras de responsividade
- `script.js`: interações e comportamentos da interface
- `assets/`: imagens da apresentação e da galeria

## 🧩 Como editar o projeto

### Alterar o WhatsApp

No arquivo `index.html`, procure por `5538992202583` e substitua pelo novo número no formato internacional em todas as ocorrências.

### Alterar as imagens

Substitua os arquivos em `assets/` mantendo os mesmos nomes usados no HTML, como `hero.jpg` e `galeria-1.jpg`.

Para preservar a apresentação, prefira uma imagem vertical para o hero e imagens quadradas para a galeria, sempre otimizadas para a web.

### Alterar as cores

As principais cores ficam nas variáveis CSS declaradas em `:root`, no início de `style.css`, incluindo `--primary`, `--accent` e os gradientes do projeto.

### Alterar conteúdo e atendimento

- Frase principal: seção `#inicio` em `index.html`
- Endereço e mapa: seção `#localizacao`
- Horários: seção `#horarios` e dados estruturados no `<head>`

## 📸 Capturas de tela

> Espaço reservado para futuras capturas de tela do projeto.

| Visualização | Arquivo planejado |
|---|---|
| Página inicial | `docs/screenshots/inicio.png` |
| Serviços | `docs/screenshots/servicos.png` |
| Galeria | `docs/screenshots/galeria.png` |
| Versão mobile | `docs/screenshots/mobile.png` |

## 👨‍💻 Autor

Desenvolvido por **Ângelo Antunes da Rocha**.

GitHub: [@angeloantunesdarocha](https://github.com/angeloantunesdarocha)

## ℹ️ Contexto de uso

Projeto apresentado para fins de portfólio e demonstração profissional. Este repositório não possui um arquivo `LICENSE`; portanto, nenhuma licença de reutilização é declarada neste README.
