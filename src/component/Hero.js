import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import heroImage from './images/hero.png';
import './css/hero.css';

const Hero = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center heros'>
        <Col md className='text-light p-2 brodies'>
          <h1>Discover and Collect Rare NFTs</h1>
          <p>The most secure marketplace for buyingand selling unique crypto assets.</p>
          <div className='button-group'>
            <button href='#'>buy nfts</button>
            <button href='#'>sell nfts</button>
          </div>
        </Col>
        <Col className='col-md-6 img-hero text-center'>
          <img src={heroImage} alt='logo' />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
