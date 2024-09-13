import treeHero from '../../assets/treeHero.png';
import Fireflies from './Fireflies';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <img
        src={treeHero}
        className="pointer-events-none absolute z-[-1] min-h-full min-w-full select-none object-cover"
        alt="closeup of tree branches and leaves"
      />
      <div className="pointer-events-none absolute z-[-1] h-full w-full select-none bg-zinc-950/50" />
      <Fireflies />
      <div className="flex h-full flex-col items-center justify-center">
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
          Tree Removal, Trimming, Planting, and More
        </h2>
        <div className="mt-6 grid w-[280px] gap-5 md:w-[500px] md:grid-cols-2">
          <button
            className="cursor-pointer bg-emerald-600 font-semibold text-slate-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 md:text-xl"
            style={{ textShadow: '0 0 2px black' }}
          >
            <a href="#contact" className="block h-full w-full p-3">
              Get a Free Quote
            </a>
          </button>
          <button
            className="cursor-pointer font-semibold capitalize text-slate-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 md:text-xl"
            style={{ textShadow: '0 0 2px black' }}
          >
            <a href="#about" className="block h-full w-full p-3">
              learn more
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
