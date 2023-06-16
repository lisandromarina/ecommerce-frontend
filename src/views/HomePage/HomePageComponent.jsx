import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import Carousel from "../../components/Carouseles";
import ListProducts from '../../components/ListProducts';
import DetailsHome from '../../components/DetailsHome';
import './HomePageStyles.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


function HomePageComponent(props) {

  const { arrayProducts,
    handleOnClick,
    handleOnClickCategory,
    handleTouchStartInfo,
    infoMediaContainerRef,
    SocialMediaContainerRef,
    handleTouchStartSocialMedia,
  } = props;

  const facebookLogo =
    <div className="button" role="button" onClick={() => window.open("https://www.facebook.com/", "_blank")}>
      <div style={{ color: "#e77800", border: "solid", borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
        <FaFacebookF size={25} />
      </div>
    </div>

  const twitterLogo =
    <div className="button"
      role="button"
      onClick={() => window.open("https://www.instagram.com/leomessi/", "_blank")}
    >
      <div style={{ color: "#e77800", border: "solid", borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
        <FaInstagram size={25} />
      </div>
    </div>

  const instagramLogo = <div className="button"
    role="button"
    onClick={() => window.open("https://twitter.com/respectfulmemes", "_blank")}
  >
    <div style={{ color: "#e77800", border: "solid", borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
      <FaTwitter size={25} />
    </div>
  </div>

  return (
    <div className='home-page-main-container'>
      <Carousel />
      <div className='details-wrapper' id="scrollable-container" onTouchStart={handleTouchStartInfo} ref={infoMediaContainerRef}>
        <DetailsHome
          title={'ENVIO GRATIS'}
          subtitle={'a todo el Pais'}
          src={`${process.env.PUBLIC_URL}/assets/camion.png`}
        />
        <DetailsHome
          title={'3 A 12 CUOTAS SIN INTERES'}
          subtitle={'con tarjetas de credito'}
          src={`${process.env.PUBLIC_URL}/assets/tarjetealo.png`}
        />
        <DetailsHome
          title={'GARANTIA Y SEGURIDAD'}
          subtitle={'protegemos tus datos y tu compra'}
          src={`${process.env.PUBLIC_URL}/assets/seguridad.png`}
        />
      </div>
      <Container>
        <div className='d-flex justify-content-center'>
          <Row md={3} xs={2} className='d-flex align-item-around' >
            <Image
              role="button"
              onClick={() => handleOnClickCategory("Technologia")}
              className='pt-5'
              fluid={true}
              itemID="Technologia"
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category1.png`}
            />
            <Image
              role="button"
              onClick={() => handleOnClickCategory("Hogar y Muebles")}
              className='pt-5'
              fluid={true}
              width={"100%"}
              src={`${process.env.PUBLIC_URL}/assets/category2.png`}
            />
            <Image
              role="button"
              onClick={() => handleOnClickCategory("Ropa y Accesorios")}
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
      <div
        className='social-media-wrapper'
        id="scrollable-container"
        onTouchStart={handleTouchStartSocialMedia}
        ref={SocialMediaContainerRef}
      >
        <DetailsHome title={facebookLogo} />
        <DetailsHome title={twitterLogo} />
        <DetailsHome title={instagramLogo} />
      </div>
    </div>
  )
};

export default HomePageComponent;