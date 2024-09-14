import { Slide } from 'react-awesome-reveal';
// import logo from '../../assets/staghorn-logo-full-nobg-light.png';
import logo from '../../assets/staghornLogo.svg';
import Fireflies from '../hero/Fireflies';

const ContactImg = () => {
  return (
    <div className="pointer-events-none relative flex select-none items-center justify-center overflow-hidden">
      <Slide
        direction="right"
        duration={2000}
        triggerOnce
        className="flex h-full w-full items-center justify-center"
      >
        <img src={logo} className="w-full" alt="staghorn tree service logo" />
      </Slide>
      <Fireflies />
    </div>
  );
};

export default ContactImg;
