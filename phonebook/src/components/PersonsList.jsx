const PersonsList = ({persons, filter}) => {
  const list = persons
    .filter(person => {
      return (
        !filter ||
        person.name.toLowerCase()
          .includes(filter.toLowerCase())
      )
    })
    .map((person, i) =>
    <li key={i} className='person' >{person.name}: {person.number}</li>
    )
  return (
    <ul>{list}</ul>
  )
}

export default PersonsList