import { Button, TextField } from '@mui/material'
import { MuiThemeProvider } from 'material-ui/styles'
import '../Edit/Edit.css'

const Edit = () => {
    const openTools = (e) => {
        e.stopPropagation()
        const elementsToggle = document.querySelector('.course-teacher-card__tool-elements')
        if (!elementsToggle.classList.contains('active')) {
          elementsToggle.classList.add('active')
        } else {
          elementsToggle.classList.remove('active')
        }
      }
    return (
        
        <li className='course-edit__list-col'>
                <div className="course-edit__item course-edit-card">
                    <div className="form-group">
                      <div className="course-edit-card__form-group form-row">
                          <TextField id="outlined-basic" label="Новый модуль" variant="outlined"/>
                      <div onClick={e => openTools(e)} className="course-teacher-card__tool">
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <span className='dot'></span>
                        <div onClick={e => e.stopPropagation()} className="course-teacher-card__tool-elements">
                          <button className="course-teacher-card__tool-element">
                            Edit
                          </button>
                          <button className="course-teacher-card__tool-element">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <TextField id="outlined-basic" label="Описание модуля" variant="outlined"/>
                    </div>
                </div>
                <div className="course-edit-subcard">
                <TextField id="outlined-basic" label="Название нового урока" variant="outlined"/>
                <Button variant="contained" color="success">
                    Создать
                </Button>
                </div>
              </li>
    )
}

export default Edit