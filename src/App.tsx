import { useState, useEffect, useRef } from 'react';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Mail,
    Linkedin,
    Github,
    MessageSquare,
    ArrowDown,
    Cpu,
    Database,
    Webhook,
    ShieldAlert,
    X,
    MessageCircle
} from 'lucide-react';
import { StatsSection } from './components/StatsSection';

// --- TYPES ---
interface Service {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
}

// --- DATA ---
const SERVICES: Service[] = [
    {
        title: "Intelligent Automation",
        description: "Desarrollo de código, sistemas, y procesos autónomos con pipelines de datos que optimizan la eficiencia y escalabilidad.",
        icon: Cpu,
        color: "from-purple-400 to-pink-500"
    },
    {
        title: "Web 3 & Blockchain",
        description: "Arquitectura de soluciones descentralizadas, smart contracts y estrategias de tokenomics.",
        icon: Webhook,
        color: "from-cyan-400 to-blue-500"
    },
    {
        title: "Data Core",
        description: "Implementación de modelos de Machine Learning para extraer insights y predecir tendencias futuras, bases de datos y almacenamiento en la nube.",
        icon: Database,
        color: "from-pink-500 to-orange-400"
    },
    {
        title: "Service Support & API",
        description: "Arquitectura de soporte proactivo, integración de servicios web (REST/SOAP) y creación de ecosistemas de Self-Service para clientes.",
        icon: ShieldAlert,
        color: "from-red-500 to-purple-600"
    }
];

// --- COMPONENTS ---

const ServiceCard = ({ service, onClick }: { service: Service, onClick: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 8;
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * -8;
        setRotateX(y);
        setRotateY(x);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={{ rotateX, rotateY, scale: rotateX !== 0 ? 1.02 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="service-card glassmorphism rounded-3xl p-10 border border-white/5 hover:border-purple-500/30 cursor-pointer group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <service.icon className={`w-12 h-12 mb-6 text-transparent bg-clip-text bg-gradient-to-r ${service.color} relative z-10`} />
            <h3 className={`font-sci text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${service.color} uppercase tracking-wider relative z-10`}>
                {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                {service.description}
            </p>
        </motion.div>
    );
};

// --- INTELLIGENT AUTOMATION DETAIL VIEW ---
const IntelligentAutomationDetail = ({ onClose }: { onClose: () => void }) => {
    const projects = [
        {
            title: "Enterprise Data Pipeline & Quality Shield",
            description: "Arquitectura de orquestación resiliente (estilo Airflow) con validación automática de integridad y detección de anomalías estadísticas (Data Drift).",
            tags: ["Python", "Pandas", "AWS Redshift", "ETL", "Quality Monitoring"],
            link: "https://github.com/FerdinandMileto/Enterprise_Data_Lab"
        },
        {
            title: "Neural Scalping Engine: Eros Antigravity",
            description: "Bot de trading algorítmico optimizado para micro-scalping con gestión de riesgo dinámica y protección de capital mediante Break-Even automático.",
            tags: ["Python", "Aritificial Intelligence", "CCXT", "FinTech"],
            link: "https://github.com/FerdinandMileto/Neural_Scalping_Engine_Eros_Antigravity-"
        },
        {
            title: "School Inventory Intelligence",
            description: "Sistema de inteligencia logística para optimizar el abastecimiento escolar. Analiza consumo histórico y calcula presupuestos de recompra predictivos.",
            tags: ["Python", "Streamlit", "Data Science", "Logistics"],
            link: "https://github.com/FerdinandMileto/Sistema_Inventario_Escolar"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[110] bg-[#030014] overflow-y-auto px-4 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={onClose}
                    className="fixed top-10 right-10 z-[120] bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>

                <h2 className="font-sci text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase text-center">
                    Intelligent Automation
                </h2>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="glassmorphism p-8 rounded-3xl border border-white/5 group relative"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="max-w-2xl">
                                    <h3 className="font-sci text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-sci tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-cyan-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.open(project.link)}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-sci text-xs tracking-widest hover:bg-purple-500 hover:text-white transition-all uppercase whitespace-nowrap"
                                >
                                    Access Repository
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// --- WEB3 & BLOCKCHAIN DETAIL VIEW ---
const Web3BlockchainDetail = ({ onClose }: { onClose: () => void }) => {
    const projects = [
        {
            title: "Veritas Protocol: Academic Integrity",
            description: "Protocolo de Smart Contracts diseñado para erradicar la falsificación de títulos académicos mediante credenciales digitales inmutables en la blockchain.",
            tags: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
            link: "https://github.com/FerdinandMileto/Veritas-Blockchain-Certification"
        },
        {
            title: "BioTrace: Animal Welfare Sovereign Identity",
            description: "Infraestructura de Identidad Soberana para el Bienestar Animal. Garantiza la trazabilidad absoluta de historiales médicos y donaciones desde el rescate hasta la adopción mediante Blockchain.",
            tags: ["Solidity", "Sovereign Identity", "Social Impact", "Traceability"],
            link: "https://github.com/FerdinandMileto/BioTrace-Animal-Welfare"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 z-[110] bg-[#030014] overflow-y-auto px-4 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={onClose}
                    className="fixed top-10 right-10 z-[120] bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>

                <h2 className="font-sci text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase text-center">
                    Web 3 & Blockchain
                </h2>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="glassmorphism p-8 rounded-3xl border border-white/5 group relative"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="max-w-2xl">
                                    <h3 className="font-sci text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-sci tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-cyan-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.open(project.link)}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-sci text-xs tracking-widest hover:bg-cyan-500 hover:text-white transition-all uppercase whitespace-nowrap"
                                >
                                    Verify Ledger
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// --- DATA CORE DETAIL VIEW ---
const DataCoreDetail = ({ onClose }: { onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] bg-[#030014] overflow-y-auto px-4 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={onClose}
                    className="fixed top-10 right-10 z-[120] bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>
                <StatsSection />
            </div>
        </motion.div>
    );
};

// --- SERVICE SUPPORT & API DETAIL VIEW ---
const ServiceSupportDetail = ({ onClose }: { onClose: () => void }) => {
    const projects = [
        {
            title: "API Troubleshooting & Support Toolkit",
            description: "Herramienta de diagnóstico para la resolución de errores de integración (Auth, Payload, Latencia) y aseguramiento de consumo eficiente de servicios.",
            tags: ["Python", "REST/SOAP", "API Diagnostics", "Technical Support"],
            link: "https://github.com/FerdinandMileto/Support_Engineering_Lab"
        },
        {
            title: "Self-Service Integration Architecture",
            description: "Diseño de marcos de documentación técnica escalable y guías de autogestión que reducen un 40% el volumen de tickets innecesarios.",
            tags: ["Technical Writing", "Documentation", "Git", "Cultura de Servicio"],
            link: "https://github.com/FerdinandMileto/Support_Engineering_Lab"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[110] bg-[#030014] overflow-y-auto px-4 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={onClose}
                    className="fixed top-10 right-10 z-[120] bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>

                <h2 className="font-sci text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 uppercase text-center">
                    Service Support & API
                </h2>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="glassmorphism p-8 rounded-3xl border border-white/5 group relative"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="max-w-2xl">
                                    <h3 className="font-sci text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-sci tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 text-red-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.open(project.link)}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-sci text-xs tracking-widest hover:bg-red-500 hover:text-white transition-all uppercase whitespace-nowrap"
                                >
                                    View Protocol
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const GenericDetail = ({ title, onClose }: { title: string, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[110] bg-[#030014] overflow-y-auto px-4 py-20 flex items-center justify-center"
        >
            <div className="max-w-4xl mx-auto text-center">
                <button
                    onClick={onClose}
                    className="fixed top-10 right-10 z-[120] bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 transition-colors group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>
                <h2 className="font-sci text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
                    {title}
                </h2>
                <p className="text-gray-400 text-xl font-body max-w-2xl mx-auto">
                    Node expansion in progress. Accessing encrypted data packets for this directive...
                </p>
                <div className="mt-12 w-20 h-20 border-i-2 border-purple-500 border-t-2 rounded-full animate-spin mx-auto opacity-20" />
            </div>
        </motion.div>
    );
};

const ContactPortal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [status, setStatus] = useState("ESTABLISHED");

    const nodes = [
        { icon: Mail, label: "Email", action: () => copyEmail(), color: "hover:text-cyan-400" },
        { icon: MessageCircle, label: "WhatsApp", action: () => window.open("https://wa.me/524428979803"), color: "hover:text-green-400" },
        { icon: MessageSquare, label: "Telegram", action: () => window.open("https://t.me/ferdinanddmileto"), color: "hover:text-blue-400" },
        { icon: Linkedin, label: "LinkedIn", action: () => window.open("https://linkedin.com/in/fernandoberumen"), color: "hover:text-blue-600" },
        { icon: Github, label: "GitHub", action: () => window.open("https://github.com/FerdinandMileto"), color: "hover:text-white" },
        { icon: ShieldAlert, label: "Discord", action: () => window.open("https://discord.com/users/ferdinandmileto"), color: "hover:text-indigo-400" },
    ];

    const copyEmail = () => {
        const email = 'ferdinand.daemontech@proton.me';
        navigator.clipboard.writeText(email).then(() => {
            setStatus("COPIED TO CLIPBOARD");
            setTimeout(() => {
                window.location.href = `mailto:${email}`;
            }, 800);
            setTimeout(() => setStatus("ESTABLISHED"), 3000);
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#030014]/95 backdrop-blur-[25px] flex items-center justify-center"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-10 right-10 font-sci text-sm tracking-widest opacity-50 hover:opacity-100 uppercase py-2 px-4 border border-white/10 rounded-full flex items-center gap-2 group transition-all"
                    >
                        Close <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    </button>

                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full"
                        />

                        {nodes.map((node, i) => {
                            const angle = (i * (360 / nodes.length)) * (Math.PI / 180);
                            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 200;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={node.label}
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{ scale: 1, x, y }}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={node.action}
                                    className={`absolute w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all ${node.color} group z-10`}
                                >
                                    <node.icon className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                                    <span className="text-[8px] md:text-[10px] items-center uppercase font-sci tracking-tighter opacity-0 group-hover:opacity-100 absolute -bottom-6 whitespace-nowrap">
                                        {node.label}
                                    </span>
                                </motion.div>
                            );
                        })}

                        <div className="z-20 p-8 glassmorphism rounded-full w-40 h-40 md:w-48 md:h-48 flex flex-col justify-center items-center border border-purple-500/20 text-center">
                            <span className="font-sci text-[8px] md:text-[10px] tracking-[0.3em] opacity-40 mb-2">DAEMON LINK</span>
                            <span className={`font-sci text-[10px] md:text-xs font-bold transition-all duration-300 ${status === 'ESTABLISHED' ? 'text-cyan-400' : 'text-green-400 animate-pulse'}`}>
                                {status}
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function App() {
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const [selectedDirective, setSelectedDirective] = useState<string | null>(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

    useEffect(() => {
        if (selectedDirective) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedDirective]);

    return (
        <div className="relative min-h-screen bg-[#030014]">
            <AnimatePresence>
                {selectedDirective === "Data Core" ? (
                    <DataCoreDetail onClose={() => setSelectedDirective(null)} />
                ) : selectedDirective === "Intelligent Automation" ? (
                    <IntelligentAutomationDetail onClose={() => setSelectedDirective(null)} />
                ) : selectedDirective === "Service Support & API" ? (
                    <ServiceSupportDetail onClose={() => setSelectedDirective(null)} />
                ) : selectedDirective === "Web 3 & Blockchain" ? (
                    <Web3BlockchainDetail onClose={() => setSelectedDirective(null)} />
                ) : selectedDirective && (
                    <GenericDetail title={selectedDirective} onClose={() => setSelectedDirective(null)} />
                )}
            </AnimatePresence>

            {/* Background elements */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-cyan-900/10 blur-[150px] rounded-full animate-float" />
            </div>

            <main className="relative z-10 font-body">
                {/* HERO SECTION - MANTAINED AS PILLAR */}
                <section ref={heroRef} className="relative min-h-[250vh] flex flex-col items-center pt-[10vh] px-4 overflow-x-hidden">
                    <motion.div style={{ y, opacity }} className="w-full max-w-6xl mx-auto flex flex-col items-center">

                        {/* 1. DAEMON TECH TITLE */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-center mb-4"
                        >
                            <h1 className="font-sci text-6xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] uppercase">
                                DAEMON TECH
                            </h1>
                        </motion.div>

                        {/* 2. STACK LINE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="text-center mb-16"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-center font-sci tracking-[0.2em] uppercase bg-black/40 py-4 px-12 rounded-full border border-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                                <span className="text-sm md:text-xl font-bold text-slate-300">Data Science</span>
                                <span className="hidden md:inline text-cyan-500 opacity-50">•</span>
                                <span className="text-sm md:text-xl font-bold text-slate-300">Web3 & Blockchain</span>
                                <span className="hidden md:inline text-purple-500 opacity-50">•</span>
                                <span className="text-sm md:text-xl font-bold text-slate-300">Intelligent Automation</span>
                            </div>
                        </motion.div>

                        {/* 3. MANIFESTO */}
                        <div className="mt-[20vh] mb-[8vh] text-center w-full space-y-4 leading-none">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.9, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter text-white/90 uppercase"
                            >
                                NOT HUMAN.
                            </motion.h3>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.9, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter text-white/90 uppercase"
                            >
                                NOT AI.
                            </motion.h3>
                            <motion.h3
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-600 drop-shadow-[0_0_50px_rgba(56,189,248,0.4)] gradient-text-live uppercase"
                            >
                                ONLY ONE.
                            </motion.h3>
                        </div>

                        {/* 4. THE ARTIFACT */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="centered-artifact animate-fade-in relative w-full max-w-md mb-[-2vh] flex justify-center items-center"
                        >
                            <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow" />
                            <img src="/sacred_symbol.png" alt="The Artifact" className="w-full object-contain animate-float z-10" />
                        </motion.div>

                        {/* 5. FER LOGO */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full max-w-4xl mx-auto"
                        >
                            <img
                                src="/fer_logo.png"
                                alt="Fernando Berumen"
                                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                            />
                        </motion.div>

                        {/* 6. ENGINEER TITLE */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="mt-0 md:-mt-4 text-center mb-40"
                        >
                            <h2 className="font-sci text-2xl md:text-5xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-600 drop-shadow-[0_0_35px_rgba(56,189,248,0.5)] gradient-text-live">
                                Intelligent Systems Engineer
                            </h2>
                        </motion.div>

                        {/* SCROLL INDICATOR */}
                        <motion.a
                            href="#services"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="pb-20 opacity-40 hover:opacity-100 transition duration-500"
                        >
                            <ArrowDown className="w-10 h-10 text-white" />
                        </motion.a>
                    </motion.div>
                </section>

                {/* SERVICES SECTION - CORE DIRECTIVES */}
                <section id="services" className="py-32 lg:py-48 px-4 bg-[#030014]">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 0.8, y: 0 }}
                            viewport={{ once: true }}
                            className="font-sci text-4xl lg:text-5xl font-bold mb-24 tracking-widest uppercase"
                        >
                            Core Directives
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {SERVICES.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ServiceCard
                                        service={service}
                                        onClick={() => setSelectedDirective(service.title)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE TERMINAL SECTION */}
                <section className="py-20 px-4 mb-20">
                    <InteractiveTerminal />
                </section>

                {/* Footer */}
                <footer className="text-center py-20 px-4 border-t border-white/5 bg-[#030014]">
                    <p className="text-gray-600 font-mono text-xs tracking-[0.3em] uppercase">
                        &copy; 2025 FERNANDO BERUMEN. Hybrid Entity Sincronized.
                    </p>
                </footer>
            </main>

            {/* Contact Trigger */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPortalOpen(true)}
                className="fixed bottom-10 right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center z-[90] shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow hover:shadow-[0_0_50px_rgba(56,189,248,0.8)]"
            >
                <MessageCircle className="w-8 h-8 text-white" />
            </motion.button>

            {/* Contact Portal Modal */}
            <ContactPortal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
        </div>
    );
}
