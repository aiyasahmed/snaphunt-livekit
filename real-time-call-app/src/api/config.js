import axios from 'axios'

const API_URL = `http://localhost:3001/api`

const BASE_API = axios.create({
    baseURL: API_URL,
});

export default BASE_API;
