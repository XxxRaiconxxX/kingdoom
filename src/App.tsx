import React, { useState } from 'react';
import { ScrollText, Store, Trophy, Home as HomeIcon, Sword, Shield, Coins, Users, Skull, Crown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Mock Data ---
const MARKET_ITEMS = [
  { id: 1, name: 'Espada de Acero Valyrio', desc: 'Un arma forjada con magia antigua. +50 Ataque.', price: 1500, icon: Sword, rarity: 'legendary' },
  { id: 2, name: 'Armadura de Escamas de Dragón', desc: 'Inmune al fuego y ataques básicos. +100 Defensa.', price: 2000, icon: Shield, rarity: 'epic' },
  { id: 3, name: 'Veneno de Basilisco', desc: 'Mata lentamente al objetivo. Uso único.', price: 500, icon: Skull, rarity: 'rare' },
  { id: 4, name: 'Título de Nobleza Falso', desc: 'Te permite entrar a los distritos altos sin ser cuestionado.', price: 800, icon: ScrollText, rarity: 'rare' },
  { id: 5, name: 'Poción de Sangre', desc: 'Restaura tus heridas instantáneamente.', price: 100, icon: Coins, rarity: 'common' },
];

const RANKING_PLAYERS = [
  { id: 1, name: 'Lord Arthur', faction: 'Los Leones', level: 45, gold: 12500, status: 'alive' },
  { id: 2, name: 'Sir Lancelot', faction: 'Los Leones', level: 42, gold: 8300, status: 'alive' },
  { id: 3, name: 'Silas el Mercader', faction: 'Gremio de Sombras', level: 30, gold: 25000, status: 'alive' },
  { id: 4, name: 'Grom el Sanguinario', faction: 'Bárbaros del Norte', level: 38, gold: 1200, status: 'alive' },
  { id: 5, name: 'Eliza', faction: 'Gremio de Sombras', level: 25, gold: 4500, status: 'dead' },
];

// --- Components ---

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 pb-24"
    >
      <div className="text-center space-y-4 py-8">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-amber-500 tracking-wider">
          Reino de las Sombras
        </h1>
        <p className="text-stone-400 text-sm md:text-base max-w-md mx-auto px-4">
          Un mundo de traición, magia y acero. Forja tu destino en el rol de WhatsApp más inmersivo.
        </p>
      </div>

      <div className="px-4">
        <a 
          href="#" 
          className="flex items-center justify-center gap-2 w-full bg-amber-700 hover:bg-amber-600 text-white py-4 rounded-xl font-serif text-lg font-bold transition-colors shadow-[0_0_15px_rgba(180,83,9,0.5)]"
        >
          <MessageCircle size={24} />
          Unirse al Gremio (WhatsApp)
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl text-center space-y-2">
          <Users className="mx-auto text-amber-500" size={32} />
          <h3 className="font-serif font-bold text-stone-200">50+ Jugadores</h3>
          <p className="text-xs text-stone-500">Activos diariamente</p>
        </div>
        <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl text-center space-y-2">
          <Sword className="mx-auto text-amber-500" size={32} />
          <h3 className="font-serif font-bold text-stone-200">Sistema de Combate</h3>
          <p className="text-xs text-stone-500">Dados y estadísticas</p>
        </div>
      </div>
    </motion.div>
  );
}

function Lore() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 px-4 pb-24"
    >
      <h2 className="font-serif text-3xl font-bold text-amber-500 text-center pt-6">El Lore</h2>
      
      <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-xl space-y-4">
        <h3 className="font-serif text-xl text-stone-200 border-b border-stone-800 pb-2">La Caída del Rey</h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          Hace cien años, el Rey Loco fue derrocado, dejando el reino fracturado. Ahora, tres facciones principales luchan por el control de la capital, mientras en las sombras, el mercado negro prospera y los asesinos dictan quién vive un día más.
        </p>
      </div>

      <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-xl space-y-4">
        <h3 className="font-serif text-xl text-stone-200 border-b border-stone-800 pb-2">Reglas Básicas</h3>
        <ul className="text-stone-400 text-sm space-y-3 list-disc pl-4">
          <li>Respeta el turno de rol de los demás.</li>
          <li>Las acciones de combate se deciden mediante tiradas de dados (bot en el grupo).</li>
          <li>La muerte de un personaje es permanente (Permadeath).</li>
          <li>El metagaming está estrictamente prohibido.</li>
        </ul>
      </div>
    </motion.div>
  );
}

function Market() {
  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'legendary': return 'text-amber-500 border-amber-500/30 bg-amber-500/5';
      case 'epic': return 'text-purple-500 border-purple-500/30 bg-purple-500/5';
      case 'rare': return 'text-blue-400 border-blue-400/30 bg-blue-400/5';
      default: return 'text-stone-300 border-stone-800 bg-stone-900/50';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 px-4 pb-24"
    >
      <div className="text-center pt-6 space-y-2">
        <h2 className="font-serif text-3xl font-bold text-amber-500">Mercado Negro</h2>
        <p className="text-stone-500 text-sm">Solo para aquellos con el oro suficiente...</p>
      </div>

      <div className="space-y-4">
        {MARKET_ITEMS.map((item) => (
          <div key={item.id} className={`p-4 rounded-xl border ${getRarityColor(item.rarity)} flex gap-4 items-start`}>
            <div className="p-3 bg-stone-950 rounded-lg shrink-0">
              <item.icon size={24} />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-serif font-bold text-stone-200">{item.name}</h3>
                <span className="flex items-center gap-1 text-amber-500 font-mono text-sm font-bold">
                  {item.price} <Coins size={14} />
                </span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Ranking() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 px-4 pb-24"
    >
      <div className="text-center pt-6 space-y-2">
        <h2 className="font-serif text-3xl font-bold text-amber-500">Salón de la Fama</h2>
        <p className="text-stone-500 text-sm">Los más poderosos del reino</p>
      </div>

      <div className="bg-stone-900/80 border border-stone-800 rounded-xl overflow-hidden">
        {RANKING_PLAYERS.map((player, index) => (
          <div 
            key={player.id} 
            className={`p-4 flex items-center gap-4 ${index !== RANKING_PLAYERS.length - 1 ? 'border-b border-stone-800' : ''} ${player.status === 'dead' ? 'opacity-50 grayscale' : ''}`}
          >
            <div className="w-8 text-center font-serif font-bold text-stone-500">
              {index === 0 ? <Crown className="mx-auto text-amber-500" size={24} /> : `#${index + 1}`}
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-stone-200 flex items-center gap-2">
                {player.name}
                {player.status === 'dead' && <Skull size={14} className="text-red-500" />}
              </h3>
              <p className="text-xs text-stone-500">{player.faction}</p>
            </div>
            <div className="text-right space-y-1">
              <div className="text-xs font-bold text-stone-300">Nvl {player.level}</div>
              <div className="text-xs text-amber-500 flex items-center justify-end gap-1">
                {player.gold} <Coins size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home key="home" />;
      case 'lore': return <Lore key="lore" />;
      case 'market': return <Market key="market" />;
      case 'ranking': return <Ranking key="ranking" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-amber-900 selection:text-amber-100">
      
      {/* Main Content Area */}
      <main className="max-w-md mx-auto min-h-screen relative">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-stone-950/90 backdrop-blur-md border-t border-stone-800 pb-safe z-50">
        <div className="max-w-md mx-auto flex justify-around items-center p-2">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activeTab === 'home' ? 'text-amber-500' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <HomeIcon size={24} />
            <span className="text-[10px] font-serif mt-1">Inicio</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('lore')}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activeTab === 'lore' ? 'text-amber-500' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <ScrollText size={24} />
            <span className="text-[10px] font-serif mt-1">Lore</span>
          </button>

          <button 
            onClick={() => setActiveTab('market')}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activeTab === 'market' ? 'text-amber-500' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <Store size={24} />
            <span className="text-[10px] font-serif mt-1">Mercado</span>
          </button>

          <button 
            onClick={() => setActiveTab('ranking')}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activeTab === 'ranking' ? 'text-amber-500' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <Trophy size={24} />
            <span className="text-[10px] font-serif mt-1">Ranking</span>
          </button>
        </div>
      </nav>
      
      {/* Global CSS for safe area (iPhone bottom bar) */}
      <style dangerouslySetInnerHTML={{__html: `
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `}} />
    </div>
  );
}
