import { createSlice } from "@reduxjs/toolkit";

import { fetchFullProduct } from "./product.actions";
import { IProduct } from "../../../shared/constants/interfaces";
import { RejectedDataType } from "../../../shared/types/errorTypes";

export interface IProducts {
  readonly item: IProduct | null;
  readonly loading: boolean;
  readonly error: RejectedDataType | null;
}

const initialState: IProducts = {
  item: {
    id: 0,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFullProduct.fulfilled, (state, action) => {
        state.item = action.payload.data;
        state.loading = false;
        state.error = null;
      });
  },
});

export default productSlice.reducer;
