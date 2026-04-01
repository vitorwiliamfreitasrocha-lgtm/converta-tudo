/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta custom - cores leves + vermelho de destaque
        primary: {
          50: '#fff5f5',
          100: '#ffe0e0',
          400: '#ff6b6b',
          500: '#FF4444', // Vermelho principal
          600: '#E63946', // Vermelho escuro
          700: '#d62828',
        },
        light: {
          bg: '#fafafa',      // Fundo muito claro
          card: '#ffffff',    // Cards brancos
          border: '#e5e7eb',  // Bordas cinzas leves
        },
        neutral: {
          text: '#1f2937',    // Textos principais
          muted: '#6b7280',   // Textos secundários
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        medium: '0 4px 6px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
