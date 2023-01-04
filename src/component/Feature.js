import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import './css/feature.css';
import techImages from './images/tech.png';
import mitImages from './images/mit.png';
import fastImages from './images/fast.png';
import forbesImages from './images/forbes.png';

const Feature = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className='text-light feature'>Feature on</p>
          <div className='logo-wrapper'>
            <img src={techImages} alt='logo' />
            <img src={fastImages} alt='logo' />
            <img src={mitImages} alt='logo' />
            <img src={forbesImages} alt='logo' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
