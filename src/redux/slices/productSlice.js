import { createSlice } from '@reduxjs/toolkit';
import { getAxios } from "../../api/axios";

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

export const fetchAllProducts = () => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/product/findAll`
        );

        dispatch(setAllProducts({
            allProducts: response.data
        }))

    } catch (err) {
        console.log(err);
    }
};

export const fetchProductById = (idProduct) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/product/findById/${idProduct}`
        );

        dispatch(setProductSelected({
            productSelected: response.data
        }))


    } catch (err) {
        console.log(err);
    }
};

export const { setAllProducts, setProductSelected } = productSlice.actions
export default productSlice.reducer;