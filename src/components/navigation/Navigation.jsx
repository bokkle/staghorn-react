import { useState } from 'react';
import { navItems } from '../../constants';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Nav from './Nav';
import GradientDivider from '../../ui/GradientDivider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-30 h-16 w-screen select-none bg-zinc-950/50 backdrop-blur-md md:h-20">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <a href="#home">
          <span
            className="ml-4 text-lg font-bold uppercase text-zinc-50 lg:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            staghorn
          </span>
        </a>

        {/* Mobile Menu Icon */}
        <nav className="pl-1 pr-4 text-zinc-50">
          {!isOpen && (
            <HiMenuAlt1
              className="text-4xl md:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <AiOutlineClose
              className="text-3xl text-zinc-100 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
          <Nav />
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`absolute right-0 top-16 mt-[-1px] w-1/2 overflow-hidden rounded-bl-xl border-zinc-600 bg-gradient-to-bl from-zinc-950/80 via-zinc-950/80 to-zinc-900/80 md:hidden ${isOpen ? 'max-h-[192px] border-b border-l p-4' : 'max-h-0'} transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col items-end gap-4">
          {navItems.map((link) => (
            <a
              key={link.title}
              href={link.link}
              className="mx-auto"
              onClick={() => setIsOpen(false)}
            >
              <li className="text-xl capitalize text-zinc-100 hover:text-emerald-500">
                {link.title}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <GradientDivider />
    </header>
  );
};

export default Navigation;
