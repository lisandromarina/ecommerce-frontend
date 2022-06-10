import React from 'react';
import { Image, Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';


function NavbarComponent() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
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
                    <NavDropdown title="Create Account">
                        <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;