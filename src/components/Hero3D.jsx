import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Plus } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-neutral-950">
      <Spline
        scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-emerald-400" />
            Interactive • Tech • Futuristic
          </div>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Tableau de bord immobilier — ultra propre, moderne et animé
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl">
            Pilotez vos biens, prospects et performances en temps réel grâce à une interface soignée
            et minimaliste inspirée des meilleurs SaaS.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-white text-sm font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
              <Plus className="h-4 w-4" /> Nouveau bien
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90 text-sm hover:bg-white/10 transition-colors">
              Voir les performances
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
