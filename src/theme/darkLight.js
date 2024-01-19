import { createTheme } from '@mui/material';

export const themeParams = (isDark) => ({
    palette: {
        isDark,
        ...(isDark === 'light'
            ? {
                  // palette values for light mode
                  primary: {
                      main: '#8c0d0d',
                      light: '#a82222',
                  },
                  secondary: {
                      main: '#d62c2c',
                  },
                  error: {
                      main: '#ff3225',
                  },
                  background: {
                      default: '#fff',
                      paper: '#EEEEEE',
                  },
                  text: {
                      primary: 'rgba(0, 0, 0, 0.87)',
                      secondary: 'rgba(0, 0, 0, 0.87)',
                      disabled: 'rgba(255, 255, 255, 0.5)',
                      hint: '#251579',
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: '#620000',
                  },
                  secondary: {
                      main: '#ff4040',
                  },
                  error: {
                      main: '#ff3225',
                  },
                  background: {
                      default: '#121212',
                      paper: '#191919',
                  },
                  text: {
                      primary: '#fff',
                      secondary: 'rgba(255, 255, 255, 0.7)',
                      disabled: 'rgba(255, 255, 255, 0.5)',
                      hint: '#251579',
                  },
              }),
    },
});

export const uiTheme = (isDark) => {
    const theme = createTheme(themeParams(isDark));
    return theme;
};
