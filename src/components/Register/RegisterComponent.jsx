import React from 'react';
import { Form, Card, Button, Container } from 'react-bootstrap';

function RegisterComponent() {
    return (
        <Container>
            <h1 className="text-center text-white fw-semibold">Registration</h1>
            <div className="d-flex justify-content-center">
                <Form className="row w-50">
                    <label className="text-white" style={{ marginTop: "10px" }} htmlFor="name">Name</label>
                    <input type="text" class="form-control" placeholder="First name" />
                    <label className="text-white" style={{ marginTop: "10px" }} htmlFor="last name">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name" />
                    <label className="text-white" style={{ marginTop: "10px" }} htmlFor="email">Email address</label>
                    <input type="email" class="form-control" placeholder="example@hotmail.com" />
                    <label className="text-white" style={{ marginTop: "10px" }} htmlFor="password">Password</label>
                    <input type="password" class="form-control" placeholder="***" />
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Button className="d-flex justify-content-center w-50" style={{ marginTop: "30px" }}>Create Account</Button>
                        </div>
                        <p style={{ marginTop: "10px" }} className="d-flex justify-content-center text-white">
                            Do you already have an account?<a href='login'>Log in</a>
                        </p>
                    </div>

                </Form>
            </div>
        </Container>
    )
};

export default RegisterComponent;