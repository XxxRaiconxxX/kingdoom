import { Crown, Dice5, Flame, Users } from "lucide-react";
import type { HomeStat, JoinStep, KingdomAnnouncement } from "../types";

export const WHATSAPP_JOIN_URL =
  "https://chat.whatsapp.com/TU-ENLACE-DE-INVITACION";

export const HOME_STATS: HomeStat[] = [
  { value: "120+", label: "Personajes", icon: Users },
  { value: "4", label: "Facciones", icon: Flame },
  { value: "24/7", label: "Eventos", icon: Dice5 },
];

export const KINGDOM_STATUS = {
  eyebrow: "Estado del reino",
  title: "Guerra fria",
  description:
    "Las coronas vacilan, los gremios acumulan oro y el trono negro atrae traiciones en cada frontera.",
  icon: Crown,
};

export const KINGDOM_ANNOUNCEMENTS: KingdomAnnouncement[] = [
  {
    title: "Cronicas del consejo",
    content:
      "Esta semana se actualizan los pactos entre casas y se reabre el paso hacia Valdren.",
  },
  {
    title: "Mercader en ruta",
    content:
      "El mercado negro recibe nuevas reliquias, armaduras pesadas y pociones de apoyo.",
  },
];

export const JOIN_STEPS: JoinStep[] = [
  {
    title: "Entra al gremio",
    description:
      "Usa el acceso directo de WhatsApp para sumarte al grupo y leer los anuncios fijados.",
  },
  {
    title: "Crea tu personaje",
    description:
      "Elige faccion, estilo de combate y motivaciones para encajar dentro del reino.",
  },
  {
    title: "Empieza a rolear",
    description:
      "Participa en eventos, compra equipo y deja huella en la historia oficial.",
  },
];
