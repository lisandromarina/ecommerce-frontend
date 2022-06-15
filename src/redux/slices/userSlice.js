import { createSlice } from '@reduxjs/toolkit';
import api from "../../api/axios";
import { parseJwt } from "../../utils/tokenUtils";

const initialState = {
    user: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn: (state, actions) => { state.user.username = actions.payload }
    }
})

export const login = (user) => async (dispatch) => {
    try {
        const response = await api.post(
            `${process.env.PUBLIC_URL}/authentication/login`,
            user
        );
        window.sessionStorage.setItem("token", response.data.token);
    
        let tokenDecoded = parseJwt(response.data.token)
        dispatch(loggedIn(tokenDecoded.sub))

    } catch (err) {
        console.log(err);
    }
};

export const { loggedIn } = userSlice.actions
export default userSlice.reducer;