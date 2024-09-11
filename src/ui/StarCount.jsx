import { FaStar } from 'react-icons/fa6';

const StarCount = ({ numberOfStars }) => {
  return (
    <div className="flex">
      {Array.from({ length: numberOfStars }, (_, index) => (
        <FaStar key={index} className="text-xl text-emerald-400" />
      ))}
    </div>
  );
};

export default StarCount;
