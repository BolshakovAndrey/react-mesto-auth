import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Register = ({onRegister}) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = state;
        if (onRegister && email  && password) {
            onRegister(email, password)
        }
    }

    return (
        <div className="register">
            <p className="register__welcome">
                Пожалуйста, зарегистрируйтесь.
            </p>
            <form onSubmit={handleSubmit} className="register__form">
                <label htmlFor="email">
                    Email:
                </label>
                <input id="email" name="email" type="email" value={state.email} onChange={handleChange}/>
                <label htmlFor="password">
                    Пароль:
                </label>
                <input id="password" name="password" type="password" value={state.password}
                       onChange={handleChange}/>
                <div className="register__button-container">
                    <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться
                    </button>
                </div>
            </form>
            <div className="register__signin">
                <p>Уже зарегистрированы?</p>
                <Link to="login" className="register__login-link">Войти</Link>
            </div>
        </div>
    );
}


export default Register;
