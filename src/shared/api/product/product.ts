import axiosInstance from "../base";

export const getProduct = (id: string | undefined) => {
  return axiosInstance.get(`products/${id}`);
};
