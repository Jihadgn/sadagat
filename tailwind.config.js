import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms'; 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    'node_modules/flowbite-react/lib/esm/**/*.js' 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

