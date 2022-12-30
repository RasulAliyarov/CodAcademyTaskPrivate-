import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"
function Card(country) {

  // console.log(country.country.name.common)
  return (
    <Link to={`/detail/${country.country.name.common}`} >
      <div className='card'>
        <div className="card__top">
          <img src={country.country.flags?.png} alt="" />
        </div>
        <div className="card__body">
          <h2>{country.country.name.common}</h2>
          <h3>Population: <span>{country.country.population}</span></h3>
          <h3>Region: <span>{country.country.region}</span></h3>
          <h3>Capital: <span>{country.country.capital}</span></h3>
        </div>
      </div>
    </Link>
  )
}

export default Card