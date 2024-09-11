import About from '../about/About';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import Overview from '../overview/Overview';
import Reviews from '../reviews/Reviews';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Overview />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
