import { Slide } from 'react-awesome-reveal';
import { ScrollParallax } from 'react-just-parallax';
import logo from '../../assets/staghornLogo.svg';
import Fireflies from '../hero/Fireflies';

const ContactImg = () => {
  return (
    <div className="pointer-events-none relative flex select-none items-center justify-center overflow-hidden">
      <ScrollParallax enableOnTouchDevice={false}>
        <Slide
          direction="right"
          duration={2000}
          triggerOnce
          className="flex h-full w-full items-center justify-center"
        >
          <img
            src={logo}
            className="pointer-events-none w-full select-none"
            alt="staghorn tree service company logo"
          />
        </Slide>
      </ScrollParallax>
      <Fireflies />
    </div>
  );
};

export default ContactImg;
