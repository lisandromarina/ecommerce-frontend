import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, saveComment } from "../../redux/actions/productAction";
import { addCartProduct, fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import useCounter from '../../hook/useCounter';

function ProductPageContainer() {
    const [newComment, setNewComment] = useState('')

    const isAuth = useSelector(state => state.user.isAuth)
    const productSelected = useSelector(state => state.products.productSelected);
    const userState = useSelector(state => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { value: quantity, increment, decrement } = useCounter(1);
    let { idProduct } = useParams();
    
    function fetchProduct() {
        dispatch(fetchProductById(idProduct));
    }

    function handleOnChangeComment(e) {
        setNewComment(e.target.value)
    }

    function handleOnSaveComment() {
        const comment = {
            user: { id: userState.id },
            product: { id: idProduct },
            description: newComment
        }
        dispatch(saveComment(comment))
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    async function handleOnSubmit() {
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
    }

    return (
        <ProductPageComponent
            isAuth={isAuth}
            productSelected={productSelected}
            handleOnSubmit={handleOnSubmit}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            handleOnSaveComment={handleOnSaveComment}
            newComment={newComment}
            handleOnChangeComment={handleOnChangeComment}
        />
    )
};

export default ProductPageContainer;