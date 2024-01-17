import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-screen bg-black">
            <Link to="/">
                <HomeRoundedIcon style={{ fontSize: '3rem', color: 'white' }} />
            </Link>

        </div>
    )
}

export default Header