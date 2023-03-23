import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    SELECT_PRODUCT,
} from '../../server/controller/actions/productAction';

const initialState = {
    products: [],
    selectedProduct: null,
    isLoading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: [...state.products, action.payload],
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case UPDATE_PRODUCT_SUCCESS:
            const updatedProductIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (updatedProductIndex === -1) {
                return state;
            }
            const updatedProducts = [...state.products];
            updatedProducts[updatedProductIndex] = {
                ...updatedProducts[updatedProductIndex],
                ...action.payload.updates,
            };
            return {
                ...state,
                isLoading: false,
                products: updatedProducts,
            };
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DELETE_PRODUCT_SUCCESS:
            const deletedProductIndex = state.products.findIndex(product => product.id === action.payload);
            if (deletedProductIndex === -1) {
                return state;
            }
            const deletedProducts = [...state.products];
            deletedProducts.splice(deletedProductIndex, 1);
            return {
                ...state,
                isLoading: false,
                products: deletedProducts,
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
