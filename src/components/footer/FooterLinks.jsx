import { navItems } from '../../constants';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className="my-6 grid grid-cols-2 md:my-0">
      <div>
        <h2 className="text-xl font-semibold capitalize text-zinc-50">
          sitemap
        </h2>
        <ul>
          {navItems.map((link) => (
            <a key={link.title} href={link.link}>
              <li className="text-lg capitalize text-zinc-300 hover:text-emerald-400">
                {link.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold capitalize text-zinc-50">
          policies
        </h2>
        <ul>
          <Link to="privacy-policy">
            <li className="text-lg text-zinc-300 hover:text-emerald-400">
              Privacy Policy
            </li>
          </Link>
          <Link to="tos">
            <li className="text-lg text-zinc-300 hover:text-emerald-400">
              Terms of Service
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
