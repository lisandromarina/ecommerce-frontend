import { createSlice } from '@reduxjs/toolkit';

//here is the state of this reducer (now it is slice)
const initialState = {
    user: {},
    isAuth: false
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
        logOut: (state) => state = {
            ...state,
            user: {}, 
            isAuth: false
        },
        setIsAuth: (state, actions) => { state.isAuth = actions.payload }
    }
})

export const { setUserState, logOut, setIsAuth } = userSlice.actions
export default userSlice.reducer;