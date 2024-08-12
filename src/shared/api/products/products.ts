import axiosInstance from "../base";

export const getProducts = (sortValue: string) => {
  return axiosInstance.get(`products/?sort=${sortValue}`);
};
