import { navItems } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid md:grid-cols-4">
          <div className="">
            <h1 className="text-2xl font-semibold uppercase text-zinc-50">
              staghorn
            </h1>
          </div>
          <div className="">
            <h2 className="font-semibold capitalize text-emerald-400">
              sitemap
            </h2>
            <ul>
              {navItems.map((item) => (
                <a key={item.title} href={item.link}>
                  <li className="capitalize text-slate-50">{item.title}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="font-semibold capitalize text-emerald-400">
              socials
            </h2>
            <ul>
              <a href="" target="_blank">
                <li className='text-slate-50'>facebook</li>
              </a>
              <a href="" target="_blank">
                <li className='text-slate-50'>instagram</li>
              </a>
            </ul>
          </div>
          <div className="">
            <h2 className="font-semibold capitalize text-emerald-400">
              policies
            </h2>
            <ul>
              <li className='text-slate-50'>privacy policy</li>
              <li className='text-slate-50'>terms of service</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
