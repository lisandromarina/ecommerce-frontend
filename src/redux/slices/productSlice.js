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
        setCommentToProductSelected: (state, actions) => state = {
            ...state,
            productSelected: {
                ...state.productSelected, comments: actions.payload.comment
            } 
        }
    }
})

export const { setAllProducts, setProductSelected, setCommentToProductSelected } = productSlice.actions
export default productSlice.reducer;