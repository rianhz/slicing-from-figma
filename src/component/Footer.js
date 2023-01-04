import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './css/footer.css';

const Footer = () => {
  return (
    <Container>
      <Row className='pt-5'>
        <Col lg='2' sm='12'>
          <div className='footers-item1'>
            <p className='ptittle1'>krypto</p>
          </div>
        </Col>
        <Col lg='2' sm='4'>
          <div className='footers-item2 '>
            <p className='ptittle2'>krypto</p>
            <div className='ptext-wrapper'>
              <p>home</p>
              <p>about</p>
              <p>buy nFTs</p>
              <p>sell nFTs</p>
            </div>
          </div>
        </Col>
        <Col lg='2' sm='4'>
          <div className='footers-item3 '>
            <p className='ptittle2'>market</p>
            <div className='ptext-wrapper'>
              <p>browse nFTs</p>
              <p>buy nFTs</p>
              <p>sell nFTs</p>
            </div>
          </div>
        </Col>
        <Col lg='2' sm='4'>
          <div className='footers-item4 '>
            <p className='ptittle2'>contact</p>
            <div className='ptext-wrapper'>
              <p>email</p>
              <p>linkedin</p>
              <p>instagram</p>
              <p>twitter</p>
            </div>
          </div>
        </Col>
        <Col lg='4' sm='12'>
          <div className='footers-item5 '>
            <p className='ptittle3'>join our newsletters</p>
            <div className='input-groups'>
              <input placeholder='Email Address' />
              <button>Submit</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
