import { aboutUs } from '../constants';

const AboutList = () => {
  return (
    <div className="mt-8">
      <ul className="">
        {aboutUs.map((point) => (
          <div key={point} className="flex items-start p-1">
            <span className="mr-2 text-3xl text-green-400">&bull;</span>
            <li className="mb-1 text-2xl text-neutral-100">{point}</li>
          </div>
        ))}
        <div className="flex items-start p-1">
          <span className="mr-2 text-3xl text-green-400">&bull;</span>
          <li className="text-2xl text-neutral-100">
            Servicing the{' '}
            <span className="capitalize text-green-400">ottawa valley</span>,
            including{' '}
            <span className="capitalize text-green-400">pembroke</span>,{' '}
            <span className="capitalize text-green-400">petawawa</span>,{' '}
            <span className="capitalize text-green-400">deep river</span>,{' '}
            <span className="capitalize text-green-400">arnprior</span> and
            neighbouring areas
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AboutList;
