import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoryProducts } from "../../../shared/api/categoryProducts";
// import { ErrorType, RejectedDataType } from "../../../shared/types/errorTypes";

export const GET_CATEGORY_PRODUCTS = "/GET_CATEGORY_PRODUCTS";

// interface ResponseType {
//   readonly data: IProduct[];
// }

export const fetchCategoryProducts = createAsyncThunk(
  GET_CATEGORY_PRODUCTS,
  async (filterValue: string) => {
    if (filterValue !== "all") {
      const response = await getCategoryProducts(filterValue);
      return response;
    }
  }
);
