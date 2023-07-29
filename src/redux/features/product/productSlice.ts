import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },

    setPriceRange: (state, actions: PayloadAction<number>) => {
      state.priceRange = actions.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
