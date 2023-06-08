import React from 'react';
import {
	Navbar,
	Nav,
	Image,
	NavDropdown,
} from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import SearchTool from '../SearchTool'
import { BsFillCircleFill } from "react-icons/bs";
import "./navbar.scss";

function NavbarComponent(props) {
	const {
		userState,
		allCategory,
		handleOnLogout,
		handleOnClickShoppingCart,
		handleOnNavigateLogin,
		handleOnNavigateHomePage,
		handleOnNavigateRegister,
		handleOnNavigateCreateProduct,
		cartProductQuantity,
		handleOnClickCategory,
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
						<div className='navbar-over-icons-profile'>
							<AiOutlineUser size={30} />
							<NavDropdown
								bsPrefix='p-0'
								menuVariant='dark'
								title={<span>{userState.firstName}</span>}
							>
								<NavDropdown.Item onClick={handleOnNavigateCreateProduct}>
									Add Product
								</NavDropdown.Item>
								<NavDropdown.Item>settings</NavDropdown.Item>
								<NavDropdown.Item onClick={handleOnLogout}>Logout</NavDropdown.Item>
							</NavDropdown>
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
					<Nav className='navbar-over-singin'>
						<Nav.Link onClick={handleOnNavigateRegister}>Register</Nav.Link>
						<Navbar.Text> or </Navbar.Text>
						<Nav.Link onClick={handleOnNavigateLogin}>Sign in</Nav.Link>
					</Nav>
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