import React from 'react';
import ProductCardComponent from "./ProductCardComponent";

function ProductCardContainer(props){
    const{
        product,
        handleOnClick
    } = props;
    
    return (
      <ProductCardComponent 
        product={product} 
        handleOnClick={handleOnClick}
      />
    )
  };
  
export default ProductCardContainer;