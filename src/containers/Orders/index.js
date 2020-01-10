import {connect} from 'react-redux';
import Component from './Component';
import {
  getTxMetalDelay,
  } from "./actions";



const stp = (s) => ({
  
});


const dtp = (d) => ({

  getTxMetalDelay: (sn) => {
    d(getTxMetalDelay(sn))
  },
  

});


export default connect(stp, dtp)(Component);
