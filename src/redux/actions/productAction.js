import { getAxios } from "../../api/axios";
import { setAllProducts, setProductSelected } from "../slices/productSlice";
import { createAlert } from "../slices/alertSlice"

export const fetchAllProducts = () => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/product/findAll`
        );

        dispatch(setAllProducts({
            allProducts: response.data
        }))

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
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
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
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
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const saveProduct = (product) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/product/save`, product
        );
        console.log(response)
        // dispatch(setProductSelected({
        //     productSelected: response.data
        // }))
        dispatch(
            createAlert({
                message: `Genial! Ya guardamos tu producto!`,
                type: "success"
            })
        );

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const saveComment = (comment) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/comment/save`, comment
        );
        console.log(response)
      
        dispatch(
            createAlert({
                message: `Genial! Ya guardamos tu Comentario!!`,
                type: "success"
            })
        );

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};


export const fetchOptionsForSearchTool = (searchToolText) => async (dispatch) => {
    console.log(searchToolText)
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/product/findProductListBySearchTool`, searchToolText,
            { headers: { 'Content-Type': 'text/plain' } }  
        );
        return response;

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};