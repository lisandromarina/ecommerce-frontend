import { createSlice } from '@reduxjs/toolkit';
import { getAxios } from "../../api/axios";

const initialState = {
    idShoppingCart: "",
    dateCreated: "",
    cartProducts: [],
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        setShoppingCart: (state, actions) => state = {
            ...state, ...actions.payload
        },
    }
})

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
        console.log(err);
    }
};

export const updateCartProduct = (cartProduct) => async (dispatch) => {
    try {
        await getAxios().post(
            `${process.env.PUBLIC_URL}/shoppingCartProduct/create`,
            cartProduct
        )

    } catch (err) {
        console.log(err);
    }
};

export const { setShoppingCart } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer;