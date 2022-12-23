import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import "./About.scss"
function About() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Breadcrumbs aria-label="breadcrumbs">
          {['Home', 'About'].map((item) => (
            <Link
              onClick={(event) => event.preventDefault()}
              key={item}
              underline="hover"
              color="neutral"
              fontSize="inherit"
              
            >
              {item}
            </Link>
          ))}

          <Typography fontSize="inherit"></Typography>
        </Breadcrumbs>
      </div>
      <Footer />
    </>
  )
}

export default About