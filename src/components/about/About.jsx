import { FaArrowDown } from 'react-icons/fa';
import { aboutUs, serviceAreas } from '../../constants';
import Heading from '../../ui/Heading';
import AboutCard from './AboutCard';
import gradient from '../../assets/staghornGradient.svg';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 md:px-6 lg:px-8 lg:py-28"
    >
      <img
        src={gradient}
        className="absolute bottom-0 right-0 z-[-1] rotate-45 rounded-full opacity-15 md:h-full lg:right-40"
        alt=""
      />
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="experience" subheading="Why choose us?" />
        <p className="mt-2 max-w-3xl text-slate-300 lg:text-lg xl:text-2xl">
          Staghorn Tree Services is a dedicated team of highly trained,
          professional arborists. Proudly servicing the{' '}
          {serviceAreas.map((area, i) => (
            <span key={area}>
              <span className="font-semibold capitalize text-emerald-400">
                {area}
              </span>
              , {i === 0 ? 'including ' : ''}
            </span>
          ))}
          and neighbouring areas. All of our work is executed with the utmost
          care for the environment and our clients&apos; needs. Here&apos;s a
          bit more about us <FaArrowDown className="inline" />
        </p>
        <div className="mx-auto mt-8 grid max-w-[360px] gap-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {aboutUs.map((point) => (
            <AboutCard
              key={point.title}
              title={point.title}
              Icon={point.icon}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
