import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import About from './pages/about/About';
import Banner from './pages/banner/Banner';
import Blogs from './pages/blogs/Blogs';
import Booking from './pages/booking/Booking';
import Credit from './pages/creadit/Credit';
import Destination from './pages/destination/Destination';
import Footer from './pages/footer/Footer';
import Gallery from './pages/gallery/Gallery';
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import Reviews from './pages/review/Reviews';
import Services from './pages/services/Services';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 150,
    })
  }, [])
  

  return (
    <div>
      <Header />
      <Home />
      <Booking />
      <About />
      <Destination />
      <Services />
      <Gallery />
      <Reviews />
      <Blogs />
      <Banner />
      <Footer />
      <Credit />
    </div>
  );
}

export default App;
