const Person = ({person, handleRemove}) => {
  return (
    <li className='person' >
      {person.name}: {person.number}
      <button id={person.id} onClick={handleRemove}>delete</button>
    </li>
  )
}

const PersonsList = ({persons, filter, handleRemove}) => {
  const list = persons
    .filter(person => {
      return (
        !filter ||
        person.name.toLowerCase()
          .includes(filter.toLowerCase())
      )
    })
    .map((person, i) =>
      <Person
        key={i}
        person={person}
        handleRemove={handleRemove}
      />
    )
  return (
    <ul>{list}</ul>
  )
}

export default PersonsList