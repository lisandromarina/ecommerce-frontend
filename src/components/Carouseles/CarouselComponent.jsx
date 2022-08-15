import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function CarouselComponent() {
    let INTERVAL_TIME = 10000;
    let IMAGE_HEIGHT = 350;

    return (
        <div className='fluid'>
            <Carousel>
                <Carousel.Item
                    interval={INTERVAL_TIME}
                    pause='hover'
                >
                    <Image
                        height={IMAGE_HEIGHT}
                        fluid={true}
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/assets/banner1.png`}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={INTERVAL_TIME}>
                    <Image
                        height={IMAGE_HEIGHT}
                        fluid={true}
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/assets/banner2.png`}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default CarouselComponent;