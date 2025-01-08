import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Gantilah sesuai URL backend Laravel Anda
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Menambahkan interceptor untuk menyertakan token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
