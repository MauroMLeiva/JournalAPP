import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { uiTheme } from './';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const AppTheme = ({ children }) => {
    const { isDark } = useSelector((state) => state.ui);
    const theme = useMemo(() => uiTheme(isDark), [isDark]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
