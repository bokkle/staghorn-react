import { Fade } from 'react-awesome-reveal';
import { services } from '../../constants';
import { FaArrowDown } from 'react-icons/fa';
import Heading from '../../ui/Heading';
import ServicesCard from './ServicesCard';

const Overview = () => {
  return (
    <section id="services" className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} triggerOnce>
          <Heading heading="services" subheading="What do we offer?" />
          <p className="mt-2 max-w-3xl text-zinc-300 lg:text-lg xl:text-2xl">
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
        <div className="my-6 flex flex-col divide-y divide-emerald-600">
          <Fade fraction={0.2} triggerOnce>
            {services.map((service, i) => (
              <ServicesCard
                key={i}
                index={i}
                title={service.title}
                info={service.info}
                image={service.image}
                alt={service.alt}
              />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Overview;
