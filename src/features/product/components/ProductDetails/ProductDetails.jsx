import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Counter from '../../../../components/Counter/Counter';
import { priceFormatter } from '../../../../utils/priceFormatter';
import { Col } from "react-bootstrap";
import useCounter from '../../../../hook/useCounter';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addCartProduct, updateCartProduct, fetchShoppingCart } from "../../../../redux/actions/shoppingCartAction";

function ProductDetails({ productSelected }) {
    const [isLoading, setIsLoading] = useState(false);

    const { value: quantity, increment, decrement } = useCounter(1);
    const userState = useSelector(state => state.user.user);
    const shoppingCartState = useSelector(state => state.shoppingCart);
    
    let { idProduct } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    

    function validateIsCreate(){
        if(shoppingCartState.cartProducts === undefined){
            return true;
        }
        return false;
    }

    function createCartProduct(){
        return {
            userId: userState.id,
            quantity: quantity,
            idProduct: idProduct
        }
    }

    async function dispatchAction(){
        let isCreate = validateIsCreate();
        const cartProduct = createCartProduct();
        const displayNotification = true;
        
        if(isCreate){
            await dispatch(addCartProduct(cartProduct))
        }else{
            await dispatch(updateCartProduct(cartProduct, displayNotification))
        }
        await dispatch(fetchShoppingCart(userState.id));
    }

    function handleOnSubmit() {
        setIsLoading(true)
        if (localStorage.getItem("token")) {
            dispatchAction();
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
