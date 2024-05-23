import axios from "axios";
import { SERVER_HOST, SERVER_PORT } from "../environments";

const api = axios.create({
    baseURL: `http://${SERVER_HOST}:${SERVER_PORT}`
});

export default api;