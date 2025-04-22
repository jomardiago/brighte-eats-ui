import Axios, { InternalAxiosRequestConfig } from "axios";

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  return config;
}

export const axiosApi = Axios.create({
  // eslint-disable-next-line n/no-process-env
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosApi.interceptors.request.use(authRequestInterceptor);
