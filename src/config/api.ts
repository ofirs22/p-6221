export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    USERS: '/users',
    LOGIN: '/users/login',
    REGISTER: '/users/register',
  }
};

//
