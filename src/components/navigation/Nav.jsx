import { navItems } from '../../constants';
import DesktopNavLink from './DesktopNavLink';

const Nav = () => {
  return (
    <ul className="mr-4 hidden gap-8 md:flex">
      {navItems.map((link, i) => (
        <DesktopNavLink key={i} link={link.link} title={link.title} />
      ))}
    </ul>
  );
};

export default Nav;
