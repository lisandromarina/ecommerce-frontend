import React from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";
import "./ProductDetails.scss";
import Counter from '../../components/Counter/Counter';
import { priceFormatter } from '../../utils/priceFormatter';
import Spinner from 'react-bootstrap/Spinner';

function ProductPageComponent(props) {
    const {
        handleChange,
        isLoading,
        productSelected,
        handleOnSubmit,
        quantity,
        increment,
        decrement,
        isAuth,
        handleOnSaveComment,
        newComment,
        handleOnChangeComment
    } = props;

    if (isLoading) {
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
                <ProductDetails
                    productSelected={productSelected}
                    quantity={quantity}
                    increment={increment}
                    decrement={decrement}
                    handleOnSubmit={handleOnSubmit}
                />
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
                    <AddComment
                        newComment={newComment}
                        handleChange={handleChange}
                        handleOnSaveComment={handleOnSaveComment}
                    />
                }
            </div>
        </Container >
    )
};

export default ProductPageComponent;

//I should create a new component but first I must restructure the folder architecture for features
function AddComment({ newComment, handleChange, handleOnSaveComment }) {
    return (
        <div className='add-comment'>
            <div className='single-comment-wrapper'>
                <div className='image-wrapper'>
                    <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
                </div>
                <textarea
                    value={newComment.newComment}
                    name='newComment'
                    /*  className="add-input-comment" */
                    placeholder="Agregar un comentario..."
                    onChange={handleChange}
                />
            </div>
            <Button className="add-button" onClick={handleOnSaveComment}>
                Agregar Comentario
            </Button>
        </div>
    );
}

//I should create a new component but first I must restructure the folder architecture for features
function ProductImage({ imageUrl }) {
    return (
        <Col md={4} className="text-center">
            <div className='image-detail-wrapper'>
                <img className="cart-image" alt='product' src={imageUrl ? imageUrl : `${process.env.PUBLIC_URL}/assets/cocacola.jpeg`} />
            </div>
        </Col>
    );
}

//I should create a new component but first I must restructure the folder architecture for features
function Comment({ comment }) {
    return (
        <div className='comment'>
            <div className='image-wrapper'>
                <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
            </div>
            <div className='comment-details'>
                <p>{comment.description}</p>
            </div>
        </div>
    );
}

//I should create a new component but first I must restructure the folder architecture for features
function ProductDetails({ productSelected, quantity, increment, decrement, handleOnSubmit }) {
    return (
        <Col md={6}>
            <div className='product-details'>
                <h3 className='product-details-title'>{productSelected.name}</h3>
                <h5 className='product-details-price'>${priceFormatter(productSelected?.price ?? 0)}</h5>
                <div className='buttons-wrapper'>
                    <Counter
                        quantity={quantity}
                        increment={increment}
                        decrement={decrement}
                    />
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
    );
}