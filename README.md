# Studio Tarcia Madureira — Site Institucional

Landing page premium para o studio de beleza **STUDIO TARCIA MADUREIRA** em Janaúba - MG.

**Categoria:** Studio de Beleza · **Serviços:** Design de Sobrancelhas, Maquiagem e Cílios.

Stack: HTML + CSS + JS puro. Deploy: Vercel.

---

## Como substituir as imagens

O site está pronto e funcional. As imagens da galeria e do hero já são fotos reais; se quiser trocar por versões mais novas, basta substituir os arquivos na pasta `assets/` mantendo exatamente os mesmos nomes:

| Arquivo atual | O que colocar | Onde aparece |
|---|---|---|
| `assets/hero.jpg` | ✅ Foto real enviada (retrato com maquiagem profissional) | Hero section |
| `assets/galeria-1.jpg` | Foto de design de sobrancelhas | Galeria — posição 1 |
| `assets/galeria-2.jpg` | Foto de maquiagem + cabelo cacheado | Galeria — posição 2 |
| `assets/galeria-3.jpg` | Foto de maquiagem com cabelo loiro | Galeria — posição 3 |
| `assets/galeria-4.jpg` | Foto de cílios + sobrancelhas | Galeria — posição 4 |
| `assets/galeria-5.jpg` | Foto de maquiagem sofisticada | Galeria — posição 5 |
| `assets/galeria-6.jpg` | Foto de maquiagem bronze | Galeria — posição 6 |
| `assets/og-image.jpg` | Imagem 1200x630 para compartilhamento (opcional) | Open Graph (WhatsApp, Facebook, etc.) |

**Dica de tamanho:**
- Hero: idealmente 800x1000px ou proporção 4:5 (vertical), JPG otimizado
- Galeria: idealmente 800x800px (quadrado), JPG otimizado
- OG image: 1200x630px, JPG ou PNG

**Como substituir:**
1. Salve a foto nova com o mesmo nome do placeholder (ex: `hero.jpg`)
2. Cole na pasta `assets/` substituindo o arquivo existente
3. Pronto — o site já referencia esses nomes. Não precisa editar código.

---

## Personalizações comuns

### Trocar o número de WhatsApp
Procure no `index.html` por `5538992202583` e substitua em todas as ocorrências (cerca de 8 lugares — use Substituir Tudo do editor).

### Trocar a frase de impacto do Hero
Edite a `<h1 class="hero-title">` no `index.html` (seção `#inicio`).

### Trocar endereço
Edite o `<section id="localizacao">` no `index.html` e também a string do iframe (`Rua+Osvaldo+Aranha...`).

### Trocar horário
Edite o `<section id="horarios">` no `index.html` e o objeto `openingHoursSpecification` dentro do `<script type="application/ld+json">` no `<head>`.

### Trocar cores (paleta)
Edite as CSS variables no início do `style.css` (`:root { ... }`). As principais são:
- `--primary` (rose gold)
- `--accent` (dourado)
- `--gradient` (gradiente principal)

---

## Estrutura do projeto

```
studio-tarcia-madureira/
├── index.html              # Página única
├── style.css               # Todo o design system e componentes
├── script.js               # Reveal, menu, status, ano
├── .gitignore
├── README.md               # Este arquivo
├── .vercel/                # Config Vercel
└── assets/
    ├── favicon.svg         # Monograma STM
    ├── og-image.jpg        # (opcional) imagem para redes sociais
    ├── hero.jpg            # ✅ Foto real enviada
    ├── galeria-1.jpg       # ✅ Foto real enviada
    ├── galeria-2.jpg       # ✅ Foto real enviada
    ├── galeria-3.jpg       # ✅ Foto real enviada
    ├── galeria-4.jpg       # ✅ Foto real enviada
    ├── galeria-5.jpg       # ✅ Foto real enviada
    └── galeria-6.jpg       # ✅ Foto real enviada
```

---

## Deploy

O deploy é feito pela Vercel. Para atualizar o site depois de subir novas imagens:

```bash
cd C:\Users\angel\studio-tarcia-madureira
vercel --prod
```

---

## Contato técnico

Angelo Antunes — desenvolvedor.
WhatsApp do studio: (38) 99220-2583
