import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const MyNavbar = () => {
  return (
    <>
      <Navbar expand='lg' bg='transparent' className='navbar-dark pt-5'>
        <Container>
          <Navbar.Brand href='#home'>KRYPTO</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto pe-5'>
              <Nav.Link href='#home' className='pe-5'>
                About
              </Nav.Link>
              <Nav.Link href='#pricing' className='pe-5'>
                Pricing
              </Nav.Link>
              <Nav.Link href='#contact' className='pe-5'>
                Contact
              </Nav.Link>
              <Nav.Link href='#buy' className='pe-5'>
                Buy Nfts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
