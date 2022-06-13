import React from 'react';
import { Image, Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';


function NavbarComponent() {

    return (
        <Navbar bg="light" expand="lg">
            <Nav className="flex-row justify-content-md-around w-100">
                <Navbar.Brand className="" href="/">Mercado Licha</Navbar.Brand>
                <Form className="d-flex col-6">
                    <FormControl
                        type="search"
                        placeholder="Busca tu producto..."
                        className="me-3"
                        aria-label="Search"
                    />
                </Form>
                <NavDropdown title="My Account">
                    <NavDropdown.Item href="register">Sign Up</NavDropdown.Item>
                    <NavDropdown.Item href="login">Login</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;