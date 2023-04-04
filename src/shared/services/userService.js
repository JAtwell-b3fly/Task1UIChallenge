import api from '../api';

export const userService = {
    login: async (email, password) => {
        try {
            const response = await api.post('/login', { email, password });
            const { token } = response.data;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return token;
        } catch (error) {
            throw error;
        }
    },
    register: async (name, email, password) => {
        try {
            const response = await api.post('/register', { name, email, password });
            const { token } = response.data;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return token;
        } catch (error) {
            throw error;
        }
    },
    logout: () => {
        api.defaults.headers.common['Authorization'] = '';
    },
    getCurrentUser: async () => {
        try {
            const response = await api.get('/users/me');
            const user = response.data;
            return user;
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (data) => {
        try {
            const response = await api.put('/users/me', data);
            const user = response.data;
            return user;
        } catch (error) {
            throw error;
        }
    },
};
