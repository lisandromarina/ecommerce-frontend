import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardHomePage from "./CardHomePage"

function HomePageComponent(props) {

  const { arrayProducts } = props;

  return (
    //Div Padre
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
  )
};

export default HomePageComponent;