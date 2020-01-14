import {connect} from 'react-redux';
import Component from './Component';
import {
  getTxMetalDelay,
  } from "./actions";



const stp = (s) => ({
  orders: s.main.orders,
  products: s.main.products,
});


const dtp = (d) => ({

  getTxMetalDelay: (sn) => {
    d(getTxMetalDelay(sn))
  },
  

});


export default connect(stp, dtp)(Component);


