  import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoriesReducer from './reducers/categories.js';
import productsReducer from'./reducers/products.js';
import cartReducer from './reducers/cart'

const reducers = combineReducers({products: productsReducer, categories: categoriesReducer , cart: cartReducer})

const store = () =>{
  return createStore(reducers, composeWithDevTools());
}

export default store;