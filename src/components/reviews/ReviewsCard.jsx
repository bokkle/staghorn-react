import StarCount from '../../ui/StarCount';
import { MdVerified } from 'react-icons/md';

const ReviewsCard = ({ cardClass, img, name, location, quote, review }) => {
  return (
    <div
      className={`flex ${cardClass || ''} linear h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 will-change-transform hover:scale-[103%]`}
    >
      <div className="mb-4 flex items-center">
        <img
          src={img}
          className="h-12 w-12 rounded-full"
          alt={`${name} headshot`}
        />
        <div className="flex flex-col justify-center px-4">
          <div className="flex items-center">
            <h3 className="text-2xl font-semibold capitalize text-zinc-100">
              {name}
            </h3>
            <MdVerified className="ml-1 text-2xl text-emerald-400" />
          </div>
          <h4 className="capitalize text-zinc-400">{location}</h4>
        </div>
      </div>
      <div className="flex-1">
        {quote.map((para, i) => (
          <p key={i} className="mb-4 text-zinc-200 md:text-lg lg:text-xl">
            {para}
          </p>
        ))}
      </div>
      <StarCount numberOfStars={review.numStars} />
    </div>
  );
};

export default ReviewsCard;
