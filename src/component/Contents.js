import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import photoCard from './images/pt-card.png';
import './css/content.css';
import anlyticImage from './images/analytics.png';
import appImage from './images/apps.png';

const Contents = () => {
  return (
    <Container>
      <Row className='text-light pt-5'>
        <Col className='content-image'>
          <img src={anlyticImage} alt='analitics' />
        </Col>
        <Col md className='content-text '>
          <h1 className='content-tittle'>Analytics</h1>
          <p className='content-header'>built-in analytics to track your nFTs</p>
          <p className='content-contents'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time. </p>
          <button>view our pricing</button>
        </Col>
      </Row>
      <Row className='text-light pt-5'>
        <Col md className='content-text'>
          <p className='content-tittle'>get our app</p>
          <p className='content-header'>browse nFTs from your smartphone</p>
          <p className='content-contents'>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</p>
          <button>download on ios</button>
        </Col>
        <Col className='content-image'>
          <img src={appImage} alt='app' />
        </Col>
      </Row>

      <Row>
        <Col md className='text-center testi'>
          <p className='content-tittle'>testimonials</p>
          <p className='testi-header'>read what other have to say</p>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5 myCards'>
          <div className='testi-cards text-light'>
            <img src={photoCard} alt='testimonials' className='image-testi rounded-circle' />
            <p className='testi-name'>John Cena</p>
            <p className='testi-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
          </div>
          <div className='testi-cards text-light'>
            <img src={photoCard} alt='testimonials' className='image-testi rounded-circle' />
            <p className='testi-name'>John Cena</p>
            <p className='testi-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
          </div>
          <div className='testi-cards text-light'>
            <img src={photoCard} alt='testimonials' className='image-testi rounded-circle' />
            <p className='testi-name'>John Cena</p>
            <p className='testi-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <div className='rdy'>
            <p className='rdy-tittle'>are you ready</p>
            <h1 className='rdy-header'>be a part of the next big thing</h1>
            <button className='rdy-btn'>get started</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contents;
