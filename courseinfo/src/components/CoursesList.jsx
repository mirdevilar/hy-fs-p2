import Course from './Course'

const CoursesList = ({courses}) => {
  return (
    <>
      {courses.map(course => {
        return <Course key={course.id} course={course} />
      })}
    </>
  )
}

export default CoursesList