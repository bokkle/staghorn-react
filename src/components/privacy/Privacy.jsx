import { privacy } from '../../constants';
import ReturnHome from '../../ui/ReturnHome';
import ScrollToTop from '../../ui/ScrollToTop';
import PrivacyCard from './PrivacyCard';

const Privacy = () => {
  return (
    <section className="min-h-screen bg-zinc-950 p-4 py-16 md:p-6 lg:p-8 lg:py-28">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="mb-6 text-center text-4xl font-bold uppercase text-zinc-50">
          staghorn <br /> privacy policy
        </h1>
        <ReturnHome />
        {privacy.map((info, i, arr) => (
          <PrivacyCard
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

export default Privacy;