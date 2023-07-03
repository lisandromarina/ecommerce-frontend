import React from 'react';
import { Container, Row } from "react-bootstrap";
import "./ProductDetails.scss";
import Spinner from 'react-bootstrap/Spinner';
import Comment from '../../components/Comment';
import AddComment from '../../components/AddComment/AddComment';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductImage from '../../components/ProductImage';

function ProductPageComponent(props) {
    const {
        productSelected,
        isAuth,
        isInitialized
    } = props;

    if (!isInitialized) {
        return (
            <Container className='container-loading'>
                <Spinner animation="border" variant="warning" />
            </Container>
        )
    }

    return (
        <Container className='container-product-details'>
            <Row md={2} sm={1} xs={1} className="row">
                <ProductImage imageUrl={productSelected.imageUrl} />
                <ProductDetails productSelected={productSelected} />
            </Row>
            <div className='comments-wrapper'>
                <p className='comments-title'> {productSelected?.comments?.length === 1 ? '1 Comentario' : `${productSelected?.comments?.length} Comentarios`}</p>
                <div className='comment-list'>
                    {
                        productSelected?.comments?.map(oneComment => (
                            <Comment comment={oneComment} key={oneComment.id} />
                        ))
                    }
                </div>
                {
                    isAuth &&
                    <AddComment />
                }
            </div>
        </Container >
    )
};

export default ProductPageComponent;