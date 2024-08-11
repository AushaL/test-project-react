// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { APP_BASE_URL } from "../constants/url";

// class ApiInstance {
//   private axios: AxiosInstance;

//   constructor() {
//     this.axios = axios.create({
//       baseURL: APP_BASE_URL,
//       timeout: 120000,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }

//   async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
//     const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
//     return response.data;
//   }
// }

// export const apiInstance = new ApiInstance();

import { APP_BASE_URL } from "../constants/url";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: APP_BASE_URL,
  timeout: 120000,
});

export default axiosInstance;
