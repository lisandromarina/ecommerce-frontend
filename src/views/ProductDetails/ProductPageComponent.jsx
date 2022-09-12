import React from 'react';
import { Container, Image, Card, Button, Row, Col } from "react-bootstrap";


function ProductPageComponent(props) {
    const {
        productSelected,
        handleOnSubmit,
        quantity,
        handleOnClickCount
    } = props;

    return (
        <Container className='mt-5'>
            <Card className="d-flex w-100">
                <Card.Body>
                    <Row md={2} sm={1} xs={1} className='d-flex w-100 justify-content-around'>
                        <Col md={4} className="text-center">
                            <Image
                                height={250}
                                fluid="true"
                                variant="top"
                                src={`${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
                            />
                        </Col>
                        <Col md={6}>
                            <Card.Body className='d-flex flex-column align-items-center '>
                                <Card.Title>{productSelected.name}</Card.Title>
                                <Card.Text >Price: ${productSelected.price?.toLocaleString(undefined,
                                    {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </Card.Text>

                                <div className="d-flex justify-content-center align-items-center">
                                    <input type="button" onClick={handleOnClickCount} value="-" />
                                    <input readonly value={quantity} className="border-0 text-center w-25" />
                                    <input type="button" onClick={handleOnClickCount} value="+" />
                                </div>
                                <Button onClick={handleOnSubmit} className='mt-4'>
                                    Add Cart
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card.Body>
                <hr />
                <Card.Text>{productSelected.description}</Card.Text>
            </Card>
        </Container >
    )
};

export default ProductPageComponent;