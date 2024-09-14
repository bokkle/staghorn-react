import { Link } from 'react-router-dom';

const FooterPolicyLinks = ({ link, title }) => {
  return (
    <Link to={link}>
      <li className="text-lg text-zinc-300 hover:text-emerald-400">{title}</li>
    </Link>
  );
};

export default FooterPolicyLinks;
