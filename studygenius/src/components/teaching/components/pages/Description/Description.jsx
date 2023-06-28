import { Button } from '@mui/material'
import '../Description/Description.css'
import { useParams } from 'react-router-dom'

const Description = () => {
  const params = useParams()
  return (
    <>
      <h2>Описание</h2>
      <Button href={`/courses/${params.id}/edit-course`} style={{marginBottom: '10px'}} variant="contained" color="success">Редактировать информацию</Button>
      <section className="description-wrapper">
        <div className="description section-padding">
          <h3>Описание курса</h3>
          <p>это описание</p>
        </div>
        <div className="short-description section-padding">
          <h3>Коротко о курсе - </h3>
          <p>Краткое содержание курса</p>
          <h3>Язык: </h3>
          <p>Русский</p>
        </div>
      </section>
    </>
  )
}

export default Description