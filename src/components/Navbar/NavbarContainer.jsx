import React, { useState, handleOnChange } from 'react';
import NavbarComponent from "./NavbarComponent";

function NavbarContainer() {

    const [search, setSearch] = useState("");

    function handleOnChange(text) {
        setSearch(text)
    };
    function handleOnClick(){

    };

    return (
        <NavbarComponent
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
         />
    );
}
export default NavbarContainer;