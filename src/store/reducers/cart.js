import { FormatIndentDecrease } from "@material-ui/icons";
import axios from "axios";

let initialState = {
    cart: [],
    initialCount: 0,
    // count:[{"_id":payload._id,"count":0}]
}

let newInitialCount;
let addedCart;
let decrease;

export default function cartReducer(state = initialState, action) {
    let { type, payload } = action;


    switch (type) {
        case "ADD_CART":
            newInitialCount = state.initialCount + 1;
            if (state.cart.length === 0) {
                payload.name.inStock = payload.name.inStock - 1;
                payload.name = { ...payload.name, 'count': 1 };
                addedCart = [...state.cart, payload.name];

            }
            else {
                payload.name.inStock = payload.name.inStock - 1;
                state.cart.map(e => {
                    if (e.name === payload.name.name) {
                        e.count = e.count + 1;
                        addedCart = [...state.cart]
                    }
                    else {
                        payload.name = { ...payload.name, 'count': 1 };
                        addedCart = [...state.cart, payload.name];
                       
                    }
                })
            }
            let data = {
                'inStock': payload.name.inStock
            }
            console.log('payload.name.inStock',payload.name.inStock);
            async function updateProduct() {
                await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${payload.name._id}`, data)
            }
            updateProduct();
            return { cart: addedCart, initialCount: newInitialCount };

        case "DELETE_CART":
            payload.count--;

            payload.inStock =  payload.inStock+1
            if (payload.count == 0) {
                // payload.inStock=  payload.inStock+1
                decrease = state.cart.filter((p) => p !== payload);
            } else {
                decrease = [...state.cart]
            }
            newInitialCount = state.initialCount - 1;
            let data1 = {
                'inStock': payload.inStock
            }
            console.log('payload.inStock++',payload);
            async function updateProductDelete() {
                await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`, data1)
            }
            updateProductDelete();
            return { cart: decrease, initialCount: newInitialCount };

        default: return state;
    }
}