import CourseItem from "../course-item/CourseItem"

const CourseList = ({list}) => {
  if (!list.length) {
    return (
      <div>no list</div>
    )
  }
  return (
    <ul className='courses-teacher__list'>
              {list.map((listItem) => 
                <CourseItem item={listItem}/>
              )}
            </ul>
  )
}

export default CourseList