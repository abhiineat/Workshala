/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
      {
        backgroundColor: {
          'custom-bg': '#946CC3', 
          'regular-bg': '#251636',
          'footer-bg' : '#B5B5B5',
          'service-bg' : '#FFB2CA'
        },
        textColor: {
          'custom-text': '#946CC3', 
          'footer-text': '#000000',
        },
    },
  },
  plugins: [],
}

