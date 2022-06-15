import axios from "axios";
import {
  authHeader
} from "./authHeader";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: authHeader(),
});

export default clienteAxios;