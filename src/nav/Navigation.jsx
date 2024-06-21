import { navLinks } from '../constants';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navigation = () => {
  return (
    <header className="fixed z-10 flex h-[90px] w-screen justify-center border-b bg-neutral-100/30 backdrop-blur-sm">
      <div className="flex w-full max-w-screen-2xl justify-between">
        <h1 className="flex items-center justify-center pl-2 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl lg:text-4xl">
          staghorn
        </h1>
        <nav className="flex items-center justify-center">
          <ul className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <li
                key={link}
                className="text-3xl font-semibold capitalize tracking-wide hover:text-[#00ff33]"
              >
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <HiOutlineMenuAlt3 className="mr-2 text-4xl md:hidden" />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
