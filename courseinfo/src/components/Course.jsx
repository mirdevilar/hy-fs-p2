import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  return (
    <>
      <Header text={course.name} type={2} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course