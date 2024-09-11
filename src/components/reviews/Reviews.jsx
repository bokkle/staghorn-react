import { testimonials } from '../../constants';
import { MdVerified } from 'react-icons/md';
import Heading from '../../ui/Heading';
import StarCount from '../../ui/StarCount';

const Reviews = () => {
  return (
    <section id='reviews' className="bg-zinc-950 px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="Reviews" subheading="What do others say?" />
        <div className="mt-6 grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className={`flex ${review.class || ''} linear h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 will-change-transform hover:scale-105`}
            >
              <div className="mb-4 flex items-center">
                <img
                  src={review.img}
                  className="h-12 w-12 rounded-full"
                  alt={`${review.name} headshot`}
                />
                <div className="flex flex-col justify-center px-4">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-semibold capitalize text-zinc-100">
                      {review.name}
                    </h3>
                    <MdVerified className="ml-1 text-2xl text-emerald-400" />
                  </div>
                  <h4 className="capitalize text-zinc-400">
                    {review.location}
                  </h4>
                </div>
              </div>
              <div className="flex-1">
                {review.quote.map((para, i) => (
                  <p
                    key={i}
                    className="mb-4 text-zinc-200 md:text-lg lg:text-xl"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <StarCount numberOfStars={review.numStars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
