import React from 'react'
import logoPath from "../images/logo.svg";
import {Link, useLocation} from "react-router-dom";


function Header({loggedIn, userEmail, onSignOut}) {
    const location = useLocation();

    return (
        <header className="header">
            <a href="#">
                <img alt="логотип сайта Место." className="header__logo" src={logoPath}/>
            </a>
            {!loggedIn &&
                (<nav>
                        {location.pathname === '/sign-in' &&
                            (
                                <Link className="header__navlink"
                                      to="/sign-up">
                                      Регистрация
                                </Link>
                            )
                        }
                        {location.pathname === '/sign-up' &&
                            (
                                <Link className="header__navlink"
                                      to="/sign-in">
                                      Войти
                                </Link>
                            )
                        }
                </nav>
                )
            }
            {loggedIn &&
                (
                    <div className="header__user-info">
                        <p className="header__email">{userEmail}</p>
                        <button onClick={onSignOut} className="header_  _button" type="button">
                            Выход
                        </button>
                    </div>
                )
            }
        </header>


    );
}

export default Header;