import { GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes';

const initialState = {
    products: [],
    product: {},
    loading: false,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products],
                loading: false,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
                loading: false,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
                loading: false,
            };
        default:
            return state;
    }
}
