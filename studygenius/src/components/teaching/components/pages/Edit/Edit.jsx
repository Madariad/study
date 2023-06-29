import { Button, TextField } from '@mui/material'
import { MuiThemeProvider } from 'material-ui/styles'
import './Edit.css'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CloseSharp } from '@material-ui/icons'
import axiosConfig from '../../../../../axiosConfig'

const Edit = () => {
  const [lessons, setLessons] = useState([])
  const [sublessons, setSublessons] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [moduleTitles, setModuleTitles] = useState({})
  const [moduleDescs, setModuleDescs] = useState({})
  const [moduleSubLessons, setModuleSubLessons] = useState({})
  const [defaultModuleSubLessons, setDefaultModuleSublessons] = useState([])
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
      const getLessons = async () => {
        try {
            const data = await axiosConfig.get(`course/${params.id}/lessons`)
            
            
            data.data.lessons.forEach((lesson) => {
              const getSubLessons = async (lessonId) => {
                try {
                  const lessonData = await axiosConfig.get(`lesson/${lessonId}/sublessons`)
                  lessonData.data.sublessons.forEach(sublesson => {
                    lesson.sublessons = []
                    lesson.sublessons = lesson.sublessons.concat(lessonData.data.sublessons)
                    // lesson.sublesson_content = sublesson.sublesson_content
                    // lesson.sublesson_id = sublesson.sublesson_id
                    // lesson.sublesson_video = sublesson.sublesson_video
                    lesson.ss = 'ss'
                    // console.log(sublesson)
                  })
                 
                } catch (e) {
                  console.error(e)
                }
              }
              // console.log(data.data.lessons)
              getSubLessons(lesson.lesson_id)
            })
            setLessons(data.data.lessons)
            

        } catch (e) {
            console.error(e)
        }
    }
      getLessons()
      

  }, [isCreated])

  const setInputDefaultModuleSubLessons = (moduleId, title) => {
    setDefaultModuleSublessons(prevState => ({
      ...prevState,
      [moduleId]: [...[], title]
    }));
  };

  const getInputDefaultModuleSubLessons = (moduleId) => {
    return defaultModuleSubLessons[moduleId] || '';
  };

  const setInputModuleSubLesson = async (moduleId, title) => {
    setModuleSubLessons(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    
  };

  const getInputModuleLesson = (moduleId) => {
    return moduleSubLessons[moduleId] || '';
  };

  const setInputModuleDesc = async (moduleId, title) => {
    setModuleDescs(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    try {
      const data = await axiosConfig.put(`/lesson/${moduleId}`, {
        "lesson_content": title
      })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  };

  const getInputModuleDesc = (moduleId) => {
    return moduleDescs[moduleId] || '';
  };

  const setInputModuleTitle = async (moduleId, title) => {
    setModuleTitles(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    console.log(title)
    try {
      const data = await axiosConfig.put(`/lesson/${moduleId}`, {
        "lesson_title": title
      })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  };

  const getInputModuleTitle = (moduleId) => {
    return moduleTitles.hasOwnProperty(moduleId) ? moduleTitles[moduleId] : ''
  };
  

  const params = useParams()

  useEffect(() => {
    lessons.map(module => {
      if (getInputModuleTitle(module.lesson_id)) {
        getInputModuleTitle(module.lesson_id)
      } else {
        const setInputModuleTitle = (moduleId, title) => {
          setModuleTitles(prevState => ({
            ...prevState,
            [moduleId]: title
          }));
          console.log(title)
        };
        setInputModuleTitle(module.lesson_id, module.lesson_title)
      }

      if (getInputModuleDesc(module.lesson_id)) {
        getInputModuleDesc(module.lesson_id)
      } else {
        const setInputModuleDesc = (moduleId, title) => {
          setModuleDescs(prevState => ({
            ...prevState,
            [moduleId]: title
          }));
          console.log(title)
        };
        setInputModuleDesc(module.lesson_id, module.lesson_content)
      }


      // if (getInputDefaultModuleSubLessons(module.moduleId)) {
      //   getInputDefaultModuleSubLessons(module.moduleId)
      // } else {
      //   module.sublesson.map(sublesso => {
      //     const setInputDefaultModuleSubLessons = (moduleId, title) => {
      //       setDefaultModuleSublessons(prevState => ({
      //         ...prevState,
      //         [moduleId]: title
      //       }));
      //       console.log(title)
      //     };
      //     setInputDefaultModuleSubLessons(module.moduleId, sublesso.title)
      //   })
      //   console.log(getInputDefaultModuleSubLessons(module.moduleId))
      // }
    })
  }, [lessons])

  useEffect(() => {
    console.log(lessons.map(lesson => {
      return lesson ? lesson.sublessons : []
    }))
  }, [lessons])

  const openTools = (e, moduleId) => {
    e.stopPropagation();
    console.log(activeModule)
    const elementsToggle = document.getElementById(moduleId)
    if (!elementsToggle.classList.contains('active')) {
      elementsToggle.classList.add('active')
    } else {
      elementsToggle.classList.remove('active')
    }
  };

      const createModule = async (teacherCourseId) => {
        try {
          const data = await axiosConfig.post('lesson', {
            "lesson_title": 'Новый модуль',
            "lesson_content": "Описание модуля",
            "course_id": teacherCourseId
          })
          console.log(data.data)
          setIsCreated(!isCreated)
        } catch (e) {
          console.error(e)
        }
      }

      const createSublesson = (id) => {
        const sublessonIndex = [...lessons].findIndex(lesson => lesson.moduleId == id)
        const newSublesson = {
          title: 'new Sublesson'
        }
        lessons[sublessonIndex].sublesson.push({
          title: getInputModuleLesson(id)
        })
        setLessons([...lessons])
      }

      const deleteModule = async (id) => {
        try {
          const data = axiosConfig.delete(`/lesson/${id}`)
          console.log(data)
          setIsCreated(!isCreated)
        } catch (e) {
          console.error(e)
        }
      }
      console.log(defaultModuleSubLessons)
      console.log(lessons)

    return (
        <>
        {lessons.map((module) =>
          <li className='course-edit__list-col' key={module.lesson_id}>
          <div className="course-edit__item course-edit-card">
              <div className="form-group">
                <div className="course-edit-card__form-group form-row">
                   <TextField onInput={e => setInputModuleTitle(module.lesson_id, e.target.value)} id="outlined-basic" label={'new module'} value={getInputModuleTitle(module.lesson_id, module.lesson_title)} variant="outlined"/>
        
                <div onClick={e => {setActiveModule(module.lesson_id);openTools(e, module.lesson_id)}} className="course-teacher-card__tool">
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <div onClick={e => e.stopPropagation()} className={`course-teacher-card__tool-elements`} id={`${module.lesson_id}`}>
                    <button onClick={e => deleteModule(module.lesson_id)} className="course-teacher-card__tool-element">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              </div>
              <div className="form-group">
                  <TextField onInput={e => setInputModuleDesc(module.lesson_id, e.target.value)} value={getInputModuleDesc(module.lesson_id)} id="outlined-basic" label={'Описание модуля'} variant="outlined"/>
              </div>
          </div>
          <div className="course-edit-subcard">
          {module.sublessons && module.sublessons.length > 1 && module.sublessons.map((sublesson) => 
            <div key={sublesson.sublesson_id}>
              <TextField label={'урок'} id="outlined-basic" value={sublesson.sublesson_title} variant="outlined"/>
              <Button variant="contained">
              <CloseSharp style={{cursor: 'pointer'}}/>
            </Button>
              
            </div>
          )}
          <div>
          <TextField onInput={e => setInputModuleSubLesson(module.lesson_id, e.target.value)} value={getInputModuleLesson(module.lesson_id)} id="outlined-basic" label="Название нового урока" variant="outlined"/>
            <Button onClick={e => createSublesson(module.lesson_id)} variant="contained" color="success">
                Создать
            </Button>
          </div>
            </div>
        </li>
        )}
        <Button style={{marginTop: '10px'}} onClick={e => createModule(params.id)} variant="contained" color="success">Новый модуль</Button>
              </>
    )
}

export default Edit