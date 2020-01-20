import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Clock extends React.Component {

  timerInterval = null;

  state = {
    time: '00:00:00'
  };

  componentDidMount() {
    const {time} = this.props;

    if (!this.timerInterval && time){
      this.setState({time: time}, () => {
        this.date()
      })
    }
  }



  componentWillUnmount() {
    if (this.timerInterval) clearInterval(this.timerInterval)
  }

  date = () => {
    if (this.timerInterval) clearInterval(this.timerInterval)
    this.timerInterval = setInterval(() => {
      const {time} = this.state;
      this.setState({time: moment(time, 'HH:mm:ss').add(1, 'second').format('HH:mm:ss')})
    }, 1000)
  };

  render() {
    const {time} = this.state;
    return (
      <span>
        {time}
      </span>
    )
  }
}

Clock.propTypes = {
  time: PropTypes.string,
};

export default Clock;