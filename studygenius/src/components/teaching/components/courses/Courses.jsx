import '../courses/Courses.css'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button } from '@mui/material';
import CourseList from '../course-list/CourseList';
import { useMemo, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([
      {id: 1, title: 'my first course'},
      {id: 2, title: 'my next course'},
      {id: 3, title: 'my finished course'}
    ])
    const [searchInput, setSearchInput] = useState('')

    const searchCourse = useMemo(() => {
      return [...courses].filter(course => {
        return course.title.toLowerCase().includes(searchInput.toLowerCase())
      })
    }, [searchInput])

    useMemo(() => {
      localStorage.setItem('teach-courses', JSON.stringify(courses))
    }, [courses])

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
            <CourseList list={searchCourse}/>
          </div>
        </section>
        </>
    )
}

export default Courses