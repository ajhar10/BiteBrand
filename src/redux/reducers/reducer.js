
const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case "DLT_CART":
            const remainItem = state.carts.filter(item => item.id !== action.payload)
            return {
                ...state,
                carts: remainItem

            }
        default:
            return state
    }
}