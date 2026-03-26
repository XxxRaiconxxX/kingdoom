import { useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Castle,
  ChevronDown,
  Coins,
  Crown,
  Dice5,
  Flame,
  Gem,
  Home,
  Map,
  ScrollText,
  Shield,
  Skull,
  Store,
  Sword,
  Trophy,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type TabId = "home" | "lore" | "world" | "market" | "ranking";
type Rarity = "legendary" | "epic" | "rare" | "common";
type PlayerStatus = "alive" | "dead";

type NavItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
};

type MarketItem = {
  name: string;
  description: string;
  price: number;
  rarity: Rarity;
  icon: LucideIcon;
};

type RankingPlayer = {
  name: string;
  faction: string;
  level: number;
  gold: number;
  status: PlayerStatus;
};

type DemographicBloc = {
  realm: string;
  epithet: string;
  summary: string;
  groups: {
    title: string;
    races: string[];
  }[];
};

type WorldNote = {
  title: string;
  summary: string;
  details: string;
};

type FactionNote = {
  name: string;
  summary: string;
  details: string;
};

const WHATSAPP_JOIN_URL = "https://chat.whatsapp.com/TU-ENLACE-DE-INVITACION";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "lore", label: "Lore", icon: ScrollText },
  { id: "world", label: "Mundo", icon: Map },
  { id: "market", label: "Mercado", icon: Store },
  { id: "ranking", label: "Ranking", icon: Trophy },
];

const MARKET_ITEMS: MarketItem[] = [
  {
    name: "Espada del Eclipse",
    description: "Hoja maldita capaz de ignorar armaduras comunes y sembrar miedo.",
    price: 1250,
    rarity: "legendary",
    icon: Sword,
  },
  {
    name: "Sello de Obsidiana",
    description: "Amuleto de linaje oscuro que protege de maldiciones durante una escena.",
    price: 780,
    rarity: "epic",
    icon: Shield,
  },
  {
    name: "Gema de Vigilia",
    description: "Cristal encantado que revela trampas y emboscadas al lanzar dados.",
    price: 410,
    rarity: "rare",
    icon: Gem,
  },
  {
    name: "Raciones del Camino Gris",
    description: "Suministros basicos para viajes largos, asedios y expediciones nocturnas.",
    price: 95,
    rarity: "common",
    icon: Coins,
  },
];

const RANKING_PLAYERS: RankingPlayer[] = [
  { name: "Aldric Noctis", faction: "Cuervos del Norte", level: 28, gold: 3420, status: "alive" },
  { name: "Seraphina Voss", faction: "Orden del Sol Marchito", level: 24, gold: 2890, status: "alive" },
  { name: "Thorne Blackwall", faction: "Guardianes del Umbral", level: 21, gold: 2015, status: "dead" },
  { name: "Lyra Duskbane", faction: "Cuervos del Norte", level: 19, gold: 1785, status: "alive" },
  { name: "Marek Hollow", faction: "Mercenarios del Hierro", level: 17, gold: 1490, status: "alive" },
];

const LORE_CHAPTERS = [
  {
    title: "El eclipse eterno",
    summary: "El Sol de Ceniza desaparecio y dejo al reino atrapado en una penumbra constante.",
    content:
      "Hace veinte inviernos, la luz del reino se apago tras un eclipse imposible. Desde entonces, las ciudades nobles se pudren, los juramentos sagrados se quiebran y cada frontera vive pendiente de la siguiente traicion.",
  },
  {
    title: "La Corona de Carbon",
    summary: "Una reliquia antigua ha vuelto a latir bajo las ruinas de Valdren.",
    content:
      "La Corona de Carbon, simbolo del antiguo monarca, ha vuelto a emitir un fulgor oscuro bajo las ruinas de Valdren. Quien la reclame podria reunir las facciones bajo una sola bandera o arrastrarlas a una guerra total entre vivos, traidores y fantasmas.",
  },
];

const STORY_FACTIONS: FactionNote[] = [
  {
    name: "Cuervos del Norte",
    summary: "Exploradores, saqueadores y vigias de las rutas heladas.",
    details:
      "Los Cuervos del Norte dominan la informacion y el movimiento. Sus capitanes comercian secretos, escoltan caravanas y aparecen justo donde el reino se rompe.",
  },
  {
    name: "Orden del Sol Marchito",
    summary: "Caballeros de una fe desgastada que aun intenta sostener el orden.",
    details:
      "Aunque su brillo ya no inspira como antes, la Orden mantiene monasterios, reliquias y juramentos que todavia pesan en la politica del reino.",
  },
  {
    name: "Guardianes del Umbral",
    summary: "Custodios de ruinas, sellos y reliquias que nadie deberia tocar.",
    details:
      "Conocen pasadizos, criptas y viejos pactos. Su influencia es silenciosa, pero cada expedicion relevante termina dependiendo de ellos.",
  },
  {
    name: "Mercenarios del Hierro",
    summary: "Comerciantes de acero, escoltas y soldados a sueldo.",
    details:
      "No sirven a una corona; sirven al contrato. Cuando una guerra no puede declararse en publico, casi siempre se pelea con sus armas.",
  },
];

const WORLD_STATUS = {
  title: "Paz tensa",
  description:
    "Los grandes poderes de Aethelgardia dependen unos de otros para sobrevivir, pero la desconfianza es absoluta y cada alianza es provisional.",
};

const DEMOGRAPHIC_BLOCS: DemographicBloc[] = [
  {
    realm: "El Imperio de Kaelum-Gard",
    epithet: "El Puno del Orden",
    summary: "Un poder militarista que mezcla disciplina imperial, nobleza estratega y fuerza industrial.",
    groups: [
      {
        title: "Casta de mando",
        races: ["Humanos", "Angeles de las Virtudes", "Serafines"],
      },
      {
        title: "Aristocracia y estrategia",
        races: ["Vampiros Sangre Pura", "Altos Elfos", "Elfos de Sangre"],
      },
      {
        title: "Fuerza bruta",
        races: ["Orcos de Hierro", "Minotauros", "Ciclopes", "Gigantes de Fuego"],
      },
      {
        title: "Infraestructura",
        races: ["Golems de Piedra", "Automatas de Vapor", "Enanos de las Montanas"],
      },
    ],
  },
  {
    realm: "El Protectorado de Oakhaven",
    epithet: "El Latido Alquimico",
    summary: "Bosques rituales, bestias guardianas y alquimia viva al servicio del equilibrio natural.",
    groups: [
      {
        title: "Guardianes ancestrales",
        races: ["Elfos Silvanos", "Elfos de la Noche", "Driadas", "Ents", "Kodamas"],
      },
      {
        title: "Cazadores y protectores",
        races: ["Lycans", "Hombres Tigre", "Hombres Leon", "Ursine"],
      },
      {
        title: "Alquimia viviente",
        races: ["Hombres Planta", "Myconids", "Mandragoras", "Ninfas"],
      },
      {
        title: "Mensajeros del viento",
        races: ["Silfos", "Hadas", "Pixies", "Tengus"],
      },
    ],
  },
  {
    realm: "El Nexo de Arcania",
    epithet: "El Prisma del Saber",
    summary: "Un centro de refinamiento, cristal y conocimiento que todos necesitan y nadie controla del todo.",
    groups: [
      {
        title: "Entidades de energia",
        races: ["Ethereals", "Cuerpos de Eter", "Sombras Vivientes"],
      },
      {
        title: "Maestros del cristal",
        races: ["Golems de Cristal", "Enanos Oscuros", "Svirfneblin"],
      },
      {
        title: "Inmortales y hibridos",
        races: ["Liches", "Aasimar", "Tieflings", "Nephilim", "Sucubos e Incubos"],
      },
    ],
  },
  {
    realm: "La Union de los Paramos",
    epithet: "La Senda del Pragmatismo",
    summary: "Rutas, peajes, ingenieria de supervivencia y comercio para un continente que nunca deja de moverse.",
    groups: [
      {
        title: "Ingenieria y comercio",
        races: ["Goblins Ingenieros", "Hobgoblins", "Tanukis", "Kitsunes", "Skaven"],
      },
      {
        title: "Logistica de ruta",
        races: ["Centauros", "Sleipnir Humanoides", "Hombres Jabali", "Hombres Topo"],
      },
      {
        title: "Supervivencia extrema",
        races: ["Trolls", "Gigantes de Escarcha", "Gnolls", "Kobolds"],
      },
    ],
  },
  {
    realm: "Naciones del Agua y Exiliados",
    epithet: "Los reinos sin una sola bandera",
    summary: "Pueblos acuaticos, linajes errantes y razas ominosas que sobreviven en los margenes del continente.",
    groups: [
      {
        title: "Reinos acuaticos",
        races: ["Sirenas", "Tritones", "Nagas", "Cecaelias", "Hombres Tiburon", "Hombres Pulpo"],
      },
      {
        title: "Los ominosos",
        races: ["Dullahan", "Ghouls", "Gorgonas", "Banshees"],
      },
    ],
  },
];

const DIPLOMATIC_TENSIONS: WorldNote[] = [
  {
    title: "Kaelum-Gard vs Oakhaven",
    summary: "El Imperio codicia los bosques y Oakhaven amenaza con arrasarlo todo antes de ceder.",
    details:
      "Kaelum-Gard necesita anexar los bosques para asegurar la resina y consolidar sus lineas de produccion. Oakhaven ha dejado claro que, si es invadido, sacrificara su propio ecosistema antes de permitir una ocupacion imperial.",
  },
  {
    title: "El monopolio de Arcania",
    summary: "Todos detestan depender de Arcania, pero nadie puede reemplazar su refinamiento.",
    details:
      "Los cuatro reinos necesitan el refinamiento arcano de Arcania para sostener su maquinaria, alquimia y armamento. Replicar el proceso sin sus formulas podria terminar en una catastrofe magica comparable a una detonacion nuclear.",
  },
  {
    title: "El peaje de los Paramos",
    summary: "La Union cobra por cada ruta segura y convierte la logistica en poder politico.",
    details:
      "Kaelum-Gard considera los impuestos de la Union una extorsion abierta, pero carece del alcance necesario para patrullar todo el continente. Mientras tanto, la Union se enriquece controlando el movimiento de personas, minerales y suministros.",
  },
];

const COMMON_THREATS: WorldNote[] = [
  {
    title: "La fauna cristalizada",
    summary: "Bestias mutadas por la Fractura atacan rutas, caravanas y lineas de suministro.",
    details:
      "Las mutaciones cristalinas deforman depredadores, corrompen territorios y vuelven impredecible cualquier expedicion. Incluso los grandes reinos deben redirigir recursos para contenerlas.",
  },
  {
    title: "Espionaje industrial",
    summary: "Todas las potencias infiltran agentes en Arcania para robar formulas de refinamiento.",
    details:
      "Nadie soporta la dependencia tecnologica de Arcania. Por eso, espias, saboteadores y facciones clandestinas pelean en la sombra por formulas, prototipos y secretos de laboratorio.",
  },
];

const rarityStyles: Record<
  Rarity,
  { label: string; card: string; badge: string; iconWrap: string }
> = {
  legendary: {
    label: "Legendario",
    card: "border-amber-400/70 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.12)]",
    badge: "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/25",
    iconWrap: "bg-amber-400/15 text-amber-300",
  },
  epic: {
    label: "Epico",
    card: "border-fuchsia-400/55 bg-fuchsia-500/10",
    badge: "bg-fuchsia-400/15 text-fuchsia-200 ring-1 ring-fuchsia-400/25",
    iconWrap: "bg-fuchsia-400/15 text-fuchsia-200",
  },
  rare: {
    label: "Raro",
    card: "border-sky-400/55 bg-sky-500/10",
    badge: "bg-sky-400/15 text-sky-200 ring-1 ring-sky-400/25",
    iconWrap: "bg-sky-400/15 text-sky-200",
  },
  common: {
    label: "Comun",
    card: "border-stone-700 bg-stone-900/80",
    badge: "bg-stone-700/40 text-stone-300 ring-1 ring-stone-600/40",
    iconWrap: "bg-stone-800 text-stone-300",
  },
};

const pageTransition = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.28, ease: "easeOut" as const },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300">
      <main className="mx-auto min-h-screen w-full max-w-md px-4 pb-32 pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            {activeTab === "home" && <HomeSection />}
            {activeTab === "lore" && <LoreSection />}
            {activeTab === "world" && <WorldSection />}
            {activeTab === "market" && <MarketSection />}
            {activeTab === "ranking" && <RankingSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-800/80 bg-stone-950/90 backdrop-blur-xl">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-2 px-3 pt-3 pb-safe">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl border px-2 py-2 text-[10px] font-semibold transition ${
                  isActive
                    ? "border-amber-400/30 bg-amber-500/12 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.12)]"
                    : "border-transparent bg-stone-900/70 text-stone-400"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-amber-400" : "text-stone-500"}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function HomeSection() {
  return (
    <section className="space-y-5">
      <div className="overflow-hidden rounded-[2rem] border border-amber-500/15 bg-stone-900/75 p-6 shadow-2xl shadow-black/30">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
          <Castle className="h-4 w-4" />
          Reino vivo por WhatsApp
        </div>

        <h1 className="text-4xl font-black leading-none text-stone-100">Reino de las Sombras</h1>

        <p className="mt-4 text-sm leading-6 text-stone-300/90">
          Intrigas de corte, guerra entre facciones y reliquias prohibidas en un
          reino donde cada decision puede convertirte en leyenda o condenarte al
          olvido.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <StatCard icon={Users} value="120+" label="Personajes" />
          <StatCard icon={Flame} value="4" label="Facciones" />
          <StatCard icon={Dice5} value="24/7" label="Eventos" />
        </div>

        <a
          href={WHATSAPP_JOIN_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-2xl bg-amber-500 px-4 py-4 text-sm font-extrabold text-stone-950 transition hover:bg-amber-400"
        >
          Unirse al Gremio (WhatsApp)
        </a>
      </div>

      <div className="grid gap-4">
        <div className="rounded-3xl border border-stone-800 bg-stone-900/75 p-5">
          <h2 className="text-lg font-bold text-stone-100">La noche se mueve</h2>
          <p className="mt-2 text-sm leading-6 text-stone-400">
            Participa en asedios, pactos secretos, cacerias y duelos narrativos
            con estetica medieval oscura y progresion competitiva.
          </p>
        </div>

        <div className="rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-400/80">Estado del reino</p>
              <p className="mt-2 text-2xl font-black text-stone-100">Guerra fria</p>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3">
              <Crown className="h-6 w-6 text-amber-400" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            Las coronas vacilan, los gremios acumulan oro y el trono negro atrae
            traiciones en cada frontera.
          </p>
        </div>
      </div>
    </section>
  );
}

function LoreSection() {
  return (
    <section className="space-y-5">
      <header className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
          Lore y reglas
        </p>
        <h2 className="mt-3 text-3xl font-black text-stone-100">Leyes de la penumbra</h2>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          Esta pestana ahora se concentra en lo que mas importa al entrar al rol:
          reglas, historia principal y las facciones narrativas que mueven la
          temporada.
        </p>
      </header>

      <div className="space-y-4">
        <LoreCard
          icon={Skull}
          title="Permadeath"
          description="Si un personaje muere de forma canonica, no regresa. Las decisiones arriesgadas importan y dejan huella real."
        />
        <LoreCard
          icon={Dice5}
          title="Uso de dados"
          description="Las acciones clave, emboscadas y hechizos se resuelven con dados. La suerte influye, pero el contexto narrativo tambien pesa."
        />
        <LoreCard
          icon={ScrollText}
          title="Canon del reino"
          description="Los eventos oficiales alteran alianzas, ciudades, recursos y reputaciones. Todo lo ocurrido puede repercutir en la temporada."
        />
      </div>

      <div className="rounded-[2rem] border border-amber-500/15 bg-stone-900/75 p-6">
        <h3 className="text-xl font-bold text-stone-100">Historia principal</h3>
        <ExpandableText
          lines={4}
          text="Hace veinte inviernos, el Sol de Ceniza desaparecio detras de un eclipse eterno. Desde entonces, el Reino de las Sombras vive dividido entre casas nobles en decadencia, ordenes religiosas quebradas y gremios que comercian con reliquias prohibidas. La Corona de Carbon ha vuelto a latir bajo las ruinas de Valdren, y cada faccion sabe que reclamarla podria definir el destino de toda la temporada."
        />
      </div>

      <div className="space-y-3">
        {LORE_CHAPTERS.map((chapter) => (
          <CollapsibleCard
            key={chapter.title}
            title={chapter.title}
            summary={chapter.summary}
          >
            <p className="text-sm leading-6 text-stone-400">{chapter.content}</p>
          </CollapsibleCard>
        ))}
      </div>

      <div className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
              Facciones del relato
            </p>
            <h3 className="mt-2 text-xl font-bold text-stone-100">Fuerzas en juego</h3>
          </div>
          <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-400">
            <Flame className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {STORY_FACTIONS.map((faction) => (
            <CollapsibleCard
              key={faction.name}
              title={faction.name}
              summary={faction.summary}
            >
              <p className="text-sm leading-6 text-stone-400">{faction.details}</p>
            </CollapsibleCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldSection() {
  return (
    <section className="space-y-5">
      <header className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
          Mundo y geopolitica
        </p>
        <h2 className="mt-3 text-3xl font-black text-stone-100">Aethelgardia</h2>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          Aqui vive el worldbuilding mas amplio: demografia, bloques politicos,
          conflictos diplomaticos y amenazas que condicionan cada campana.
        </p>
      </header>

      <div className="rounded-[2rem] border border-amber-500/15 bg-stone-900/75 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
              Estado del mundo
            </p>
            <h3 className="mt-2 text-2xl font-black text-stone-100">{WORLD_STATUS.title}</h3>
          </div>
          <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-400">
            <Map className="h-5 w-5" />
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-stone-400">{WORLD_STATUS.description}</p>
      </div>

      <div className="space-y-3">
        {DEMOGRAPHIC_BLOCS.map((bloc) => (
          <CollapsibleCard
            key={bloc.realm}
            title={bloc.realm}
            summary={`${bloc.epithet} - ${bloc.summary}`}
          >
            <div className="space-y-4">
              {bloc.groups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-stone-800 bg-stone-950/45 p-4">
                  <h4 className="text-sm font-bold text-stone-100">{group.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-stone-400">
                    {group.races.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </CollapsibleCard>
        ))}
      </div>

      <div className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <h3 className="text-xl font-bold text-stone-100">Tensiones diplomaticas</h3>
        <div className="mt-4 space-y-3">
          {DIPLOMATIC_TENSIONS.map((item) => (
            <CollapsibleCard
              key={item.title}
              title={item.title}
              summary={item.summary}
            >
              <p className="text-sm leading-6 text-stone-400">{item.details}</p>
            </CollapsibleCard>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <h3 className="text-xl font-bold text-stone-100">Amenazas comunes</h3>
        <div className="mt-4 space-y-3">
          {COMMON_THREATS.map((item) => (
            <CollapsibleCard
              key={item.title}
              title={item.title}
              summary={item.summary}
            >
              <p className="text-sm leading-6 text-stone-400">{item.details}</p>
            </CollapsibleCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketSection() {
  return (
    <section className="space-y-5">
      <header className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
          Mercado negro
        </p>
        <h2 className="mt-3 text-3xl font-black text-stone-100">Tesoros y suministros</h2>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          Compra equipo, amuletos y recursos narrativos para fortalecer a tu
          personaje antes de la siguiente campana.
        </p>
      </header>

      <div className="space-y-4">
        {MARKET_ITEMS.map((item) => {
          const Icon = item.icon;
          const style = rarityStyles[item.rarity];

          return (
            <div key={item.name} className={`rounded-[1.75rem] border p-4 ${style.card}`}>
              <div className="flex items-start gap-4">
                <div className={`rounded-2xl p-3 ${style.iconWrap}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-stone-100">{item.name}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-stone-300/85">{item.description}</p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-950/50 px-3 py-2 text-sm font-bold text-amber-300 ring-1 ring-inset ring-amber-500/10">
                    <Coins className="h-4 w-4" />
                    {item.price} de oro
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function RankingSection() {
  return (
    <section className="space-y-5">
      <header className="rounded-[2rem] border border-stone-800 bg-stone-900/75 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400/80">
          Salon de la fama
        </p>
        <h2 className="mt-3 text-3xl font-black text-stone-100">Ranking de jugadores</h2>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          Los campeones del reino se ordenan por nivel, riqueza y supervivencia en
          campanas oficiales.
        </p>
      </header>

      <div className="space-y-4">
        {RANKING_PLAYERS.map((player, index) => {
          const isDead = player.status === "dead";

          return (
            <div
              key={player.name}
              className={`rounded-[1.75rem] border border-stone-800 bg-stone-900/80 p-4 transition ${
                isDead ? "grayscale opacity-80" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-800 text-lg font-black text-amber-300">
                  #{index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-100">{player.name}</h3>
                    {index === 0 && <Crown className="h-5 w-5 text-amber-400" />}
                    {isDead && <Skull className="h-4 w-4 text-stone-400" />}
                  </div>

                  <p className="mt-1 text-sm text-stone-400">{player.faction}</p>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <RankingMetric label="Nivel" value={player.level} />
                    <RankingMetric label="Oro" value={player.gold} />
                    <RankingMetric label="Estado" value={isDead ? "Muerto" : "Vivo"} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-950/65 p-3 text-center">
      <Icon className="mx-auto h-5 w-5 text-amber-400" />
      <p className="mt-2 text-lg font-black text-stone-100">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">{label}</p>
    </div>
  );
}

function LoreCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-stone-800 bg-stone-900/75 p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-400">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-100">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-stone-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function RankingMetric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-950/55 px-3 py-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-stone-200">{value}</p>
    </div>
  );
}

function ExpandableText({
  text,
  lines = 3,
}: {
  text: string;
  lines?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3">
      <p
        className="text-sm leading-7 text-stone-400"
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
        }
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-3 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
      >
        {expanded ? "Ver menos" : "Ver mas"}
      </button>
    </div>
  );
}

function CollapsibleCard({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-[1.75rem] border border-stone-800 bg-stone-900/75 p-5">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-stone-100">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-stone-400">{summary}</p>
        </div>
        <div className="rounded-2xl bg-stone-800 p-3 text-stone-300 transition group-open:rotate-180 group-open:text-amber-300">
          <ChevronDown className="h-5 w-5" />
        </div>
      </summary>
      <div className="mt-4 border-t border-stone-800 pt-4">{children}</div>
    </details>
  );
}
