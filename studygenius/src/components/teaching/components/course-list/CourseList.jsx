import CourseItem from "../course-item/CourseItem"

const CourseList = ({list}) => {
  if (!list || list.length === 0) {
    return (
      <div>no list</div>
    )
  }
  return (
    <ul className='courses-teacher__list'>
              {list.map((listItem) => 
                <CourseItem item={listItem} key={listItem.course_id}/>
              )}
            </ul>
  )
}

export default CourseList