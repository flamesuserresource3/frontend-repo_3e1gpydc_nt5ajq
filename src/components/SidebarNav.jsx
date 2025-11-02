import React from 'react';
import { Home, Building2, Users, ChartBar, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Accueil' },
  { icon: Building2, label: 'Biens' },
  { icon: Users, label: 'Leads' },
  { icon: ChartBar, label: 'Analytics' },
  { icon: Settings, label: 'Réglages' },
];

const SidebarNav = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-neutral-200/10 bg-neutral-950/60 backdrop-blur-xl">
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400" />
          <div>
            <p className="text-white font-semibold leading-none">ImmoPro</p>
            <p className="text-xs text-white/60">Agency Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        {navItems.map((item, idx) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.04 * idx }}
            className="w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
          >
            <item.icon className="h-4 w-4 text-white/60 group-hover:text-white" />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto p-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs text-white/70">Astuce</p>
          <p className="text-xs text-white/50 mt-1">
            Utilisez les filtres avancés pour cibler vos leads les plus chauds.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
