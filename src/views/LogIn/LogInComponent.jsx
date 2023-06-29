import React from 'react';
import { Container } from 'react-bootstrap';
import Input from '../../components/Input'
import "./LoginStyles.scss";
import Button from '../../components/Button';

function RegisterComponent(props) {
    const {
        isLoading,
        handleChange,
        formData,
        handleOnSubmit
    } = props
    return (
        <Container className="login-wrapper">
            <h1 className="login-title" id="title">Inicia Sesión</h1>
            <Input
                value={formData.username}
                className='login-input'
                type="text"
                name="username"
                label="Usuario"
                onChange={handleChange}
                required
            />
            <Input
                value={formData.password}
                className='login-input'
                type="password"
                name="password"
                label="Contraseña"
                onChange={handleChange}
                required
            />
            <Button 
                handleOnClick={handleOnSubmit}
                className="login-submit"
                label="Ingresar"
                isLoading={isLoading}
            />
            <p className="p-login">
                No estas registrado?
                <a href="register" className="a-login">Registrarse</a>
            </p>
        </Container>
    )
};

export default RegisterComponent;