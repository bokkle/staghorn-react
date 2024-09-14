const FooterNavLink = ({ title, link }) => {
  return (
    <a key={title} href={link}>
      <li className="text-lg capitalize text-zinc-300 hover:text-emerald-400">
        {title}
      </li>
    </a>
  );
};

export default FooterNavLink;
