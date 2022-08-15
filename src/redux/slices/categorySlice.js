import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allCategory: []
}

export const shoppingCartSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setAllCategory: (state, actions) => {
            state.allCategory = [...state.allCategory, ...actions.payload]
        }
    }
})

export const { setAllCategory } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer;