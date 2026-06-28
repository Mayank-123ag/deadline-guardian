import axios from "axios";

const API = axios.create({
    baseURL: "https://deadline-guardian-api-477837174358.asia-south1.run.app"
});

export default API;