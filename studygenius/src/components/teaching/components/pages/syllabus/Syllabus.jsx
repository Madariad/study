import { useEffect, useMemo, useState } from "react"
import { Button } from "@mui/material"
import '../syllabus/Syllabus.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import axiosConfig from '../../../../../axiosConfig'
import axios from "axios";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Syllabus = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [lessons, setLessons] = useState(null)

    // get current course's lessons
    const params = useParams()

    useEffect(() => {
        const getLessons = async () => {
            try {
                const data = await axiosConfig.get(`course/${params.id}/lessons`)
                setLessons(data.data.lessons)
                console.log(data)
            } catch (e) {
                console.error(e)
            }
        }
        getLessons()
    }, [])

    const currentCourseLessons = useMemo(() => {
        if (lessons) {
            return [...lessons].filter(module => params.id == module.teacherCourseId)
        }
    }, [lessons])

    useEffect(() => {
        if (lessons) {
            lessons.map((lesson) => {
                localStorage.setItem('creating-name', JSON.stringify(lesson.course_name))
                localStorage.setItem('teachingCourseId', JSON.stringify(params.id))
            })
        }
    }, [lessons])

    useEffect(() => {
        if (lessons) {
            
        }
    }, [lessons])


    

    return (
        <>
            <h2>Программа курса</h2>
            <Button href={`/courses/${params.id}/edit`} variant="contained" color="success">Редактировать содержание</Button>
            <section className="module section-padding">
                <ul className="module__row">
                        {lessons && 
                            lessons.map((lesson, index) => {
                                if (!lesson.lesson_title) {
                                    return (
                                        <section className="syllabus">
                                            <p>В курсе пока что нет ни одного урока
                                                Создайте первый модуль чтобы добавить уроки
                                            </p>
                                            <Button href={`/courses/${params.id}/edit`} variant="contained" color="success">Создать</Button>
                                        </section>
                                    )
                                } else {
                                    return (
                                        <li key={lesson.lesson_id}>
                                            <Card className={classes.root} variant="outlined">
                                            <CardContent>
                                              <Typography variant="h5" component="h2">
                                                {(index + 1) + '. ' + lesson.lesson_title}
                                              </Typography>
                                            </CardContent>
                                          </Card>
                                        </li>
                                    )
                                }
                            })
                            
                            }
                </ul>
            </section>
        </>
    )
}

export default Syllabus