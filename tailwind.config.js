/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './src/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070707',
        card: '#111111',
        gold: {
          DEFAULT: '#F4C542',
          dark: '#C89616'
        },
        accent: '#8B5E17',
        redx: '#7A0B0B',
        ink: '#FFFFFF',
        grey: '#C7C7C7'
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
        btn: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 24px rgba(255,210,80,.35)',
        goldsm: '0 0 0 1px rgba(255,212,80,.15)'
      },
      borderColor: {
        goldline: 'rgba(255,212,80,.15)'
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
          '0%,100%': { boxShadow: '0 0 10px rgba(255,210,80,.35)' },
          '50%': { boxShadow: '0 0 28px rgba(255,210,80,.6)' }
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
