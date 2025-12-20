import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Node 01', val: 400 },
    { name: 'Node 02', val: 300 },
    { name: 'Node 03', val: 600 },
    { name: 'Node 04', val: 800 },
    { name: 'Node 05', val: 500 },
    { name: 'Node 06', val: 900 },
    { name: 'Node 07', val: 1100 },
];

export const StatsSection = () => {
    return (
        <section className="py-24 px-4 bg-[#030014]">
            <div className="max-w-6xl mx-auto glassmorphism p-8 rounded-[2rem] border-white/5 relative overflow-hidden group">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] -z-10 group-hover:bg-cyan-500/20 transition-colors duration-700" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h2 className="font-sci text-3xl font-bold uppercase tracking-wider text-white/90">
                            Neural Data Core
                        </h2>
                        <div className="mt-4 max-w-2xl space-y-2">
                            <p className="text-gray-400 font-body text-sm leading-relaxed italic border-l-2 border-purple-500 pl-4">
                                "El núcleo donde la información se transforma en conciencia artificial.
                                Analizamos patrones invisibles para construir realidades predecibles."
                            </p>
                            <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
                                Centralizing Intelligence • Processing Reality • Defining Tomorrow
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="bg-black/40 border border-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-cyan-400 font-sci text-xs">Uptime: 99.9%</span>
                        </div>
                        <div className="bg-black/40 border border-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-purple-400 font-sci text-xs">Tokens: 2.1M/s</span>
                        </div>
                    </div>
                </div>

                {/* Project Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    {[
                        "Data Science", "Data Analyst", "Machine Learning",
                        "Neural Networks", "Database Architecture"
                    ].map((cat) => (
                        <div key={cat} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-center hover:border-cyan-500/30 transition-colors">
                            <span className="text-[10px] font-sci uppercase tracking-tighter text-gray-300">{cat}</span>
                        </div>
                    ))}
                </div>

                <div className="h-[300px] w-full mt-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                            <XAxis
                                dataKey="name"
                                stroke="#ffffff20"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                className="font-sci"
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#030014',
                                    border: '1px solid #ffffff10',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    fontFamily: 'Orbitron'
                                }}
                                itemStyle={{ color: '#a855f7' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="val"
                                stroke="#a855f7"
                                fillOpacity={1}
                                fill="url(#colorVal)"
                                strokeWidth={3}
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 border-t border-white/5 pt-12">
                    {[
                        {
                            label: "Active Nodes",
                            val: "124",
                            resolve: "Escalabilidad distribuida para procesos masivos sin cuellos de botella."
                        },
                        {
                            label: "Data Processed",
                            val: "14.2 PB",
                            resolve: "Capacidad de ingesta y análisis de Big Data en tiempo real para decisiones críticas."
                        },
                        {
                            label: "Prediction Accuracy",
                            val: "98.7%",
                            resolve: "Reducción de incertidumbre mediante modelos neuronales de alta precisión."
                        },
                        {
                            label: "Network Latency",
                            val: "2.4ms",
                            resolve: "Comunicación ultra-rápida entre sistemas autónomos para respuesta instantánea."
                        }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors"
                        >
                            <p className="text-[10px] font-sci uppercase tracking-[0.2em] text-cyan-400 mb-2">{stat.label}</p>
                            <p className="text-3xl font-sci font-black text-white/90 mb-3">{stat.val}</p>
                            <p className="text-[10px] leading-relaxed text-gray-500 font-body italic">
                                {stat.resolve}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
