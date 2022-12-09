import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://avatars.mds.yandex.net/i?id=6afdc46e956e256a9186a2871e3baece-2036054-images-thumbs&ref=rim&n=33&w=150&h=150'></img>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;