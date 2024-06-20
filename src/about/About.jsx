import { aboutUs } from '../constants';

const About = () => {
  return (
    <section className="h-[500px] bg-blue-400">
      <h1>About us</h1>
      <div>
        <ul>
          {aboutUs.map((point) => (
            <li key={point} className=''>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
