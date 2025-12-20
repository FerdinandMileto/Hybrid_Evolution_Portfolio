/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sci: ["Orbitron", "sans-serif"],
                body: ["Outfit", "sans-serif"],
            },
            colors: {
                background: "#030014",
                primary: {
                    DEFAULT: "#a855f7",
                    glow: "rgba(168, 85, 247, 0.4)",
                },
                secondary: {
                    DEFAULT: "#22d3ee",
                    glow: "rgba(34, 211, 238, 0.4)",
                },
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 1.8s ease-out forwards',
                'glow-line': 'glowLine 3s ease-in-out infinite alternate',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(2deg)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glowLine: {
                    '0%': { filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.4))' },
                    '100%': { filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.8))' },
                }
            }
        },
    },
    plugins: [],
}
