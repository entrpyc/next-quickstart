const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*{ts,tsx}",
    "./components/**/*{ts,tsx}"
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContet: 'center',
        },
        '.flex-split': {
          display: 'flex',
          alignItems: 'center',
          justifyContet: 'space-between',
        },
      })
    })
  ],
}