import React from 'react';
import CardComponent from "./CardComponent";

function CardContainer(props){

    const{
        title, 
        description,
        productId,
        handleOnClick
    } = props;
    

    return (
      <CardComponent 
        title={title} 
        productId={productId}
        description={description}  
        handleOnClick={handleOnClick}
      />
    )
  };
  
export default CardContainer;