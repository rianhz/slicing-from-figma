import { Container } from 'react-bootstrap';
import Hero from './component/Hero';
import MyNavbar from './component/MyNavbar';
import './App.css';
import Feature from './component/Feature';
import Contents from './component/Contents';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App' style={{ background: '#000235' }}>
      <Container>
        <MyNavbar />
        <Hero />
        <Feature />
        <Contents />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
