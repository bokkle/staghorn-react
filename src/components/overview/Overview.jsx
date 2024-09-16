import { Fade } from 'react-awesome-reveal';
import { services } from '../../constants';
import { FaArrowDown } from 'react-icons/fa';
import Heading from '../../ui/Heading';
import ServicesCard from './ServicesCard';
import woodgrain from '../../assets/woodgrain-pattern.svg';

const Overview = () => {
  return (
    <section id="services" className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} duration={2000} triggerOnce>
          <Heading heading="services" subheading="What do we offer?" />
          <p className="mt-2 max-w-3xl text-stone-300 lg:text-lg xl:text-2xl">
            We take pride in providing top-notch{' '}
            <strong className="font-semibold text-emerald-400">
              tree removal
            </strong>
            ,{' '}
            <strong className="font-semibold text-emerald-400">pruning</strong>,{' '}
            <strong className="font-semibold text-emerald-400">planting</strong>
            , and more. We also offer{' '}
            <strong className="font-semibold text-emerald-400">
              free estimates
            </strong>
            . Here&apos;s more information about our services.{' '}
            <FaArrowDown className="inline" />
          </p>
        </Fade>
        <div className="relative my-6 flex flex-col">
          <img
            src={woodgrain}
            className="pointer-events-none absolute h-full w-full select-none object-cover opacity-5"
            alt="woodgrain background texture"
          />
          <Fade fraction={0.2} triggerOnce>
            {services.map((service, i, arr) => (
              <div
                key={i}
                className={`${i < arr.length - 1 ? 'border-b border-emerald-600' : ''}`}
              >
                <ServicesCard
                  index={i}
                  title={service.title}
                  info={service.info}
                  image={service.image}
                  alt={service.alt}
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Overview;
