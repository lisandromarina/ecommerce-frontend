import { createSlice } from '@reduxjs/toolkit';
import api from "../../api/axios";

const initialState = {
    allProducts: [],
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts: (state, actions) => state = {
            ...state, ...actions.payload
        },
    }
})

export const fetchAllProducts = () => async (dispatch) => {
    try {

        const response = await api.get(
            `${process.env.PUBLIC_URL}/product/findAll`
        );

        dispatch(setProducts({
            allProducts: response.data
        }))

    } catch (err) {
        console.log(err);
    }
};

export const { setProducts } = productSlice.actions
export default productSlice.reducer;