import { navItems } from '../../constants';

const Nav = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      {navItems.map((link) => (
        <a key={link.link} href={link.link}>
          <li className='capitalize text-xl hover:text-emerald-400'>{link.title}</li>
        </a>
      ))}
    </ul>
  );
};

export default Nav;
