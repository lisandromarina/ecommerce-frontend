import { getAxios } from "../../api/axios";
import { setAddresses, clearAddresses } from "../slices/addressSlice";
import { createAlert } from "../slices/alertSlice"

export const fetchAllAddressByUserId = (userId) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/address/findAllByUserId/${userId}`
        );
        dispatch(setAddresses(response.data))

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};

export const selectAddress = (addressId, userId) => async (dispatch) => {
    try {
        await getAxios().put(
            `${process.env.PUBLIC_URL}/address/selectAddress/${addressId}/${userId}`
        );
        dispatch(clearAddresses())

    } catch (err) {
        dispatch(
            createAlert({
                message: `Upss, algo salio mal!`,
                type: "error"
            })
        );
    }
};
