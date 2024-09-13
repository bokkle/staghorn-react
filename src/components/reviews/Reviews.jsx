import { testimonials } from '../../constants';
import Heading from '../../ui/Heading';
import ReviewsCard from './ReviewsCard';
import gradient from '../../assets/staghornGradient.svg';

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden px-4 py-16 md:px-6 lg:px-8 lg:py-28"
    >
      <img
        src={gradient}
        className="absolute left-0 top-0 z-[-1] rotate-45 rounded-full opacity-15 md:h-full lg:left-10"
        alt=""
      />
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="Reviews" subheading="What do others say?" />
        <div className="mt-6 grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((review, i) => (
            <ReviewsCard
              key={i}
              cardClass={review.class}
              img={review.img}
              name={review.name}
              location={review.location}
              quote={review.quote}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
