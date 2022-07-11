import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown,
    Container,
} from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"
import { BsFillCircleFill } from "react-icons/bs"

function NavbarComponent(props) {
    const {
        userState,
        handleOnLogout,
        handleOnClickShoppingCart,
        handleOnNavigateLogin,
        handleOnNavigateHomePage,
        handleOnNavigateRegister,
        handleOnNavigateCreateProduct,
        cartProductQuantity
    } = props;

    return (
        <Navbar bg="warning" expand="lg" className='w-100'>
            <Container>
                <Navbar.Brand className="text-center col-3" onClick={handleOnNavigateHomePage}>Mercado Licha</Navbar.Brand>
                <Form className="d-flex col-md-6 col-4">
                    <FormControl
                        type="search"
                        placeholder="Busca tu producto..."
                        aria-label="Search"
                    />
                </Form>
                {
                    userState.username ?
                        <div className='d-flex align-items-center col-4 col-md-2'>
                            <div className='d-flex align-items-center text-dark'>
                                <CgProfile size={23} className="d-none d-lg-block" />
                                <NavDropdown menuVariant='dark' title={
                                    <span className="text-dark my-auto">
                                        {userState.username}
                                    </span>
                                }>
                                    <NavDropdown.Item onClick={handleOnNavigateCreateProduct}>Add Product</NavDropdown.Item>
                                    <NavDropdown.Item >settings</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleOnLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>

                            </div>
                            <div className='d-flex align-items-start'>
                                <AiOutlineShoppingCart onClick={handleOnClickShoppingCart} size={25} title="your cart" />
                                {
                                    cartProductQuantity?.length > 0
                                        ? <BsFillCircleFill size={10} color='blue' />
                                        : null
                                }
                            </div>
                        </div>
                        :
                        <Nav className='d-flex flex-row justify-content-around col-3 col-md-2'>
                            <Nav.Link onClick={handleOnNavigateRegister}>Register</Nav.Link>
                            <Navbar.Text className="d-none d-lg-block"> or </Navbar.Text>
                            <Nav.Link onClick={handleOnNavigateLogin}>Sign in</Nav.Link>
                        </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;