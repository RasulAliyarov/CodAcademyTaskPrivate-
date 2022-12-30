import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Add.scss"
import { useFormik, Formik } from 'formik';
import Products from '../../Products';
import * as Yup from 'yup'
import { toast } from 'react-hot-toast';
import { Helmet } from "react-helmet";

function Add() {

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(1, "Insert Name").max(50, "Max 50").required("Name is important!"),
        category: Yup.string().required("Category is important!"),
        description: Yup.string().min(1, "Insert Description").max(50, "Max 50").required("Description is important!"),
    })

    const formik = useFormik({
        initialValues: {
            title: "",
            category: "",
            description: ""
        },
        validateOnBlur: "",
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);

            const { title, category, description } = values
            let newProduct = new Products(title, category, description)
            axios.post("http://localhost:3000/data", newProduct).then((result) => {
                console.log(result, "salam");
                toast.success('Successfully Added!')
            })
        }
    })
    return (
        <>
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add</title>
                </Helmet>
            </Fragment>

            <div className="addContent container">
                <form className='form' onSubmit={formik.handleSubmit}>
                    {formik.touched.title && formik.errors.title ? (<div className='errorMessage'>{formik.errors.title}</div>) : null}
                    <input type="text" placeholder='Title' name='title' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.category && formik.errors.category ? (<div className='errorMessage'>{formik.errors.category}</div>) : null}
                    <select name="category" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <option value="" disabled selected>Choose category</option>
                        <option value="Qida">Qida</option>
                        <option value="Xirdavat">Xirdavat</option>
                        <option value="Derman">Derman</option>
                    </select>
                    {formik.touched.description && formik.errors.description ? (<div className='errorMessage'>{formik.errors.description}</div>) : null}
                    <textarea type="text" placeholder='Description' name='description' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Add