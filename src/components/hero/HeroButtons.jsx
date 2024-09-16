const HeroButtons = () => {
  return (
    <div className="mt-6 grid w-[280px] gap-5 md:mt-8 md:w-[500px] md:grid-cols-2 lg:mt-10">
      <button
        className="cursor-pointer bg-emerald-600 font-sans font-semibold text-stone-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 active:scale-95 md:text-xl"
        style={{ textShadow: '0 0 2px black' }}
      >
        <a href="#contact" className="block h-full w-full p-3">
          Get a Free Quote
        </a>
      </button>
      <button
        className="cursor-pointer font-sans font-semibold capitalize text-stone-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 active:scale-95 md:text-xl"
        style={{ textShadow: '0 0 2px black' }}
      >
        <a href="#about" className="block h-full w-full p-3">
          learn more
        </a>
      </button>
    </div>
  );
};

export default HeroButtons;
