import { Button, TextField } from "@mui/material"
import '../CourseEdit/CourseEdit.css'
import IconMenu from "material-ui/IconMenu"

const CourseEdit = () => {
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
  return (
    <>
      <h2>Описание</h2>
      <form className="course-images">
        <div className="course-col">
          <div className="img-area">
            <img className="img-area__img" width={300} src="https://placehold.co/600x400/EEE/31343C" alt="" />
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
        <div className="form-col">
          <label htmlFor="title">Название</label>
          <TextField id="desc" placeholder="Название курса"/>
        </div>
        <div className="form-col">
          <label htmlFor="desc">Краткое описание</label>
          <TextField id="desc" placeholder="Название курса"/>
        </div>
      </section>
    </>
  )
}

export default CourseEdit