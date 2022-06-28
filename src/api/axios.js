import axios from "axios";
import {
  authHeader
} from "./authHeader";

export function getAxios(){
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: authHeader(),
  });
}
