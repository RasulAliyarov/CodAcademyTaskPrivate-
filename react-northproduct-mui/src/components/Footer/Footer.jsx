import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'
import "./Footer.scss"


function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='footer'>

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className="footer__body"
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </div>
    )
}

export default Footer