import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Webhook,
    Database,
    ShieldAlert,
    BarChart3,
    Activity,
    Layers,
    Monitor,
    X,
    ExternalLink,
    Code2
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { InteractiveTerminal } from './components/InteractiveTerminal';

const chartData = [
    { v: 30 }, { v: 45 }, { v: 35 }, { v: 60 }, { v: 50 }, { v: 80 }, { v: 65 }
];

const SERVICES = [
    {
        id: "automation",
        title: "Intelligent Automation",
        description: "Pipelines de datos resilientes & Ecosistemas autónomos.",
        tech: "Python, Docker, AWS Lambda, Apache Airflow",
        target: "Multinacionales, Centros Logísticos",
        icon: Cpu,
        color: "text-purple-400",
        githubProjects: [
            { name: "Neural-Auto-Bots", url: "https://github.com/ferdinandmiletori/Neural-Auto-Bots", desc: "Bots autónomos para optimización de procesos." },
            { name: "ETL-Resilient-Core", url: "https://github.com/ferdinandmiletori/ETL-Resilient-Core", desc: "Pipeline de datos con auto-recuperación." }
        ]
    },
    {
        id: "web3",
        title: "Web 3 & Blockchain",
        description: "Protocolos descentralizados & Smart Contracts de alta seguridad.",
        tech: "Solidity, Rust, Go, Hardhat, IPFS",
        target: "Startups DeFi, Sector Gubernamental",
        icon: Webhook,
        color: "text-cyan-400",
        githubProjects: [
            { name: "Veritas-Ledger-Protocol", url: "https://github.com/FerdinandMileto/Solana_Node_Prime", desc: "Protocolo de gobernanza DAO segura." },
            { name: "Solana-Alpha-Prime", url: "https://github.com/FerdinandMileto/Solana_Node_Prime", desc: "Infraestructura RPC Enterprise." }
        ]
    },
    {
        id: "data",
        title: "Data Core",
        description: "Análisis predictivo y hubs de inteligencia de mercado.",
        tech: "SQL, Python, BigQuery, Tableau, Scikit-learn",
        target: "Retail, E-commerce Leaders",
        icon: Database,
        color: "text-orange-400",
        githubProjects: [
            { name: "Marketplace-Intelligence-System", url: "https://github.com/FerdinandMileto/Marketplace-Intelligence-System", desc: "ETL robusto para inteligencia de mercado." },
            { name: "Predictive-Pricing-Engine", url: "https://github.com/FerdinandMileto/Predictive-Pricing-Engine", desc: "Análisis predictivo de precios en tiempo real." }
        ]
    },
    {
        id: "api",
        title: "Service Support & API",
        description: "Arquitectura proactiva e integraciones Enterprise robustas.",
        tech: "Java 21, Spring Boot, Kubernetes, gRPC",
        target: "Fintech, SaaS Enterprise",
        icon: ShieldAlert,
        color: "text-red-400",
        githubProjects: [
            { name: "APIGuard-System", url: "https://github.com/FerdinandMileto/API_Guard_System", desc: "Sistema de soporte técnico proactivo y monitoreo de APIs." },
            { name: "Enterprise-Payload-Mesh", url: "https://github.com/FerdinandMileto/API_Guard_System", desc: "Malla de integración robusta y diagnóstico automatizado." }
        ]
    }
];

export default function App() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const activeService = SERVICES.find(s => s.id === selectedId);

    return (
        <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-500/30 font-sans p-8 md:p-16">

            {/* --- HERO SECTION --- */}
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 min-h-[85vh] relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex-1 space-y-10"
                >
                    <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-black tracking-tighter leading-[0.7] mb-12">
                        Fernando <br /> Berumen
                    </h1>
                    <div className="flex items-center gap-10">
                        <div className="h-[4px] w-32 bg-orange-600 shadow-[0_0_20px_#ff4500]" />
                        <p className="cyber-neon text-4xl md:text-5xl lg:text-7xl">
                            Systems Engineer // Data Architect
                        </p>
                    </div>
                </motion.div>

                <motion.div className="relative w-[500px] md:w-[700px] h-[500px] md:h-[700px] flex items-center justify-center p-4">
                    <div className="absolute inset-0 particle-grid opacity-80" />
                    <div className="absolute inset-x-0 inset-y-0 bg-cyan-500/10 blur-[150px] energy-emanate rounded-full" />
                    <motion.div
                        animate={{ y: [0, -40, 0], rotate: [0, 8, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-30 w-full h-full p-12"
                    >
                        <img src="/sacred_symbol.png" alt="Sacred Symbol" className="w-full h-full object-contain sacred-glow" />
                    </motion.div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-white/20 rounded-full border-dashed scale-125" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute inset-[10%] border border-cyan-500/20 rounded-full border-dotted scale-110" />
                </motion.div>
            </section>

            {/* --- MENU SECTION --- */}
            <section className="mb-48 relative z-30 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {SERVICES.map((s) => (
                        <motion.div
                            layoutId={s.id}
                            key={s.id}
                            onClick={() => setSelectedId(s.id)}
                            className="nav-card min-h-[180px] flex flex-col items-center justify-center text-center p-10 group"
                        >
                            <s.icon className={`w-14 h-14 ${s.color} mb-6 group-hover:scale-125 transition-transform duration-500`} />
                            <h3 className="text-xl font-black tracking-[0.3em] uppercase text-white">
                                {s.title}
                            </h3>
                            <div className="mt-6 w-full h-[1px] bg-white/10 group-hover:bg-cyan-500/50 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- MODAL --- */}
            <AnimatePresence>
                {activeService && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-black/60">
                        <motion.div
                            layoutId={activeService.id}
                            className="bg-zinc-900/90 border border-cyan-500/30 rounded-[3rem] w-full max-w-7xl max-h-[90vh] overflow-y-auto lg:overflow-hidden relative shadow-[0_0_100px_rgba(0,242,255,0.1)] custom-scrollbar"
                        >
                            <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 z-[1001] bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors">
                                <X size={32} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                {/* Info Side */}
                                <div className="p-10 md:p-16 space-y-12 overflow-y-auto">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-6">
                                            <activeService.icon className={`w-16 h-16 ${activeService.color}`} />
                                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{activeService.title}</h2>
                                        </div>
                                        <p className="text-2xl md:text-3xl font-light italic text-white/90 leading-tight border-l-8 border-orange-600 pl-8">
                                            "{activeService.description}"
                                        </p>
                                    </div>

                                    {/* GitHub Projects Section */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Code2 className="text-orange-500" size={20} />
                                            <h3 className="glass-label text-orange-500 m-0">GitHub Respositories</h3>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            {activeService.githubProjects.map((proj) => (
                                                <a
                                                    key={proj.name}
                                                    href={proj.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/proj p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-between"
                                                >
                                                    <div className="space-y-1">
                                                        <p className="text-lg font-bold text-white group-hover/proj:text-cyan-400 transition-colors uppercase tracking-widest">{proj.name}</p>
                                                        <p className="text-sm text-white/40">{proj.desc}</p>
                                                    </div>
                                                    <ExternalLink size={18} className="text-white/20 group-hover/proj:text-white transition-colors" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div>
                                            <p className="glass-label text-orange-500">Tech Stack</p>
                                            <p className="text-cyan-400 text-lg font-mono">{activeService.tech}</p>
                                        </div>
                                        <div>
                                            <p className="glass-label text-orange-500">Operational Focus</p>
                                            <p className="text-white/60 text-lg uppercase tracking-[0.2em]">{activeService.target}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Graphic Side */}
                                <div className="bg-white/[0.02] border-l border-white/5 p-16 hidden lg:flex flex-col justify-between">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="flex items-center gap-4">
                                            <Activity className="text-cyan-400 animate-pulse" />
                                            <span className="text-sm font-mono tracking-widest text-cyan-400">DATA STREAM: ACTIVE</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Node Protocol 0xDAEMON</span>
                                    </div>

                                    <div className="flex-1 relative min-h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={chartData}>
                                                <Area type="monotone" dataKey="v" stroke="#00f2ff" fill="rgba(0, 242, 255, 0.1)" strokeWidth={4} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <p className="mt-8 text-white/20 text-xs font-mono uppercase tracking-[0.5em] text-center">Real-time Telemetry Analytics System</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- CONSOLE --- */}
            <section className="max-w-7xl mx-auto mb-40 relative z-10 px-6 mt-20">
                <div className="flex items-center gap-10 mb-12 opacity-40">
                    <Monitor size={32} className="text-white" />
                    <h2 className="text-xl font-mono tracking-[1em] uppercase border-b border-white/10 pb-4">Kernel Interface // Root Access</h2>
                </div>
                <InteractiveTerminal />
            </section>

            {/* --- FOOTER --- */}
            <footer className="flex flex-col md:flex-row justify-between items-center pt-32 pb-16 border-t border-white/5 opacity-50 px-10">
                <p className="text-xs font-mono tracking-[0.8em] uppercase mb-8 md:mb-0">© 2025 DAEMON TECH HYBRID EVOLUTION // SYNTHETIC ARCHITECTURE OPERATIONAL</p>
                <div className="flex gap-20">
                    <Layers className="hover:text-orange-600 transition-all cursor-pointer scale-150" />
                    <BarChart3 className="hover:text-cyan-500 transition-all cursor-pointer scale-150" />
                    <Monitor className="hover:text-white transition-all cursor-pointer scale-150" />
                </div>
            </footer>

        </div>
    );
}
