import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardHomePage from "../../components/CardHomePage"

function ProductListComponent(props) {
    const {
        arrayProducts,
        handleOnClick,
        categoryName
    } = props;

    return (
        <Container>
            <div className='pt-5 pb-5'>
                <h2 className='text-center' style={{ color: "#e77800", fontFamily: "cursive" }}>
                    {categoryName}
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

export default ProductListComponent;