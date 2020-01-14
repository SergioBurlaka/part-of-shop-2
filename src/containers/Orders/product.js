import React from 'react';



const product = (props) => {
  const {value, dragging, index, ...restProps} = props;
  return (
    <div
      key={index}
    >
    </div>
  );
};



export {product}