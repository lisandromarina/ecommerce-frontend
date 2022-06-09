import React from 'react';
import { Image, Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';


function NavbarComponent() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mercado Licha</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Form className="d-flex">
                            <FormControl 
                                type="search"
                                placeholder="Busca tu producto..."
                                className="me-3"
                                aria-label="Search"
                            />
                        </Form>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electrodomesticós</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Música</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tecnología</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;