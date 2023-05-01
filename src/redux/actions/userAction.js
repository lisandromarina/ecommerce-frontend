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
        console.log(response.data.token)
        console.log(tokenDecoded)
        dispatch(setIsAuth(true))
        dispatch(setUserState({ id: tokenDecoded.userId, username: tokenDecoded.sub }));
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
        window.localStorage.setItem("token", response.data.token);

        let tokenDecoded = parseJwt(response.data.token);
        dispatch(setUserState({ id: tokenDecoded.userId }));
        dispatch(setIsAuth(true));
        dispatch(
            createAlert({
                message: `Te damos la bienvenida ${tokenDecoded.sub} 🤗`,
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
        console.log(err)
        console.log('error')
        validateTokenFromError(err, dispatch)

        dispatch(
            createAlert({
                message: `Algo salio mal! intentalo de nuevo`,
                type: "error"
            })
        );
    }
};
