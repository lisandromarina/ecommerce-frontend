import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./slices/userSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import productSlice from './slices/productSlice';
import categorySlice from './slices/categorySlice';

export default configureStore({
  reducer: {
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    products: productSlice,
    category: categorySlice
  }
})