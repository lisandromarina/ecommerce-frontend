import { getAxios } from "../../api/axios";
import { parseJwt } from "../../utils/tokenUtils";
import { setIsAuth, setUserState } from "../slices/userSlice";
import { validateTokenFromError } from "../../utils/tokenUtils";
import { createAlert } from "../slices/alertSlice";

export const login = (user) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/authentication/login`,
            user
        );
        window.localStorage.setItem("token", response.data.token);
        let tokenDecoded = parseJwt(response.data.token);
        dispatch(setIsAuth(true))
        dispatch(findUserById(tokenDecoded.userId))
        dispatch(
            createAlert({
                message: `Te damos la bienvenida ${tokenDecoded.sub} 🤗`,
                type: "success"
            })
        );
        return tokenDecoded.userId
    } catch (err) {
        console.log(err)
        dispatch(
            createAlert({
                message: "Usuario o contraseña incorrectos :(",
                type: "error"
            })
        );
    }
};

export const register = (user) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/authentication/register`,
            user
        );

        dispatch(
            createAlert({
                message: `Tu cuenta se creo correctamente! Revise su email para activar la cuenta`,
                type: "success"
            })
        );
        return response;
    } catch (err) {
        dispatch(
            createAlert({
                message: `Algo salio mal! intentalo de nuevo`,
                type: "error"
            })
        );
    }
};

export const validateToken = (token) => async (dispatch) => {
    try {

        console.log('validate')
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/authentication/validate`,
            token.toString()
        );
        return response;

    } catch (err) {
        validateTokenFromError(err, dispatch)

        dispatch(
            createAlert({
                message: `Algo salio mal! intentalo de nuevo`,
                type: "error"
            })
        );
    }
};

export const findUserById = (id) => async (dispatch) => {
    console.log(id)
    try {
        const response = await getAxios().get(
            `${process.env.PUBLIC_URL}/user/findById/${id}`
        );
        dispatch(setUserState(response.data));
        return response;
    } catch (err) {
        dispatch(
            createAlert({
                message: `Algo salio mal! intentalo de nuevo`,
                type: "error"
            })
        );
    }
};
