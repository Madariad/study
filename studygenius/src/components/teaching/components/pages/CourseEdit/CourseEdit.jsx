import { Button, TextField } from "@mui/material"
import '../CourseEdit/CourseEdit.css'
import IconMenu from "material-ui/IconMenu"
import { useEffect, useState } from "react"
import axiosConfig from '../../../../../axiosConfig'
import { useParams } from "react-router-dom"

const CourseEdit = () => {
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [img, setImg] = useState(null)
  const handleOnChange = (e) => {
    const prevImg = document.querySelector('.addedImg')
    if (prevImg) {
      prevImg.remove()
    }
    const form = document.querySelector('.course-images')
    const imgArea = document.querySelector('.img-area')
    const imgAreaImg = document.querySelector('.img-area__img')
    console.log(form)
    const image = e.target.files[e.target.files.length - 1]
    const formdata = new FormData(form)
    console.log(e.target.files[e.target.files.length - 1].name)
    const reader = new FileReader()
    reader.onload = () => {
      const imgUrl = reader.result
      const img = document.createElement('img')
      img.src = imgUrl
      imgArea.appendChild(img)
      img.classList.add('addedImg')
      img.style.width = '250px'
      imgAreaImg.remove()
    }
    reader.readAsDataURL(image)
  }

  const handleOnChangeVideo = (e) => {
    const prevVid = document.querySelector('.addedVid')
    if (prevVid) {
      prevVid.remove()
    }
    const form = document.querySelector('.course-images')
    const vidArea = document.querySelector('.video-area')
    console.log(form)
    const image = e.target.files[e.target.files.length - 1]
    const reader = new FileReader()
    reader.onload = () => {
      const vidUrl = reader.result
      const video = document.createElement('video')
      video.src = vidUrl
      vidArea.appendChild(video)
      video.style.width = '400px'
      video.controls = true
      video.classList.add('prevVid')
    }
    reader.readAsDataURL(image)
  }

  const params = useParams()
  console.log(params)

  useEffect(() => {
    const getCourse = async () => {
      try {
        const data = await axiosConfig.get(`/course/${params.id}`)
        setNameInput(data.data.course[0].course_name)
        setDescriptionInput(data.data.course[0].course_description)
        console.log(data.data.course[0].course_img)
        const getImage = async () => {
          try {
            const imgData = await axiosConfig.get(`course/img/${data.data.course[0].course_img}`)
            setImg(imgData.data)
          } catch (e) {
            console.error(e)
          }
        }
        getImage()
      } catch (e) {
        console.error(e)
      }
    }
    getCourse()
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const data = await axiosConfig.put(`/course/${params.id}`, {
        "course_name": nameInput,
        "course_description": descriptionInput,
        "course_language": "js",
        "course_topic": "node"
      })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <h2>Описание</h2>
      <form className="course-images">
        <div className="course-col">
          <div className="img-area">
            <img className="img-area__img" width={300} src={`https://placehold.co/600x400/EEE/31343C`} alt="afsd" />
          </div>
          <Button
          variant="contained"
          component="label"
        >
          Загрузить изображение
          <input
            type="file"
            hidden
            name="photo"
            onChange={handleOnChange}
          />
        </Button>
        </div>
        <div className="course-col">
          <div className="video-area"></div>
          <Button
          variant="contained"
          component="label"
        >
          Загрузить Видео
          <input
            type="file"
            hidden
            onChange={handleOnChangeVideo}
          />
        </Button>
        </div>
      </form>
      <section>
        <form action="">
        <div className="form-col">
          <label htmlFor="title">Название</label>
          <TextField onInput={e => setNameInput(e.target.value)} value={nameInput} id="desc" placeholder="Название курса"/>
        </div>
        <div className="form-col">
          <label htmlFor="desc">Краткое описание</label>
          <TextField onInput={e => setDescriptionInput(e.target.value)} value={descriptionInput} id="desc" placeholder="Название курса"/>
        </div>
        <Button onClick={e => handleClick(e)} type="submit" variant="contained" color="primary" sx={{marginTop: '20px'}}>
           сохранить
        </Button>
        </form>
      </section>
    </>
  )
}

export default CourseEdit