# Wild Rift Map Planner — Champions

Planejador tático estático para Wild Rift/LoL: arraste champions no mapa, marque torres com duplo-clique, desenhe setas de movimentação, coloque wards, exporte/importe o quadro em JSON.

## Features

- Mapa interativo com zoom/pan
- Roster de champions (busca + time blue/red/neutro)
- Torres/nexus com estado normal/marcado (duplo-clique)
- Setas de movimentação (SVG), wards, tokens arrastáveis
- Exportar/Importar quadro (`main.json`), botão Restartar

## Instalação

Sem build, sem dependências. Só servir os arquivos estáticos:

```bash
# opção 1 — Python
python3 -m http.server 8000
# opção 2 — Node
npx serve .
# opção 3 — VS Code Live Server
```

> Abrir via `file://` funciona com fallback interno, mas o `fetch(main.json)` só carrega pleno via `http://`.

## Quick Start

1. Sirva a pasta (`python3 -m http.server 8000`)
2. Abra `http://localhost:8000`
3. Clique no `+` do roster → escolha champion → arraste no mapa

## Uso

| Ação | Como |
|---|---|
| Mover token/estrutura | Arrastar |
| Marcar torre/champion | Duplo-clique |
| Seta de movimento | Ferramenta `↗` → arraste de um token/ponta |
| Ward | Ferramenta `Ward` → clique no mapa |
| Salvar/carregar | `Exportar` baixa JSON · `Importar` lê JSON · `Restartar` volta ao `main.json` |

## Estrutura

```
index.html
css/style.css
js/data.js      # MAP_IMAGE, CHAMPIONS, STRUCTURES, DEFAULT_BOARD
js/app.js       # render, drag, zoom, setas, wards, import/export
main.json       # quadro inicial
mapcanvas.canvas
resources/
  champions/        # 142 ícones em WebP (+ PNG legado p/ fallback) + ward
  map-map-icons/    # mapcanvas.webp (183KB) + mapcanvas.jpg (fallback) + ícones
```

## Imagens (otimizado p/ GitHub Pages)

Tudo em **WebP** como primário, sem Git LFS (Pages não resolve LFS):

| Asset | Antes | Depois |
|---|---|---|
| `mapcanvas` base (2048px) | PNG 217MB | WebP 183KB + JPG 325KB (fallback) |
| 143 champions + ward | PNG 5,9MB | WebP 869KB (PNG mantido p/ fallback) |
| Ícones torre/nexus | PNG 120–165KB | WebP 13–19KB (PNG mantido p/ fallback) |
| Baron/dragão | SVG | SVG (inalterado, já ideal) |

Removidos por não serem usados: `mapcanvas.bak.png`, `Summoner-Rift-Map.png`,
`wildriftmap*`, `maptowersposition.png`, `lane-*`, `mid-jungle.png`,
`wards-icon.svg`, `times_icon.svg`, `resources/neutral-monsters/`.

Compat: boards exportados com `.png` antigo são remapeados p/ `.webp` no
import (`migrateSrc` em `js/data.js`) + fallback runtime via `onerror`.

## Deploy no GitHub Pages

1. Push na `main`
2. Repo → Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`
3. URL: `https://<user>.github.io/<repo>/` (paths relativos, sem `<base>`)

> Maior arquivo deployado: ~332KB. Nenhum LFS = imagens servidas direto.

## License

Uso pessoal/educacional. Sprites e nomes de champions/mapas pertencem à Riot Games.
# lolmaptatics
