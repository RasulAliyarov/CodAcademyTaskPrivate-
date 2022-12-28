import React, { useEffect, useState, Fragment } from 'react'
import {Helmet} from "react-helmet";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import DetailStyle from "./Detail.scss"
import { toast, Toaster } from 'react-hot-toast';

function Detail() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/data/${id}`).then(item => {
            setProduct(item.data)
        })
    }, [])
    function Delete() {
        axios.delete(`http://localhost:3000/data/${id}`)
        toast.success('Successfully deleted!')
        navigate("/")
    }
    return (
        <>
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{product.title}</title>
                </Helmet>
            </Fragment>
            <div className="detail">
                <div className="detail__wrapper container">
                    <div className="detail__wrapper__left">
                        <img src="https://plus.unsplash.com/premium_photo-1666353535295-739d95cc7914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div className="detail__wrapper__right">
                        <h4>Title: <span>{product.title}</span></h4>
                        <h4>Category: <span>{product.category}</span></h4>
                        <h4>Description: <span>{product.description}</span></h4>
                        <button onClick={() => Delete()}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail