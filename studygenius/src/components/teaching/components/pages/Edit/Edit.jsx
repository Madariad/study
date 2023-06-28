import { Button, TextField } from '@mui/material'
import { MuiThemeProvider } from 'material-ui/styles'
import './Edit.css'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CloseSharp } from '@material-ui/icons'

const Edit = () => {
  const [lessons, setLessons] = useState([
      {
          teacherCourseId: 1,
          moduleId: 22,
          title: 'new module',
          description: 'module description',
          sublesson: [
              {
                  title: 'sublesson for new module',
              },
              {
                title: 'old sublesson'
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
  const [moduleTitles, setModuleTitles] = useState({})
  const [moduleDescs, setModuleDescs] = useState({})
  const [moduleSubLessons, setModuleSubLessons] = useState({})
  const [defaultModuleSubLessons, setDefaultModuleSublessons] = useState([])

  const setInputDefaultModuleSubLessons = (moduleId, title) => {
    setDefaultModuleSublessons(prevState => ({
      ...prevState,
      [moduleId]: [...[], title]
    }));
    console.log(title)
  };

  const getInputDefaultModuleSubLessons = (moduleId) => {
    return defaultModuleSubLessons[moduleId] || '';
  };

  const setInputModuleSubLesson = (moduleId, title) => {
    setModuleSubLessons(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    console.log(title)
  };

  const getInputModuleLesson = (moduleId) => {
    return moduleSubLessons[moduleId] || '';
  };

  const setInputModuleDesc = (moduleId, title) => {
    setModuleDescs(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    console.log(title)
  };

  const getInputModuleDesc = (moduleId) => {
    return moduleDescs[moduleId] || '';
  };

  const setInputModuleTitle = (moduleId, title) => {
    setModuleTitles(prevState => ({
      ...prevState,
      [moduleId]: title
    }));
    console.log(title)
  };

  const getInputModuleTitle = (moduleId) => {
    return moduleTitles.hasOwnProperty(moduleId) ? moduleTitles[moduleId] : ''
  };
  

  const params = useParams()
  const currentCourseModules = useMemo(() => {
    return [...lessons].filter(lesson => lesson.teacherCourseId == params.id)
  }, [lessons])

  useEffect(() => {
    currentCourseModules.map(module => {
      if (getInputModuleTitle(module.moduleId)) {
        getInputModuleTitle(module.moduleId)
      } else {
        const setInputModuleTitle = (moduleId, title) => {
          setModuleTitles(prevState => ({
            ...prevState,
            [moduleId]: title
          }));
          console.log(title)
        };
        setInputModuleTitle(module.moduleId, module.title)
      }

      if (getInputModuleDesc(module.moduleId)) {
        getInputModuleDesc(module.moduleId)
      } else {
        const setInputModuleDesc = (moduleId, title) => {
          setModuleDescs(prevState => ({
            ...prevState,
            [moduleId]: title
          }));
          console.log(title)
        };
        setInputModuleDesc(module.moduleId, module.description)
      }

      if (getInputDefaultModuleSubLessons(module.moduleId)) {
        getInputDefaultModuleSubLessons(module.moduleId)
      } else {
        module.sublesson.map(sublesso => {
          const setInputDefaultModuleSubLessons = (moduleId, title) => {
            setDefaultModuleSublessons(prevState => ({
              ...prevState,
              [moduleId]: title
            }));
            console.log(title)
          };
          setInputDefaultModuleSubLessons(module.moduleId, sublesso.title)
        })
        console.log(getInputDefaultModuleSubLessons(module.moduleId))
      }
    })
  }, [currentCourseModules])

    const openTools = (e) => {
        e.stopPropagation()
        const elementsToggle = document.querySelector('.course-teacher-card__tool-elements')
        if (!elementsToggle.classList.contains('active')) {
          elementsToggle.classList.add('active')
        } else {
          elementsToggle.classList.remove('active')
        }
      }

      const createModule = (teacherCourseId) => {
        const newLesson = {
          teacherCourseId: teacherCourseId,
          moduleId: 23,
          title: '',
          description: '',
          sublesson: [
              {
                  title: 'sublesson for new module'
              }
          ],
          courseTitle: 'my first course'
        }
        setLessons([...lessons, newLesson])
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

      const deleteModule = (id) => {
        const sublessonIndex = [...lessons].findIndex(lesson => lesson.moduleId == id)
        setLessons(lessons.filter(lesson => lesson.moduleId != id))
      }
      console.log(defaultModuleSubLessons)
    return (
        <>
        {currentCourseModules.map((module) =>
          <li className='course-edit__list-col' key={module.moduleId}>
          <div className="course-edit__item course-edit-card">
              <div className="form-group">
                <div className="course-edit-card__form-group form-row">
                   <TextField onInput={e => setInputModuleTitle(module.moduleId, e.target.value)} id="outlined-basic" label={'new module'} value={getInputModuleTitle(module.moduleId, module.title)} variant="outlined"/>
        
                <div onClick={e => openTools(e)} className="course-teacher-card__tool">
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <div onClick={e => e.stopPropagation()} className="course-teacher-card__tool-elements">
                    <button onClick={e => deleteModule(module.moduleId)} className="course-teacher-card__tool-element">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              </div>
              <div className="form-group">
                  <TextField onInput={e => setInputModuleDesc(module.moduleId, e.target.value)} value={getInputModuleDesc(module.moduleId)} id="outlined-basic" label={'Описание модуля'} variant="outlined"/>
              </div>
          </div>
          <div className="course-edit-subcard">
          {(module.sublesson).map((sublesson) => 
            <div key={sublesson.title}>
              <TextField label={'урок'} id="outlined-basic" value={sublesson.title} variant="outlined"/>
              <Button variant="contained">
              <CloseSharp style={{cursor: 'pointer'}}/>
            </Button>
              
            </div>
          )}
          <div>
          <TextField onInput={e => setInputModuleSubLesson(module.moduleId, e.target.value)} value={getInputModuleLesson(module.moduleId)} id="outlined-basic" label="Название нового урока" variant="outlined"/>
            <Button onClick={e => createSublesson(module.moduleId)} variant="contained" color="success">
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