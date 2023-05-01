import { logOut } from "../redux/slices/userSlice";
import { cleanShoppingCartState } from "../redux/slices/shoppingCartSlice";

export function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const validateTokenFromError = (err, dispatch) => { 
    if(err.response.status === 403){
        localStorage.clear();
        dispatch(cleanShoppingCartState());
        dispatch(logOut());
    }
}