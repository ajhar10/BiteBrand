
const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const itemIndex = state.carts.findIndex(item => item.id == action.payload.id);
            

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } 
            else {
                const temp = { ...action.payload, qnty: 1 }
                console.log(temp);
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
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