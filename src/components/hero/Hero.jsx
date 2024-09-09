import treeHero from '../../assets/treeHero.png';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <img
        src={treeHero}
        className="pointer-events-none absolute z-[-1] h-full select-none object-cover"
        alt=""
      />
      <div className="pointer-events-none absolute z-[-1] h-full w-full select-none bg-slate-950/40" />
      <div className="z-0 flex h-full flex-col items-center justify-center">
        <h1
          className="text-center text-5xl font-bold capitalize tracking-wide text-white md:text-7xl lg:text-8xl"
          style={{ textShadow: '0 0 2px black' }}
        >
          expert tree care,
          <br /> guaranteed
        </h1>
        <h2
          className="mt-4 text-center text-lg font-semibold text-slate-50 md:text-2xl"
          style={{ textShadow: '0 0 5px black' }}
        >
          Tree Removal, Trimming, Pruning, and More
        </h2>
        <div className="mt-6 grid w-[280px] gap-5 md:w-[500px] md:grid-cols-2">
          <button
            className="cursor-pointer bg-emerald-600 p-3 font-semibold capitalize text-slate-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800"
            style={{ textShadow: '0 0 2px black' }}
          >
            get a free quote
          </button>
          <button
            className="cursor-pointer p-3 font-semibold capitalize text-slate-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800"
            style={{ textShadow: '0 0 2px black' }}
          >
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
