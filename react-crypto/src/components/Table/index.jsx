import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import api from "../../const"
import TableStyle from "./Table.scss"
import { AiFillHeart } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from "../../redux/Slices/FavouriteSlice"
import { paginationMinus, paginationPlus } from "../../redux/Slices/TableSlice"

function Table() {
    const [coins, setCoins] = useState([])

    let table = useSelector(table => table.table)

    useEffect(() => {
        axios.get(api(table.page)).then(coins =>
            setCoins(coins.data))
    }, [table.page])

    const dispatch = useDispatch()

    return (
        <div className="table__wrapper container">
            <table className="table ">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Coin Name</th>
                        <th>Price</th>
                        <th>Price Change</th>
                        <th>Market Cap</th>
                        <th>Favourites</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coins.filter(value => {
                            if (value === "") return
                            else if (value.name.toLocaleLowerCase().includes(table.search.toLocaleLowerCase())) {
                                return coins
                            }
                        }).map((coin, index) => {
                            return (
                                <tr key={index}>
                                    <td><span className='tdInsert'>{coin?.market_cap_rank}</span></td>
                                    <td><span className='tdInsert'><img src={coin?.image} alt="" /> <span className='name'>{coin?.name}</span></span></td>
                                    <td><span className='tdInsert'>{coin?.current_price}</span> </td>
                                    <td><span className='tdInsert'>{coin?.price_change_percentage_24h}</span> </td>
                                    <td><span className='tdInsert'>{coin?.market_cap}</span> </td>
                                    <td><span className='tdInsert'> <button onClick={() =>
                                        dispatch(addFavourite(coin))
                                    }><AiFillHeart className='favBtn' /></button></span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => dispatch(paginationMinus())}><FiChevronLeft />Previous Page </button>
                <span>{table.page}</span>
                <button onClick={() => dispatch(paginationPlus())} className='nextPage'>Next Page <FiChevronRight /></button>
            </div>
        </div>
    )
}

export default Table