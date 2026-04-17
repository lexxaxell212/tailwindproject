/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔍 SCAN SEMUA HTML FILES
  content: [
    "./*.html",
    "./**/*.html",
  ],
  
  // 🌙 DARK MODE CLASS BASED
  darkMode: 'class',
  
  // 🎨 FULL THEME CUSTOMIZATION
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    // 🌈 CUSTOM COLORS
    colors: {
      // Brand Colors
      brand: {
        50: '#f0f9ff',  100: '#e0f2fe',  200: '#bae6fd',
        300: '#7dd3fc', 400: '#38bdf8',  500: '#0ea5e9',
        600: '#0284c7', 700: '#0369a1',  800: '#075985',
        900: '#0c4a6e', 950: '#082f49'
      },
      accent: {
        50: '#fdf4ff',  100: '#fae8ff',  200: '#f5d0fe',
        300: '#f0abfc', 400: '#e879f9',  500: '#d946ef',
        600: '#c026d3', 700: '#a21caf',  800: '#86198f',
        900: '#701a75', 950: '#581c87'
      },
      
      // Neutral
      neutral: {
        50: '#f9fafb',  100: '#f3f4f6',  200: '#e5e7eb',
        300: '#d1d5db', 400: '#9ca3af',  500: '#6b7280',
        600: '#4b5563', 700: '#374151',  800: '#1f2937',
        900: '#111827', 950: '#030712'
      },
      
      // Success/Error
      success: {
        500: '#10b981', 600: '#059669'
      },
      error: {
        500: '#ef4444', 600: '#dc2626'
      }
    },
    
    // 🔤 CUSTOM FONTS
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'heading': ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
    
    // 📏 CUSTOM SPACING
    spacing: {
      '18': '4.5rem',
      '128': '32rem',
    },
    
    // 🎬 CUSTOM ANIMATIONS
    animation: {
      'fade-in': 'fadeIn 1s ease-in-out',
      'slide-up': 'slideUp 0.8s ease-out',
      'bounce-slow': 'bounce 2s infinite',
      'spin-slow': 'spin 3s linear infinite',
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    
    // ⏱️ CUSTOM TIMING
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      slideUp: {
        '0%': { transform: 'translateY(30px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' }
      }
    },
    
    // 🎛️ CUSTOM BORDER RADIUS
    borderRadius: {
      '4xl': '2.5rem',
      'large': '1.5rem',
    },
    
    // 🌈 CUSTOM SHADOWS
    boxShadow: {
      'glass': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'glow': '0 0 25px rgba(59, 130, 246, 0.5)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    
    // 📐 CUSTOM SIZING
    maxWidth: {
      '8xl': '88rem',
      'screen-2xl': '1536px',
    }
  },
  
  // 🛠️ CUSTOM COMPONENTS
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities({
        '.glassmorphism': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }
      })
    }
  ],
}
