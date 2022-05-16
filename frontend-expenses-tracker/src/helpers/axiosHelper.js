import axios from "axios";
const rootURL = "http://localhost:8000/api/v1";
const userAPI = rootURL + "/users";
const loginApi = rootURL + "/users/login";
const expAPI = rootURL + "/expenses";
// ======user apis

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
// ========expenses api
export const postExpense = async (formData) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.post(expAPI, formData, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
export const getExpense = async () => {
  console.log(sessionStorage.getItem("user"));
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.get(expAPI, {
      headers: {
        Authorization: user._id,
      },
    });
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
