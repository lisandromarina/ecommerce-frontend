import React from 'react';
import CardComponent from "./CardComponent";

function CardContainer(props){

    const{
        title, 
        description,
    } = props;
    

    return (
      <CardComponent title={title} description={description} />
    )
  };
  
export default CardContainer;