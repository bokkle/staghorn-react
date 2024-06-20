import Navigation from './nav/Navigation';
import Hero from './hero/Hero';
import About from './about/About';
import Services from './services/Services';
import Gallery from './gallery/Gallery';

function App() {
  return (
    <div className="w-screen">
      <Navigation />
      <div id="parallax-container">
        <Hero />
        <About />
        <Services />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
