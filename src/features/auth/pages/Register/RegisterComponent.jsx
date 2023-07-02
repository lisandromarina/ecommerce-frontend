import React from 'react';
import { Container } from 'react-bootstrap';
import "./RegisterStyles.scss";
import Input from '../../../../components/Input'

function RegisterComponent(props) {
    const {
        user,
        HandleOnChange,
        handleOnSubmit
    } = props;
    return (
        <Container className="register-wrapper">
            <h1 className="register-title" id="title">Crea tu cuenta</h1>
            <Input
                value={user.firstName}
                className='register-input'
                type="text"
                name="firstName"
                label="Nombre"
                onChange={HandleOnChange}
                required
            />
            <Input
                value={user.lastName}
                className='register-input'
                type="text"
                name="lastName"
                label="Apellido"
                onChange={HandleOnChange}
                required
            />
            <Input
                value={user.username}
                className='register-input'
                type="text"
                name="username"
                label="Usuario"
                onChange={HandleOnChange}
                required
            />
            <Input
                value={user.email}
                className='register-input'
                type="text"
                name="email"
                label="Email"
                onChange={HandleOnChange}
                required
            />
            <Input
                value={user.password}
                className='register-input'
                type="text"
                name="password"
                label="Contraseña"
                onChange={HandleOnChange}
                required
            />
            <Input
                value={user.repeatPassword}
                className='register-input'
                type="text"
                name="repeatPassword"
                label="Repetir Contraseña"
                onChange={HandleOnChange}
                required
            />
            <input type="submit" onClick={() => handleOnSubmit()} className="register-submit" value="Enviar" />
            <p className="p-register">
                Ya estas registrado?
                <a href="login" className="a-register">Iniciar sesión</a>
            </p>
        </Container>
    )
};

export default RegisterComponent;