import axios from 'axios';

// API Base URL
// - Development: leer lassen => CRA Proxy kann greifen (frontend/package.json "proxy")
// - Production: als Netlify/Vercel Env setzen (z.B. https://dein-backend.onrender.com)
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

// Axios-Instanz erstellen
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - fügt Token hinzu wenn vorhanden
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - behandelt Fehler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token ungültig - zur Login-Seite
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;











