import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Card.scss"
function Card() {

    let [cards, setCards] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then((resp) => {
            setCards(resp.data)
        })
    }, [])

    console.log(cards)
    return (
        <div className='container cards'>
            {

                cards.map((item) => {
                    return (
                        <div key={item.id} className="card" >
                            <div className="card__top">
                                <span>{item.id}</span>
                                <span>{item.unitPrice}</span>
                            </div>
                            <div className="card__middle">
                                <span>{item.name}</span>
                            </div>
                            <div className="card__bottom">
                                <span>{item.id}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Card