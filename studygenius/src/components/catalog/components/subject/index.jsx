import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        height: 100,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 20
    }
}))
function subject() {
    const clasess = useStyles() 
    return (
        <>
        <Typography variant="h1" color="primary.main">придметы</Typography>
           <Grid container spacing={2}>
               <Grid item sx={2}>
                    <Box component="div" className={clasess.root}></Box>
               </Grid>
               <Grid item sx={2}>
                  <Box component="div" className={clasess.root}></Box>  
               </Grid>
           </Grid>
        </>
    )
}

export default subject