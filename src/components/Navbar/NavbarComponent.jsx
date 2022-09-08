import React from 'react';
import {
	Navbar,
	Nav,
	Image,
	FormControl,
	NavDropdown,
	Container,
} from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import "../../styles/navbar.css";

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
		<Navbar expand="lg" className='d-flex flex-column'>
			<div className='w-100 d-flex align-items-center justify-content-around'>
				<Image role="button" className="col-4 col-lg-2"
					src={`${process.env.PUBLIC_URL}/assets/mercadoLichaLogo.jpeg`}
					onClick={handleOnNavigateHomePage}>
				</Image>
				<FormControl
					className='w-25 col-4'
					type="search"
					placeholder="Buscar producto..."
					aria-label="Search"
				/>
				{
					userState.username ?
						<div className='d-flex justify-content-around align-items-center col-4 col-md-2'>
							<div className='text-white d-flex flex-column justify-content-center align-items-center'>
								<AiOutlineUser size={30} />
								<NavDropdown bsPrefix='p-0' menuVariant='dark' title={
									<span className="text-white m-auto">
										{userState.username}
									</span>
								}>
									<NavDropdown.Item onClick={handleOnNavigateCreateProduct}>Add Product</NavDropdown.Item>
									<NavDropdown.Item >settings</NavDropdown.Item>
									<NavDropdown.Item onClick={handleOnLogout}>Logout</NavDropdown.Item>
								</NavDropdown>

							</div>
							<div
								role="button"
								onClick={handleOnClickShoppingCart}
								className='d-flex flex-column align-items-center justify-content-center text-white'
							>
								<div className='d-flex'>
									<AiOutlineShoppingCart
										size={30}
										title="your cart"
									/>
									{
										cartProductQuantity?.length > 0
											? <BsFillCircleFill size={10} color='orange' />
											: null
									}
								</div>

								<p className="text-white m-auto"> carrito </p>
							</div>
						</div>
						:
						<Nav className='d-flex flex-row justify-content-around col-4 col-md-2'>
							<Nav.Link className=' text-white' onClick={handleOnNavigateRegister}>Register</Nav.Link>
							<Navbar.Text className="d-none d-lg-block  text-white"> or </Navbar.Text>
							<Nav.Link className='text-white' onClick={handleOnNavigateLogin}>Sign in</Nav.Link>
						</Nav>
				}
			</div>
			<hr id="divider-navbar" className='w-100 rounded' />
			<Container className='col col-md-7  mx-auto d-flex justify-content-center'>
				<div className='d-flex justify-content-around w-100 text-white mt-1'>
					{
						allCategory.map(oneCategory => (
							<div className="mt-1">
								<div onClick={handleOnClickCategory} role="button" className='m-auto d-none d-lg-block'>{oneCategory.name}</div>
								{
									oneCategory.name !== "Entretenimiento" && 
									<span onClick={handleOnClickCategory} 
										className='d-block d-sm-block d-md-block d-lg-none' 
										value={oneCategory.id}
									>
										{oneCategory.name}
									</span>
								}

							</div>
						))
					}
				</div>
			</Container>
		</Navbar>
	)
}

export default NavbarComponent;