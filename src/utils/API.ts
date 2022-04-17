import axios from "axios";
const baseURL = "https://snappshop.ir/";

const apiCall = axios.create({
  baseURL,
});

apiCall.interceptors.response.use(
  (successRes) => {
    return successRes.data || successRes;
  },
  (err) => {
    return Promise.reject(
      err.response !== undefined ? err.response.status : err
    );
  }
);
