import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Btn } from '../btn/Btn'
import MenuIcon from '@mui/icons-material/Menu';

const links = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'About Us',
        to: '/'
    },
    {
        name: 'Register',
        to: '/'
    },
    {
        name: 'Login',
        to: '/'
    },
]

export default function NavBar() {

    let [showMenu, setShowMenu] = useState(false);
    let [linksStyle, setLinksStyle] = useState('nb-links')

    const handleMenu = () => {
        setShowMenu(!showMenu)
    };

    const handleLink = () => {
        setShowMenu(false)
    }

    useEffect(() => {
        showMenu ? setLinksStyle('nb-links nb-active') : setLinksStyle('nb-links');
    }, [showMenu])


    return (
        <div className='nb'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBzGok1O4zDFldYwKrhyglP9hwkLGVscmVQ&s" alt="logo" className="nb-logo" />
            <div className={linksStyle}>
                {links && links.length > 0 &&
                    links.map(e => (
                        <div
                            onClick={handleLink}
                            className="nb-link">{e.name}</div>
                    ))
                }
                <button className='nb-btn-mobile' onClick={handleLink}  >Get Started</button>
            </div>
            <button className='nb-btn'  >Get Started</button>
            <div className='nb-menuIcon' onClick={handleMenu}>
                <MenuIcon />
            </div>

        </div>
    )
}
