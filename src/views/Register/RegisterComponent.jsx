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
        <Container>
            <div className="div-wrapper-register">
                <div className="div-wrapper-form-register">
                    <div required className="div-form-register">
                        <h2 className="div-title-register">Create your account</h2>
                        {/* NAME  */}
                        <label className="label-register" for="name">Name
                            <input onChange={HandleOnChange} name="name" type="text" className="input-register" placeholder="First and last name" /></label>
                        {/* USERNAME  */}
                        <label className="label-register" for="username">Username
                            <input onChange={HandleOnChange} name="username" type="text" class="input-register" placeholder="MercadoLicha" /></label>
                        {/* EMAIL  */}
                        <label className="label-register" for="email">Email address
                            <input onChange={HandleOnChange} name="email" type="email" class="input-register" placeholder="example@hotmail.com" /></label>
                        {/* PASSWORD  */}
                        <label className="label-register" for="password" >Password
                            <input onChange={HandleOnChange} name="password" type="password" class="input-register" placeholder="*******" /></label>
                        {/* CONFIRM PASSWORD  */}
                        <label className="label-register" for="password" >Confirm Password
                            <input onChange={HandleOnChange} name="password" type="password" class="input-register" placeholder="*******" /></label>
                        {/* TERMS AND CONDITIONS  */}
                        <label class="label-register" for="termsConditions">Accept terms and conditions
                            <input required type="checkbox" name="termsConditions" /></label>
                        {/* SUBMIT BUTTON  */}
                        <input type="submit" onClick={() => handleOnSubmit()} className="input-register-submit" value="Submit" />
                        {/* HAVE ACCOUNT  */}
                        <p className="p-register">
                            Do you already have an account?
                            <a href="login" className="a-register">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default RegisterComponent;