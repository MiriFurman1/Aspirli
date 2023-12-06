import axios from "axios";

const baseURL = import.meta.env.PROD
  ? "https://production-api.example.com"
  : "http://localhost:3000";

export default axios.create({
  baseURL: baseURL,
});
