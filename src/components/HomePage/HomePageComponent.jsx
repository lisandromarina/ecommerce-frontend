import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardHomePage from "./CardHomePage";
import Carousel from "./Carouseles";

function HomePageComponent(props) {

  const { arrayProducts } = props;

  return (
    //Div Padre
    <div>
      <Carousel />
      <Container>
        <div>
          <Row md={4} xs={2} className='d-flex'>
            {
              arrayProducts.map(product => (
                <CardHomePage title={product.name} description={product.description} />
              ))
            }
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default HomePageComponent;