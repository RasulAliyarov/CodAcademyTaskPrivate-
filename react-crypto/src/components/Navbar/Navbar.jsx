import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarStyle from "./Navbar.scss"
import { useDispatch, useSelector } from 'react-redux'
import { paginationMinus, paginationPlus, search } from "../../redux/Slices/TableSlice"

function Navbar() {
    let favourite = useSelector((state) => state.favourite)
    let table = useSelector((state) => state.table)
    const dispatch = useDispatch()

    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="header__wrapper__left">
                    <NavLink to="/">ALIYAR | CRYPTO</NavLink>
                </div>
                <div className="header__wrapper__middle">
                    <input type="text" onChange={(e) =>
                        dispatch(search(e.target.value))
                    } placeholder='Search' />
                </div>
                <div className="header__wrapper__right">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink link' : 'link'}>Home</NavLink>
                    <NavLink to="/favourite" className={({ isActive }) => isActive ? 'activeLink link' : 'link'}>Favourites <span className='favCount'>{favourite.count}</span> </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar