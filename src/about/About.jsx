import treeSprite from '../assets/treeSprite.gif';
import AboutInfo from './AboutInfo';

const About = () => {
  return (
    <section className="flex justify-center bg-blue-400 p-2">
      <div className="flex h-full w-full max-w-screen-2xl flex-wrap overflow-hidden rounded-2xl">
        <AboutInfo />
        <div className="flex min-w-[300px] flex-1 items-center justify-center bg-neutral-900">
          <img src={treeSprite} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
