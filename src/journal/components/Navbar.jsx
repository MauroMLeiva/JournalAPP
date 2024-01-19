import { useDispatch } from 'react-redux';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { startLogout } from '../../store/auth';
import { ToggleDarkMode } from '../../ui/components';

export const Navbar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout());
    };

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container justifyContent='flex-start'>
                    <Typography variant='h6' noWrap component='div'>
                        Journal
                    </Typography>
                </Grid>

                <Grid container justifyContent='flex-end'>
                    <ToggleDarkMode />

                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined sx={{ ml: 4 }} />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
