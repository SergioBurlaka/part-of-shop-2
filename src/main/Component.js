import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route} from 'react-router-dom';
import rc from '../rootRoutes/routes';
import Orders from '../containers/Orders';
import Products from '../containers/Products';
import Navigation from '../containers/Navigation';
import TopMenu from '../containers/TopMenu';
import "./ControlPanel.scss";



class ControlPanel extends React.Component {

  componentDidUpdate() {
   
  }

  componentWillReceiveProps(nextProps) {
   
  }

  render() {


    return (
      <div >
        
            <TopMenu/>
          <div className="control-panel">
            <Navigation/>
            <Switch>
                <Route component={Orders} path={rc.orders}/>
                <Route component={Products} path={rc.products}/>
            </Switch>
          </div>
      </div>
    )
  }
}

ControlPanel.propTypes = {
  inProcess: PropTypes.bool,
  getDevicesInfo: PropTypes.func
};

export default ControlPanel;