import { testimonials } from '../constants';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="flex w-screen justify-center bg-blue-400 px-2 py-20">
      <div className="h-full w-full max-w-screen-2xl border">
        <div className="flex h-full w-full flex-col rounded-2xl bg-slate-900">
          <h1 className="pl-5 pt-5 text-3xl text-neutral-100 lg:text-5xl">
            Testimonials.
          </h1>
          <div className="mb-10 mt-5 flex flex-1 flex-wrap items-center justify-center gap-10 rounded-xl lg:gap-20">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="flex h-[300px] w-[300px] flex-col justify-between overflow-hidden rounded-lg ring ring-green-400 transition-all duration-200 hover:scale-105"
              >
                <div className="flex h-[15%] items-start justify-between">
                  <FaQuoteLeft className="ml-3 mt-3 text-2xl text-neutral-100" />
                </div>
                <div className="p-3">
                  <p className="text-xl font-semibold tracking-wide text-neutral-100">
                    {review.review}
                  </p>
                </div>
                <div className="flex h-[30%] items-center justify-between">
                  <div className="">
                    <p className="ml-3 text-xl text-neutral-300">
                      {review.name}
                    </p>
                    <p className="ml-3 text-xl text-neutral-300">
                      {review.location}
                    </p>
                  </div>
                  <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full ring ring-neutral-800">
                    <img src={review.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
