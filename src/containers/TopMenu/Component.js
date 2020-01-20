import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './TopMenu.scss';
import moment from 'moment';
import Clock from './Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';




class TopMenu extends Component {
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

    let time = moment().format('HH:mm:ss');
    let newTime = ''+time


    return (
      <section className="top-menu-wrapper">
        <div className="time-section">
          <div className="day">
            {moment().format('dddd')}
          </div>
          <div className="date-wrapper">
            <div className="date">
              {moment().format("DD MMM YYYY")}
            </div>
            <div className="time">
            <FontAwesomeIcon icon={faClock} /> <Clock time = {newTime}/>
            </div>
          </div>
        </div>         
      </section>
    )
  }
}

TopMenu.propTypes = {
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


export default TopMenu;