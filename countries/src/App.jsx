import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const List = ({countries, handleShowCountry}) =>
  <ul>
    {
      countries.map((c, i) =>
        <li key={i}>
          {c.name.common}
          <button 
            onClick={handleShowCountry}
            id={c.name.common}
          >show</button>
        </li>
      )
    }
  </ul>

const Country = ({c}) => {
  const arr = Object.entries(c.languages)
  return (
    <div>
      <h2>{c.name.common}</h2>
      <p>capital {c.capital[0]}</p>
      <p>population {c.population}</p>
      <h3>Languages</h3>
      <ul>
        {
          arr.map(l =>
            <li>{l[1]}</li>
          )
        }
      </ul>
      <img src={c.flags.svg} />
    </div>
  )
}

const Result = ({countries, handleShowCountry}) => {
  console.log('rendering result');
  if (countries.length > 10)
    //console.log('poop')
    return <p>Too many matches, keep typing</p>
  else if (countries.length > 1)
    return <List countries={countries} handleShowCountry={handleShowCountry} />
  else if (countries.length == 1)
    return <Country c={countries[0]} />
}

function App() {
  const [query, setQuery] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios.get(`${baseUrl}/all`)
      .then( r => r.data )
      .then( countries =>
        countries.filter(c => {
          const commonName = c.name.common.toLowerCase()
          const officialName = c.name.official.toLowerCase()
          const lowerQuery = query.toLowerCase()

          return commonName.includes(lowerQuery) || officialName.includes(lowerQuery)
        })
      )
      .then( countries => {
        setFilteredCountries(countries)
      })
  }, [query])

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleShowCountry = (e) => {
    console.log(e.target.country)
    setQuery(e.target.id)
  }

  return (
    <>
      find countries
      <input
        onChange={handleQueryChange}
        value={query}
      ></input>
      <Result countries={filteredCountries} handleShowCountry={handleShowCountry} />
    </>
  )
}

export default App
