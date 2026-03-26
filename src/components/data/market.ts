import { Gem, Shield, Sparkles, Sword } from "lucide-react";
import type { MarketCategory, MarketItem } from "../types";

export const MARKET_CATEGORIES: MarketCategory[] = [
  {
    id: "potions",
    title: "Pociones",
    subtitle: "Breves ventajas en combate, viajes y rituales.",
    icon: Sparkles,
  },
  {
    id: "armors",
    title: "Armaduras",
    subtitle: "Proteccion para campeones, guardianes y exploradores.",
    icon: Shield,
  },
  {
    id: "swords",
    title: "Espadas",
    subtitle: "Acero comun, reliquias nobles y hojas malditas.",
    icon: Sword,
  },
  {
    id: "others",
    title: "Otros",
    subtitle: "Objetos curiosos, suministros y amuletos de ocasion.",
    icon: Gem,
  },
];

export const MARKET_ITEMS: MarketItem[] = [
  {
    category: "potions",
    name: "Pocion de Niebla Roja",
    description:
      "Aumenta la evasion en una escena y deja un aroma a hierro viejo.",
    price: 180,
    rarity: "rare",
    stockStatus: "available",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "potions",
    name: "Elixir del Cuervo",
    description:
      "Recupera fuerzas tras una expedicion y mejora tiradas de percepcion.",
    price: 320,
    rarity: "epic",
    stockStatus: "limited",
    imageUrl:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "armors",
    name: "Coraza del Bastion Negro",
    description:
      "Armadura pesada que absorbe el primer impacto serio de un duelo.",
    price: 940,
    rarity: "epic",
    stockStatus: "limited",
    imageUrl:
      "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "armors",
    name: "Manto del Vigia Gris",
    description:
      "Defensa ligera para patrullas nocturnas y misiones de sigilo.",
    price: 410,
    rarity: "common",
    stockStatus: "available",
    imageUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "swords",
    name: "Espada del Eclipse",
    description:
      "Hoja maldita capaz de ignorar armaduras comunes y sembrar miedo.",
    price: 1250,
    rarity: "legendary",
    stockStatus: "limited",
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "swords",
    name: "Sable de la Marca Ceniza",
    description:
      "Acero rapido con bonificacion narrativa en persecuciones y duelos.",
    price: 560,
    rarity: "rare",
    stockStatus: "available",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "others",
    name: "Sello de Obsidiana",
    description:
      "Amuleto de linaje oscuro que protege de maldiciones durante una escena.",
    price: 780,
    rarity: "epic",
    stockStatus: "available",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "others",
    name: "Raciones del Camino Gris",
    description:
      "Suministros basicos para viajes largos, asedios y expediciones nocturnas.",
    price: 95,
    rarity: "common",
    stockStatus: "sold-out",
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
];
