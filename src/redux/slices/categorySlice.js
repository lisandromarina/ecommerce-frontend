import { createSlice } from '@reduxjs/toolkit';
import { getAxios } from "../../api/axios";

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

export const fetchAllCategory = () => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/category/findAll`
        )
        console.log(response.data)
        dispatch((setAllCategory(response.data)));

    } catch (err) {
        console.log(err);
    }
};

export const { setAllCategory } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer;