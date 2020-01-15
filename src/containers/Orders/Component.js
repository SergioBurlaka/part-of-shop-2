import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './Orders.scss';
import moment from 'moment';



class Orders extends Component {
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

    const {orders} = this.props

    console.log("orders", orders)


    return (
      <div className="discovery-section">
         Orders

         <div className="tabs">
              {orders.map((item, index) => {
                return (
                  <div
                    className={`tab ${item.isSelected ? '' : ''}`}
                    onClick={() => {
                      // this.checkCurrentRadio(item.value, index)

                      console.log(" hello", item.title)
                    }}
                    key={index}>
                   
                    <div className="selected">
                      {item.title}
                    </div>
                    <div className="selected">
                      {moment(item.date).format("MM")+"/12" }
                    </div>
                    <div className="selected">
                      {moment(item.date).format("DD/MMM/YY") }
                    </div>
                  </div>
                )

              })
              }
            </div>
         
      </div>
    )
  }
}

Orders.propTypes = {
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


export default Orders;