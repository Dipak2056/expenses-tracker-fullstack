import axios from "axios";
const rootURL = "http://localhost:8000/api/v1";
const userAPI = rootURL + "/users";
const loginApi = rootURL + "/users/login";
const expAPI = rootURL + "/expenses";

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
export const postLogin = (formDt) => {
  try {
    return axios.post(loginApi, formDt);
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
export const postExpenses = async (formData) => {
  try {
    const { data } = await axios.post(expAPI, formData);
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
