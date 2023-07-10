import React from 'react';
import {
	Navbar,
	Nav,
	Image,
} from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import SearchTool from '../SearchTool'
import { BsFillCircleFill, } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"
import "./navbar.scss";

function NavbarComponent(props) {
	const {
		userState,
		allCategory,
		handleOnClickShoppingCart,
		handleOnNavigateLogin,
		handleOnNavigateHomePage,
		handleOnNavigateRegister,
		cartProductQuantity,
		handleOnClickCategory,
		handleOnOpenSidebar
	} = props;

	return (
		<Navbar expand="lg">
			<div className='navbar-over'>
				<Image
					role="button"
					className='navbar-over-logo'
					src={`${process.env.PUBLIC_URL}/assets/mercadoLichaLogo.jpeg`}
					onClick={handleOnNavigateHomePage}
				/>

				<SearchTool className='search-tool-over' />

				{userState.username ? (
					<div className='navbar-over-icons'>
						<div className='navbar-over-icons-profile' onClick={handleOnOpenSidebar}>
							<AiOutlineUser size={30} />
							<span>{userState.firstName}</span>
						</div>
						<div
							className="navbar-over-button-cart"
							role="button"
							onClick={handleOnClickShoppingCart}
						>
							<div className='button-cart-wrapper-notification'>
								<AiOutlineShoppingCart size={30} title="your cart" />
								{cartProductQuantity?.length > 0 ? (
									<BsFillCircleFill size={10} color='orange' />
								) : null}
							</div>
							<div> carrito </div>
						</div>
					</div>
				) : (
					<>
						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							onClick={handleOnOpenSidebar}
						>
							<AiOutlineMenu style={{ color: 'white' }} />
						</Navbar.Toggle>
						<Nav className='navbar-over-singin'>
							<Nav.Link onClick={handleOnNavigateRegister}>Registrarse</Nav.Link>
							<Nav.Link onClick={handleOnNavigateLogin}>Iniciar Sesion</Nav.Link>
						</Nav>
					</>

				)}
			</div>
			<div className='navbar-down'>
				<SearchTool className='search-tool-down' />
				{allCategory.map(oneCategory => (
					<div className='navbar-down-category' onClick={handleOnClickCategory}>
						{oneCategory.name}
					</div>
				))}
			</div>
		</Navbar>
	)
}

export default NavbarComponent;