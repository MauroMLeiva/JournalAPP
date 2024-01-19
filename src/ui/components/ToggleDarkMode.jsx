import { useDispatch, useSelector } from 'react-redux';
import { DarkMode, LightMode, Lightbulb } from '@mui/icons-material';
import { IconButton, Stack, Switch } from '@mui/material';
import { asyncToggleDark } from '../../store/ui';

export const ToggleDarkMode = () => {
    const dispatch = useDispatch();
    const onToggle = () => {
        dispatch(asyncToggleDark());
    };
    const { isDark } = useSelector((state) => state.ui);
    const check = isDark == 'dark' ? true : false;

    return (
        <Stack direction='row' spacing={1} alignItems='center'>
            <LightMode />
            <Switch checked={check} onChange={onToggle} color='secondary' />
            <DarkMode />
        </Stack>

        // <IconButton onClick={onToggle}>
        //     <Lightbulb color='secondary' />
        // </IconButton>
    );
};
