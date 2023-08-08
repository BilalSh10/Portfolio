/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        CircularLight: 'repeating-radial-gradient(rgba(0,0,0,0.6) 2px, white 5px);'
      },
    },
    screens: {
      'phone': {max: '480px'},
      // => @media (max-width: 480px) { ... }

      'tablet': {max: '640px'},
      // => @media (max-width: 640px) { ... }

      'laptop': {max: '1024px'},
      // => @media (max-width: 1024px) { ... }

      'desktop': {max: '1280px'},
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
}
