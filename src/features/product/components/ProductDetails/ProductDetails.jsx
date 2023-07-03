import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Counter from '../../../../components/Counter/Counter';
import { priceFormatter } from '../../../../utils/priceFormatter';
import { Col } from "react-bootstrap";
import useCounter from '../../../../hook/useCounter';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addCartProduct, fetchShoppingCart } from "../../../../redux/actions/shoppingCartAction";

function ProductDetails({ productSelected }) {
    const [isLoading, setIsLoading] = useState(false);

    const { value: quantity, increment, decrement } = useCounter(1);
    const userState = useSelector(state => state.user.user);
    
    let { idProduct } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    async function handleOnSubmit() {
        setIsLoading(true)
        if (localStorage.getItem("token")) {
            await dispatch(addCartProduct({
                userId: userState.id,
                quantity: quantity,
                idProduct: idProduct
            }))
            await dispatch(fetchShoppingCart(userState.id));
        } else {
            const prevPath = location.pathname;
            navigate("/login", { state: { prevPath: prevPath } })
        }
        setIsLoading(false)
    }

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
                    <Button
                        className="add-button"
                        handleOnClick={handleOnSubmit}
                        label='Agregar al Carrito'
                        isLoading={isLoading}
                    />
                </div>
                <div className='description-wrapper'>
                    <p className='description-title'>Descripcion</p>
                    <p>{productSelected.description}</p>
                </div>
            </div>
        </Col>
    )
}

export default ProductDetails
