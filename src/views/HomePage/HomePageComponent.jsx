import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia';
import CardHomePage from "../../components/CardHomePage";
import Carousel from "../../components/Carouseles";

function HomePageComponent(props) {

  const { arrayProducts, handleOnClick, handleOnClickCategory } = props;

  return (
    <div>
      <Carousel />
      <Image
        className='pt-5'
        fluid={true}
        width={"100%"}
        src={`${process.env.PUBLIC_URL}/assets/miniBanner.jpeg`}
      />
      <Container>
        <div className='d-flex justify-content-center'>
          <Row md={3} xs={2} className='d-flex align-item-around' >
            <Image
              role="button"
              onClick={handleOnClickCategory}
              className='pt-5'
              fluid={true}
              value="Technologia"
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category1.png`}
            />
            <Image
              role="button"
              onClick={()=> console.log("Hogar y Muebles")}
              className='pt-5'
              fluid={true}
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category2.png`}
            />
            <Image
              role="button"
              onClick={()=> console.log("Ropa y Accesorios")}
              className='pt-5'
              fluid={true}
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category3.png`}
            />
          </Row>
        </div>
        <div className='pt-5 pb-5'>
          <h2 className='text-center' style={{ color: "#e77800", fontFamily: "cursive" }}>DESTACADOS</h2>
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
      <SocialMedia />
    </div>
  )
};

export default HomePageComponent;