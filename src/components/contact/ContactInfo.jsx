import { contactLinks } from '../../constants';

const ContactInfo = () => {
  return (
    <>
      <div className="mt-10 flex select-none items-center justify-between">
        <div className="h-[2px] w-1/3 bg-stone-500"></div>
        <p className="capitalize text-stone-500">or</p>
        <div className="h-[2px] w-1/3 bg-stone-500"></div>
      </div>
      <div className="mt-6 grid select-none grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {contactLinks.map((link) => (
          <div
            key={link.title}
            className={`flex items-center justify-center ${link.styling && link.styling}`}
          >
            <a href={link.link}>
              <button
                className="flex size-24 flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-lg text-stone-100 ring-emerald-600 transition-all duration-300 ease-out hover:ring active:scale-95 lg:size-32 lg:gap-2 lg:text-xl"
                style={{ textShadow: '0 0 3px black' }}
              >
                {link.title}
                <link.icon className="text-xl text-stone-100 lg:text-2xl" />
              </button>
            </a>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-stone-700" />
      <p className="mt-4 text-sm text-stone-400">416-270-6681</p>
      <p className="text-sm text-stone-400">staghorn.treeservices@gmail.com</p>
    </>
  );
};

export default ContactInfo;
