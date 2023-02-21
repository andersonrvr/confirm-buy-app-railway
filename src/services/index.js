import axios from "axios";

const api = axios.create({
  baseURL: "https://expressjs-postgres-production-7a6e.up.railway.app",
});

export default api;
