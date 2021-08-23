import { FormatIndentDecrease } from "@material-ui/icons";

let initialState = {
    cart: [],
    initialCount: 0
}

let newInitialCount;
let addedCart;
let decrease;

export default function cartReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "ADD_CART":
            payload.count++;
            payload.inventory--;
            newInitialCount = state.initialCount + 1;
            if (!state.cart.includes(payload)) {
                addedCart = [...state.cart, payload];
            } else {
                addedCart = [...state.cart]
            }
            return { cart: addedCart, initialCount: newInitialCount };

        case "DELETE_CART":
            // console.log('payload.count',payload.count);
            payload.count--;
            payload.inventory++;
            if (payload.count == 0) {
                decrease = state.cart.filter((p) => p !== payload);
            }else{
                console.log('decrease',decrease);
                decrease = [...state.cart]
            }
            newInitialCount = state.initialCount - 1;
            return { cart: decrease, initialCount: newInitialCount };

        default: return state;
    }
}