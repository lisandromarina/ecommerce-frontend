import React from 'react';
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./ProductDetails.scss";


function ProductPageComponent(props) {
    const {
        productSelected,
        handleOnSubmit,
        quantity,
        handleOnClickCount
    } = props;

    return (
        <Container className='container'>
            <Row md={2} sm={1} xs={1} className="row">
                <Col md={4} className="text-center">
                    <Image
                        height={250}
                        fluid="true"
                        variant="top"
                        className='image'
                        src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
                    />
                </Col>
                <Col md={6}>
                    <div className='product-details'>
                        <h3 className='product-details-title'>{productSelected.name}</h3>
                        <h5 className='product-details-price'>${productSelected.price?.toLocaleString(undefined,
                            {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </h5>

                        <div className='buttons-wrapper'>
                            <div className="increment-button">
                                <input className='increment-button-button' type="button" onClick={handleOnClickCount} value="-" />
                                <input readonly value={quantity} className="border-0 text-center w-25" />
                                <input className='increment-button-button' type="button" onClick={handleOnClickCount} value="+" />
                            </div>
                            <Button className="add-button" onClick={handleOnSubmit}>
                                Agregar al Carrito
                            </Button>
                        </div>
                        <div className='description-wrapper'>
                            <p className='description-title'>Descripcion</p>
                            <p>{productSelected.description}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    )
};

export default ProductPageComponent;