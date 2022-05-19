import React from 'react'
import logoPath from "../images/logo.svg";
import {Link, useLocation} from "react-router-dom";

// noinspection UnreachableCodeJS
function Header({loggedIn, userEmail}) {
    const location = useLocation();

    return (
        <header className="header">
            <a href="#">
                <img alt="логотип сайта Место." className="header__logo" src={logoPath}/>
            </a>
            {!loggedIn &&
                (<nav>
                        {location.pathname ===}
                </nav>
                )
            }
        </header>


    );
}

export default Header;