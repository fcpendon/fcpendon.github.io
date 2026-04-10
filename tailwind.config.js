export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fc',
          100: '#f0f3f9',
          200: '#dce3f0',
          300: '#c7cfe7',
          400: '#9fa8d9',
          500: '#7681cc',
          600: '#505fb5',
          700: '#3f4a94',
          800: '#323876',
          900: '#2a2e5f',
        },
        accent: {
          50: '#f5f9ff',
          100: '#e0ecff',
          200: '#b3d9ff',
          300: '#80c0ff',
          400: '#4da6ff',
          500: '#1a8cff',
          600: '#0066cc',
          700: '#0052a3',
          800: '#003d7a',
          900: '#002e5a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}
