// frontend/src/services/api.js
// Working with backend

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // URL backend
});

export default API;
