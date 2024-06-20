import AboutCTA from './AboutCTA';
import AboutHeading from './AboutHeading';
import AboutList from './AboutList';

const AboutInfo = () => {
  return (
    <div className="flex min-w-[300px] flex-1 flex-col justify-around bg-neutral-900 px-2 py-2 lg:px-10 lg:py-5">
      <AboutHeading />
      <AboutList />
      <AboutCTA />
    </div>
  );
};

export default AboutInfo;
