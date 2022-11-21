const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /text-(red|orange|green|blue|purple)-500/ }
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', ...fontFamily.mono],
        monobold: ['var(--font-monobold)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}
