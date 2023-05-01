import React from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";
import "./ProductDetails.scss";

function ProductPageComponent(props) {
    const {
        productSelected,
        handleOnSubmit,
        quantity,
        handleOnClickCount,
        isAuth,
        handleOnSaveComment,
        newComment,
        handleOnChangeComment
    } = props;

    return (
        <Container className='container-product-details'>
            <Row md={2} sm={1} xs={1} className="row">
                <Col md={4} className="text-center">
                    <div className='image-detail-wrapper'>
                        <img
                            className="cart-image"
                            alt='product'
                            src={productSelected.imageUrl ? productSelected.imageUrl : `${process.env.PUBLIC_URL}/assets/cocacola.jpeg`}
                        />
                    </div>
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
            <div className='comments-wrapper'>
                <p className='comments-title'> {productSelected?.comments?.length === 1 ? '1 Comentario' : `${productSelected?.comments?.length} Comentarios`}</p>
                <div className='comment-list'>
                    {
                        productSelected?.comments?.map(oneComment => (
                            <div className='comment'>
                                <div className='image-wrapper'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
                                </div>
                                <div className='comment-details'>
                                    <p>{oneComment.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    isAuth &&
                    <div className='add-comment'>
                        <div className='single-comment-wrapper'>
                            <div className='image-wrapper'>
                                <img src={`${process.env.PUBLIC_URL}/assets/commentImage.png`} alt='comment-icon' />
                            </div>
                            <textarea
                                value={newComment}
                                type='text-area'
                                className='add-input-comment'
                                placeholder='Agregar un comentario...'
                                onChange={handleOnChangeComment}
                            />
                        </div>
                        <Button className="add-button" onClick={handleOnSaveComment}>
                            Agregar Comentario
                        </Button>
                    </div>
                }
            </div>
        </Container >
    )
};

export default ProductPageComponent;