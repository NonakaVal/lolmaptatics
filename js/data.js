/* Dados estáticos — só champions (sem torres/objetivos) */
const MAP_IMAGE = "resources/map-map-icons/mapcanvas.png";

const CHAMPIONS = [
  "aatrox","ahri","akali","akshan","alistar","ambessa","amumu","annie","ashe",
  "aurelion-sol","aurora","bard","blitzcrank","brand","braum","caitlyn","camille",
  "chogath","corki","darius","diana","dr-mundo","draven","ekko","evelynn","ezreal",
  "fiddlesticks","fiora","fizz","galio","garen","gnar","gragas","graves","gwen",
  "hecarim","heimerdinger","hwei","irelia","janna","jarvan-iv","jax","jayce","jhin",
  "jinx","kaisa","kalista","karma","kassadin","katarina","kayle","kayn","kennen",
  "khazix","kindred","kogmaw","ksante","lee-sin","leona","lillia","lissandra",
  "lucian","lulu","lux","malphite","maokai","master-yi","mel","milio","miss-fortune",
  "mordekaiser","morgana","nami","nasus","nautilus","nidalee","nilah","nocturne",
  "norra","nunu-amp-willump","olaf","orianna","ornn","pantheon","poppy","pyke",
  "rakan","rammus","rell","renekton","rengar","riven","rumble","ryze","samira",
  "senna","seraphine","sett","shen","shyvana","singed","sion","sivir","skarner",
  "smolder","sona","soraka","swain","syndra","taliyah","talon","teemo","thresh",
  "tristana","tryndamere","twisted-fate","twitch","urgot","varus","vayne","veigar",
  "velkoz","vex","vi","viego","viktor","vladimir","volibear","warwick","wukong",
  "xayah","xin-zhao","yasuo","yone","yunara","yuumi","zed","zeri","ziggs","zilean","zoe","zyra",
];

const championSrc = (slug) => `resources/champions/${slug}.png`;
const WARD_SRC = "resources/champions/ward.png";
const X_MARK_SRC = "resources/map-map-icons/x-mark.png";

/* Estruturas fixas mapeadas do mapcanvas.png (template matching RGB) */
const STRUCTURES = [
  // BLUE — base inferior-esquerda
  { id: "BTOP-T1", team: "blue", label: "T1 BLUE TOP", x: 18.98, y: 31.22, kind: "tower" },
  { id: "BTOP-T2", team: "blue", label: "T2 BLUE TOP", x: 19.03, y: 52.60, kind: "tower" },
  { id: "BTOP-T3", team: "blue", label: "T3 BLUE TOP", x: 19.03, y: 64.97, kind: "tower" },
  { id: "BMID-T1", team: "blue", label: "T1 BLUE MID", x: 43.63, y: 52.60, kind: "tower" },
  { id: "BMID-T2", team: "blue", label: "T2 BLUE MID", x: 39.40, y: 62.33, kind: "tower" },
  { id: "BMID-T3", team: "blue", label: "T3 BLUE MID", x: 32.60, y: 68.85, kind: "tower" },
  { id: "BBOT-T1", team: "blue", label: "T1 BLUE BOT", x: 66.21, y: 87.12, kind: "tower" },
  { id: "BBOT-T2", team: "blue", label: "T2 BLUE BOT", x: 48.37, y: 86, kind: "tower" },
  { id: "BBOT-T3", team: "blue", label: "T3 BLUE BOT", x: 34.72, y: 84.41, kind: "tower" },
  { id: "B-NX", team: "blue", label: "BLUE NEXUS", x: 21.10, y: 81.81, kind: "nexus" },
  // RED — base superior-direita
  { id: "RTOP-T1", team: "red", label: "T1 RED TOP", x: 35.20, y: 14.20, kind: "tower" },
  { id: "RTOP-T2", team: "red", label: "T2 RED TOP", x: 52.11, y: 16.88, kind: "tower" },
  { id: "RTOP-T3", team: "red", label: "T3 RED TOP", x: 64.15, y: 16.88, kind: "tower" },
  { id: "RMID-T1", team: "red", label: "T1 RED MID", x: 57.75, y: 42.15, kind: "tower" },
  { id: "RMID-T2", team: "red", label: "T2 RED MID", x: 62.03, y: 33.89, kind: "tower" },
  { id: "RMID-T3", team: "red", label: "T3 RED MID", x: 70.42, y: 25.87, kind: "tower" },
  { id: "RBOT-T1", team: "red", label: "T1 RED BOT", x: 83.13, y: 66.15, kind: "tower" },
  { id: "RBOT-T2", team: "red", label: "T2 RED BOT", x: 78.90, y: 44.83, kind: "tower" },
  { id: "RBOT-T3", team: "red", label: "T3 RED BOT", x: 79.33, y: 33.89, kind: "tower" },
  { id: "R-NX", team: "red", label: "RED NEXUS", x: 77.22, y: 19.55, kind: "nexus" },
  // Objetivos épicos do rio
  { id: "BARON", team: "purple", label: "BARÃO", x: 38.0, y: 34.0, kind: "baron" },
  { id: "DRAGON", team: "red", label: "DRAGÃO", x: 63.6, y: 66.6, kind: "dragon" },
];

const structIconFor = (s) => {
  if (s.kind === "nexus")
    return s.team === "blue"
      ? "resources/map-map-icons/blue-nexus-icon.png"
      : "resources/map-map-icons/red-nexus-icon.png";
  if (s.kind === "baron") return "resources/map-map-icons/baron_icon.svg";
  if (s.kind === "dragon") return "resources/map-map-icons/dragon_icon.svg";
  return s.team === "blue"
    ? "resources/map-map-icons/blue-tower-icon.png"
    : "resources/map-map-icons/red-tower-icon.png";
};

/* Quadro inicial (espelho do main.json) — fallback quando fetch falha (ex. file://) */
const DEFAULT_BOARD = {
  version: 1,
  app: "wild-rift-map-planner",
  cam: { x: 0, y: 0, zoom: 1 },
  structGray: [],
  tokens: [
    { name: "ahri", team: "blue", x: 56.86081019706422, y: 50.06190330221797, grayscale: false, src: "resources/champions/ahri.png" },
    { name: "akali", team: "blue", x: 48.81863810650575, y: 50.952458608600196, grayscale: false, src: "resources/champions/akali.png" },
    { name: "nautilus", team: "blue", x: 67.50503582911621, y: 76.8770148594214, grayscale: false, src: "resources/champions/nautilus.png" },
    { name: "jinx", team: "blue", x: 73.33548114859289, y: 85.33165009249933, grayscale: false, src: "resources/champions/jinx.png" },
    { name: "caitlyn", team: "blue", x: 78.05955117755705, y: 69.97498476186863, grayscale: false, src: "resources/champions/caitlyn.png" },
    { name: "seraphine", team: "blue", x: 83.86287010570938, y: 75.60573113481632, grayscale: false, src: "resources/champions/seraphine.png" },
    { name: "fiora", team: "blue", x: 22.992699282835808, y: 22.895683889367625, grayscale: false, src: "resources/champions/fiora.png" },
    { name: "jax", team: "blue", x: 30.594826279844668, y: 19.264657292836212, grayscale: false, src: "resources/champions/jax.png" },
    { name: "amumu", team: "blue", x: 69.70534589664892, y: 52.01066639233092, grayscale: false, src: "resources/champions/amumu.png" },
    { name: "warwick", team: "blue", x: 31.09931630927607, y: 50.70438558221432, grayscale: false, src: "resources/champions/warwick.png" },
  ],
};

const cloneBoard = (b) => JSON.parse(JSON.stringify(b));
