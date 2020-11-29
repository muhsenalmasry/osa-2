import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('Martin Fowler')
  const [newNumber, setNewNumber] = useState('040-1234567')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.some(person => person.name === newName)
    console.log(found)
    if (found === true) {
      window.alert(`${newName} is already added`)
    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
   const handleNumberChange = (event) => {
     console.log(event.target.value)
     setNewNumber(event.target.value)
   }


   const personsToShow = persons.filter(person => person.name.includes(filter))

   const handleFilterChange = (event) => {
     setFilter(event.target.value)
     console.log(filter)
   }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilterChange}/>
      
      <div>
        <h2>add a new</h2>
      </div>

      <PersonForm addPerson={addPerson} newName={newName}
      nameChange={handleNameChange} newNumber={newNumber}
      numberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
    </div>
  )

}

export default App;
