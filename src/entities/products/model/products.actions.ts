import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./../../../shared/api/products/products";
// import { ErrorType, RejectedDataType } from "../../../shared/types/errorTypes";
// import { IProduct } from "../../../shared/constants/interfaces";

export const GET_PRODUCTS_LIST = "/GET_PRODUCTS_LIST";

// interface ResponseType {
//   readonly data: IProduct[];
// }

export const fetchProductsList = createAsyncThunk(
  GET_PRODUCTS_LIST,
  async () => {
    const response = await getProducts();
    return response;
  }
);
