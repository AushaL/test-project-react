import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryProducts } from "./filter.actions";
import { IProduct } from "../../../shared/constants/interfaces";
import { RejectedDataType } from "../../../shared/types/errorTypes";

export interface ICategoryProducts {
  readonly filterValue: string;
  readonly items: IProduct[] | null;
  readonly loading: boolean;
  readonly error: RejectedDataType | null;
}

const initialState: ICategoryProducts = {
  filterValue: "all",
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

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.items = action?.payload?.data;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
