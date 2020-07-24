import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";

export const ErrorCodes = {
  UNAUTHORIZED: 401,
};

const TIMEOUT = 5000;

export const createAPI = (onFail: (error: AxiosError) => void): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

