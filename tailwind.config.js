/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',   // Cyan
          600: '#0284c7',
          700: '#0369a1',
        },
        accent: {
          500: '#ec4899',   // Pink
          600: '#db2777',
        },
        neutral: {
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        'heading': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      }
    },
  }
}
