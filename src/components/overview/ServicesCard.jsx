import woodgrain from '../../assets/woodgrain-pattern.svg';

const ServicesCard = ({ index, title, info, image, alt }) => {
  return (
    <div
      className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} group relative overflow-hidden`}
    >
      {index % 2 === 0 && (
        <img
          src={woodgrain}
          className="absolute z-[-1] h-full w-full object-cover opacity-5"
          alt="woodgrain background pattern"
        />
      )}
      <div className="flex flex-col items-center justify-center p-8 md:w-1/2">
        <h4
          className={`text-3xl font-semibold capitalize text-zinc-100 text-opacity-100 transition-colors duration-500 ease-out group-hover:text-emerald-600 md:text-3xl lg:text-5xl`}
        >
          {title}
        </h4>
        <p className="mt-2 max-w-md text-lg text-zinc-300 md:text-xl">{info}</p>
      </div>
      <div className="flex items-center justify-center overflow-hidden p-8 md:w-1/2">
        <div className="h-full max-h-[450px] w-full max-w-[450px] overflow-hidden rounded-full">
          <img
            src={image}
            className={`pointer-events-none h-full w-full select-none rounded-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-110`}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
