import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://spotinder-shenkar.herokuapp.com/";

const register = (_user, _isPaid) => {
  return axios.post(API_URL + "signup", {
    user: _user,
    isPaid: _isPaid,
  })
  .then((response) => {
    console.log(response);
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
};

const spotifyRegister = (_user) => {
  return axios.get(API_URL + "spotify/login/" + _user._id, {
    processData: false,
    contentType: false,
    headers: authHeader()
  })
}
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  spotifyRegister,
};
