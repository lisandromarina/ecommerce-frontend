import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts: [],
    productSelected: {}
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setAllProducts: (state, actions) => state = {
            ...state, ...actions.payload
        },
        setProductSelected: (state, actions) => state = {
            ...state, ...actions.payload
        },
    }
})

export const { setAllProducts, setProductSelected } = productSlice.actions
export default productSlice.reducer;