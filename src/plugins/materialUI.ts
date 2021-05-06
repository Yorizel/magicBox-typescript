import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#F0F0F0',
      main: '#D8D8D8',
      dark: '#A8A8A8'
    },
    secondary: {
      light: '#A56570',
      main: '#F3DDE0',
      dark: '#783030'
    },
    text: {
      primary: '#0B0404',
      secondary: '#988484'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'GlacialIndifferenceRegular',
      'sans-serifMont',
      'sans-serif'
    ].join(',')
  }
});
