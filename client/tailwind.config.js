/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'zoom-in': 'zoomIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                'fade-in-down': 'fadeInDown 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'tracking-expand': 'trackingExpand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                trackingExpand: {
                    '0%': { letterSpacing: '-0.2em', opacity: '0' },
                    '40%': { opacity: '0.6' },
                    '100%': { opacity: '1', letterSpacing: 'normal' },
                }
            }
        },
    },
    plugins: [],
}
