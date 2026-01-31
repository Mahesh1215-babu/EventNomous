/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    obsidian: '#0A0A0B',
                    gold: '#D4AF37',
                    'gold-muted': '#B8860B',
                    silver: '#E5E7EB',
                    'blue-deep': '#0F172A',
                    accent: '#3B82F6',
                    bg: 'var(--brand-bg)',
                    text: 'var(--brand-text)',
                    slate: 'var(--brand-slate)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 6s ease-in-out infinite',
                'shine': 'shine 8s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shine: {
                    'to': { backgroundPosition: '200% center' },
                }
            },
            backdropBlur: {
                xs: '2px',
                '2xl': '40px',
            }
        },
    },
    plugins: [],
}
