import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../../../shared/api/product";

export const GET_FULL_PRODUCT = "/GET_FULL_PRODUCT";

export const fetchFullProduct = createAsyncThunk(
  GET_FULL_PRODUCT,
  async (id: string | undefined) => {
    const response = await getProduct(id);
    return response;
  }
);
