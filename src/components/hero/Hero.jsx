import treeHero from '../../assets/treeHero.png';
import Fireflies from './Fireflies';
import { ScrollParallax } from 'react-just-parallax';
import HeroButtons from './HeroButtons';

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
      <div className="pointer-events-none absolute z-[-1] h-full w-full select-none bg-stone-950/50" />
      <Fireflies />
      <div className="land flex h-full flex-col items-center justify-center landscape:pt-14 lg:landscape:pt-0">
        <h1 className="text-center text-5xl font-bold capitalize tracking-wide text-white min-[375px]:text-6xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
          <span className="gradient-text">expert</span>{' '}
          <br className="sm:hidden" /> tree care,
          <br /> guaranteed
        </h1>
        <h2
          className="mt-4 text-center font-semibold text-stone-50 sm:text-lg md:mt-6 md:text-xl lg:mt-8 lg:text-2xl 2xl:text-3xl"
          style={{ textShadow: '0 0 5px black' }}
        >
          Tree Removal, Trimming, Planting, and More.
        </h2>
        <HeroButtons />
      </div>
    </section>
  );
};

export default Hero;
