import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, saveComment } from "../../redux/actions/productAction";
import { addCartProduct, fetchShoppingCart } from "../../redux/actions/shoppingCartAction";
import useCounter from '../../hook/useCounter';
import useFormState from '../../hook/useFormState';

function ProductPageContainer() {
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(true)
        await dispatch(fetchProductById(idProduct));
        setIsLoading(false)
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
            handleChange={handleChange}
            isAuth={isAuth}
            isLoading={isLoading}
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