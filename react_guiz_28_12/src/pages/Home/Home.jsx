import React, { Fragment } from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import HomeStyle from "./Home.scss"

function Home() {
    return (
        <>
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
            </Fragment>
            <div className="home">
                <div className="home__wrapper container">
                    < Card />
                </div>
            </div>
        </>
    )
}

export default Home