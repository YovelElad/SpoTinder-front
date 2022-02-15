import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://spotinder-shenkar.herokuapp.com/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getPotentialMatches = (userID) => {
    return axios.get(API_URL + "users/" + userID + "/matches", { headers: authHeader() });
}

const updateMatch = (userID, matchID, updateData) => {
    return axios.put(API_URL + "users/" + userID + "/matches/" + matchID, updateData, { headers: authHeader() });
}

const getUser = (userID) => {
    return axios.get(API_URL + "users/" + userID, { headers: authHeader() });
}

const updateUser = (userID, userData) => {
  return axios.put(API_URL + "users/" + userID, userData, { headers: authHeader() });
}

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getAdminBoard,
    getPotentialMatches,
    updateMatch,
    getUser,
    updateUser,
};
