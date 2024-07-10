import logo from '../assets/staghorn_logo-1.png';

const FooterLogo = () => {
  return (
    <img
      src={logo}
      width={160}
      height={160}
      className="rounded-full bg-[#09541a] p-2 ring ring-yellow-400"
      alt="staghorn logo"
    />
  );
};

export default FooterLogo;
