import React from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';
import ProductCard from "../../components/ProductCard";
import './ListProductStyles.scss';

function ListProductsContainer(props) {
    const {
        handleOnClick,
        title,
        goToPage,
        currentPage,
        totalPages,
        currentItems
    } = props;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => goToPage(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Container className='pt-5 pb-5'>
            <h2 className='text-center' style={{ color: "#e77800", fontFamily: "Space Grotesk" }}>
                {title}
            </h2>
            <Row xl={4} lg={3} md={3} xs={2} className='d-flex align-item-around justify-content-start' >
                {
                    currentItems.map(product => (
                        <ProductCard
                            product={product}
                            handleOnClick={handleOnClick}
                        />
                    ))
                }
            </Row>
            {
                totalPages !== 1 &&
                <Pagination>
                    <Pagination.Prev onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                    {pageNumbers}
                    <Pagination.Next onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                </Pagination>
            }
        </Container>
    )
};

export default ListProductsContainer;