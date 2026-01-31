import API from "./api";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);
};

export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  localStorage.setItem("token", res.data.token);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => !!localStorage.getItem("token");
