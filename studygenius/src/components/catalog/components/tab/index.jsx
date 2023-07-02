
import {useState, useEffect } from 'react';

import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { styled } from '@mui/material/styles';

import Card from "./card/index";
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux"


 function LabTabs() {
   const dispath = useDispatch()
   const [value, setValue] = useState('1');

   useEffect(() => {
     function getCourse() {
      dispath({type: 'GET_COURSE'})
     
    }
    getCourse()
  }, [dispath])



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const courseList = useSelector((state) => state.course.courseList);



  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Новое" value="1" />
            <Tab label="популярный" value="2" />
            <Tab label="курсы по React js" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container spacing={2}>
                {courseList !== null ? courseList.map((course) => ( 
    <Grid item xs={12} sm={6} md={4} key={course.course_id}>
      <Card btnTxtCourse={'Пройти'} description={course.course_description} name={course.course_name} id={course.course_id} img={course.course_image }/>         
    </Grid>)) : <div>Loading</div>}
            </Grid>

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default LabTabs