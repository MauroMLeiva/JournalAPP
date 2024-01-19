import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: 'calc(100vh - 110px)',
                borderRadius: 4,
            }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100 }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Select a note or create a new one
                </Typography>
            </Grid>
        </Grid>
    );
};
