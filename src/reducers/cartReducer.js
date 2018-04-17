import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter( i => i.id !== action.item.id);
        case 'INCREMENT':
            state.filter(function (i) {
                if (i.id == action.item.id) {
                    i.quantity = i.quantity + 1;
                }
            })
            return [...state]
        case 'DECREMENT':
            if (!action.item.quantity) return [...state]
            state.filter(function (i) {
                if (i.id == action.item.id) {
                    i.quantity = i.quantity - 1;
                }
            })
            return [...state]
        default:
            return state;
    }
};