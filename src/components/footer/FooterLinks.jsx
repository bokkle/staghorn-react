import { navItems, policyLinks } from '../../constants';
import FooterNavLink from './FooterNavLink';
import FooterPolicyLinks from './FooterPolicyLinks';

const FooterLinks = () => {
  return (
    <div className="my-6 grid select-none grid-cols-2 md:my-0">
      <div>
        <h2 className="text-xl font-semibold capitalize text-zinc-50">
          sitemap
        </h2>
        <ul>
          {navItems.map((link, i) => (
            <FooterNavLink key={i} title={link.title} link={link.link} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold capitalize text-zinc-50">
          policies
        </h2>
        <ul>
          {policyLinks.map((link, i) => (
            <FooterPolicyLinks key={i} link={link.link} title={link.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
