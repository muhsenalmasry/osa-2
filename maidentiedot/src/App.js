import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter))

  useEffect( () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))
  }, [])

  const handleFieldChange= (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <SearchForm handleFieldChange={handleFieldChange}/>
      <Countries countriesToShow={countriesToShow} />
    </div>
  )
}

export default App
