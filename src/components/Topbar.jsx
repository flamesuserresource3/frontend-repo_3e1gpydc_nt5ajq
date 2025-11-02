import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Topbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-neutral-950/60 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                placeholder="Rechercher un bien, un contact, une ville..."
                className="w-full rounded-lg bg-white/[0.06] pl-9 pr-3 py-2 text-sm text-white placeholder-white/40 outline-none border border-white/10 focus:border-emerald-400/40"
              />
            </div>
          </motion.div>
          <motion.button whileTap={{ scale: 0.98 }} className="relative rounded-lg p-2 hover:bg-white/5 text-white/80">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 text-[10px] text-white grid place-items-center">4</span>
          </motion.button>
          <motion.div whileTap={{ scale: 0.98 }} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-emerald-500 to-cyan-400" />
            <div className="hidden sm:block">
              <p className="text-xs text-white/70 leading-none">Bonjour,</p>
              <p className="text-sm text-white font-medium leading-tight">Camille</p>
            </div>
            <User className="h-4 w-4 text-white/60" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
