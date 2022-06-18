import React, { useState, useEffect } from 'react';
import { logOut, loggedIn } from "../../redux/slices/userSlice"
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

    };

    function handleOnLogOut() {
        localStorage.clear();
        dispatch(logOut())
    };

    //the useEffect 
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token && !userState.usename){
            let tokenParsed = parseJwt(token)
            dispatch(loggedIn(tokenParsed.sub))
        }
      });

    return (
        <NavbarComponent
            userState={userState}
            handleOnLogOut={handleOnLogOut}
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
        />
    );
}
export default NavbarContainer;