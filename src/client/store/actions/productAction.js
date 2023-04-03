import { GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../constants/actionTypes';
import { getProductList, getProduct, addProduct, updateProduct, deleteProduct } from '../../services/productService';

// Get all products
export const getProducts = () => async (dispatch) => {
    try {
        const response = await getProductList();
        const products = response.data;
        dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
        console.log(error);
    }
};

// Get a single product by id
export const getProductById = (id) => async (dispatch) => {
    try {
        const response = await getProduct(id);
        const product = response.data;
        dispatch({ type: GET_PRODUCT, payload: product });
    } catch (error) {
        console.log(error);
    }
};

// Add a new product
export const addNewProduct = (productData) => async (dispatch) => {
    try {
        const response = await addProduct(productData);
        const newProduct = response.data;
        dispatch({ type: ADD_PRODUCT, payload: newProduct });
    } catch (error) {
        console.log(error);
    }
};

// Update an existing product by id
export const updateExistingProduct = (id, updatedProductData) => async (dispatch) => {
    try {
        const response = await updateProduct(id, updatedProductData);
        const updatedProduct = response.data;
        dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
    } catch (error) {
        console.log(error);
    }
};

// Delete a product by id
export const deleteProductById = (id) => async (dispatch) => {
    try {
        await deleteProduct(id);
        dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (error) {
        console.log(error);
    }
};
