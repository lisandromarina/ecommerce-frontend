import React from 'react';
import CardComponent from "./CardComponent";

function CardContainer(props){

    const{
       product,
        handleOnClick
    } = props;
    
    return (
      <CardComponent 
        product={product} 
        handleOnClick={handleOnClick}
      />
    )
  };
  
export default CardContainer;