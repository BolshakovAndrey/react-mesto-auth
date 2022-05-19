import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = inputs
        if (onLogin && email && password) {
            onLogin(email, password)
        }
    }

    return(
        <div onSubmit={handleSubmit} className="login">
            <p className="login__welcome">
                Пожалуйста, войдите или зарегистрируйтесь
            </p>
            <p className="login__error">
                {message}
            </p>
            <form className="login__form">
                <label htmlFor="email">
                    Email:
                </label>
                <input id="email" required name="email" type="email" value={inputs.email} onChange={handleChange} />
                <label htmlFor="password">
                    Пароль:
                </label>
                <input id="password" required name="password" type="password" value={inputs.password} onChange={handleChange} />
                <div className="login__button-container">
                    <button type="submit" className="popup__button-submit">Войти</button>
                </div>
            </form>

            <div className="login__signup">
                <p>Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="signup__link">Зарегистрироваться</Link>
            </div>
        </div>
    )
}

export default Login;