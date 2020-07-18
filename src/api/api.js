import axios from "axios";

const ErrorCodes = {
  UNAUTHORIZED: 401,
};

const TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {
    const {response} = error;
    if (response.status === ErrorCodes.UNAUTHORIZED) {
      onUnauthorized(error);
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

