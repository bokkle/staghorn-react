import { footerMenu } from '../constants';

const FooterMenu = () => {
  return (
    <ul className="flex gap-6 lg:gap-8">
      {footerMenu.map((link) => (
        <li
          key={link.name}
          className="font-semibold capitalize text-neutral-100 hover:text-green-400 lg:text-xl"
        >
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
