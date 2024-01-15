import { useState, useEffect } from 'react'
import axios from 'axios'

import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'

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