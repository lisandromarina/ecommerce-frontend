import React from 'react';
import {
    Container
} from 'react-bootstrap';
import "./RegisterStyles.scss";

function RegisterComponent(props) {
    const {
        HandleOnChange,
        handleOnSubmit
    } = props;
    return (
        <Container className="register-wrapper">
            <div required className="register-form">
                <h1 className="register-title" id="title">Crea tu cuenta</h1>
                <label className="register-label" >Nombre
                    <input onChange={HandleOnChange} name="name" type="text" className="register-input" placeholder="Nombre y apellido" />
                </label>
                <label className="register-label" >Usuario
                    <input onChange={HandleOnChange} name="username" type="text" className="register-input" placeholder="MercadoLicha" />
                </label>
                <label className="register-label" >Correo Electronico
                    <input onChange={HandleOnChange} name="email" type="email" className="register-input" placeholder="ejemplo@hotmail.com" />
                </label>
                <label className="register-label" >Contraseña
                    <input onChange={HandleOnChange} name="password" type="password" className="register-input" placeholder="*******" />
                </label>
                <label className="register-label" >Confirmar Contraseña
                    <input onChange={HandleOnChange} name="password" type="password" className="register-input" placeholder="*******" />
                </label>
                <label className="register-terms" >Aceptar terminos y condiciones
                    <input required type="checkbox" name="termsConditions" />
                </label>
                <input type="submit" onClick={() => handleOnSubmit()} className="register-submit" value="Enviar" />
                <p className="p-register">
                    Ya estas registrado?
                    <a href="login" className="a-register">Iniciar sesión</a>
                </p>
            </div>
        </Container>
    )
};

export default RegisterComponent;