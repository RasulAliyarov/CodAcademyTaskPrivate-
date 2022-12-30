import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

function Cards() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchItem, setSearchitem] = useState("")
  const [continents, setContinents] = useState("")

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((resp) => {
      setCountries(resp.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="content container">
      <div className="inputs">
        <input type="text" onChange={(e) => setSearchitem(e.target.value)} placeholder='Search for country' />

        <select name="continents" onChange={(e) => setContinents(e.target.value)} id="continents">
          <option value="def">Choose continets</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className='cards'>

        {loading && <span> Loading...</span>}
        {
          countries.filter((value) => {
            if (value === "" || continents === "def") {
              return value
            }
            else if (value.name.common.toLowerCase().includes(searchItem.toLowerCase()) && value.region.toLowerCase().includes(continents.toLowerCase())) {
              return value
            }

          }).map((country) => {

            return <Card key={country?.flag} country={country} />
          })
        }
      </div >
    </div>
  )
}

export default Cards