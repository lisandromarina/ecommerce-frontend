import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import CardHomePage from "./CardHomePage";
import Carousel from "./Carouseles";

function HomePageComponent(props) {

  const { arrayProducts, handleOnClick } = props;

  return (
    //Div Padre
    <div>
      <Carousel />
      <Image
        className='pt-5'
        fluid={true}
        width={"100%"}
        src={`${process.env.PUBLIC_URL}/assets/miniBanner.jpeg`}
      />
      <Container>
        <div className='pt-5 pb-5'>
          <h2 className='text-center' style={{color: "#e77800", fontFamily: "cursive"}}>DESTACADOS</h2>
          <Row md={4} xs={2} className='d-flex align-item-around' >
            {
              arrayProducts.map(product => (
                <CardHomePage
                  product={product}
                  handleOnClick={handleOnClick}
                />
              ))
            }
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default HomePageComponent;