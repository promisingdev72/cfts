module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow Semi Condensed'],
      barlow: ['Barlow'],
      caveat: ['Caveat'],
      abahia: ['Abhaya Libre'],
      bodoni: ['Bodoni Moda'],
    },
    extend: {
      colors: {
        primary: {
          50: '#D18D57', // brown-contact
          100: '#B5CAD7', // bleu-gris
          200: '#54ABBC', // bg-exergue
          300: '#5FB1C0', // bg-jurisdictions
          400: '#379EB1', // bg-activity
          500: '#4493B2', // bg-h
          600: '#40748A', // text-bit-lighter (passion du droit)
          700: '#3B5D69', // text-strong (actus)
          800: '#1F4D5E', // menu
          900: '#3B5D69', // bg btn & footer
        },
        color1: '#0e374d',
        color2: '#ce7717',
        color3: '#306980',
        color4: '#658ea5',
        color5: '#dfe9ef',
      },
      spacing: {
        '15%': '15%',
        '18%': '18%',
      },
      backgroundImage: {
        'main-back': "url('/images/mainImage.jpg')",
        'bottom-back': "url('/images/footerImage.jpg')",
      },
    },
  },
  plugins: [],
}
