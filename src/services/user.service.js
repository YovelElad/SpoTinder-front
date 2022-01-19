import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8888/";

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

const getUserFree = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getUserPaid = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getAdminBoard,
    getPotentialMatches,
    updateMatch,
    getUser,
};
