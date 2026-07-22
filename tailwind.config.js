/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#090909',
        bgSection: '#111113',
        bgSectionAlt: '#17171A',
        card: '#1B1B1F',
        cardAlt: '#222226',
        gold: {
          50: '#FFF0A8',
          100: '#FFD86C',
          DEFAULT: '#F4C84A',
          mid: '#D9A628',
          dark: '#B88216',
          deep: '#8E6212'
        },
        accent: '#F7941D',
        success: '#3CCB6C',
        warning: '#FFB52E',
        redx: '#FF5252',
        ink: '#FFFFFF',
        grey: '#CFCFCF',
        grey2: '#A5A5A5'
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        btn: ['var(--font-sora)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 45px rgba(244,200,74,.25)',
        goldsm: '0 0 0 1px rgba(217,166,40,.15)',
        btnGold: '0 8px 28px rgba(244,200,74,.35)',
        card: '0 15px 45px rgba(0,0,0,.45)'
      },
      borderColor: {
        goldline: 'rgba(217,166,40,.18)',
        borderDark: '#2C2C31'
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        drift: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-140px) rotate(180deg)', opacity: '0' }
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 10px rgba(244,200,74,.35)' },
          '50%': { boxShadow: '0 0 35px rgba(244,200,74,.45)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 9s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        fadeUp: 'fadeUp .7s ease forwards',
        spinSlow: 'spinSlow 14s linear infinite'
      }
    }
  },
  plugins: []
};
