import { getAxios } from "../../api/axios";
import { setAllCategory } from "../slices/categorySlice";

export const fetchAllCategory = () => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/category/findAll`
        )
        dispatch((setAllCategory(response.data)));

    } catch (err) {
        console.log(err);
    }
};

export const fetchCategoryByName = () => async (dispatch) => {
    try {
        
        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/category/findAll`
        )
        dispatch((setAllCategory(response.data)));

    } catch (err) {
        console.log(err);
    }
};