// api.js
// Working with backend

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // URL backend
});

export default API;
