import logo from '../../assets/staghorn-logo-full-nobg-light.png';
import Fireflies from '../hero/Fireflies';

const ContactImg = () => {
  return (
    <div className="flex relative overflow-hidden items-center justify-center select-none pointer-events-none">
      <img src={logo} className='' alt="staghorn tree service logo" />
      <Fireflies />
    </div>
  );
};

export default ContactImg;
