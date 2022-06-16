import { createSlice } from '@reduxjs/toolkit';
import api from "../../api/axios";
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
        loggedIn: (state, actions) => { state.user.username = actions.payload },
        logOut: (state) => { state.user = {} }
    }
})

//this is an asyncrhonos action, but it doesn`t modify the satate, but it calls loggedIn to modify the state
export const login = (user) => async (dispatch) => {
    try {
        const response = await api.post(
            `${process.env.PUBLIC_URL}/authentication/login`,
            user
        );
        window.localStorage.setItem("token", response.data.token);

        let tokenDecoded = parseJwt(response.data.token)
        dispatch(loggedIn(tokenDecoded.sub))

    } catch (err) {
        console.log(err);
    }
};

export const { loggedIn, logOut } = userSlice.actions
export default userSlice.reducer;