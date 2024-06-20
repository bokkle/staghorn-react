import { Tilt } from 'react-tilt';
import { services } from '../constants';

const ServicesCard = ({ title, info, image }) => {
  return <div>hey</div>
};

const Services = () => {
  return (
    <section className="flex h-[500px] w-full flex-wrap items-center justify-center gap-20 bg-slate-900">
      {services.map((service) => (
        <Tilt
          key={service.title}
          options={{ scale: 1 }}
          style={{ height: 300, width: 300, backgroundColor: 'green' }}
        >
          <ServicesCard
            title={service.title}
            info={service.info}
            image={service.image}
          />
        </Tilt>
      ))}
    </section>
  );
};

export default Services;

{
  /* <div className="relative h-[300px] w-[300px] rounded-xl bg-gradient-to-br from-green-300 via-yellow-400 to-green-800">
<div className="absolute inset-1 flex justify-center rounded-lg bg-green-950 pt-12">
  <img src={image} className="absolute" width={150} alt="" />
  <div className="absolute bottom-5 w-full text-center text-xl font-semibold capitalize tracking-wide text-white">
    {title}
  </div>
  <div
    className={`transtion-all absolute inset-0 flex items-center rounded-lg bg-stone-900/50 p-2 text-center opacity-0 backdrop-blur-md duration-300 hover:opacity-100`}
  >
    <p className="text-xl text-slate-100">{info}</p>
  </div>
</div>
</div> */
}
