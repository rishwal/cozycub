import React from 'react';
import image from './banner-2.png'
import img2 from './blue fun cute baby fashion banner lanscape.png'
import img3 from './Blue and White Illustration Playful Diapers Baby Promotion Banner.png'

export const ExampleCarouselImage1 = () => {
    return (
        <img
            className="d-block w-100"
            src={image} // Use the imported image here

            style={{ maxHeight: '100vh' }}
        />
    );
};

export const ExampleCarouselImage2 = () => {
    return (
        <img
            className="d-block w-100"
            src={img2} 

            style={{ maxHeight: '100vh' }}
        />
    );
};
export const ExampleCarouselImage3 = () => {
    return (
        <img
            className="d-block w-100"
            src={img3} 

            style={{ maxHeight: '100vh' }}
        />
    );
};


