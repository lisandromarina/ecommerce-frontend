import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia';
import Carousel from "../../components/Carouseles";
import ListProducts from '../../components/ListProducts';

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
              onClick={()=> handleOnClickCategory("Technologia")}
              className='pt-5'
              fluid={true}
              itemID="Technologia"
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category1.png`}
            />
            <Image
              role="button"
              onClick={()=> handleOnClickCategory("Hogar y Muebles")}
              className='pt-5'
              fluid={true}
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category2.png`}
            />
            <Image
              role="button"
              onClick={()=> handleOnClickCategory("Ropa y Accesorios")}
              className='pt-5'
              fluid={true}
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category3.png`}
            />
          </Row>
        </div>
        <ListProducts
          title={"DESTACADOS"}
          arrayProducts={arrayProducts}
          handleOnClick={handleOnClick}
        />
      </Container>
      <SocialMedia />
    </div>
  )
};

export default HomePageComponent;