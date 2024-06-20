import Navigation from './nav/Navigation';
import Hero from './hero/Hero';
import About from './about/About';
import Services from './services/Services';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="w-screen">
      <Navigation />
      <div id="parallax-container">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
