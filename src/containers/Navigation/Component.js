import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import rc from '../../rootRoutes/routes';
import './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectInfo: null,
    }
  }

  componentWillReceiveProps() {
  }

  componentDidMount() {
  }



  render() {



    return (
      <section className="control-panel__nav">
          <div className="control-panel__nav-list">
              <NavLink to={rc.products} className="control-panel__nav-item">
                Products link
              </NavLink>
              <NavLink to={rc.orders} className="control-panel__nav-item">
                Orders link
              </NavLink>
            
            </div>
      </section>
    )
  }
}

Navigation.propTypes = {
  inProcess: PropTypes.bool,
  currentConnection: PropTypes.object,
  users: PropTypes.array,
};

export default Navigation;