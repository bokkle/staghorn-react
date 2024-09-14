import { testimonials } from '../../constants';
import Heading from '../../ui/Heading';
import ReviewsCard from './ReviewsCard';
import gradient from '../../assets/staghornGradient.svg';
import { Fade } from 'react-awesome-reveal';

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden px-4 py-16 md:px-6 lg:px-8 lg:py-28"
    >
      <img
        src={gradient}
        className="pointer-events-none absolute left-0 top-0 z-[-1] rotate-45 select-none rounded-full opacity-15 md:h-full lg:left-10"
        alt=""
      />
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} cascade triggerOnce>
          <Heading heading="Reviews" subheading="What do others say?" />
        </Fade>
        <Fade fraction={0.05} triggerOnce>
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
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;
