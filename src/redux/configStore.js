import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./slices/userSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    shoppingCart: shoppingCartSlice
  }
})