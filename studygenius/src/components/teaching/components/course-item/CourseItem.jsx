import '../course-item/CourseItem.css'

const CourseItem = ({item}) => {
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
    <li className='course-teacher__list-col'>
                <div className="course-list__item course-teacher-card">
                  <div className="course-teacher-card__img">
                    <img src="https://placehold.co/600x400/EEE/31343C" alt="" />
                  </div>
                  <div className="course-teacher-card__content">
                    <div className="course-teacher-card__title">
                      <p>{item.course_name}</p>
                    </div>
                    <a href={`/courses/${item.course_id}/syllabus`} className='course-teacher-card__main-link'></a>
                    <a href="#" className='course-teacher-card__link'>Information</a>
                    <a href="#" className='course-teacher-card__link'>Syllabus</a>
                    <a href="#" className='course-teacher-card__link'>Permissions</a>
                  </div>
                  <div className="course-teacher-card__tools">
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
              </li>
  )
}

export default CourseItem