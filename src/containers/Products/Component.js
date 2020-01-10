import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './Products.scss';



class Products extends Component {
  state = {
    sliderValue: 0,
    device: null,
    serialNumber: '',
    onDiscoveryTool: false,
    txDelay: 0,
    metalDelay: 0,
    metalDelayFirst: true,
    txDelayFirst: true,
    parsedScope: [],
    discoveryToolResponseNoParsed: ''
  };

  componentDidMount() {

  }


  componentWillMount() {
   
  }



  componentWillUnmount() {
  }

  componentWillReceiveProps(next) {
   
  }




  render() {


    return (
      <div className="discovery-section">
         Products
         
      </div>
    )
  }
}

Products.propTypes = {
  deviceConnected: PropTypes.bool,
  devicesData: PropTypes.array,
  device: PropTypes.object,
  discoveryToolResponse: PropTypes.object,
  discoveryTXDelay: PropTypes.object,
  discoveryMetalDelay: PropTypes.object,
  startTransmission: PropTypes.func,
  stopTransmission: PropTypes.func,
  getTxMetalDelay: PropTypes.func,
  setTxDelay: PropTypes.func,
  setMetalDelay: PropTypes.func,
};


export default Products;