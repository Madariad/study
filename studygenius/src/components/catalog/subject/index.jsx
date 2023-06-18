import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
function subject() {
    return (
        <>
        <Typography variant="h1" color="primary.main">придметы</Typography>
           <Grid container spacing={2}>
               <Grid item sx={2}>
                        one
               </Grid>
               <Grid item sx={2}>
                        two
               </Grid>
           </Grid>
        </>
    )
}

export default subject