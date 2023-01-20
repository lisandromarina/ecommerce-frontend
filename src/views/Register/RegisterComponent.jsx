import React from 'react';
import {
    Form,
    Button,
    Container
} from 'react-bootstrap';
import "./register.scss";

function RegisterComponent(props) {
    const {
        HandleOnChange,
        handleOnSubmit
    } = props;
    return (
        <Container className="register-wrapper">
            <div required className="register-form">
                <h2 className="register-title">Crea tu cuenta</h2>
                {/* NAME  */}
                <label className="register-label" for="name">Nombre
                    <input onChange={HandleOnChange} name="name" type="text" className="register-input" placeholder="Nombre y apellido" /></label>
                {/* USERNAME  */}
                <label className="register-label" for="username">Usuario
                    <input onChange={HandleOnChange} name="username" type="text" class="register-input" placeholder="MercadoLicha" /></label>
                {/* EMAIL  */}
                <label className="register-label" for="email">Correo Electronico
                    <input onChange={HandleOnChange} name="email" type="email" class="register-input" placeholder="ejemplo@hotmail.com" /></label>
                {/* PASSWORD  */}
                <label className="register-label" for="password" >Contraseña
                    <input onChange={HandleOnChange} name="password" type="password" class="register-input" placeholder="*******" /></label>
                {/* CONFIRM PASSWORD  */}
                <label className="register-label" for="password" >Confirmar Contraseña
                    <input onChange={HandleOnChange} name="password" type="password" class="register-input" placeholder="*******" /></label>
                {/* TERMS AND CONDITIONS  */}
                <label class="register-terms" for="termsConditions">Aceptar terminos y condiciones
                    <input required type="checkbox" name="termsConditions" /></label>
                {/* SUBMIT BUTTON  */}
                <input type="submit" onClick={() => handleOnSubmit()} className="register-submit" value="Enviar" />
                {/* HAVE ACCOUNT  */}
                <p className="p-register">
                    Ya estas registrado?
                    <a href="login" className="a-register">Log in</a>
                </p>
            </div>
        </Container>
    )
};

export default RegisterComponent;