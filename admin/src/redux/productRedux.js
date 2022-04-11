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
    //UPDATE
    updateProductStart: (state) => {
      state.isFecthing = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFecthing = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFecthing = false;
      state.error = true;
    },
    //ADD
    addProductStart: (state) => {
      state.isFecthing = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFecthing = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
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
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
