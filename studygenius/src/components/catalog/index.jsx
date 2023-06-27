import * as React from 'react';
import { makeStyles } from '@mui/styles';
import InputSearch from "./components/inputSearch/index";
import Button from '@mui/material/Button';
import Tab from "./components/tab/index";
import Select from "./components/select/index";
import Checkbox from "./components/checkbox/index";
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Banner from './components/banner/index'

// import { useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux"




const useStyles = makeStyles((theme) => ({
  search: {
    width: '100%',
    height: '100px',
    padding: '20px',
    backgroundColor: theme.palette.tableColor.main,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20
  },
  tab: {
    marginTop: 60
  },
  subject: {
    marginTop: 60
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

function Catalog() {
  // const dispath = useDispatch()
  const classes = useStyles();

  return (
    <>
 <Box component='div' sx={{paddingTop: '58px'}}>
      <Banner />
  </Box>
   <Container maxWidth="lg" sx={{marginTop: '100px'}}>


    <div>
      {/* <div className={classes.search}>
        <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
          <Grid item xs={12} sm={5} md={3} >
           
              <InputSearch />
              
          </Grid>
          <Grid item xs={12} sm={2} md={3}>
               <Select />
          </Grid>
          <Grid item xs={12} sm={10} md={2}>
            <Checkbox />
          </Grid>
          <Grid item xs={12} sm={2} md={1}>
            <Button
              className={classes.button}
              disabled={false}
              size="medium"
              variant="contained"
            >
              Искать
            </Button>
          </Grid>
        </Grid>
      </div> */}
      <div className={classes.tab}>
        <Tab />
      </div>
      <div className={classes.subject}>
        {/* <Subject /> */}
      </div>
    </div>
    </Container>
    </>
  );
}

export default Catalog;
