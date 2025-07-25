/** @type {import('tailwindcss').Config} */
import {fontFamily} from "tailwindcss/defaultTheme"
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
          primary:{
            900:'rgb(var(--color-primary-900))',
            800:'rgb(var(--color-primary-800))',
            700:'rgb(var(--color-primary-700))',
            600:'rgb(var(--color-primary-600))',
            400:'rgb(var(--color-primary-400))',
            300:'rgb(var(--color-primary-300))',
            100:'rgb(var(--color-primary-100))',
            shadowBox:'rgba(186,22,84,.25)'
          },
          boxShadow: {
            '3xl': '-8px -1px 19px 3px',
          },
          secondary:{
            900:'rgb(var(--color-secondary-900))',
            600:'rgb(var(--color-secondary-600))'

          },
          base:{
            900:'rgb(var(--color-base-900))'
          },
          success:{
            900: 'rgb(var(--color-success-900))'
          }

      },
      fontFamily:{
        sans:['Vazir', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    // require('@xpd/tailwind-3dtransforms')
  ],
}


