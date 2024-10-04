/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Green:"hsl(75, 94%, 57%)",
        White:"hsl(0, 0%, 100%)",
        Grey700:"hsl(0, 0%, 20%)",
        Grey800:"hsl(0, 0%, 12%)",
        Grey900:"hsl(0, 0%, 8%)",
      },
      fontFamily:{
        Inter: ["Inter", "sans-serif"],

      },
    },
  },
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "14px" },
      })
    }),
  ],
}

