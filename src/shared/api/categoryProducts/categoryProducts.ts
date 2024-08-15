import axiosInstance from "../base";

export const getCategoryProducts = (filterValue: string) => {
  return axiosInstance.get(`products/category/${filterValue}`);
};
