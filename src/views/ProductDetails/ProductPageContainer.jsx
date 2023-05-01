import React, { useState, useEffect } from 'react';
import ProductPageComponent from "./ProductPageComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, saveComment } from "../../redux/actions/productAction";
import { addCartProduct, fetchShoppingCart } from "../../redux/actions/shoppingCartAction";

function ProductPageContainer() {
    const isAuth = useSelector(state => state.user.isAuth)
    const [quantity, setQuantity] = useState(1);
    const [newComment, setNewComment] = useState('')
    const productSelected = useSelector(state => state.products.productSelected);
    const userState = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    let { idProduct } = useParams();

    function fetchProduct() {
        dispatch(fetchProductById(idProduct));
    }

    function handleOnChangeComment(e) {
        setNewComment(e.target.value)
    }

    function handleOnClickCount(event) {
        if (event.target.value === "+") {
            setQuantity(quantity + 1);
        } else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
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
        /* //console.log(productSelected) */
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
            handleOnClickCount={handleOnClickCount}
            handleOnSaveComment={handleOnSaveComment}
            newComment={newComment}
            handleOnChangeComment={handleOnChangeComment}
        />
    )
};

export default ProductPageContainer;