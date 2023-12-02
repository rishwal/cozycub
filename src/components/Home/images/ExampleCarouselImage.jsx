import React from 'react';
import image from './Cozy Cub.png'
import img2 from './cozy-cub-3.png'
import img3 from './cozy-cub-2.jpg'

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


