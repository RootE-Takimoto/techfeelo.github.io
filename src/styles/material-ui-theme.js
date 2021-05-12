import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#312211',
      dark: '#001184',
      contrastText: '#ff111f',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  shadows: ["none"],
});

export default theme;