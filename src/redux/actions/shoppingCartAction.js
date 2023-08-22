import { getAxios } from "../../api/axios";
import { setShoppingCart } from "../slices/shoppingCartSlice";
import { createAlert } from "../slices/alertSlice";
import { validateTokenFromError } from "../../utils/tokenUtils";

export const fetchShoppingCart = (userId) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/shoppingCart/findByUserId/${userId}`
        );
        dispatch(setShoppingCart({
            id: response.data.id,
            dateCreated: response.data.dateCreated,
            cartProducts: response.data.shoppingCartProductsDTO,
            totalPrice: response.data.totalPrice
        }))
        
    } catch (err) {
        validateTokenFromError(err, dispatch)
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const addCartProduct = (cartProduct) => async (dispatch) => {
    try {
        await getAxios().post(
            `${process.env.PUBLIC_URL}/shoppingCartProduct/create`,
            cartProduct
        )

        dispatch(
            createAlert({
                message: `El producto ya esta en tu carrito!`,
                type: "success"
            })
        );

    } catch (err) {
        validateTokenFromError(err, dispatch)
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const updateCartProduct = (cartProduct, displayNotification = false) => async (dispatch) => {
    try {
        await getAxios().patch(
            `${process.env.PUBLIC_URL}/shoppingCartProduct/update`,
            cartProduct
        )

        if(displayNotification){
            dispatch(
                createAlert({
                    message: `El producto ya esta en tu carrito!`,
                    type: "success"
                })
            );
        }
    } catch (err) {
        validateTokenFromError(err, dispatch)
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const removeShoppingCartProduct = (shoppingCartId, productId) => async (dispatch) => {
    try {

        await getAxios().delete(
            `${process.env.PUBLIC_URL}/shoppingCartProduct/delete/${shoppingCartId}/${productId}`
        );

        dispatch(
            createAlert({
                message: `Chau! Producto removido del carrito!`,
                type: "success"
            })
        );

    } catch (err) {
        validateTokenFromError(err, dispatch)
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const checkout = (userId) => async (dispatch) => {
    try {
        const response =  await getAxios().get(
            `${process.env.PUBLIC_URL}/shoppingCart/checkout`
        );
        if(response.status === 200){
            dispatch(fetchShoppingCart(userId))
        }
        

        dispatch(
            createAlert({
                message: `Producto Comprado exitosamente!`,
                type: "success"
            })
        );

        return response;

    } catch (err) {
        validateTokenFromError(err, dispatch)
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};