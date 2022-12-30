import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Icon'
// import { Link } from '@mui/material';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

import "./Navbar.scss"

function Navbar() {
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className='box__wrapper'>
                    <div className="container header_wrapper">
                        <Toolbar>
                            <Typography className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                JUMMY
                            </Typography>
                            <List>

                                <ListItem><Link to="/">Home</Link></ListItem>
                                <ListItem><Link to="/about">About us</Link></ListItem>


                            </List>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </div>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar