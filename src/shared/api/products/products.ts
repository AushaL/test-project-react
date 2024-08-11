import axiosInstance from "../base";

export const getProducts = () => {
  return axiosInstance.get(`products/`);
};
