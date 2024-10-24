import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
            }`;
    }
    return req;
});

export const signIn = (formData) => API.post("/api/auth/login", formData);
export const signUp = (formData) => API.post("/api/auth/register", formData);

export const loadUser = () => API.get("/api/v1/me");