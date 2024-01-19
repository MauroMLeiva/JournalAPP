import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';

export const redTheme = createTheme({
    palette: {
        dark: {
            main: '#5c1010',
        },
        primary: {
            main: '#5c1010',
        },
        light: {
            main: '#191919',
        },
        error: {
            main: '#ED5107',
        },
    },
});

export const darkLight = () => {
    const { isDark } = useSelector((state) => state.ui);
    createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            primary: {
                main: '#5c1010',
            },
            secondary: {
                main: '#5c1010',
            },
        },
    });
};
