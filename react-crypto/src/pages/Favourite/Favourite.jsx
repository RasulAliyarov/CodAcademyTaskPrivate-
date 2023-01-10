import React from 'react'
import FavouriteStyle from "./Favourite.scss"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearFavourite } from "../../redux/Slices/FavouriteSlice"

function Favourite() {
  let favourite = useSelector(state => state.favourite)
  const dispatch = useDispatch()
  return (
    <div className="favourite container">
      <button onClick={() => dispatch(clearFavourite())}>Clear all favourites</button>
      <div className=' cards'>
        {
          favourite.favourites.map(fav => {
            return (
              <div className="card">
                <div className="card__top">
                  <img src={fav?.image} alt="" />
                </div>
                <div className="card__content">
                  <h3>{fav?.name}</h3>
                  <h4>{fav?.current_price} $</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Favourite