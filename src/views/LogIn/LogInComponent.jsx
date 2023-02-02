import React from 'react';
import { Container } from 'react-bootstrap';
import "./LoginStyles.scss";

function RegisterComponent(props) {
    const {
        onChangeUserState,
        handleOnSubmit
    } = props
    return (
        <Container className="login-wrapper">
            <div required className="login-form">
                <h1 className="login-title" id="title">Inicia Sesión</h1>
                <label className="login-label" >Usuario
                    <input onChange={onChangeUserState} name="username" type="text" className="login-input" placeholder="MercadoLicha" />
                </label>
                <label className="login-label" >Contraseña
                    <input onChange={onChangeUserState} name="password" type="password" className="login-input" placeholder="*******" />
                </label>
                <input type="submit" onClick={() => handleOnSubmit()} className="login-submit" value="Ingresar" />
                <p className="p-login">
                    No estas registrado?
                    <a href="register" className="a-login">Registrarse</a>
                </p>
            </div>
        </Container>
    )
};

export default RegisterComponent;