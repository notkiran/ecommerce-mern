import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFecthing: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFecthing = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFecthing = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFecthing = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFecthing = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFecthing = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFecthing = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
