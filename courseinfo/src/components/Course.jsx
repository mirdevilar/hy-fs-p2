const Header = ({text}) => {
  return <h2>{text}</h2>
}

const Part = ({part}) => {
  return <p>{part.name} a {part.exercises}</p>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  ) 
}

const Total = ({parts}) => {
  const total = parts.reduce((n, part) => {
    return n + part.exercises
  }, 0)
  return (
      <p>Total of {total} exercises</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course