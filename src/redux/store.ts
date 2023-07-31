import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';
import apiSlice from './features/api/apiSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
