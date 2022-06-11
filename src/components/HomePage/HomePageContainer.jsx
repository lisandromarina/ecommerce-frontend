import React from 'react';
import HomePageComponent from "./HomePageComponent";

function HomePageContainer(){

  let arrayProducts = [
    {name: "Deportes", description:"Hace bien a la salud"},
    {name: "Comidas", description:"Cosas bien ricas para la panza"},
    {name: "Entretenimiento", description: "Cosas divertidas"},
    {name: "Música", description: "Musica para tus oidos"},
    {name: "Música", description: "Musica para tus oidos"},
    {name: "Música", description: "Musica para tus oidos"},
    {name: "Ropa", description: "Lookeate a la moda"}]

    return (
      <HomePageComponent arrayProducts={arrayProducts} />
    )
  };
  
export default HomePageContainer;