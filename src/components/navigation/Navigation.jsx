import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Nav from './Nav';
import { useState } from 'react';
import { navItems } from '../../constants';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <header className="fixed z-30 h-16 w-screen bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link to={'/'}>
          <h1
            className="ml-4 text-base font-bold uppercase text-slate-50 md:text-lg lg:text-xl"
            onClick={() => setIsOpen(false)}
          >
            staghorn
          </h1>
        </Link>

        {/* Mobile Menu Icon */}
        <nav className="mr-4 text-slate-50">
          {!isOpen && (
            <HiMenuAlt1
              className="text-4xl md:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <AiOutlineClose
              className="text-3xl text-slate-100 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
          <Nav />
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`absolute right-0 top-16 w-1/2 overflow-hidden rounded-bl-xl border-emerald-400 bg-gradient-to-bl from-slate-950/95 via-slate-900/95 to-slate-800/95 md:hidden ${isOpen ? 'max-h-[192px] border-b border-l p-4' : 'max-h-0'} transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col items-end gap-4">
          {navItems.map((link) => (
            <a
              key={link.title}
              href={link.link}
              className="mx-auto"
              onClick={() => setIsOpen(false)}
            >
              <li className="text-xl capitalize text-slate-100 hover:text-emerald-500">
                {link.title}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
