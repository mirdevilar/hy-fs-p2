import { useState } from 'react'

const Person = ({person}) => {
  return (
    <li className='person' >{person.name}</li>
  )
}

const PersonsList = ({persons}) => {
  return (
    <ul>
      {persons.map( (person, i) => <Person key={i} person={person} /> )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Arto Hellas' },
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameUpdate = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = () => {
    setPersons(persons.concat({name: newName}))
  }

  const handleSubmitPerson = (e) => {
    e.preventDefault()
    addPerson()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameUpdate} />
        </div>
        <div>
          <button onClick={handleSubmitPerson} type="submit">add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsList persons={persons} />
    </div>
  )
}

export default App