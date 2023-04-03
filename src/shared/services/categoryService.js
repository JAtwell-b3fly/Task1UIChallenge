import api from '../api';

export const categoryService = {
    async getAllCategories() {
        try {
            const response = await api.get('/categories');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    async getCategoryById(id) {
        try {
            const response = await api.get(`/categories/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    async createCategory(category) {
        try {
            const response = await api.post('/categories', category);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    async updateCategory(id, category) {
        try {
            const response = await api.put(`/categories/${id}`, category);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    async deleteCategory(id) {
        try {
            const response = await api.delete(`/categories/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
};
