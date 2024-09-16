import Tilt from 'react-parallax-tilt';

const AboutCard = ({ title, Icon, description }) => {
  return (
    <Tilt
      className="group overflow-hidden rounded-2xl bg-stone-900 p-6 ring ring-inset ring-emerald-600"
      key={title}
      glareEnable={true}
      glarePosition="all"
      glareColor="forestgreen"
    >
      <div className="flex justify-center text-6xl md:text-7xl">
        <Icon className="text-emerald-600" />
      </div>
      <h4 className="mt-4 text-center text-xl font-semibold capitalize tracking-wide text-stone-100 transition-all duration-300 ease-out group-hover:text-emerald-400 md:text-2xl">
        {title}
      </h4>
      <p className="mt-2 text-stone-200 group-hover:text-stone-50 lg:text-lg">
        {description}
      </p>
    </Tilt>
  );
};

export default AboutCard;
