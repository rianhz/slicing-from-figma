import Hero from './component/Hero';
import './App.css';
import Feature from './component/Feature';
import Contents from './component/Contents';
import Footer from './component/Footer';
import MyNavbar from './component/MyNavbar';

function App() {
  return (
    <div className='App' style={{ background: '#000235' }}>
      <>
        <MyNavbar />
        <Hero />
        <Feature />
        <Contents />
        <Footer />
      </>
    </div>
  );
}

export default App;
