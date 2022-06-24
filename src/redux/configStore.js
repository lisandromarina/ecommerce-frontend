import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./slices/userSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import productSlice from './slices/productSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    products: productSlice
  }
})