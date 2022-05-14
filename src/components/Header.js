import React from 'react'
import logoPath from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <a href="#">
                <img alt="логотип сайта Место." className="header__logo" src={logoPath}/>
            </a>
        </header>
    );
}

export default Header;