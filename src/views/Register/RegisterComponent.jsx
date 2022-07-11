import React from 'react';
import {
    Form,
    Button,
    Container
} from 'react-bootstrap';

function RegisterComponent(props) {
    const {
        HandleOnChange,
        handleOnSubmit
    } = props;
    return (
        <Container>
            <h1 className="text-center text-white fw-semibold">Registration</h1>
            <div className="d-flex justify-content-center">
                <Form className="row w-50">
                    <label className="text-white mt-2">First Name</label>
                    <input onChange={HandleOnChange} name="firstName" type="text" class="form-control" placeholder="First name" />
                    <label className="text-white mt-2">Last Name</label>
                    <input onChange={HandleOnChange} name="lastName" type="text" class="form-control" placeholder="Last name" />
                    <label className="text-white mt-2">Username</label>
                    <input onChange={HandleOnChange} name="username" type="text" class="form-control" placeholder="Username" />
                    <label className="text-white mt-2">Email address</label>
                    <input onChange={HandleOnChange} name="email" type="email" class="form-control" placeholder="example@hotmail.com" />
                    <label className="text-white mt-2" >Password</label>
                    <input onChange={HandleOnChange} name="password" type="password" class="form-control" placeholder="password" />
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Button
                                onClick={() => handleOnSubmit()}
                                className="d-flex justify-content-center w-50" style={{ marginTop: "30px" }}>Create Account</Button>
                        </div>
                        < p className="d-flex justify-content-center text-white">
                            Do you already have an account?<a href='login'>Log in</a>
                        </p>
                    </div>

                </Form>
            </div>
        </Container>
    )
};

export default RegisterComponent;