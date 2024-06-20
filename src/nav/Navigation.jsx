import { navLinks } from '../constants';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navigation = () => {
  return (
    <header className="flex h-[90px] w-screen z-10 justify-center border-b fixed">
      <div className="flex w-full max-w-screen-2xl justify-between">
        <h1 className="flex items-center justify-center border text-xl font-bold uppercase tracking-wide">
          staghorn
        </h1>
        <nav className="flex items-center justify-center border">
          <ul className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <li key={link} className="text-2xl capitalize">
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <HiOutlineMenuAlt3 className="text-4xl md:hidden" />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
