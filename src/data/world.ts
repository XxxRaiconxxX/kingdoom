import type { DemographicBloc, GeopoliticalNote } from "../types";

export const WORLD_STATUS = {
  title: "Paz tensa",
  description:
    "Los cuatro grandes poderes dependen unos de otros para sobrevivir, pero la desconfianza es absoluta y cualquier error puede romper el equilibrio.",
};

export const DEMOGRAPHIC_BLOCS: DemographicBloc[] = [
  {
    realm: "El Imperio de Kaelum-Gard",
    epithet: "El Puno del Orden",
    groups: [
      {
        title: "Casta de mando",
        races: ["Humanos", "Angeles de las Virtudes", "Serafines"],
      },
      {
        title: "Aristocracia y estrategia",
        races: [
          "Vampiros Sangre Pura",
          "Altos Elfos",
          "Elfos de Sangre",
        ],
      },
      {
        title: "Fuerza bruta",
        races: [
          "Orcos de Hierro",
          "Minotauros",
          "Ciclopes",
          "Gigantes de Fuego",
        ],
      },
      {
        title: "Infraestructura",
        races: [
          "Golems de Piedra",
          "Automatas de Vapor",
          "Enanos de las Montanas",
        ],
      },
    ],
  },
  {
    realm: "El Protectorado de Oakhaven",
    epithet: "El Latido Alquimico",
    groups: [
      {
        title: "Guardianes ancestrales",
        races: [
          "Elfos Silvanos",
          "Elfos de la Noche",
          "Driadas",
          "Ents",
          "Kodamas",
        ],
      },
      {
        title: "Cazadores y protectores",
        races: [
          "Lycans",
          "Hombres Tigre",
          "Hombres Leon",
          "Ursine",
        ],
      },
      {
        title: "Alquimia viviente",
        races: [
          "Hombres Planta",
          "Myconids",
          "Mandragoras",
          "Ninfas",
        ],
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
    groups: [
      {
        title: "Entidades de energia",
        races: ["Ethereals", "Cuerpos de Eter", "Sombras Vivientes"],
      },
      {
        title: "Maestros del cristal",
        races: [
          "Golems de Cristal",
          "Enanos Oscuros",
          "Svirfneblin",
        ],
      },
      {
        title: "Inmortales e hibridos",
        races: [
          "Liches",
          "Aasimar",
          "Tieflings",
          "Nephilim",
          "Sucubos",
          "Incubos",
        ],
      },
    ],
  },
  {
    realm: "La Union de los Paramos",
    epithet: "La Senda del Pragmatismo",
    groups: [
      {
        title: "Ingenieria y comercio",
        races: [
          "Goblins Ingenieros",
          "Hobgoblins",
          "Tanukis",
          "Kitsunes",
          "Skaven",
        ],
      },
      {
        title: "Logistica de ruta",
        races: [
          "Centauros",
          "Sleipnir Humanoides",
          "Hombres Jabali",
          "Hombres Topo",
        ],
      },
      {
        title: "Supervivencia extrema",
        races: [
          "Trolls de Hielo",
          "Trolls de Selva",
          "Gigantes de Escarcha",
          "Gnolls",
          "Kobolds",
        ],
      },
    ],
  },
  {
    realm: "Las Naciones del Agua y Exiliados",
    epithet: "Los Reinos del Borde",
    groups: [
      {
        title: "Reinos acuaticos",
        races: [
          "Sirenas",
          "Tritones",
          "Nagas",
          "Cecaelias",
          "Hombres Tiburon",
          "Hombres Pulpo",
        ],
      },
      {
        title: "Los ominosos",
        races: ["Dullahan", "Ghouls", "Gorgonas", "Banshees"],
      },
    ],
  },
];

export const DIPLOMATIC_TENSIONS: GeopoliticalNote[] = [
  {
    title: "Kaelum-Gard vs. Oakhaven",
    description:
      "El Imperio quiere anexar los bosques para asegurar la resina; Oakhaven amenaza con la destruccion total de su ecosistema si son invadidos.",
  },
  {
    title: "El monopolio de Arcania",
    description:
      "Todos los reinos odian depender del refinamiento de Arcania, pero nadie puede replicarlo sin riesgo de una catastrofe magica.",
  },
  {
    title: "El peaje de los Paramos",
    description:
      "La Union cobra impuestos a todos por transitar sus rutas. Kaelum-Gard lo considera una extorsion, pero no puede patrullar todo el continente.",
  },
];

export const COMMON_THREATS: GeopoliticalNote[] = [
  {
    title: "La fauna cristalizada",
    description:
      "Monstruos mutados por la Fractura atacan las lineas de suministro y alteran la seguridad de las rutas.",
  },
  {
    title: "Espionaje industrial",
    description:
      "Agentes de los cuatro reinos se infiltran en Arcania para robar formulas de refinamiento y romper el equilibrio de poder.",
  },
];
