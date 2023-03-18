import { getAxios } from "../../api/axios";
import { setAllCategory } from "../slices/categorySlice";
import { createAlert } from "../slices/alertSlice"

export const fetchAllCategory = () => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/category/findAll`
        )
        dispatch((setAllCategory(response.data)));

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const fetchCategoryByName = () => async (dispatch) => {
    try {
        
        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/category/findAll`
        )
        dispatch((setAllCategory(response.data)));

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};