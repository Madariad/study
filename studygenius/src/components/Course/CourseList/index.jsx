import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useParams } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import axiosConfig from "../../../axiosConfig";
import { Box, Grid } from '@mui/material';
import { useMediaQuery, Typography } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LoadingButton from '@mui/lab/LoadingButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CourseList() {
    const {courseId} = useParams()
    const [iSbutton, setiSbutton] = useState(false)
    const dispath = useDispatch()

    const userData =  useSelector((state) => state.user.userData)
    let isCourseSubscribed = false;
    let [isCourseChosen, setIsCourseChosen] = useState(false);
    const [cours, setCours] = useState([])

    if (userData.subscribed_courses !== null && Array.isArray(userData.subscribed_courses)) {
        
        for (let i = 0; i < userData.subscribed_courses.length; i++) {
            console.log(userData.subscribed_courses[i]);
            if (userData.subscribed_courses[i] == courseId) {
              isCourseSubscribed = true;
              break;
            }
          }
    }


    useEffect(() => {
        if (
          userData.chosen_course !== null &&
          Array.isArray(userData.chosen_course)
        ) {
            const id = parseInt(courseId)
          if (userData.chosen_course.includes(id)) {
            setIsCourseChosen(true);
          }
        }
      }, []);
      
        const courseList = useSelector((state) =>  state.course.courseList)
     useEffect(() => {
      function getCourse() {
        if (courseList !== null && Array.isArray(courseList)) {
        
          for (let i = 0; i < courseList.length; i++) {
              const id = parseInt(courseId)
              console.log(courseList[i]);
              if (courseList[i].course_id === id) {
                setCours(courseList[i])
                break;
              }
            }
      }
      }
      getCourse()
     }, [dispath])



        // const courseList = useSelector((state) => state.course.cours);
        const [open, setOpen] = React.useState(true);
        console.log(cours);
  
    const handleClick = () => {
      setOpen(!open);
    };
    
    const  handleEnroll = async () => {
        setiSbutton(true)
        const res =   await axiosConfig.post(`users/subscribed/${courseId}`)
        if (res.data.status === 'success') {
            setiSbutton(false)
            dispath({type: "GET_USERDATA"})
            
        }
    }
    const handleChosenCourse = async () => {
        const res = await axiosConfig.post(`users/chosen/${courseId}`);
        console.log(res.data.status);
        if (res.data.status === 'success') {
          setIsCourseChosen(true);
        }
      }
      const [expanded, setExpanded] = useState(null);
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
      };
    
   
const navigate = useNavigate()
    const handleChangeCourse = () => {
        console.log('пройти курс');
    }
    return (
        <div className="course">
            {cours !== [] ? [cours].map((course, i) => (
            <>
            <div className="course_items">
            <Box className="course_container" sx={{padding: '0 20px'}}>
                   
                      <>
                         <div className="" key={course.course_id}>
                            <div className="course_item">
                            <div className="course_title">{course.course_name}</div>
                            <Box className="course_description" sx={{maxWidth: '500px', whiteSpace: 'wrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{course.course_description}</Box>
                        </div>
                       </div>
                    

                <div className="course_item">
                    <div className="course_img">
                        <img src={courseList[0].course_image === null ? "../../../../../../public/img/react.png" : `http://localhost:5000/api/v1/course/img/${courseList[0].course_image}`}/>
                    </div>
                </div>
                      </>
                
              
            </Box>
            </div>
            <div className="lessons">
                <Box component={'div'} className="lessons_container" sx={(theme) => ({padding: '0 20px', color: theme.palette.colorText.main, marginBottom: '100px' })}>
                    <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={6}>
                         <div className="lessons_items">
                         {course.what_you_will_learn && (
  <div className="lessons_item">
    <h3>Чему вы научитесь</h3><br />
    <ul>
      {course.what_you_will_learn.includes(", ")
        ? course.what_you_will_learn.split(", ").map((data) => (
            <li key={data}>
              <DoneIcon style={{color: "green"}} /> {data}
            </li>
          ))
        : <li key={course.what_you_will_learn}>
            <DoneIcon style={{color: "green"}} /> {course.what_you_will_learn}
          </li>}
    </ul>
  </div>
)}

                           {course.about_course && 
                           (
                               <div className="lessons_item">
                                   <h3>О курсе</h3><br />
                                   <p>
                                   {course.about_course}
                                   </p>
                               </div> 

                           )}
                           { course.target_audience && 
                           (

                                <div className="lessons_item">
                                   <h3>Для кого этот курс</h3><br />
                                       <p>
                                           {course.target_audience}
                                        </p>
                                   </div> 
                           )

                           }
                              {course.course_program_details && (
  <div className="lessons_item">
    <h3>Программа курса</h3>
    <br />
    {JSON.parse(course.course_program_details).map((program, index) => (
      <Accordion
        key={index}
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}d-content`}
          id={`panel${index + 1}d-header`}
        >
          <Typography>{program.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{program.content}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
)}

                       
                    </div>
                         </Grid>
                   
                         <Grid item xs={12} sm={12}  md={6}>
                         {useMediaQuery((theme) => theme.breakpoints.down('sm') && theme.breakpoints.down('md'))   ?  
                         (
                            <Box sx={(theme) => ({position: 'fixed', bottom: '0px', left: '0px', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', backgroundColor: 'white', border: '1px black solid' })}>
                                
                                 <Box sx={{display: 'flex', alignItems: 'center', columnGap: '20px'}}>
                                 <Button variant="contained" style={{width: "300px", height: "50px"}} onClick={handleEnroll}>Поступить на курс Бесплатно</Button> <br /><br />
                                 {isCourseChosen === true ?  
                                    <FavoriteIcon  sx={{width: '50px', height: '50px', backgroundColor: '#c2c2c2', borderRadius: '10px', padding: '10px'}}/>  
                                    : 
                                <FavoriteBorderIcon sx={{width: '50px', height: '50px', backgroundColor: '#c2c2c2', borderRadius: '10px', padding: '10px'}} onClick={handleChosenCourse}/> 
                                }
                               
                                
                                 </Box>
                            </Box>
                         ) : (

                         <div className="lessons_itemss">
                        <div className="lessons_menu">
                            <div className="lessons_menu_item sticky">
                                <h3 style={{color: "green"}}>Бесплатно</h3><br />
                                {!isCourseSubscribed ? (
  iSbutton === true ? (
    <LoadingButton variant="contained" style={{width: "300px", height: "50px"}}>
      Loading
    </LoadingButton>
  ) : (
    <>
      <Button variant="contained" style={{width: "300px", height: "50px"}} onClick={handleEnroll}>
        Поступить на курс
      </Button>
      <br /><br />
    </>
  )
) : (
    <>
    <Button variant="contained" style={{width: "300px", height: "50px"}} href={`/${courseId}/lessons`} onClick={handleChangeCourse}>
      Пройти курс
    </Button>
    <br /><br />
  </>
)}

{isCourseChosen === true ? 
    <Button variant="outlined" style={{width: "300px", height: "50px"}} > <FavoriteIcon /> у вас в избранное</Button>
:
<Button variant="outlined" style={{width: "300px", height: "50px"}} onClick={handleChosenCourse}> <FavoriteBorderIcon /> добавить в избранное</Button>
}
                                
                            </div>
                        </div>
                    </div>
                         )}
                 
                         </Grid>
                    </Grid>
                   
                    
                </Box>
            </div>
        </>
        )) : <div>Loading</div>}
        </div>

    )
}
export default CourseList; 
