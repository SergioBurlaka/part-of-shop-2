import { combineReducers } from 'redux';
import orders from './containers/Orders/reducer';
import products from './containers/Products/reducer';
import main from './main/reducer';

export default combineReducers({
  orders,
  products,
  main
})