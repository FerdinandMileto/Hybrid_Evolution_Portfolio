import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, ShieldCheck, Wifi } from 'lucide-react';

interface Log {
    id: number;
    type: 'system' | 'user' | 'response';
    text: string;
}

export const InteractiveTerminal = () => {
    const [input, setInput] = useState('');
    const [logs, setLogs] = useState<Log[]>([
        { id: 1, type: 'system', text: 'DAEMON KERNEL v2.5... [INIT]' },
        { id: 2, type: 'system', text: 'CONNECTING TO NEURAL NET... SUCCESS' },
        { id: 3, type: 'response', text: 'Bienvenido, Usuario. Escriba "help" para ver comandos disponibles.' },
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    const isInitialMount = useRef(true);

    // Auto-scroll al final (solo cuando se añaden nuevos logs tras entrar)
    useEffect(() => {
        if (logs.length > 3) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [logs]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && input.trim()) {
            const cmd = input.trim().toLowerCase();

            // 1. Registrar lo que escribió el usuario
            const newLogUser: Log = { id: Date.now(), type: 'user', text: `> ${input}` };
            setLogs(prev => [...prev, newLogUser]);
            setInput('');

            // 2. Procesar respuesta (IA Simulada)
            setTimeout(() => {
                let responseText = '';
                switch (cmd) {
                    case 'help':
                        responseText = 'COMANDOS DISPONIBLES: [about] [skills] [contact] [xiren] [clear]';
                        break;
                    case 'about':
                        responseText = 'FERNANDO BERUMEN: Intelligent Systems Architect. Fusionando Data Science con Infraestructura Web3.';
                        break;
                    case 'xiren':
                        responseText = 'XIREN STATUS: ONLINE. Motor de voz neuronal activado. GPU RTX 4060 asignada.';
                        break;
                    case 'contact':
                        responseText = 'INICIANDO PROTOCOLO DE ENLACE... Correo: ferdinand.daemontech@proton.me | Señal cifrada establecida.';
                        break;
                    case 'skills':
                        responseText = 'STACK DETECTADO: Python, TensorFlow, React, Solidity, AWS, Docker, Linux.';
                        break;
                    case 'clear':
                        setLogs([{ id: Date.now(), type: 'system', text: 'CONSOLE CLEARED.' }]);
                        return;
                    default:
                        responseText = `ERROR: El comando "${cmd}" no es reconocido. Intente "help".`;
                }

                setLogs(prev => [...prev, { id: Date.now() + 1, type: 'response', text: responseText }]);
            }, 400); // Pequeño retraso para realismo
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-slate-700 bg-[#0c0c16]/95 backdrop-blur-xl"
        >
            {/* HEADER DE LA TERMINAL */}
            <div className="bg-slate-900/50 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2 text-cyan-400">
                    <Terminal size={16} />
                    <span className="text-xs tracking-widest font-bold">TERMINAL // SYSTEM ROOT</span>
                </div>
                <div className="flex gap-4 text-slate-500 text-xs">
                    <div className="flex items-center gap-1"><Cpu size={12} /><span>GPU: 32%</span></div>
                    <div className="flex items-center gap-1"><ShieldCheck size={12} /><span>SECURE</span></div>
                    <div className="flex items-center gap-1"><Wifi size={12} /><span>PING: 12ms</span></div>
                </div>
            </div>

            {/* CUERPO DE LA TERMINAL */}
            <div className="h-80 p-4 overflow-y-auto custom-scrollbar font-bold">
                <AnimatePresence>
                    {logs.map((log) => (
                        <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`mb-2 ${log.type === 'system' ? 'text-slate-500 italic' :
                                log.type === 'user' ? 'text-cyan-400' :
                                    'text-purple-300'
                                }`}
                        >
                            {log.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <div className="p-3 bg-slate-900 border-t border-slate-700 flex items-center gap-2">
                <span className="text-cyan-500 animate-pulse">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none text-green-400 w-full font-mono placeholder-slate-700"
                    placeholder="Ingrese comando (ej. help)..."
                />
            </div>
        </motion.div>
    );
};
