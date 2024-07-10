import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const FooterSocials = () => {
  return (
    <ul className="flex gap-6">
      <li className="text-4xl text-neutral-100 hover:text-[#316FF6]">
        <a
          href="https://www.facebook.com/people/Staghorn-Tree-Service/100095581361451/"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </li>
      <li className="text-4xl text-neutral-100 hover:text-[#C13584]">
        <a
          href="https://www.instagram.com/staghorn_treeservice/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocials;
