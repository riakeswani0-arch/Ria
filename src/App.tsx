/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Map, 
  GalleryVerticalEnd, 
  Users, 
  Activity, 
  Search, 
  Bell, 
  TriangleAlert, 
  Settings, 
  Plus, 
  LogOut,
  Home,
  TreePine,
  GlassWater,
  Hospital,
  ChevronRight,
  Stethoscope,
  Heart,
  Quote,
  Flame,
  MessageSquare,
  Coffee,
  BrainCircuit,
  Maximize2,
  Minimize2,
  Layers,
  Rotate3d,
  BookOpen,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

type ScreenId = 'EXPLORER' | 'OR_GALLERY' | 'STAFF_HUB' | 'VITALS' | 'MEREDITH_HOUSE' | 'DEREK_TRAILER' | 'JOE_BAR' | 'GSM_MEMORIAL';

interface FeedItemProps {
  type: 'danger' | 'info' | 'success' | 'warning';
  title: string;
  subtitle: string;
  time: string;
  description: string;
  icon: React.ReactNode;
  actions?: { label: string; primary?: boolean }[];
}

// --- Components ---

const Sidebar = ({ currentScreen, setScreen }: { currentScreen: ScreenId, setScreen: (s: ScreenId) => void }) => {
  const menuItems = [
    { id: 'EXPLORER', label: 'Explorer', icon: <Map className="w-5 h-5" /> },
    { id: 'OR_GALLERY', label: 'OR Gallery', icon: <GalleryVerticalEnd className="w-5 h-5" /> },
    { id: 'STAFF_HUB', label: 'Staff Hub', icon: <Users className="w-5 h-5" /> },
    { id: 'VITALS', label: 'Vitals', icon: <Activity className="w-5 h-5" /> },
  ];

  const secondaryItems = [
    { id: 'MEREDITH_HOUSE', label: "Meredith's House", icon: <Home className="w-5 h-5" /> },
    { id: 'DEREK_TRAILER', label: "Derek's Trailer", icon: <TreePine className="w-5 h-5" /> },
    { id: 'JOE_BAR', label: "Joe's Emerald City Bar", icon: <GlassWater className="w-5 h-5" /> },
    { id: 'GSM_MEMORIAL', label: "Grey Sloan Memorial", icon: <Hospital className="w-5 h-5" /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 glass-panel border-r border-white/10 flex flex-col py-8 z-50 overflow-y-auto">
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-sky-500/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNX8LoL3Hf3D_IGMTxOC1OVmHUv_aZ5A5F0bwSYfJYT7gzwcEKZxAlHYsaxjEsIIgFreXOGBep9tHr35hUaTd7x3GePACDNWU9rK0lXnDC-RFMTFQhMXrTUBwOddsWnBVVpNC-kdWK9bhX_O8erRNTuSOSbFjtI9dt2M6G4N2PaeyLPP-gMkCBz18hj_LrPLblx7EupUADiqJEVlUS24jG15Jx-Rp6K8bqhM0MsEJ2u_OwXS7FAwCfWTuYh8frPEoBH-8rNT3uXss" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-secondary font-bold font-mono text-xs uppercase tracking-widest">Resident Portal</h2>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Off-Duty Status</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="px-4 mb-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Navigation</p>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id as ScreenId)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-300 font-mono text-xs uppercase tracking-wider ${
              currentScreen === item.id 
                ? 'bg-sky-500/10 text-sky-400 border-r-4 border-sky-500 surgical-glow' 
                : 'text-slate-400 hover:text-sky-200 hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

        <div className="px-4 mt-8 mb-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Locations</p>
        </div>
        {secondaryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id as ScreenId)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-300 font-mono text-xs uppercase tracking-wider ${
              currentScreen === item.id 
                ? 'bg-sky-500/10 text-sky-400 border-r-4 border-sky-500 surgical-glow' 
                : 'text-slate-400 hover:text-sky-200 hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto pt-4 border-t border-white/10 space-y-2">
        <button className="w-full py-4 bg-sky-500 text-[#121318] font-mono font-bold text-xs uppercase tracking-widest rounded-md hover:bg-sky-400 active:scale-95 transition-all surgical-glow">
          Emergency Scrub-In
        </button>
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-sky-200 transition-all font-mono text-[10px] uppercase tracking-widest">
            <Settings className="w-4 h-4" />
            <span>System Settings</span>
          </button>
          <button className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-sky-200 transition-all font-mono text-[10px] uppercase tracking-widest">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const TopBar = () => {
  return (
    <header className="fixed top-0 right-0 left-72 h-16 glass-panel border-b border-white/10 flex justify-between items-center px-8 z-40">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold font-serif uppercase text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">GSM OS V2.4</span>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search intercepted comms..." 
            className="bg-white/5 border-none focus:ring-1 focus:ring-sky-500 rounded-full pl-10 pr-4 py-1.5 text-sm w-64 placeholder:text-slate-500 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-slate-400">
          <button className="hover:bg-white/5 p-2 rounded-full transition-all active:scale-95"><Bell className="w-5 h-5" /></button>
          <button className="hover:bg-white/5 p-2 rounded-full transition-all active:scale-95 text-error"><TriangleAlert className="w-5 h-5" /></button>
          <button className="hover:bg-white/5 p-2 rounded-full transition-all active:scale-95"><Settings className="w-5 h-5" /></button>
        </div>
        <div className="h-10 w-10 rounded-full border border-sky-500/30 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM6y5fvUP27lg8-aKBs8sXdCdU1jc5cL6fEGdh3glCk0RaohY30DoWFbLZUxS92cAvH5XXsm17oFiToun2PY9KWuY1g8cZxw3UFukW_jUt8Hg9gS748StE4bx662mKfC7lijvWhNKsDsUlUVvYCAg8tSo4L9i-oNC3tPtgZ-hjDBIBB-ylm5-KUrYWuaMrkRwrNEV4W3H0w-GP4piQN6qeokAFO1ppPWNX0Okf803tnJimy34XVA98epqHN9IEuXYn98t0jw24qX0" 
            className="w-full h-full object-cover" 
            alt="User" 
          />
        </div>
      </div>
    </header>
  );
};

const DashboardScreen = () => {
  const feeds: FeedItemProps[] = [
    {
      type: 'danger',
      title: '911 ER NOW!',
      subtitle: 'Incoming: Multi-Vehicle Collision',
      time: '02:14:15 AM',
      description: 'Incoming ETA 4 mins. 3 Red, 2 Yellow. All residents report to trauma bays immediately. No exceptions.',
      icon: <TriangleAlert className="w-6 h-6" />,
      actions: [{ label: 'Scrub In', primary: true }, { label: 'Mute Channel' }]
    },
    {
      type: 'secondary',
      title: 'Intercepted: Elevator 4',
      subtitle: `"She's actually taking the Avery grant?"`,
      time: '02:08:42 AM',
      description: '"...I heard it from Bailey\'s intern. Seattle won\'t be the same if she leaves. Grey Sloan is literally her name."',
      icon: <MessageSquare className="w-6 h-6" />,
      actions: [{ label: 'Trace Source', primary: true }, { label: 'Delete Log' }]
    } as any,
    {
      type: 'info',
      title: 'System: Neuro-X calibration',
      subtitle: 'Calibration Complete',
      time: '01:55:22 AM',
      description: "OR 2 Neuro-Suite is now online. Shepherd's mapping protocol loaded. Sub-millimeter precision confirmed.",
      icon: <BrainCircuit className="w-6 h-6" />,
      actions: [{ label: 'View Feed', primary: true }]
    },
    {
      type: 'neutral',
      title: 'Pager: Inter-Dept',
      subtitle: 'Coffee run for Chief',
      time: '01:40:10 AM',
      description: 'Whoever is near Joe\'s—three double-shot lattes. Bring them to the board room. Weber is losing his patience.',
      icon: <Coffee className="w-6 h-6" />,
      actions: [{ label: 'Dismiss' }]
    } as any
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-12">
      <section className="grid grid-cols-4 gap-6">
        {[
          { label: 'Live Channels', value: '142', color: 'text-sky-400' },
          { label: 'Intercept Rate', value: '98.2%', color: 'text-sky-400' },
          { label: 'Active Trauma', value: '03', color: 'text-tertiary-container' },
          { label: 'Server Latency', value: '12ms', color: 'text-sky-400' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-lg flex flex-col gap-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">{stat.label}</span>
            <span className={`font-data text-2xl font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </section>

      <div className="space-y-6">
        {feeds.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className={`glass-panel p-6 rounded-xl border-l-4 flex gap-6 items-start ${
              item.type === 'danger' ? 'border-error shadow-[0_0_15px_-5px_rgba(255,180,171,0.3)]' : 
              item.type === 'info' ? 'border-sky-500' : 
              'border-slate-700'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              item.type === 'danger' ? 'bg-error-container/20 text-error animate-pulse' : 
              item.type === 'info' ? 'bg-sky-500/10 text-sky-400' : 
              'bg-white/5 text-slate-500'
            }`}>
              {item.icon}
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center">
                <span className={`font-mono text-[10px] uppercase tracking-widest ${
                  item.type === 'danger' ? 'text-error' : 'text-slate-500'
                }`}>{item.title}</span>
                <span className="font-mono text-[10px] text-slate-500">{item.time}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-on-surface">{item.subtitle}</h3>
              <p className="text-on-surface-variant leading-relaxed italic">{item.description}</p>
              {item.actions && (
                <div className="flex gap-4 pt-2">
                  {item.actions.map((action, ai) => (
                    <button 
                      key={ai}
                      className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest rounded transition-all ${
                        action.primary 
                          ? 'bg-secondary-container text-white hover:brightness-125' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ResidentPortalScreen = ({ type }: { type: 'MEREDITH' | 'DEREK' }) => {
  const isDerek = type === 'DEREK';
  const heroImg = isDerek 
    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBZXHWh25fWSgEfXbqtYan8XGxYNXXSJ8y7DSbeseHIQCGCj5blzihz6HeKYT7vyuBdwxj-_mpzBHNZxyzD5TUvGOpao-NiiXC_93COD3U-vYvOwfP-n6OdMIkbzkBW_vtujEzCvyQlxla4miJHXW6Qq3lgfyuZ1Y10Giww5d9wvbtxBm3MVlAZQ0IIG5gQoMfe4hSfkc_0Pt80YjFdtHu6P9vq4LUU5vAK3X_W2TIWqni8zvD5SXY_rfS9diw0dE4I3ER6-g-hEcY"
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuA627UUJQDP7Ysz7KWd-4MpuIybShu5S8rsv07jbSy8UfQVnG0L966HkreJGMPMXw-aFVO3irxP5LInxObR6h1bC4Z6Iu73KTksOvCYf3MXSnLb8xJoqBp99aMI2ppOFYtWQvX447JhOVAlNyY5WLS6q1ieE5rPZb-68EdOJz9q5SxSmaI4QqnNVDGyxI1cHFmB6cCajp49EXmH6BPKfg7GcePdUmwB6MkH3tLzUYePp951sYUqGVo8fdUGt3rO7Wf05tArnkeeTbI";

  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] w-full overflow-hidden">
        <img src={heroImg} className="w-full h-full object-cover brightness-[0.4] scale-105" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-[0.2em]">
              ACTIVE LOCATION: {isDerek ? 'VASHON ISLAND, WA' : 'SEATTLE, WA'}
            </span>
            <h1 className="font-serif text-5xl font-bold text-white">
              {isDerek ? "Derek Shepherd's Sanctuary" : "Meredith Grey's House"}
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
              {isDerek 
                ? "A quiet place for neurosurgical breakthroughs and the architectural blueprint of 'The Dream House'."
                : "The silence is clinical. Between shifts at Grey Sloan, these walls hold the weight of legacies, unfinished letters, and the relentless pulse of a pager."
              }
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary px-8 py-3 rounded-lg font-bold text-on-primary hover:bg-sky-200 transition-all flex items-center gap-2">
              Scrub Out <LogOut className="w-4 h-4" />
            </button>
            <button className="glass-panel px-8 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-sky-400 font-bold transition-all">
              View Vitals
            </button>
          </div>
        </div>
      </section>

      <section className="px-12 py-12 -mt-16 relative z-10 grid grid-cols-12 gap-8">
        <div className="col-span-4 glass-panel rounded-xl p-8 flex flex-col gap-6 group cursor-pointer hover:border-sky-500/50 transition-all">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">THE GREY LEGACY</span>
              <h3 className="font-serif text-2xl font-bold text-on-surface">Ellis' Shadow</h3>
            </div>
            <Quote className="w-8 h-8 text-sky-500/30" />
          </div>
          <p className="text-on-surface-variant italic leading-relaxed">"The carousel never stops turning. You just have to learn how to ride."</p>
          <div className="aspect-square bg-surface-container-highest rounded-lg overflow-hidden relative opacity-40 group-hover:opacity-80 transition-all">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB02b_XISR2juHliQgJJyeeU-u6RDKT4_QvLJO2hNubWWxFyN6CZvw9VlfaYfkrArztWJsrXeH7X1Jc5k9Fur_tAzbGTHRmYQMW5lP8eNV7ysqB9VMdXKIFW8C3e1FboShwbxLRqzp858KNa-h1FTGC9IIXcy3o3Ptcl92LgjpKYp1WSa4QOXWw2SMVmJNw65QBtitjH1eJr92rgGoEdTP22N1osi5qVUThBvxcbx5_erpTRQGai8JXH1nYY9dpAnyVpxepTnTNL50" 
              className="w-full h-full object-cover" 
              alt="Legacy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        <div className="col-span-8 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl border-l-2 border-sky-500 space-y-6">
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">CURRENT RESEARCH</span>
                <BookOpen className="w-5 h-5 text-sky-400" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-on-surface">Annals of Surgery</h4>
              <p className="text-on-surface-variant text-sm border-l border-white/10 pl-4 py-1 italic">Bookmarked: "Cellular Reprogramming and the Future of Oncology." Coffee stains mark page 412.</p>
              <div className="space-y-2 pt-4">
                <div className="flex justify-between text-[10px] font-mono text-sky-400">
                  <span>READ PROGRESS</span>
                  <span>65%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-sky-400" />
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-xl border-l-2 border-tertiary space-y-6">
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-tertiary uppercase tracking-widest">POST-SHIFT PROTOCOL</span>
                <GlassWater className="w-5 h-5 text-tertiary" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-on-surface">The Antidote</h4>
              <p className="text-on-surface-variant text-sm border-l border-white/10 pl-4 py-1 italic">Don Julio on ice. The only medicine that doesn't require a signature.</p>
              <div className="flex -space-x-2 pt-4">
                {['MG', 'CY'].map((u, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-background flex items-center justify-center text-[10px] font-bold text-slate-300">
                    {u}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-xl grid grid-cols-3 gap-8">
             {[
               { label: 'LAST SHIFT DURATION', value: '36.5', unit: 'HRS' },
               { label: 'COFFEE INTAKE', value: '09', unit: 'CUPS' },
               { label: 'SURGICAL SUCCESS', value: '100', unit: '%', secondary: true },
             ].map((stat, i) => (
               <div key={i} className="space-y-1">
                 <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</p>
                 <p className={`font-data text-4xl font-bold ${stat.secondary ? 'text-sky-400' : 'text-on-surface'}`}>
                   {stat.value} <span className="text-sm font-normal text-slate-500">{stat.unit}</span>
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ExplorerScreen = () => {
  return (
    <div className="h-screen w-full relative grid-pattern overflow-hidden">
      {/* Sidebar stats */}
      <div className="absolute top-8 left-8 z-20 space-y-4">
        <div className="glass-panel p-6 rounded-xl space-y-4 w-64">
          <h2 className="text-sky-400 font-mono text-[10px] uppercase tracking-[0.2em]">HOSPITAL HIERARCHY</h2>
          <div className="space-y-3">
            {[
              { label: 'Surgical Wing', floor: 'FLOOR 4', active: true },
              { label: 'Trauma Center', floor: 'FLOOR 2' },
              { label: 'Neuro Unit', floor: 'FLOOR 5' },
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center text-xs ${item.active ? 'opacity-100' : 'opacity-40'}`}>
                <span className="font-medium">{item.label}</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[8px] ${item.active ? 'bg-sky-500/20 text-sky-400' : 'bg-white/5 text-slate-500'}`}>
                  {item.floor}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel p-6 rounded-xl w-64 flex items-center gap-4 border-l-4 border-sky-500">
           <div className="space-y-1">
             <h2 className="text-sky-400 font-mono text-[10px] uppercase tracking-widest">LIVE METRICS</h2>
             <div className="flex items-baseline gap-2">
               <span className="font-data text-3xl font-bold text-sky-400">88%</span>
               <span className="text-[8px] text-slate-500 uppercase font-mono">Occupancy</span>
             </div>
           </div>
        </div>
      </div>

      {/* Map View */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="isometric-view w-[800px] h-[600px] relative pointer-events-auto">
          {/* Grid lines SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Floor Layers */}
          <div className="relative w-full h-full">
            {/* Lower Floor */}
            <div className="absolute inset-0 border border-white/5 bg-white/5 translate-y-32 scale-90 opacity-40 rounded-[2rem]"></div>
            
            {/* Main Floor */}
            <div className="absolute inset-0 border-2 border-sky-500/30 bg-sky-900/10 backdrop-blur-sm rounded-[2rem] shadow-2xl flex items-center justify-center">
               <div className="absolute top-8 right-8 text-slate-500 font-mono text-[10px] uppercase tracking-widest">Level 04: Surgical Services</div>
               
               {/* Hotspots */}
               <div className="absolute top-1/3 left-1/4">
                 <div className="w-4 h-4 bg-sky-500 rounded-full animate-ping absolute" />
                 <div className="w-4 h-4 bg-sky-400 rounded-full border-2 border-white relative cursor-pointer group">
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 glass-panel rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none -rotate-45" style={{ transform: 'rotateZ(45deg) rotateX(-45deg) translate(-50%, -100%)' }}>
                       <p className="text-[8px] font-mono text-sky-400 uppercase mb-1">CRITICAL STATUS</p>
                       <p className="text-xs font-serif font-bold">Operating Room 2</p>
                       <div className="flex gap-2 mt-2 items-center">
                         <div className="w-6 h-6 rounded-full bg-slate-700" />
                         <span className="text-[10px] text-slate-400">Dr. Grey Scrubbing in...</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Controls */}
      <div className="absolute bottom-24 right-8 flex flex-col gap-3">
        {[<Maximize2 className="w-4 h-4" />, <Minimize2 className="w-4 h-4" />, <Layers className="w-4 h-4" />, <Rotate3d className="w-4 h-4" />].map((icon, i) => (
          <button key={i} className="w-12 h-12 glass-panel rounded-lg flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-slate-950 transition-all surgical-glow shadow-xl">
            {icon}
          </button>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 glass-panel border-t border-white/10 flex items-center px-12 gap-12">
        <div className="flex items-center gap-4">
          <Heart className="w-5 h-5 text-sky-500" />
          <div className="space-y-0.5">
            <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">System Load</p>
            <p className="font-data text-lg text-sky-400">OPTIMAL</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <TriangleAlert className="w-5 h-5 text-tertiary" />
          <div className="space-y-0.5">
            <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">ER INFLOW</p>
            <p className="font-data text-lg text-on-surface">12 / HR</p>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-6">
           <div className="text-right space-y-0.5">
             <p className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">Active Surgeries</p>
             <p className="font-data text-lg text-on-surface">04</p>
           </div>
           <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
             <div className="w-[85%] h-full bg-sky-500" />
           </div>
        </div>
      </div>
    </div>
  );
};

const BarScreen = () => {
  return (
    <div className="min-h-screen">
      <section className="h-[400px] relative overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOv0ppNjdPU18prJtQc321t43vJymssEwksAFWny6_vmogTRKf5xB-rzqWWbqZmLw3JYaO9N1wraSHs9ckNOAqIPHzm6oSS1x_wQFcUSwATbpFe7BKUrfbyeDbEYWWJBDkWo5yWNs-U0USNF3VnOwljdaWw1t2XWDF5Jv6_Avg89oXB1vfUUzKpIVFh354jpbb0VcHspcgN4a4ydAg7r9tsAP_dbNaSWO70PgapXNujHBI5BYQeML4iRq4d_EbgcG35pBv3P3bOAU" 
          className="w-full h-full object-cover brightness-50" 
          alt="Bar" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 space-y-4">
          <h1 className="font-serif text-5xl font-bold text-secondary neon-pulse">Joe's Emerald City Bar</h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">Where the surgeons bleed, vent, and occasionally forget the Hippocratic Oath for a round of shots.</p>
        </div>
        <div className="absolute top-8 right-8">
           <div className="bg-error/10 text-error border border-error/30 px-4 py-1 rounded-full flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-error animate-pulse" />
             <span className="font-mono text-[8px] uppercase tracking-widest">CRITICAL DECOMPRESSION IN PROGRESS</span>
           </div>
        </div>
      </section>

      <div className="px-12 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-8 space-y-8">
          <div className="glass-panel p-10 rounded-xl surgical-glow">
            <div className="flex justify-between items-end mb-10 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">BAR_INVENTORY_v2.4</span>
                <h2 className="font-serif text-3xl font-bold text-on-surface">The 'Surgical Precision' Shot Menu</h2>
              </div>
              <span className="font-data text-3xl text-sky-400">24:00</span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              {[
                { name: 'The Whipple', desc: 'Complex, messy, takes 12 hours to recover from.', price: '$14', icon: <Stethoscope className="w-5 h-5 text-sky-400" /> },
                { name: 'The Craniotomy', desc: 'A sharp hit that gets straight into your head.', price: '$12', icon: <TriangleAlert className="w-5 h-5 text-sky-400" /> },
                { name: 'Code Blue', desc: 'Blue Curaçao with a kick that restarts the heart.', price: '$10', icon: <Activity className="w-5 h-5 text-sky-400" /> },
                { name: 'The Appy', desc: 'Routine, fast, and surprisingly necessary.', price: '$9', icon: <Info className="w-5 h-5 text-sky-400" /> },
              ].map((shot, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-white/5 pb-4 hover:bg-white/5 transition-all">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 glass-panel rounded flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                      {shot.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-sans font-bold text-secondary text-sm">{shot.name}</h3>
                      <p className="text-[10px] text-slate-500 max-w-[180px]">{shot.desc}</p>
                    </div>
                  </div>
                  <span className="font-data text-sky-400 font-bold">{shot.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-slate-500">BLOOD ALCOHOL ESTIMATE: 0.02%</span>
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="w-1/4 h-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,1)]" />
                </div>
              </div>
              <button className="bg-secondary-container px-8 py-2 rounded-lg font-bold text-white hover:brightness-125 transition-all surgical-glow">
                ORDER NEXT ROUND
              </button>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Users className="w-48 h-48" />
             </div>
             <div className="space-y-1 mb-8">
               <span className="font-mono text-[10px] text-tertiary uppercase tracking-widest">ENCRYPTED_LOGS // BOOTH_4</span>
               <h2 className="font-serif text-3xl font-bold text-on-surface">Overheard Drama</h2>
             </div>
             <div className="space-y-6">
                {[
                  { time: '02:14 AM', loc: 'CORNER_BOOTH', msg: '"He\'s very dreamy, but he\'s also a jerk. And why am I the one apologizing? I\'m not the one who... wait, are we dancing yet?"', tags: ['M. GREY', 'C. YANG'], border: 'sky' },
                  { time: '01:45 AM', loc: 'BAR_STOOLS', msg: '"Bailey is going to have my head if she finds out about the suture incident. I swear, the resident from Mercy West set me up."', tags: ['G. O\'MALLEY'], border: 'tertiary' },
                ].map((log, i) => (
                  <div key={i} className={`p-6 bg-surface-container-low/50 rounded-lg border-l-4 ${log.border === 'sky' ? 'border-sky-500' : 'border-tertiary'} space-y-4`}>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className={log.border === 'sky' ? 'text-sky-400' : 'text-tertiary'}>TIME_STAMP: {log.time}</span>
                      <span className="text-slate-600">LOCATION: {log.loc}</span>
                    </div>
                    <p className="italic text-on-surface-variant text-lg">"{log.msg}"</p>
                    <div className="flex gap-2">
                       {log.tags.map((t, ti) => (
                         <span key={ti} className={`px-2 py-0.5 rounded text-[8px] font-bold ${log.border === 'sky' ? 'bg-sky-500/10 text-sky-400' : 'bg-tertiary/10 text-tertiary'}`}>{t}</span>
                       ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="col-span-4 space-y-8">
           <div className="glass-panel p-8 rounded-xl space-y-6">
              <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">STAFF_ON_SITE</h3>
              <div className="space-y-4">
                {[
                  { name: 'Grey, Meredith', rank: 'General Surgery Resident', initial: 'MG', color: 'bg-sky-500' },
                  { name: 'Yang, Cristina', rank: 'Cardiothoracic Resident', initial: 'CY', color: 'bg-tertiary-container' },
                  { name: 'Shepherd, Derek', rank: 'Neurosurgeon (Attending)', initial: 'DS', color: 'bg-slate-700', warning: true },
                ].map((staff, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 transition-all hover:bg-white/10">
                     <div className="flex gap-4 items-center">
                       <div className={`w-8 h-8 rounded-full ${staff.color} flex items-center justify-center font-bold text-[10px]`}>{staff.initial}</div>
                       <div className="space-y-0.5">
                         <p className="text-xs font-bold text-on-surface">{staff.name}</p>
                         <p className="text-[8px] text-slate-500 uppercase">{staff.rank}</p>
                       </div>
                     </div>
                     <div className={`w-2 h-2 rounded-full ${staff.warning ? 'bg-amber-500' : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]'}`} />
                  </div>
                ))}
              </div>
           </div>

           <div className="glass-panel p-8 rounded-xl border-l-4 border-sky-500 space-y-6">
             <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">SYSTEM_VITAL_METRICS</h3>
             <div className="space-y-6">
                {[
                  { id: 'TAB_TOTALS', val: '$1,452.00', color: 'text-sky-400' },
                  { id: 'BLOOD_O2_AVG', val: '98%', color: 'text-tertiary' },
                  { id: 'PAGER_ALERTS', val: '4 ACTIVE', color: 'text-error' },
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center font-data text-xs">
                       <span className="text-slate-400">{metric.id}</span>
                       <span className={metric.color}>{metric.val}</span>
                    </div>
                    <div className="h-0.5 bg-white/5 relative">
                      <div className={`h-full absolute left-0 ${metric.color.replace('text', 'bg')} opacity-40`} style={{ width: '70%' }} />
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('EXPLORER');

  const renderScreen = () => {
    switch (screen) {
      case 'EXPLORER': return <ExplorerScreen />;
      case 'OR_GALLERY': return <DashboardScreen />;
      case 'STAFF_HUB': return <div className="p-12 text-slate-500 font-mono">STAFF_HUB_ACCESS_PENDING...</div>;
      case 'VITALS': return <div className="p-12 text-slate-500 font-mono">VITALS_MAINTENANCE_IDLE...</div>;
      case 'MEREDITH_HOUSE': return <ResidentPortalScreen type="MEREDITH" />;
      case 'DEREK_TRAILER': return <ResidentPortalScreen type="DEREK" />;
      case 'JOE_BAR': return <BarScreen />;
      case 'GSM_MEMORIAL': return <div className="p-12 text-slate-500 font-mono">GSM_MEMORIAL_MAP_LOADING...</div>;
      default: return <ExplorerScreen />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background overflow-x-hidden">
      <Sidebar currentScreen={screen} setScreen={setScreen} />
      
      <div className="flex-1 pl-72">
        <TopBar />
        <main className="pt-16 min-h-[calc(100vh-64px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Persistent Floating Scrub-In Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-secondary-container text-white shadow-2xl flex items-center justify-center surgical-glow z-[60]"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
