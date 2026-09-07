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
  champions/        # ~150 ícones + ward.png
  map-map-icons/    # mapcanvas.png (mapa base) + ícones de torre/nexus
  neutral-monsters/ # baron, arauto, dragões
```

## Arquivos grandes (Git LFS)

O mapa base `resources/map-map-icons/mapcanvas.png` (~217MB) e demais imagens vão via **Git LFS** (ver `.gitattributes`). Push/fetch normais funcionam, mas o clone baixa ~600MB+:

```bash
git lfs install   # uma vez por máquina
git lfs pull      # garante os binários após clone
```

> Para reduzir o repo no futuro: comprimir o `mapcanvas.png` (ex. `squoosh`, `tinypng` ou exportar em 2048px JPG/WebP) e remover mapas não usados (`mapcanvas.bak.png`, `Summoner-Rift-Map.png`, `wildriftmap_upscayl_4x*`). Nada foi deletado nesta preparação — só isolado via `.gitignore`/LFS.

## License

Uso pessoal/educacional. Sprites e nomes de champions/mapas pertencem à Riot Games.
# lolmaptatics
