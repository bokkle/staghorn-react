import { services } from '../../constants';
import { FaArrowDown } from 'react-icons/fa';
import Heading from '../../ui/Heading';
import ServicesCard from './ServicesCard';

const Overview = () => {
  return (
    <section id="services" className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="services" subheading="What do we offer?" />
        <p className="mt-2 max-w-3xl text-slate-300 lg:text-lg xl:text-2xl">
          We take pride in providing top-notch{' '}
          <span className="font-semibold text-emerald-400">tree removal</span>,{' '}
          <span className="font-semibold text-emerald-400">pruning</span>,{' '}
          <span className="font-semibold text-emerald-400">planting</span>, and
          more. We also offer{' '}
          <span className="font-semibold text-emerald-400">free quotes</span>.
          Here&apos;s more information about our services.{' '}
          <FaArrowDown className="inline" />
        </p>
        <div className="my-6 flex flex-col gap-6 divide-y divide-emerald-600">
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
        </div>
      </div>
    </section>
  );
};

export default Overview;
