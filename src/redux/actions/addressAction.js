import { getAxios } from "../../api/axios";
import { setAddresses, clearAddresses } from "../slices/addressSlice";
import { createAlert } from "../slices/alertSlice"

export const fetchAllAddressByUserId = (userId) => async (dispatch) => {
    try {

        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/address/findAllByUserId/${userId}`
        );
        dispatch(setAddresses(response.data))
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

export const saveAddress = (address) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/address/save/`, address
        );
        dispatch(clearAddresses())

        dispatch(
            createAlert({
                message: "Direccion creada correctamente!",
                type: "success"
            })
        );
        return response;

    } catch (err) {
        console.log()
        dispatch(
            createAlert({
                message: err.response.data.message,
                type: "error"
            })
        );
    }
};

export const editAddress = (address) => async (dispatch) => {
    try {
        const response = await getAxios().put(
            `${process.env.PUBLIC_URL}/address/update/`, address
        );
        dispatch(clearAddresses())
        console.log(address)
        dispatch(
            createAlert({
                message: "Direccion editada correctamente!",
                type: "success"
            })
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
