import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

function CourseList() {
    const {courseId} = useParams()
        console.log(courseId)
    const dispath = useDispatch()
        useEffect(() => {
            function ass() {

        dispath({type: 'GET_LESSONS', courseId: courseId})
            }
            ass()
        }, [dispath, courseId])


        const lessons = useSelector((state) => state.lessons.lessonsList)
        console.log(lessons);
        
        
        useEffect(() => {
            dispath({type: 'GET_COURS', courseId: courseId})
        }, [dispath, courseId])
        const courseList = useSelector((state) => state.course.cours);
        console.log(courseList)
        const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <div className="course">
            
            <div className="course_items">
            <div className="course_container">
                    {courseList !== null ? courseList.map((course, i) => (
                        <div className="course_item" key={i}>
                            <div className="course_title">{course.course_name}</div>
                            <div className="course_description">{course.course_description}</div>
                        </div>
                    )) : <div>Loading</div>}

                <div className="course_item">
                    <div className="course_img">
                        <img src="../../../../../../public/img/react.png"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="lessons">
                <div className="lessons_container">
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
                    <div className="lessons_itemss">
                        <div className="lessons_menu">
                            <div className="lessons_menu_item sticky">
                                <h3 style={{color: "green"}}>Бесплатно</h3><br />
                                <Button variant="contained" style={{width: "300px", height: "50px"}}>Купить</Button> <br /><br />
                                <Button variant="outlined" style={{width: "300px", height: "50px"}}> <FavoriteBorderIcon /> Пройти курс</Button>
                            </div>
                        </div>
                    </div>
                </div>
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