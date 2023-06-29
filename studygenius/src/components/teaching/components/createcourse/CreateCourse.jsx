import '../createcourse/CreateCourse.css'
import * as React from 'react'
import { TextField, Button } from "@mui/material"
import { useState } from 'react'
import { CreatingContext } from '../../../../context'
import router from '../../../../routes/routes'
import { useNavigate } from 'react-router-dom'
import axiosConfig from "../../../../axiosConfig";

const CreateCourse = () => {
    const [createdCourse, setCreatedCourse] = useState({
        id: 7,
        title: 'hello'
    })
    const [courseName, setCourseName] = useState('')
    const [error, setError] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()
        if (courseName) {
            const res =  await axiosConfig.post('/course/create', 
            {
                course_name: courseName,
                course_language: 'Rasshan',
                course_topic: 'React',
                course_description: 'sdsdsd'
            })
             if (res.data.status === 'success') {
                
                 console.log(res);
                 localStorage.setItem('isCreating', true); 
                 localStorage.setItem('creating-name', JSON.stringify(courseName)); 
                 const a = document.createElement('a')
                 const link = document.createTextNode('This is link')
                 a.appendChild(link)
                 a.title = 'this is link'
                 a.href = `/courses/${createdCourse.id}/syllabus`
                 a.click()
             } else {
                console.log('sssssssssssssssssssssssssssssss');
             }
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