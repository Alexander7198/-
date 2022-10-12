import React from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { CustomLink } from '../CustomLink.jsx/CustomLink';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>

                <CustomLink to="/profile" >Profile</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/dialogs">Messages</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/news">News</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/music">Music</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/settings">Settings</CustomLink>
            </div>

        </nav>
    )
}

export default Navbar;