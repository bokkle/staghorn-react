import Tilt from 'react-parallax-tilt';

const AboutCard = ({ title, Icon, description }) => {
  return (
    <Tilt
      className="group overflow-hidden rounded-2xl bg-zinc-900 p-6 ring ring-inset ring-emerald-600"
      key={title}
      glareEnable={true}
      glarePosition="all"
      glareColor="forestgreen"
    >
      <div className="flex justify-center text-6xl md:text-7xl">
        <Icon className="text-emerald-600" />
      </div>
      <h3 className="mt-4 text-center text-xl font-semibold capitalize tracking-wide text-slate-100 transition-all duration-300 ease-out group-hover:text-emerald-400 md:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-zinc-200 group-hover:text-zinc-50 lg:text-lg">
        {description}
      </p>
    </Tilt>
  );
};

export default AboutCard;
