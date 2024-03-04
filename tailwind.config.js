/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/**/*.{js,ts,jsx,tsx,mdx}', 'components/**/*.{js,ts,jsx,tsx,mdx}', 'lib/**/*.{js,ts,jsx,tsx,mdx}', 'utils/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0A65FC',
        black: '#061257',
      },
      colors: {
        primary: '#0A65FC',
        black: '#061257',
        red: '#F2002E',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'ping-slow': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Example of adding Tailwind CSS forms plugin
    function ({ addComponents }) {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '12px',
          paddingRight: '12px',
          maxWidth: '100%',

          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        },
      })
    },
  ],
}
