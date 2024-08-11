// import { IProducts } from "./../../../entities/products/constants/types";
// import { apiInstance } from "../base";
import axiosInstance from "../base";

// const BASE_URL = "products";

// export const getProducts = (): Promise<IProducts[]> => {
//   return apiInstance.get(`${BASE_URL}/`);
// };

export const getProducts = () => {
  return axiosInstance.get(`products/`);
};
