import '../courses/Courses.css'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button } from '@mui/material';
import CourseList from '../course-list/CourseList';
import { useEffect, useMemo, useState } from 'react';

import axiosConfig from "../../../../axiosConfig";

const Courses = () => {
    const [courses, setCourses] = useState(null)
    const [searchInput, setSearchInput] = useState('')

    const searchCourse = useMemo(() => {
      if (courses && courses.length > 0) {
        return [...courses].filter(course => {
          return course.course_name.toLowerCase().includes(searchInput.toLowerCase())
        })
        
      }
    }, [courses,searchInput])

    useMemo(() => {
      localStorage.setItem('teach-courses', JSON.stringify(courses))
    }, [courses])


    useEffect(() => {
     async  function getCourses() {
        try {
          const res = await axiosConfig.get('/users/courses/all')
          console.log(res);
          setCourses(res.data.corses)
        } catch (error) {
          console.error(error);
        }
      }
      getCourses()  
    }, [])
    return (
      <>
        <section className="course-search">
            <div className="course-search__inner">
                <TextField
                  label="Имя курса или ID"
                  onInput={e => setSearchInput(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" color="success">
                    Искать
                </Button>
            </div>
        </section>
        <section className="courses-teacher section-padding">
          <div className="courses-teacher__inner"> 
            <CourseList  list={searchCourse}/>
          </div>
        </section>
        </>
    )
}

export default Courses