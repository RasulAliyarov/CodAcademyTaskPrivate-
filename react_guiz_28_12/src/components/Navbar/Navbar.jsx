import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Toaster } from 'react-hot-toast';

function Navbar() {
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="header__wrapper__left">
                    <Link to="/"><h5>Aliyar</h5></Link>
                </div>
                <div className="header__wrapper__right">
                    <Link to="/">Home</Link>

                    <Link to="/add">Add</Link>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        backgroundColor: '#182848',
                        color: 'white',
                        fontFamily: "sans-serif"
                    }
                }}
            />

        </header>
    )
}

export default Navbar