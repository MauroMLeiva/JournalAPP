import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDark: localStorage.getItem('darkMode') || 'dark',
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleDark: (state) => {
            state.isDark = state.isDark === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleDark } = uiSlice.actions;
