const ServicesCard = ({ index, title, info, image, alt }) => {
  return (
    <div
      className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} group`}
    >
      <div className="flex flex-col items-center justify-center p-8 md:w-1/2">
        <h4
          className={`text-2xl font-semibold capitalize text-zinc-100 text-opacity-100 transition-colors duration-500 ease-out will-change-auto group-hover:text-emerald-600 md:text-3xl lg:text-5xl`}
        >
          {title}
        </h4>
        <p className="mt-2 max-w-md text-zinc-300 md:text-lg lg:text-xl">
          {info}
        </p>
      </div>
      <div className="flex items-center justify-center overflow-hidden p-8 md:w-1/2">
        <div className="overflow-hidden rounded-full">
          <img
            src={image}
            className={`pointer-events-none w-full max-w-[450px] select-none rounded-full transition-transform duration-500 will-change-transform hover:scale-105 group-hover:scale-110 md:my-1`}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
