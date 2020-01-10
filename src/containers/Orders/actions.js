
import at from './at';


const getTxMetalDelay = (sn) => {
  return (dispatch, getState) => {
    dispatch({type: at.SET_DISCOVERY_METAL_DELAY, data: 'set metal delay'})

  }
};





export {
  getTxMetalDelay,
 }