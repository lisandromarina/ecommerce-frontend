import { getAxios } from "../../api/axios";
import { parseJwt } from "../../utils/tokenUtils";
import { setIsAuth, setUserState } from "../slices/userSlice";

//this is an asyncrhonos action, but it doesn`t modify the satate, but it calls loggedIn to modify the state
export const login = (user) => async (dispatch) => {
    console.log(user)
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/authentication/login`,
            user
        );
        window.localStorage.setItem("token", response.data.token);
        let tokenDecoded = parseJwt(response.data.token);
        console.log(response.data.token)
        dispatch(setIsAuth(true))
        dispatch(setUserState({ id: tokenDecoded.userId, username: tokenDecoded.sub }));
        return tokenDecoded.userId
    } catch (err) {
        console.log(err);
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
        return response;
    } catch (err) {
        console.log(err);
    }
};
