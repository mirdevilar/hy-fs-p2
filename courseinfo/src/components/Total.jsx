const Total = ({parts}) => {
  const total = parts.reduce((n, part) => {
    return n + part.exercises
  }, 0)
  return (
      <p>Total of {total} exercises</p>
  )
}

export default Total