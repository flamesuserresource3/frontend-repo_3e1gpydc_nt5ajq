import React from 'react';
import SidebarNav from './components/SidebarNav';
import Topbar from './components/Topbar';
import Hero3D from './components/Hero3D';
import DashboardMain from './components/DashboardMain';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <SidebarNav />

        {/* Main area */}
        <div className="flex-1">
          <Topbar />
          <main className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            <Hero3D />
            <DashboardMain />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
