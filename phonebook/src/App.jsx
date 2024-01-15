import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'

import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'

const App = () => {
  // STATES

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll()
      .then(data => setPersons(data))
  }, [])

  // HANDLERS

  const handleFilterUpdate = (e) =>
    setFilter(e.target.value)

  const handleNameUpdate = (e) =>
    setNewName(e.target.value)

  const handleNumberUpdate = (e) =>
    setNewNumber(e.target.value)

  const handleAddNote = (e) => {
    e.preventDefault()

    const exists = persons.some(person => person.name === newName)
    if (!exists) {
      const person = {
        name: newName,
        number: newNumber,
      }

      personsService.add(person).then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
      })
    } else {
      alert(`${newName} is already in your phonebook!`)
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
        handleSubmitPerson={handleAddNote}
      />
      <h2>Numbers</h2>
      <PersonsList persons={persons} filter={filter} />
    </div>
  )
}

export default App