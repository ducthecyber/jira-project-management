import { localService } from "../Services/localService";
import axios from "axios";
import { store } from "../Redux/store";
import { hideSpinner, showSpinner } from "../Redux/Action/action";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const CYBERSOFT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo";

// Create axios Instance
export const Services = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    TokenCybersoft: CYBERSOFT_TOKEN,
    // Khi dữ liệu là null hoặc undefined thì bị lỗi, để dấu ? để nếu là 2 giá trị thì sẽ k chạy code
    Authorization: "Bearer " + `${localService.getUserInfor()?.accessToken}`,
  },
});

Services.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(showSpinner());

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Services.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(hideSpinner());
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(hideSpinner());
    switch (error.response.status) {
      case 401:
      case 403: {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
