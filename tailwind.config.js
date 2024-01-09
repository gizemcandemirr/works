/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "kroppa": "#0e1a56"
      },
      cursor: {
        'fancy': 'url(/img/eye.cur),pointer',
      }
    }
  },
  plugins: [],
}
