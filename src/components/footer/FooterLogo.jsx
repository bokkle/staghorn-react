import logo from '../../assets/staghornLogoBase.png';
import { FaArrowUp } from 'react-icons/fa';

const FooterLogo = () => {
  return (
    <a href="#home">
      <div className="group relative mr-1 hidden cursor-pointer rounded-full bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 transition-all duration-300 ease-out hover:ring hover:ring-emerald-400 lg:block">
        <img
          src={logo}
          className="pointer-events-none size-[195px] select-none rounded-full"
          alt="Staghorn Tree Service logo"
        />
        <span className="absolute left-1 top-1/2 text-emerald-400 opacity-0 transition-opacity duration-300 ease-out group-hover:absolute group-hover:opacity-100">
          <FaArrowUp />
        </span>
        <span className="absolute right-1 top-1/2 text-emerald-400 opacity-0 transition-opacity duration-300 ease-out group-hover:absolute group-hover:opacity-100">
          <FaArrowUp />
        </span>
      </div>
    </a>
  );
};

export default FooterLogo;
