import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART
} from '../constants/actionTypes';

const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if the item is already in the cart
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                // If the item is already in the cart, update the quantity
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
                return { ...state, cartItems: updatedCartItems };
            } else {
                // If the item is not in the cart, add it
                return { ...state, cartItems: [...state.cartItems, action.payload] };
            }
        case REMOVE_FROM_CART:
            // Remove the item from the cart
            const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload);
            return { ...state, cartItems: filteredCartItems };
        case UPDATE_CART_QUANTITY:
            // Update the quantity of an item in the cart
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[itemIndex].quantity = action.payload.quantity;
                return { ...state, cartItems: updatedCartItems };
            } else {
                return state;
            }
        case CLEAR_CART:
            // Clear the cart
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};

export default cartReducer;
