import '../createcourse/CreateCourse.css'
import * as React from 'react'
import { TextField, Button } from "@mui/material"
import { useState } from 'react'
import { CreatingContext } from '../../../../context'

const CreateCourse = () => {
    const {isCreating, setIsCreating} = React.useContext(CreatingContext)
    return (
        <section className="create-course">
            <div className="create-course__inner">
                <h2>Создать новый курс</h2>
                <TextField id="outlined-basic" label="Название курса" variant="outlined" />
                <Button onClick={e => setIsCreating(true)} href='/teach/courses/22/syllabus' variant="contained" color="success">Создать</Button>
            </div>
        </section>
    )
}

export default CreateCourse