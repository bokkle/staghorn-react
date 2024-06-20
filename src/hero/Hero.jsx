import { ScrollParallax } from 'react-just-parallax';

import heroBg from '../assets/background.png';
import heroFg from '../assets/foreground.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroBg} className="background" alt="forest parallax" />
      <img src={heroFg} className="foreground" alt="forest parallax" />
    </section>
  );
};

export default Hero;

{
  /* <section className="hero">
<img src={heroBg} className="background" alt="forest parallax" />
<img src={heroFg} className="foreground" alt="forest parallax" />
</section> */
}
