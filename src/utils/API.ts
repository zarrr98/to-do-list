import axios from "axios";
const baseURL = "http://localhost:5000/";

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

export const getAllTasks = () => {
  return apiCall
    .get(`/tasks`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteTask = (id: string) => {
  return apiCall
    .delete(`/tasks/${id}`)
    .then((res) => res)
    .catch((err) => err);
};
