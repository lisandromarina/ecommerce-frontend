import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardHomePage from "../../components/CardHomePage"


function ListProductsContainer(props) {
    const {
        arrayProducts,
        handleOnClick,
        title
    } = props;

    return (
        <Container className='pt-5 pb-5'>
            <div>
                <h2 className='text-center' style={{ color: "#e77800", fontFamily: "cursive" }}>
                    {title}
                </h2>
                <Row md={4} xs={2} className='d-flex align-item-around' >
                    {
                        arrayProducts.map(product => (
                            <CardHomePage
                                product={product}
                                handleOnClick={handleOnClick}
                            />
                        ))
                    }
                </Row>
            </div>
        </Container>
    )
};

export default ListProductsContainer;