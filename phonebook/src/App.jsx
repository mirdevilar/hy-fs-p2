import { useState } from 'react'

const Filter = ({handleChange, filter}) => {
  return (
    <div>
      filter names:
      <input 
        onChange={handleChange}
        value={filter}
      />
    </div>
  )
} 

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

const AddPerson = ({newName, newNumber,
handleNameUpdate, handleNumberUpdate, handleSubmitPerson}) => {
  


  return (
    <form>
      <div>
        name: 
        <input 
          onChange={handleNameUpdate}
          value={newName}
        />
        <br />
        number:
        <input
          onChange={handleNumberUpdate}
          value={newNumber}
        />
      </div>
      <div>
        <button onClick={handleSubmitPerson} type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  // STATES

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '43-43-2342344'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // FUNCTIONS

  const addPerson = () => {
    const exists = (persons.reduce((includes, person) => {
      return person.name === newName
        ? true
        : includes
    }, false))
    console.log(JSON.stringify(persons));
    if (exists) {
      throw newName + ' is already in your phonebook!'
    } else {
      const person = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(person))
    }
  }

  // HANDLERS

  const handleFilterUpdate = (e) =>
    setFilter(e.target.value)

  const handleNameUpdate = (e) =>
    setNewName(e.target.value)

  const handleNumberUpdate = (e) =>
    setNewNumber(e.target.value)

  const handleSubmitPerson = (e) => {
    e.preventDefault()

    try {
      addPerson()
      setNewName('')
      setNewNumber('')
    } catch (error) {
      console.log(error)
      alert(error)
    }

    /*if (try) {
      alert(try)
    } else {

    }*/
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        handleChange={handleFilterUpdate}
        filter={filter}
      />
      <h2>Add a number</h2>
      <AddPerson 
        newName={newName}
        newNumber={newNumber}
        handleNameUpdate={handleNameUpdate}
        handleNumberUpdate={handleNumberUpdate}
        handleSubmitPerson={handleSubmitPerson}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} />
    </div>
  )
}

export default App