import React from 'react';
import SidebarComponent from './SidebarComponent';
import { cleanShoppingCartState } from "../../redux/slices/shoppingCartSlice";
import { useDispatch } from "react-redux";
import { clearAddresses } from "../../redux/slices/addressSlice";
import { logOut } from "../../redux/slices/userSlice";
import { createAlert } from "../../redux/slices/alertSlice"
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function SidebarContainer({ isOpen, children, handleClose }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth);

    function handleOnLogout() {
        localStorage.clear();
        dispatch(cleanShoppingCartState());
        dispatch(clearAddresses());
        dispatch(
            createAlert({
                message: `Hasta la proxima! que tengas lindo dia  🤗`,
                type: "success"
            })
        );
        dispatch(logOut());
        handleClose()
    };

    function navigateToPath(path) {
        navigate(path, { state: { prevPath: location.pathname } });
        handleClose()
    }

    return (
        <SidebarComponent
            handleClose={handleClose}
            handleOnLogout={handleOnLogout}
            isOpen={isOpen}
            children={children}
            navigateToPath={navigateToPath}
            isAuth={isAuth}
        />
    )
}

export default SidebarContainer
