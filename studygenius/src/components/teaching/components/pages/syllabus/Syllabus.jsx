import { useEffect, useMemo, useState } from "react"
import { Button } from "@mui/material"
import '../syllabus/Syllabus.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";

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
    const [lessons, setLessons] = useState([
        {
            teacherCourseId: 1,
            moduleId: 22,
            title: 'new module',
            description: 'module description',
            sublesson: [
                {
                    title: 'sublesson for new module'
                }
            ],
            courseTitle: 'my first course'
        },
        {
            teacherCourseId: 2,
            moduleId: 22,
            title: '2 module',
            description: 'module description',
            sublesson: [
                {
                    title: 'sublesson for new module'
                }
            ],
            courseTitle: 'my second course'
        },
        {
            teacherCourseId: 3,
            moduleId: 22,
            title: '3 module',
            description: 'module description',
            sublesson: [
                {
                    title: 'sublesson for new module'
                }
            ],
            courseTitle: 'my finished course'
        },
    ])

    // get current course's lessons
    const params = useParams()
    console.log(params)
    const currentCourseLessons = useMemo(() => {
        return [...lessons].filter(module => params.id == module.teacherCourseId)
    })

    useEffect(() => {
        if (currentCourseLessons) {
            currentCourseLessons.map((lesson) => {
                localStorage.setItem('creating-name', JSON.stringify(lesson.courseTitle))
                localStorage.setItem('teachingCourseId', JSON.stringify(params.id))
            })
        }
    }, [currentCourseLessons])

    if (!currentCourseLessons.length) {
        return (
            <section className="syllabus">
                <p>В курсе пока что нет ни одного урока
                    Создайте первый модуль чтобы добавить уроки
                </p>
                <Button href={`/courses/${params.id}/edit`} variant="contained" color="success">Создать</Button>
            </section>
        )
    }

    return (
        <>
            <h2>Программа курса</h2>
            <Button href={`/courses/${params.id}/edit`} variant="contained" color="success">Редактировать содержание</Button>
            <section className="module section-padding">
                <ul className="module__row">
                        {currentCourseLessons.map((lesson, index) => 
                        <li key={lesson.title}>
                            <Card className={classes.root} variant="outlined">
                            <CardContent>
                              <Typography variant="h5" component="h2">
                                {(index + 1) + '. ' + lesson.title}
                              </Typography>
                            </CardContent>
                          </Card>
                        </li>
                        )}
                </ul>
            </section>
        </>
    )
}

export default Syllabus