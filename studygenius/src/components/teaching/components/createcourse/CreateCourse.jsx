import '../createcourse/CreateCourse.css'
import * as React from 'react'
import { TextField, Button } from "@mui/material"
import { useState } from 'react'
import { CreatingContext } from '../../../../context'
import router from '../../../../routes/routes'
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
    const [courseName, setCourseName] = useState('')
    const [error, setError] = useState('')

    const handleClick = (e) => {
        if (courseName) {
            localStorage.setItem('isCreating', true); 
            localStorage.setItem('creating-name', JSON.stringify(courseName)); 
            const a = document.createElement('a')
            const link = document.createTextNode('This is link')
            a.appendChild(link)
            a.title = 'this is link'
            a.href = '/courses/22/syllabus'
            a.click()
            useNavigate('/dsfg')
        } else {
            setError('Курс не может быть без имени')
        } 
        console.log(courseName)
    }
    return (
        <section className="create-course">
            <div className="create-course__inner">
                <h2>Создать новый курс</h2>
                <TextField onInput={e => setCourseName(e.target.value)} id="outlined-basic" label="Название курса" variant="outlined" />
                {error && 
                <div>{error}</div>}
                <Button onClick={e => {handleClick(e)}} variant="contained" color="success">Создать</Button>
            </div>
        </section>
    )
}

export default CreateCourse