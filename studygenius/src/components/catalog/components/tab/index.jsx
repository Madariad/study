import {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { styled } from '@mui/material/styles';

import Card from "./card/index";
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import img from '../../../../../public/img/react.png'
import { makeStyles } from '@mui/styles'



import { useDispatch, useSelector } from "react-redux"



const useStyles = makeStyles((theme) => ({
    root: {
      fontWeight: 'bold',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    }
}))

 function LabTabs() {
   const dispath = useDispatch()
  const courses = useSelector((state) => state.course.courseList)
   const [value, setValue] = useState('1');
  //  const [courses, setCourses] = useState([]);


   
   useEffect(() => {
     function getCourse() {
      dispath({type: 'GET_COURSE'})
     
    }
    getCourse()
  }, [dispath])
  console.log(courses);
  // courses.map((course) => {
  //   console.log(course);
  // })
//  console.log(course);
  // if (courses === null) {
  //   console.log('null');
  // } else {
  //   const courses = useSelector((state) => state.course.courseList)
  //   setCourses(courses)

  // }






  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%' ,
    // [theme.breakpoints.up('xs')]: {
    //   },
  }));

  return (

    
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <Typography variant="h1" color="primary">онлайн курсы 🧠</Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Новое" value="1" />
            <Tab label="популярный" value="2" />
            <Tab label="курсы по React js" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* {course.map} */}
            {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>           
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>           
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>           
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>           
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item><Card title={'Курсы React'} subtitle={'React best'} img={img}/></Item>
                </Grid>
                
            </Grid> */}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default LabTabs