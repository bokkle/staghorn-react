import { useState } from 'react';

const ServicesCard = ({ index, title, info, image, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="flex flex-col items-center justify-center p-8 md:w-1/2">
        <h3
          className={`text-2xl font-semibold capitalize text-slate-100 md:text-3xl lg:text-5xl ${hovered && 'text-emerald-600 text-opacity-100'} transition-colors duration-500 ease-out will-change-auto`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {title}
        </h3>
        <p className="mt-2 max-w-md text-slate-300 md:text-lg lg:text-xl">
          {info}
        </p>
      </div>
      <div className="flex items-center justify-center overflow-hidden p-8 md:w-1/2">
        <div className="overflow-hidden rounded-full border-[5px] border-emerald-600">
          <img
            src={image}
            className={`w-full max-w-[450px] rounded-full transition-transform duration-500 ${hovered && 'scale-105'} will-change-transform`}
            alt={alt}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
