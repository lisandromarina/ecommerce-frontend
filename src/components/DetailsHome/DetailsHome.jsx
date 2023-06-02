import React from 'react';
import { Image } from 'react-bootstrap';
import './DetailsHomeStyles.scss';

function DetailsHome(props) {
    const {
        title,
        subtitle,
        src,
        height
    } = props;
    return (
        <div className='details-home-container'>
            <Image
                height={height}
                src={src}
            />
            <div className='detail-text'>
                <p className='title'>{title}</p>
                <p className='subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default DetailsHome
