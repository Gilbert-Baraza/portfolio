/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#0F172A',
          dark: '#020617',
          light: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#38BDF8',
          dark: '#0284C7',
          light: '#7DD3FC',
        },
        bgDark: '#020617',
        bgLight: '#F8FAFC',
        cardDark: '#0F172A',
        cardLight: '#FFFFFF',
        textDark: '#F8FAFC',
        textLight: '#0F172A',
        mutedDark: '#94A3B8',
        mutedLight: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(37, 99, 235, 0.4)',
        'glow-accent': '0 0 15px rgba(56, 189, 248, 0.4)',
      }
    },
  },
  plugins: [],
}

