import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === actions.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push({ ...actions.payload, quantity: 1 });
      }

      state.total += actions.payload.price
    },

    removeSingle: (state, actions: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === actions.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== actions.payload._id
        );
      }
      state.total -= actions.payload.price

    },

    removeFromCart: (state, actions: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload._id
      );
      state.total -= actions.payload.price * actions.payload.quantity!;

    },
  },
});

export const { addToCart, removeFromCart, removeSingle } = cartSlice.actions;
export default cartSlice.reducer;
