import { createSlice } from '@reduxjs/toolkit';

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
        cleanShoppingCartState: (state) => state = { ...state, ...initialState }
    }
})

export const { setShoppingCart, cleanShoppingCartState } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer;