import { combineReducers } from 'redux';
import orders from './containers/Orders/reducer';
import products from './containers/Products/reducer';

export default combineReducers({
  orders,
  products,
})