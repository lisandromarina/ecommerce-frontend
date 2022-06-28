import { createSlice } from '@reduxjs/toolkit';
import { getAxios } from "../../api/axios";
import { parseJwt } from "../../utils/tokenUtils";

//here is the state of this reducer (now it is slice)
const initialState = {
    user: {},
}

//here we set the name of the slice, after that we set the state, and after that
//the actions to modify the sate, for example loggedIn and logOut
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState: (state, actions) => {
            state.user = {
                ...state.user, ...actions.payload
            }
        },
        logOut: (state) => { state.user = {} }
    }
})

//this is an asyncrhonos action, but it doesn`t modify the satate, but it calls loggedIn to modify the state
export const login = (user) => async (dispatch) => {
    try {
        const response = await getAxios().post(
            `${process.env.PUBLIC_URL}/authentication/login`,
            user
        );
        window.localStorage.setItem("token", response.data.token);
        let tokenDecoded = parseJwt(response.data.token)
        console.log(response.data.token)
        dispatch(setUserState({ id: tokenDecoded.userId, username: tokenDecoded.sub }))

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

        let tokenDecoded = parseJwt(response.data.token)
        dispatch(setUserState({ id: tokenDecoded.userId }))

    } catch (err) {
        console.log(err);
    }
};

export const { setUserState, logOut } = userSlice.actions
export default userSlice.reducer;