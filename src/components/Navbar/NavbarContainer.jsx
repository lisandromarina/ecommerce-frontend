import React, { useState, useEffect } from 'react';
import { logOut, setUserState } from "../../redux/slices/userSlice"
import NavbarComponent from "./NavbarComponent";
import { useSelector, useDispatch } from "react-redux";
import { parseJwt } from '../../utils/tokenUtils';

function NavbarContainer() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user.user)

    function handleOnChange(text) {
        setSearch(text)
    };

    function handleOnClick() {
        console.log(userState)
    };

    function handleOnLogout() {
        localStorage.clear();
        dispatch(logOut())
    };

    //the useEffect, when the user id changes, i reload the user if i have token
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token && !userState.usename){
            let tokenParsed = parseJwt(token)
            dispatch(setUserState({ id: tokenParsed.userId, username: tokenParsed.sub}))
        }
      }, [userState.id]);

    return (
        <NavbarComponent
            userState={userState}
            handleOnLogout={handleOnLogout}
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
        />
    );
}
export default NavbarContainer;