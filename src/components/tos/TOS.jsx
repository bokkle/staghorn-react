import { tos } from '../../constants';
import ReturnHome from '../../ui/ReturnHome';
import ScrollToTop from '../../ui/ScrollToTop';
import TOSCard from './TOSCard';

const TOS = () => {
  return (
    <section className="min-h-screen p-4 py-16 md:p-6 lg:p-8 lg:py-28">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="mb-6 text-center text-4xl font-bold uppercase text-stone-50">
          staghorn <br /> terms of <br className="sm:hidden" /> service
        </h1>
        <ReturnHome />
        {tos.map((info, i, arr) => (
          <TOSCard
            key={i}
            index={i}
            title={info.title}
            arr={arr}
            description={info.description}
          />
        ))}
        <ReturnHome />
      </div>
    </section>
  );
};

export default TOS;
