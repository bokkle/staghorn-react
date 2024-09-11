import Tilt from 'react-parallax-tilt';

const AboutCard = ({ title, Icon, description }) => {
  return (
    <Tilt
      className="rounded-2xl overflow-hidden bg-zinc-900 p-6 ring ring-inset ring-emerald-600"
      key={title}
      glareEnable={true}
      glarePosition="all"
      glareColor="darkgreen"
    >
      <div className="flex justify-center text-6xl md:text-7xl">
        <Icon className="text-emerald-500" />
      </div>
      <h3 className="mt-4 text-center text-xl font-semibold capitalize text-slate-100 md:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-slate-200 lg:text-lg">{description}</p>
    </Tilt>
  );
};

export default AboutCard;
