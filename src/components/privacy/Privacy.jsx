import { privacy } from '../../constants';
import ReturnHome from '../../ui/ReturnHome';
import ScrollToTop from '../../ui/ScrollToTop';

const Privacy = () => {
  return (
    <section className="min-h-screen bg-zinc-950 p-4 py-16 md:p-6 lg:p-8 lg:py-28">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="mb-6 text-center text-4xl font-bold uppercase text-zinc-50">
          staghorn
        </h1>
        <ReturnHome />
        {privacy.map((info, i, arr) => (
          <div
            key={info.title}
            className={`flex flex-col gap-2 ${i < arr.length - 1 && 'border-b border-zinc-600'} pb-6`}
          >
            <h2 className="text-2xl font-semibold capitalize text-emerald-400">
              {info.title}
            </h2>
            {info.description.map((para, i) => (
              <p key={i} className="text-zinc-50">
                {para}
              </p>
            ))}
          </div>
        ))}
        <ReturnHome />
      </div>
    </section>
  );
};

export default Privacy;
