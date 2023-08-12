/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/ui/tailwind/button**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}', // Here like this
    './src/components/**/*.{js,ts,jsx,tsx}', // Here like this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}