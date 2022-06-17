import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item interval={10000000}>
                <Image
                    height={250}
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/banner.jpg`}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Image
                    height={250}
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/banner2.jpg`}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    height={250}
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/banner3.jpg`}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselComponent;