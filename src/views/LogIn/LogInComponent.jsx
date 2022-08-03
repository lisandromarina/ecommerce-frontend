import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function RegisterComponent(props) {
    const {
        onChangeUserState,
        handleOnSubmit
    } = props
    return (
        <Container>
            <h1 className="text-center text-white fw-semibold ">Log In</h1>
            <div className="d-flex justify-content-center">
                <Form className="row w-50">
                    <label className="text-white" style={{ marginTop: "10px" }}>Username</label>
                    <input onChange={onChangeUserState} name="username" type="text" class="form-control" placeholder="Username" />
                    <label className="text-white mt-10" htmlFor="password">Password</label>
                    <input onChange={onChangeUserState} name="password" type="password" class="form-control" placeholder="*****" />
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Button onClick={()=> handleOnSubmit()} className="d-flex justify-content-center w-50" style={{ marginTop: "30px" }}>
                                Log In
                            </Button>
                        </div>
                        <p style={{ marginTop: "10px" }} className="d-flex justify-content-center text-white">
                            Are you new to Mercado Licha?<a href='register'>Create Account</a>
                        </p>
                    </div>

                </Form>
            </div>
        </Container>
    )
};

export default RegisterComponent;