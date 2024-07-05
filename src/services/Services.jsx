/* eslint-disable react/prop-types */
import { services } from '../constants';

const ServicesCard = ({ title, info, image }) => {
  return (
    <div className="relative h-[300px] w-[300px] rounded-xl bg-gradient-to-br from-yellow-400 via-green-300 to-green-800">
      <div className="absolute inset-1 flex justify-center rounded-lg bg-neutral-900 pt-12">
        <img src={image} className="absolute" width={150} alt="" />
        <div className="absolute bottom-5 w-full text-center text-xl font-semibold capitalize tracking-wide text-white">
          {title}
        </div>
        <div
          className={`transtion-all absolute inset-0 flex items-center rounded-lg bg-stone-900/50 p-2 text-center opacity-0 backdrop-blur-md duration-300 hover:opacity-100`}
        >
          <p className="text-2xl text-neutral-100">{info}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="flex justify-center bg-neutral-800 px-2 py-28">
      <div className="max-w-screen-2xl">
        <div className="">
          <h1 className="mb-7 ml-2 text-3xl font-bold tracking-wide text-neutral-100 lg:text-5xl">
            Services.
          </h1>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-10 lg:gap-20">
          {services.map((service) => (
            <ServicesCard
              key={service.title}
              title={service.title}
              info={service.info}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
