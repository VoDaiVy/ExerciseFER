import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className="text-center my-4">
            <Image src="https://source.unsplash.com/900x300/?pizza" fluid rounded />
            <h1 className="mt-3 text-white">Neapolitan Pizza</h1>
            <p className="text-white">If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </Container>
    );
};

export default Banner;
