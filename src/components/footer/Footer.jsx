import FooterConnect from './FooterConnect';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <span className="mb-10 select-none text-left text-3xl font-bold uppercase text-zinc-50 lg:text-center">
          staghorn
        </span>
        <div className="flex flex-col justify-between md:flex-row md:pb-6">
          <FooterConnect />
          <FooterLogo />
          <FooterLinks />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
