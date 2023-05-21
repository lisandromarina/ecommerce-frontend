import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./slices/userSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import productSlice from './slices/productSlice';
import categorySlice from './slices/categorySlice';
import alertSlice from './slices/alertSlice';
import addressSlice from './slices/addressSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    products: productSlice,
    category: categorySlice,
    notification: alertSlice,
    address: addressSlice
  }
})