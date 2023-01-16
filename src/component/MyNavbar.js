import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './css/navbar.css';
const MyNavbar = () => {
  return (
    <>
      <Navbar expand='lg' className='navbar-dark pt-3 pb-3 fixed-top z-index-2 '>
        <Container>
          <Navbar.Brand href='#home'>KRYPTO</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto '>
              <Nav.Link href='#home'>About</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
              <Nav.Link href='#buy'>Buy Nfts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
