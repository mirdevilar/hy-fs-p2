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
  const languages = Object.values(c.languages)
  return (
    <div>
      <h2>{c.name.common}</h2>
      <p>capital {c.capital[0]}</p>
      <p>population {c.population}</p>
      <h3>Languages</h3>
      <ul>
        {
          languages.map(l =>
            <li key={l}>{l}</li>
          )
        }
      </ul>
      <img src={c.flags.svg} />
    </div>
  )
}

const Result = ({countries, handleShowCountry}) => {
  if (countries.length > 10)
    return <p>Too many matches, keep typing</p>
  else if (countries.length > 1)
    return <List countries={countries} handleShowCountry={handleShowCountry} />
  else if (countries.length === 1)
    return <Country c={countries[0]} />
}

const App = () => {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/all`)
      .then( ({data}) => {
        setCountries(data)
      })
  }, [])

  const filteredCountries = countries.filter(c => {
    const commonName = c.name.common.toLowerCase()
    const officialName = c.name.official.toLowerCase()
    const lowerQuery = query.toLowerCase()

    return commonName.includes(lowerQuery) || officialName.includes(lowerQuery)
  })

  const handleQueryChange = (e) => { 
    setQuery(e.target.value)
  }

  const handleShowCountry = (e) => {
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