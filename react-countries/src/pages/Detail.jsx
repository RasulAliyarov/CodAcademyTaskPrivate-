import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Detail.scss"
function Detail() {
  const { name } = useParams()

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((resp) =>
      setCountries(resp.data)
    )
    setLoading(false)
  }, [])
  let data = {}

  countries.map((item) => {
    data = item
  })

  { loading && <span> Loading...</span> }
  return (
    <div className='container'>
      <Link className='detail__back' to="/"><h5>← Back</h5></Link>
      <div className='detail'>
        <div className="detail__left">
          <img src={data.flags?.png} alt="" />
        </div>
        <div className="detail__right">
          <h2>{data.name?.common}</h2>
          <div>
            <ul>
              <li>Native Name: <span>{data.name?.official}</span></li>
              <li>Populatio: <span>{data.population}</span></li>
              <li>Region: <span>{data.region}</span></li>
              <li>Sub Region: <span>{data.subregion}</span></li>
              <li>Capital: <span>{data.capital}</span></li>
            </ul>
            <ul>
              <li>Top Level Domain: <span>{data.tld}</span></li>
              <li>Currencies: <span>{ }</span></li>
              <li>Region: <span>{data.region}</span></li>
              <li>Language: <span>....</span></li>
            </ul>
          </div>
          <h5>Border Countries:
            <span>border</span>
            <span>border</span>
            <span>border</span>
          </h5>
        </div>
      </div >
    </div>
  )
}

export default Detail