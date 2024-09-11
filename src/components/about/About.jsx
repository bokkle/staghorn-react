import { FaArrowDown } from 'react-icons/fa';
import { aboutUs } from '../../constants';
import Heading from '../../ui/Heading';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-4 py-16 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="experience" subheading="Why choose us?" />
        <p className="mt-2 max-w-3xl text-slate-300 lg:text-lg xl:text-2xl">
          Staghorn Tree Services is a dedicated team of highly trained,
          professional arborists, proudly servicing the{' '}
          <span className="font-semibold text-emerald-400">Ottawa Valley</span>.
          All of our work is executed with the utmost care for the environment
          and our clients&apos; needs. Here&apos;s a bit more about us{' '}
          <FaArrowDown className="inline" />
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
