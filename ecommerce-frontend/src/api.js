// src/api.js
import axios from "axios";

// Use the environment variable if available, otherwise fallback to localhost for dev
const BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL
});

export default api;