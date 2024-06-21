import TestimonialCard from './TestimonialCard';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section className="flex w-full justify-center bg-blue-400 py-20 pl-2 pr-2">
      <div className="h-full w-full max-w-screen-2xl drop-shadow-2xl">
        <div className="flex h-full w-full flex-col rounded-2xl bg-slate-900 px-2 pb-8 pt-4">
          <h1 className="pl-5 pt-5 text-3xl font-bold tracking-wide text-neutral-100 lg:text-5xl">
            Testimonials.
          </h1>
          <div className="mb-10 mt-16 flex flex-1 flex-wrap items-center justify-center gap-10 rounded-xl lg:gap-24">
            {testimonials.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
