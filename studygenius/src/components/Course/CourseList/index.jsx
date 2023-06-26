import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useParams } from 'react-router-dom';

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
            <div className="course_container">
            <div className="course_items">

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
            <div className="course_container">
            Программа курса
                {lessons.map((lesson, index) => (
                    
                    <div className="lessons_items" key={index}>
                    
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                            }
                        >
                            <ListItemButton onClick={handleClick}>
                            <ListItemText primary={lesson.lesson_title} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary={lesson.lesson_content} />
                                </ListItemButton>
                            </List>
                            </Collapse>
                        </List>
                    </div>
                ))}
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