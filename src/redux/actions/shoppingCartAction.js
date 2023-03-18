import { getAxios } from "../../api/axios";
import { setShoppingCart } from "../slices/shoppingCartSlice";
import { createAlert } from "../slices/alertSlice"

export const fetchShoppingCart = (userId) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/shoppingCart/findByUserId/${userId}`
        );

        dispatch(setShoppingCart({
            id: response.data.id,
            dateCreated: response.data.dateCreated,
            cartProducts: response.data.shoppingCartProductsDTO
        }))

    } catch (err) {
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
        console.log(cartProduct)
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
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const updateCartProduct = (cartProduct) => async (dispatch) => {
    try {
        console.log(cartProduct)
        await getAxios().post(
            `${process.env.PUBLIC_URL}/shoppingCartProduct/create`,
            cartProduct
        )

    } catch (err) {
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
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};