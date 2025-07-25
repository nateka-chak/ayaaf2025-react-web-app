export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {},    spacing: {
      'section': '1rem', // instead of py-20 (5rem)
    }
  },
  plugins: [require('tailwind-scrollbar')],
};
module.exports = {
  darkMode: 'class',
  // ...other configs
}


// This is a Tailwind CSS configuration file for a client-side application.