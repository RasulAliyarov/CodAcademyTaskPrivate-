import React, { useEffect } from 'react'
import CardStyle from "./Card.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Card() {
    const [products, setProducts] = React.useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/data").then(resp => {
            setProducts(resp.data)
            console.log(resp.data, "cardDATA");
        })
    }, [])

    console.log(products[1]?.title);
    return (
        products.map(item => {
            return (
                <Link key={item.id} to={`/detail/${item.id}`}>
                    <div className="card">
                        <div className="card__top">
                            <img src="https://plus.unsplash.com/premium_photo-1666353535295-739d95cc7914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        </div>
                        <div className="card__bottom">
                            <h4>Title: <span>{item?.title}</span></h4>
                            <h4>Category: <span>{item?.category}</span></h4>
                            <h4>Description: <span>{item?.description}</span></h4>
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default Card