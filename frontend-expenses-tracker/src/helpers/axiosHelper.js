import axios from "axios";
const rootURL = "http://localhost:8000/api/v1";
const userAPI = rootURL + "/users";

export const postRegister = (formDt) => {
  try {
    return axios.post(userAPI, formDt);
  } catch (error) {
    const data = {
      status: "error",
      message: error.message,
    };
    return {
      data,
    };
  }
};
