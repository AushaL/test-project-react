import { createSlice } from "@reduxjs/toolkit";

import { fetchProductsList } from "./products.actions";
import { IProduct } from "../../../shared/constants/interfaces";
import { RejectedDataType } from "../../../shared/types/errorTypes";

export interface IProducts {
  readonly items: IProduct[] | null;
  readonly loading: boolean;
  readonly error: RejectedDataType | null;
}

const initialState: IProducts = {
  items: [
    {
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
  ],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.loading = false;
        state.error = null;
      });
  },
});

export default productsSlice.reducer;
