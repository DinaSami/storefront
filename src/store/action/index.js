export function switchProducts(name) {
  return {
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}

export function switchCategory(name, description) {
  return {
    type: "SWITCH_ACTIVE_CATEGORY",
    payload: { name, description }
  }
}

export function switchCart(name) {
  return {
    type: "ADD_CART",
    payload: { name }
  }
}

export function deleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload
  }
}

export const getCategories = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const raw = await fetch('https://api-js401.herokuapp.com/api/v1/categories');

    const results = await raw.json();

    dispatch(getActionCategories(results.results));
  };
};

export const getActionCategories = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};

export const getProducts = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const raw = await fetch('https://api-js401.herokuapp.com/api/v1/products');

    const results = await raw.json();

    dispatch(getActionProducts(results.results));
  };
};

export const getActionProducts = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  };
};

