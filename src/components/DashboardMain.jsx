import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Home, Users, Calendar, MapPin } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, delta }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white/60 text-xs">{label}</p>
        <p className="text-white text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
    </div>
    {delta && (
      <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 px-2 py-0.5 text-xs">
        <TrendingUp className="h-3.5 w-3.5" /> {delta}
      </div>
    )}
  </motion.div>
);

const MiniBar = ({ value }) => (
  <div className="h-16 w-full rounded-lg bg-white/[0.06] overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
      style={{ width: `${value}%` }}
    />
  </div>
);

const PropertiesTable = () => {
  const rows = [
    { id: 'AP-204', title: 'Appartement T3 lumineux', city: 'Lyon', price: '389 000€', status: 'En vente' },
    { id: 'MA-118', title: 'Maison contemporaine', city: 'Bordeaux', price: '649 000€', status: 'En négociation' },
    { id: 'ST-077', title: 'Studio rénové', city: 'Paris', price: '279 000€', status: 'Vendu' },
    { id: 'LO-342', title: 'Loft industriel', city: 'Lille', price: '529 000€', status: 'En visite' },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <p className="text-white font-medium">Biens récents</p>
        <p className="text-xs text-white/50">Dernières mises à jour</p>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((r) => (
          <div key={r.id} className="px-4 py-3 grid grid-cols-12 items-center text-sm">
            <div className="col-span-3 flex items-center gap-2 text-white">
              <Home className="h-4 w-4 text-white/60" /> {r.title}
            </div>
            <div className="col-span-3 flex items-center gap-1 text-white/80">
              <MapPin className="h-4 w-4 text-white/50" /> {r.city}
            </div>
            <div className="col-span-2 text-white/80">{r.id}</div>
            <div className="col-span-2 text-white">{r.price}</div>
            <div className="col-span-2">
              <span className={`text-xs px-2 py-1 rounded-full border ${
                r.status === 'Vendu'
                  ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10'
                  : r.status === 'En négociation'
                  ? 'border-yellow-500/30 text-yellow-300 bg-yellow-500/10'
                  : r.status === 'En visite'
                  ? 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10'
                  : 'border-white/15 text-white/80 bg-white/5'
              }`}>{r.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pipeline = () => {
  const stages = [
    { label: 'Nouveaux leads', value: 42 },
    { label: 'Qualifiés', value: 68 },
    { label: 'Visites', value: 55 },
    { label: 'Offres', value: 32 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between">
        <p className="text-white font-medium">Pipeline commercial</p>
        <Calendar className="h-4 w-4 text-white/60" />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stages.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-xs text-white/70 mb-2">
              <span>{s.label}</span>
              <span>{s.value}%</span>
            </div>
            <MiniBar value={s.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardMain = () => {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={Home} label="Biens actifs" value="128" delta="+12% ce mois-ci" />
        <StatCard icon={Users} label="Leads" value="972" delta="+8%" />
        <StatCard icon={Calendar} label="Visites planifiées" value="34" />
        <StatCard icon={TrendingUp} label="Taux de conversion" value="4.7%" />
      </div>

      {/* Lists & Pipeline */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <PropertiesTable />
        </div>
        <div>
          <Pipeline />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
