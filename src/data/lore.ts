import { Dice5, ScrollText, Skull } from "lucide-react";
import type { LoreChapter, LoreRule, RealmFaction } from "../types";

export const LORE_RULES: LoreRule[] = [
  {
    title: "Permadeath",
    description:
      "Si un personaje muere de forma canonica, no regresa. Las decisiones arriesgadas importan y dejan huella real.",
    icon: Skull,
  },
  {
    title: "Uso de dados",
    description:
      "Las acciones clave, emboscadas y hechizos se resuelven con dados. La suerte influye, pero el contexto narrativo tambien pesa.",
    icon: Dice5,
  },
  {
    title: "Canon del reino",
    description:
      "Los eventos oficiales alteran alianzas, ciudades, recursos y reputaciones. Todo lo ocurrido puede repercutir en la temporada.",
    icon: ScrollText,
  },
];

export const LORE_CHAPTERS: LoreChapter[] = [
  {
    title: "El eclipse eterno",
    summary: "El sol desaparecio y el reino entro en una era de sombras.",
    content:
      "Hace veinte inviernos, el Sol de Ceniza desaparecio detras de un eclipse eterno. Desde entonces, el Reino de las Sombras vive dividido entre casas nobles en decadencia, ordenes religiosas quebradas y gremios que comercian con reliquias prohibidas.",
  },
  {
    title: "La Corona de Carbon",
    summary: "Un simbolo antiguo ha vuelto a encender la ambicion del reino.",
    content:
      "La Corona de Carbon, simbolo del antiguo monarca, ha vuelto a emitir un fulgor oscuro bajo las ruinas de Valdren. Quien la reclame podra unir el reino o desatar una guerra total entre vivos, traidores y fantasmas.",
  },
  {
    title: "La nueva temporada",
    summary: "Eventos, alianzas y comercio clandestino marcan el nuevo ciclo.",
    content:
      "La temporada actual gira en torno al control de rutas, favores politicos y reliquias malditas. Cada faccion intenta ganar poder sin quedar expuesta a la inquisicion o al hambre de la corte.",
  },
];

export const REALM_FACTIONS: RealmFaction[] = [
  {
    name: "Cuervos del Norte",
    motto: "Ven primero, golpea despues.",
    description:
      "Exploradores, rastreadores y estrategas de frontera que dominan el bosque y el espionaje.",
  },
  {
    name: "Orden del Sol Marchito",
    motto: "La fe no muere, se endurece.",
    description:
      "Guerreros y fanaticos que usan antiguas liturgias para mantener el orden por la fuerza.",
  },
  {
    name: "Guardianes del Umbral",
    motto: "Lo sellado no debe abrirse.",
    description:
      "Protectores de reliquias, criptas y secretos que nadie deberia tocar.",
  },
  {
    name: "Mercenarios del Hierro",
    motto: "Toda corona paga peaje.",
    description:
      "Comerciantes armados, escoltas y capitanes que venden acero, rutas y favores.",
  },
];
