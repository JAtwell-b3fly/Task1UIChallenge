import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const authService = {
    register: async (name, surname, email, password) => {
        const response = await axios.post(API_URL + 'signup', {
            name,
            surname,
            email,
            password,
        });
        return response.data;
    },

    login: async (email, password) => {
        const response = await axios.post(API_URL + 'signin', {
            email,
            password,
        });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },

    isLoggedIn: () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user && user.accessToken;
    },
};

export default authService;
