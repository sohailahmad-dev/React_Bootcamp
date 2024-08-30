import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Btn from '../btn/Btn';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const links = [
        {
            id: 1,
            name: 'Home',
            to: '/'
        },
        {
            id: 2,
            name: 'Buyers',
            to: '/'
        },
        {
            id: 3,
            name: 'Sellers',
            to: '/'
        },
        {
            id: 4,
            name: 'Buy & Hold',
            to: '/'
        },
        {
            id: 5,
            name: 'Retail',
            to: '/'
        },
        {
            id: 6,
            name: 'Flip Opportunities',
            to: '/'
        },
        {
            id: 7,
            name: 'Off-Market Inventory',
            to: '/'
        },
    ]
    const navigate = useNavigate();

    let [menu, setMenu] = useState(false);

    const handleLogin = () => {
        navigate('/SignIn')
    }

    return (
        <div className='nb'>
            <div className='nb-logo-text'>Insider's <span>Inventory</span></div>
            <div className={menu ? 'nb-links nb-active' : 'nb-links'} >
                {
                    links.map((item) => (
                        <div key={item?.id} >{item?.name}</div>
                    ))
                }
                {/* btn for mobile  */}
                <div className="nb-btn" id='nb-mobile-btn' >
                    <Btn
                        onClick={handleLogin}
                        label='Login/Signup' />
                </div>

            </div>
            <div className="nb-btn" id='nb-desktop-btn' >
                <Btn
                    onClick={handleLogin}
                    label='Login/Signup'
                />

            </div>
            {/* menu icon for mobile  */}
            <div
                onClick={() => setMenu(!menu)}
                className="nb-icon">
                {menu ? <CloseIcon /> : <MenuIcon />}
            </div>
        </div>
    )
}
