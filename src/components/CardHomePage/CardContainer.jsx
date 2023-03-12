import React from 'react';
import CardComponent from "./CardComponent";

function CardContainer(props){
    const{
        product,
        handleOnClick
    } = props;

   /*  function addParamitersUrl(string){
      let urlSplitted = string.split('/');
      let url = urlSplitted[0]  + '//' +  urlSplitted[2] + '/' +  urlSplitted[3] + '/tr:w-200,h-200/' +  urlSplitted[4]
      console.log(url)
      return url;
    } */
    
    return (
      <CardComponent 
        product={product} 
        handleOnClick={handleOnClick}
      />
    )
  };
  
export default CardContainer;