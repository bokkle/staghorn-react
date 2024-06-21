import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ review }) => {
  return (
    <div
      key={review.name}
      className="flex h-[300px] w-[300px] flex-col justify-between overflow-hidden rounded-lg ring ring-green-400 transition-all duration-200 hover:scale-105 xl:h-[350px] xl:w-[350px]"
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
          <p className="ml-3 text-xl text-neutral-300">{review.name}</p>
          <p className="ml-3 text-xl text-neutral-300">{review.location}</p>
        </div>
        <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full ring ring-neutral-800">
          <img src={review.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
