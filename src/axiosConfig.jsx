import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:7590/api",
  baseURL: "https://api.carmelmishel.com/api",
});

export default instance;
