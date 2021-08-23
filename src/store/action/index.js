export function switchProducts(name) {
    return {
        type: "FILTER_PRODUCTS",
        payload: name,
    }
}

export function switchCategory(name) {
    return {
        type: "SWITCH_ACTIVE_CATEGORY",
        payload: name,
    }
}

export function switchCart(name) {
    return {
        type: "ADD_CART",
        payload: name,
    }
}

export function deleteCart(name) {
    return {
        type: "DELETE_CART",
        payload: name,
    }
}