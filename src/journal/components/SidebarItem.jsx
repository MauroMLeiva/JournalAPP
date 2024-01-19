import { TurnedInNot } from '@mui/icons-material';
import {
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const onSetNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    };

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title + ``;
    }, [title]);

    const newBody = useMemo(() => {
        return body.length > 65 ? body.substring(0, 65) + '...' : body;
    }, [body]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onSetNote}>
                <ListItemIcon>
                    <TurnedInNot sx={{ color: 'white' }} />
                </ListItemIcon>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText
                            primary={newTitle}
                            primaryTypographyProps={{
                                color: 'white',
                                fontWeight: 'bold',
                                style: { whiteSpace: 'pre-line' },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ListItemText
                            secondaryTypographyProps={{
                                color: 'white',
                                fontWeight: 'lighter',
                            }}
                            secondary={newBody}
                        />
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
