import { createTheme } from '@mui/material/styles';

const theme = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#001f3d', // Navy blue primary color
      },
      background: {
        default: '#f4f4f4',
      },
    },
  }),

  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#001f3d', // Navy blue primary color
      },
      background: {
        default: '#121212',
      },
    },
  }),
};

export default theme;
