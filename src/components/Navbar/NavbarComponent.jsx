import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';


function NavbarComponent(props) {
    const {
        userState,
        handleOnLogOut
    } = props;

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
                {
                    userState.username ?
                        <NavDropdown title={userState.username}>
                            <NavDropdown.Item>my profile</NavDropdown.Item>
                            <NavDropdown.Item >settings</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleOnLogOut}>log out</NavDropdown.Item>
                        </NavDropdown>
                        :
                        <NavDropdown title={"My Account"}>
                            <NavDropdown.Item href="register">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="login">Login</NavDropdown.Item>
                        </NavDropdown>
                }
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;