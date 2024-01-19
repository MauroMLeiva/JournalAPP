import { useEffect, useMemo, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import {
    DeleteOutline,
    SaveOutlined,
    UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';
import { ImageGallery } from '../components';
import {
    setActiveNote,
    startDeletingNote,
    startSavingNote,
    startUploadingFiles,
} from '../../store/journal';

export const NoteView = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const {
        active: note,
        messageSaved,
        isSaving,
    } = useSelector((state) => state.journal);

    const { body, title, onInputChange, formState, date } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toDateString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                title: 'Note updated',
                icon: 'success',
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                confirmButtonColor: theme.palette.primary.main,
                iconColor: theme.palette.primary.main,
            });
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSavingNote());
    };

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    };

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}
            alignItems='center'
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color='error'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='error'
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Add a Title'
                    label='Title'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Write your entry'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>

            {/* Image Gallery */}
            <ImageGallery images={note.imageUrls} />
        </Grid>
    );
};
