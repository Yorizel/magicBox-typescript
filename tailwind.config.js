module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    objectPosition: {
      'center-top': 'center top'
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      glacial: ['GlacialIndifferenceRegular']
    },
    textColor: {
      primary: '#0B0404',
      secondary: '#988484',
      white: '#ffffff'
    },
    colors: {
      primary: {
        light: '#FEFEFE',
        main: '#FAFAFA',
        dark: ' #D8D8D8'
      },
      secondary: {
        light: '#A56570',
        main: '#F3DDE0',
        dark: '#783030'
      }
    },
    screens: {
      xs: '150px',
      cl: '321px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
      '2xl': '2200px'
    },
    height: {
      xs: '20rem',
      sm: '25rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem'
    },
    extend: {
      width: {
        xs: '20rem',
        sm: '25rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem'
      }
    }
  },

  variants: {
    extend: {
      maxWidth: ['hover', 'focus'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      outline: ['hover', 'active']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
