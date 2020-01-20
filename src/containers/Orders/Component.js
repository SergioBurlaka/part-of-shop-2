import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './Orders.scss';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faChevronRight, faBoxOpen } from '@fortawesome/free-solid-svg-icons';


class Orders extends Component {
  state = {
    curentProducts: [],
    showColection: false,
    selectedOrder: null
  };

  componentDidMount() {

  }


  componentWillMount() {
   
  }



  componentWillUnmount() {
  }

  componentWillReceiveProps(next) {
   
  }

  setproductsToShow = (currentOrder) => {
    const {products} = this.props
    let colection = currentOrder.products;

    
    console.log("setproductsToShow products ", products)
    console.log("setproductsToShow colection", colection)


    let newProducts = []
    colection.forEach( (item, index) =>{
      console.log("item", item.id)

       let currentProducts = products.filter( (itemProduct, index) =>{ 
        return  item.id === itemProduct.id
      })

      newProducts = [...newProducts, ...currentProducts]
    })

    console.log("newProducts", newProducts)

    this.setState({
      curentProducts: newProducts, 
      showColection: true,
      selectedOrder: currentOrder 
    })

  };





  render() {

    const {orders} = this.props
    const {curentProducts, selectedOrder} = this.state

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
                      this.setproductsToShow(item)

                      console.log(" hello", item.title)
                    }}
                    key={index}>
                   
                    <div className="icon-section">
                      <FontAwesomeIcon icon={faListUl} /> 
                    </div>
                    <div className="product-section">
                      <div className="selected">
                        {item.title}
                      </div>
                      <div className="selected">
                        <span className="title">Products </span>
                        <span className="value">{item.products.length} </span>
                      </div>
                    </div>
                    <div className="data-section">
                      <div className="short">
                        {moment(item.date).format("MM")+"/12" }
                      </div>
                      <div className="selected">
                        {moment(item.date).format("DD/MMM/YY") }
                      </div>
                    </div>
                    <div className="arrow-section">
                      <FontAwesomeIcon icon={faChevronRight} /> 
                    </div>
                   
                   
                  
                  </div>
                )

              })
              }
            </div>
         <div className="products-section"> 
         
         {selectedOrder && selectedOrder.title}
          {curentProducts.map((item, index) => { 
            // console.log("products item", item)
                  return (
                    <div className="products-card"   key={index}>
                      <FontAwesomeIcon className="icon-card" icon={faBoxOpen} /> 
                      {item.title}
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