import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.26.150.185:3000/api/',
});