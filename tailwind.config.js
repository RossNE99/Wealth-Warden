/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'indigo': 'rgb(67 56 202)' ,
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
