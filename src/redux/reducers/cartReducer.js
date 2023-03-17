const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
            };
        case 'CALCULATE_TOTAL':
            const total = state.items.reduce(
                (accumulator, item) => accumulator + item.price * item.quantity,
                0
            );
            return {
                ...state,
                total,
            };
        default:
            return state;
    }
};

export default cartReducer;
