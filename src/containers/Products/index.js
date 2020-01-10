import {connect} from 'react-redux';
import Component from './Component';
import {
  setProduct,
  } from "./actions";



const stp = (s) => ({
  
});


const dtp = (d) => ({

  setProduct: (sn) => {
    d(setProduct(sn))
  },
 

});


export default connect(stp, dtp)(Component);
