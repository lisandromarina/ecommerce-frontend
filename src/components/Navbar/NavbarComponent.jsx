import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';


function NavbarComponent(props) {
    const {
        userState
    } = props;

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
                    {
                        userState.username ?
                            <NavDropdown title={userState.username}>
                                <NavDropdown.Item href="profile">my profile</NavDropdown.Item>
                                <NavDropdown.Item href="login">settings</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <NavDropdown title={"My Account"}>
                                <NavDropdown.Item href="register">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                            </NavDropdown>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;