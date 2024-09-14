import treeHero from '../../assets/treeHero.png';
import Fireflies from './Fireflies';
import { ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen select-none overflow-hidden"
    >
      <ScrollParallax isAbsolutelyPositioned zIndex={-1}>
        <img
          src={treeHero}
          className="pointer-events-none absolute z-[-1] min-h-full min-w-full select-none object-cover"
          alt="closeup of tree branches and leaves"
        />
      </ScrollParallax>
      <div className="pointer-events-none absolute z-[-1] h-full w-full select-none bg-zinc-950/50" />
      <Fireflies />
      <div className="land flex h-full flex-col items-center justify-center landscape:pt-14 lg:landscape:pt-0">
        <h1 className="text-center text-5xl font-bold capitalize tracking-wide text-white min-[375px]:text-6xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
          <span className="gradient-text">expert</span>{' '}
          <br className="sm:hidden" /> tree care,
          <br /> guaranteed
        </h1>
        <h2
          className="mt-4 text-center font-semibold text-zinc-50 sm:text-lg md:mt-6 md:text-xl lg:mt-8 lg:text-2xl 2xl:text-3xl"
          style={{ textShadow: '0 0 5px black' }}
        >
          Tree Removal, Trimming, Planting, and More.
        </h2>
        <div className="mt-6 grid w-[280px] gap-5 md:mt-8 md:w-[500px] md:grid-cols-2 lg:mt-10">
          <button
            className="cursor-pointer bg-emerald-600 font-sans font-semibold text-zinc-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 active:scale-95 md:text-xl"
            style={{ textShadow: '0 0 2px black' }}
          >
            <a href="#contact" className="block h-full w-full p-3">
              Get a Free Quote
            </a>
          </button>
          <button
            className="cursor-pointer font-sans font-semibold capitalize text-zinc-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-800 hover:ring-emerald-800 active:scale-95 md:text-xl"
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
