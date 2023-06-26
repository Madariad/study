import { useState } from "react"
import { Button } from "@mui/material"
import '../syllabus/Syllabus.css'

const Syllabus = () => {
    const [lessons, setLessons] = useState([
        // {
        //     title: 'new module',
        //     description: 'module description',
        //     sublesson: [
        //         {
        //             title: 'sublesson for new module'
        //         }
        //     ]
        // }
    ])

    if (!lessons.length) {
        return (
            <section className="syllabus">
                <p>В курсе пока что нет ни одного урока
                    Создайте первый модуль чтобы добавить уроки
                </p>
                <Button variant="contained" color="success">Создать</Button>
            </section>
        )
    }

    return (
        <>
            <h2>Контент курса</h2>
        </>
    )
}

export default Syllabus