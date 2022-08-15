import { getAxios } from "../../api/axios";
import { setAllProducts, setProductSelected } from "../slices/productSlice";

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

export const fetchAllProductsByCategory = (categoryId) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/product/findProductByIdCategory/${categoryId}`
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

export const saveProduct = (product) => async (dispatch) => {
    try {
        console.log("guardando")
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/product/save`, product
        );
        console.log(response)
        // dispatch(setProductSelected({
        //     productSelected: response.data
        // }))


    } catch (err) {
        console.log(err);
    }
};