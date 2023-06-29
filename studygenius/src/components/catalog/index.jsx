import * as React from 'react';
import { makeStyles } from '@mui/styles';
import InputSearch from "./components/inputSearch/index";
import Button from '@mui/material/Button';
import Tab from "./components/tab/index";
import Select from "./components/select/index";
import Checkbox from "./components/checkbox/index";
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Banner from './components/banner/index'
import TestBanner from './components/testBanner/index'
import "./style.css";
import Kotoegry from "./components/kotoegry/index";
import Footer from './components/footer/index'

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
  
}));

function Catalog() {
  // const dispath = useDispatch()
  const classes = useStyles();

  return (
    <>
 <Box component='div' sx={{paddingTop: '67px'}}>
 <TestBanner />
      {/* <Banner /> */}
  </Box>
   <Container maxWidth="lg" sx={{marginTop: '20px'}}>
   <div class="alternate-headline--title-container--3kgJ0"><div class="alternate-headline--title-no-margin--2B8yO"><h2 id="Большой выбор курсов" class="headline__main-text ud-heading-serif-xl" data-purpose="alternate-headline-title">Большой выбор курсов</h2></div><p class="headline__sub-text ud-text-lg alternate-headline--secondary-text-small-margin--3aDFf">Выбирайте из более чем 210&nbsp;000 онлайн-видеокурсов; новые курсы добавляются на сайт каждый месяц</p></div>


    <div> 
          <div className={classes.subject}>
           
                    <InputSearch />
              
          </div> 
          <div className={classes.tab}>
            <Tab />
          </div>
          <div className={classes.subject}>
               <Kotoegry />
             {/* <Subject />  */}
          </div> 
          <div className={classes.subject}>
               
          <section data-purpose="teach-on-udemy" class="component-margin non-student-cta--non-student-cta-wrapper--2Nikm">
            <div class="non-student-cta--non-student-cta-bg--1okkJ">
              <div class="non-student-cta--non-student-cta-content-wrapper--26uBA">
              <img class="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-mobile--18vY3" 
              data-purpose="mobile-non-student-cta-image" 
              src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg" 
              alt="" width="600" height="450" loading="lazy" />
              <img class="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D" 
              data-purpose="desktop-non-student-cta-image" 
              src="home/non-student-cta/instructor-1x-v3.jpg" 
              srcset="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg 2x" 
              alt="" width="400" height="400" loading="lazy" />
              <div class="non-student-cta--non-student-cta--2quSb" data-purpose="non-student-cta-body">
                <h3 class="ud-heading-serif-xl non-student-cta--non-student-cta__header--3xgVp" 
                data-purpose="non-student-cta-title">Станьте преподавателем</h3>
                <div class="ud-text-md non-student-cta--non-student-cta__content--3D827">Преподаватели со всего мира обучают миллионы студентов на studygenius. Мы даем вам средства преподавать то, что вы любите.</div>
                <div class="non-student-cta--ctas-container--1alXW">
                  <div class="non-student-cta--non-student-cta__link--1Ujpk">
                  <Button variant="outlined" size="large">
    
                       начните приподавать сегодня
                   </Button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
          </div> 
    </div>
    </Container>
          <div className={classes.subject}>
               <Footer/>
             {/* <Subject />  */}
          </div> 
    </>
  );
}

export default Catalog;


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