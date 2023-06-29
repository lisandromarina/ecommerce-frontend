import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, saveComment } from "../../redux/actions/productAction";
import { addCartProduct, fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import useCounter from '../../hook/useCounter';
import useFormState from '../../hook/useFormState';

function ProductPageContainer() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const initialState = {
        newComment: '',
    };
    const { formData: newComment, handleChange } = useFormState(initialState);

    const isAuth = useSelector(state => state.user.isAuth)
    const productSelected = useSelector(state => state.products.productSelected);
    const userState = useSelector(state => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { value: quantity, increment, decrement } = useCounter(1);
    let { idProduct } = useParams();

    async function fetchProduct() {
        await dispatch(fetchProductById(idProduct));
        setIsInitialized(true)
    }

    async function handleOnSaveComment() {
        setIsLoading(true)
        const comment = {
            user: { id: userState.id },
            product: { id: idProduct },
            description: newComment
        }
        await dispatch(saveComment(comment))
        setIsLoading(false)
    }

    useEffect(() => {
        fetchProduct();
    }, [])

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
        <ProductPageComponent
            handleChange={handleChange}
            isAuth={isAuth}
            isLoading={isLoading}
            isInitialized={isInitialized}
            productSelected={productSelected}
            handleOnSubmit={handleOnSubmit}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            handleOnSaveComment={handleOnSaveComment}
            newComment={newComment}
        />
    )
};

export default ProductPageContainer;