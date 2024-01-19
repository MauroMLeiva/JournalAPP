import { toggleDark } from './uiSlice';

export const asyncToggleDark = () => {
    return (dispatch) => {
        const isDarkMode = localStorage.getItem('darkMode') || 'dark';
        localStorage.setItem(
            'darkMode',
            isDarkMode == 'dark' ? 'light' : 'dark'
        );

        dispatch(toggleDark());
    };
};
