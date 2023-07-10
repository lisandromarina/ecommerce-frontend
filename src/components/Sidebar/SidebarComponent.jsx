import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import './SidebarStyles.scss';

function SidebarComponent({ isOpen, children, handleClose, handleOnLogout, navigateToPath, isAuth }) {
    return (
        <>
            <Offcanvas
                show={isOpen}
                placement="end"
                onHide={handleClose}
                className='sidebar-container'
            >
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Mercado Licha</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {
                            isAuth ?
                                <>
                                    <Nav.Link onClick={() => navigateToPath("/abmProducts")}>Agregar Product</Nav.Link>
                                    <Nav.Link onClick={() => navigateToPath("/center-sell")}>Mis ventas</Nav.Link>
                                    <Nav.Link onClick={handleOnLogout}>Cerrar Sesion</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link onClick={() => navigateToPath("/login")}>Iniciar Sesion</Nav.Link>
                                    <Nav.Link onClick={() => navigateToPath("/register")}>Registrarse</Nav.Link>
                                </>
                        }
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            {children}
        </>
    )
}

export default SidebarComponent
