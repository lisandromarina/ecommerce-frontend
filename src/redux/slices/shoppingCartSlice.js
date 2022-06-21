import { createSlice } from '@reduxjs/toolkit';
import api from "../../api/axios";

const initialState = {
    idShoppingCart: "",
    dateCreated: "",
    cartProducts: []
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        setShoppingCart: (state, actions) => state = {
            ...state, ...actions.payload
        }
    }
})

export const fetchShoppingCart = (shoppingCartId) => async (dispatch) => {
    try {
        
        const response = await api.get(
            `${process.env.PUBLIC_URL}/shoppingCart/findById/${shoppingCartId}`
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

export const { setShoppingCart } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer;