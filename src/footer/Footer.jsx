import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import FooterMisc from './FooterMisc';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <footer className="flex min-h-[500px] flex-col items-center justify-evenly bg-neutral-900 py-2">
      <FooterLogo />
      <FooterMenu />
      <FooterSocials />
      <FooterMisc />
    </footer>
  );
};

export default Footer;
