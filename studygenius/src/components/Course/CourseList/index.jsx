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

// import { useDispatch } from "react-redux";
function CourseList() {
    const {courseId} = useParams()
    const [iSbutton, setiSbutton] = useState(false)
    const dispath = useDispatch()

    const userData =  useSelector((state) => state.user.userData)
    let isCourseSubscribed = false;
    // const subscribedCourses = userData.subscribed_courses !== null ?  userData.subscribed_courses : [] 
    if (userData.subscribed_courses !== null) {
        
        for (let i = 0; i < userData.subscribed_courses.length; i++) {
            console.log(userData.subscribed_courses[i]);
            if (userData.subscribed_courses[i] == courseId) {
              isCourseSubscribed = true;
              break;
            }
          }
    }
  
        
        useEffect(() => {
            dispath({type: 'GET_COURS', courseId: courseId})
        }, [dispath, courseId])
        const courseList = useSelector((state) => state.course.cours);
        console.log(courseList)
        const [open, setOpen] = React.useState(true);
        console.log(courseList);
  
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
const navigate = useNavigate()
    const handleChangeCourse = () => {
        console.log('пройти курс');
    }
    return (
        <div className="course">
            
            <div className="course_items">
            <Box className="course_container" sx={{padding: '0 20px'}}>
                    {courseList !== null ? courseList.map((course, i) => (
                      <>
                         <div className="">
                            <div className="course_item" key={i}>
                            <div className="course_title">{course.course_name}</div>
                            <div className="course_description">{course.course_description}</div>
                        </div>
                       </div>
                    

                <div className="course_item">
                    <div className="course_img">
                        <img src={courseList[0].course_image === null ? "../../../../../../public/img/react.png" : `http://localhost:5000/api/v1/course/img/${courseList[0].course_image}`}/>
                    </div>
                </div>
                      </>
                )) : <div>Loading</div>}
            </Box>
            </div>
            <div className="lessons">
                <Box component={'div'} className="lessons_container" sx={(theme) => ({padding: '0 20px', color: theme.palette.colorText.main, marginBottom: '100px' })}>
                    <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={6}>
                         <div className="lessons_items">
                        <div className="lessons_item">
                            <h3>Чему вы научитесь</h3><br />
                            <ul>
                                <li> <DoneIcon style={{color: "green"}} /> Разбираться в работе с переменными, типами данных, управляющими структурами, функциями в Go.</li>
                                <li> <DoneIcon style={{color: "green"}} /> Разбираться в работе с переменными, типами данных, управляющими структурами, функциями в Go.</li>
                                <li> <DoneIcon style={{color: "green"}} /> Разбираться в работе с переменными, типами данных, управляющими структурами, функциями в Go.</li>
                                <li> <DoneIcon style={{color: "green"}} /> Разбираться в работе с переменными, типами данных, управляющими структурами, функциями в Go.</li>
                            </ul>
                        </div>
                        <div className="lessons_item">
                            <h3>О курсе</h3><br />
                            <p>
                                Go (или Golang) - это высокоуровневый язык программирования, разработанный компанией Google.
                                Он был создан с целью упростить разработку программных приложений, обладать высокой 
                                производительностью и быть легким в использовании. Основные принципы, лежащие в основе 
                                языка Go, - это простота, эффективность и надежность. <br /><br />
                                Go имеет огромное сообщество разработчиков, которые активно поддерживают и развивают язык,
                                предлагая множество библиотек и модулей, которые значительно упрощают разработку.
                                Go также является одним из наиболее востребованных языков программирования на рынке труда,
                                что делает его привлекательным выбором для тех, кто стремится к карьерному росту.
                            </p>
                        </div>
                        <div className="lessons_item">
                            <h3>Начальные требования</h3><br />
                            <p>
                                Для успешного прохождения курса "Go Тренажер" требуются базовые знания из школьной программы 
                                по информатике и математике, а также базовый уровень владения языком программирования Go.
                                Если вы уже изучали Go и имеете опыт работы с ним, то этот курс поможет вам улучшить ваши навыки
                                и подготовиться к новым вызовам.<br /><br />
                                Если же вы новичок в программировании или только начинаете изучать Go, то рекомендуем предварительно 
                                или паралельно изучить Go на базовом уровне. Это поможет вам быстрее и легче освоить материал курса и 
                                получить максимальную пользу от его прохождения.
                            </p>
                        </div>
                    </div>
                         </Grid>
                         <Grid item xs={12} sm={12}  md={6}>
                         {useMediaQuery((theme) => theme.breakpoints.down('sm') && theme.breakpoints.down('md'))   ?  
                         (
                            <Box sx={(theme) => ({position: 'fixed', bottom: '0px', left: '0px', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', backgroundColor: 'white', border: '1px black solid' })}>
                                
                                 <Box sx={{display: 'flex', alignItems: 'center', columnGap: '20px'}}>
                                 <Button variant="contained" style={{width: "300px", height: "50px"}} onClick={handleEnroll}>Поступить на курс Бесплатно</Button> <br /><br />
                               
                                <FavoriteBorderIcon sx={{width: '50px', height: '50px', backgroundColor: '#c2c2c2', borderRadius: '10px', padding: '10px'}}/> 
                                
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

                                
                                <Button variant="outlined" style={{width: "300px", height: "50px"}}> <FavoriteBorderIcon /> добавить в избранное</Button>
                            </div>
                        </div>
                    </div>
                         )}
                 
                         </Grid>
                    </Grid>
                   
                    
                </Box>
            </div>
        </div>
        // {lessons.map((lesson, index) => (
        //     <div className="course_item" key={index}>
        //       <div className="course_title">{lesson.title}</div>
        //       <div className="course_description">{lesson.description}</div>
        //     </div>
        //   ))}
    )
}
export default CourseList; 
// export default function NestedList() {
    // const [open, setOpen] = React.useState(true);
  
    // const handleClick = () => {
    //   setOpen(!open);
    // };
  
//     return (
//       <List
//         sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Nested List Items
//           </ListSubheader>
//         }
//       >
//         <ListItemButton onClick={handleClick}>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//       </List>
//     );
//   }