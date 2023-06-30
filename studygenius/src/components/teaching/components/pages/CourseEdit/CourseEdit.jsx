import { Button, TextField } from "@mui/material"
import '../CourseEdit/CourseEdit.css'
import IconMenu from "material-ui/IconMenu"
import { useEffect, useState } from "react"
import axiosConfig from '../../../../../axiosConfig'
import { useParams } from "react-router-dom"

const CourseEdit =  () => {
  const params = useParams()
  // console.log(params)
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [img, setImg] = useState(null)
  const handleOnChange = async (e) => {
    const prevImg = document.querySelector('.addedImg')
    if (prevImg) {
      prevImg.remove()
    }
    const form = document.querySelector('.course-images')
    const imgArea = document.querySelector('.img-area')
    const imgAreaImg = document.querySelector('.img-area__img')
    // console.log(form)
    const image = e.target.files[e.target.files.length - 1]
    // const formdata = new FormData(form)
    // console.log(formdata.getAll('video'));
    // console.log(e.target.files[e.target.files.length - 1].name)
    // const res = await axiosConfig.post(`/course/${params.id}/upload`, formdata)
    // console.log(res);
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

  

  useEffect(() => {
    const getCourse = async () => {
      // const {id} = useParams()
      console.log(params.id);
      try {
        const data = await axiosConfig.get(`/course/${params.id}`)
        setNameInput(data.data.course[0].course_name)
        setDescriptionInput(data.data.course[0].course_description)
        setImg(data.data.course[0].course_image)
        console.log(data.data.course[0].course_image)
        const getImage = async () => {
          // try {
          //   // const imgData = await axiosConfig.get(`course/img/${data.data.course[0].course_img}`)
          // } catch (e) {
          //   console.error(e)
          // }
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

    const form = document.querySelector('.course-images')
    const formdata = new FormData(form)
    const imageFormData =  new FormData()
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    imageFormData.append('file', formdata.get('file'))
    // console.log(formdata.get('file'));
    // console.log(formdata.get('video'));

    const imgss = await axiosConfig.post(`/course/${params.id}/upload`, imageFormData, config)
    console.log(imgss);
    const formData = new FormData();
    formData.append('video', formdata.get('video'));
    formData.append('id', params.id)
    
    
    try {
      const response = await axiosConfig.post(`/course/upload-video`, formData, config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

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
            <img className="img-area__img" width={300} src={`http://localhost:5000/api/v1/course/img/${img}`} alt="photo" />
          </div>
          <Button
          variant="contained"
          component="label"
        >
          Загрузить изображение
          <input
            type="file"
            hidden
            name="file"
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
            name="video"
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