import api from '../api';

export const getProductList = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
export const addProduct = (productData) => api.post('/products', productData);
export const updateProduct = (id, updatedProductData) => api.put(`/products/${id}`, updatedProductData);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
