const Heading = ({ heading, subheading }) => {
  return (
    <>
      <h2 className="text-xl font-thin text-stone-100 md:text-2xl">
        <span className="mr-1 text-2xl text-emerald-400 md:text-3xl">
          {'['}
        </span>
        {subheading}
        <span className="ml-1 text-2xl text-emerald-400 md:text-3xl">
          {']'}
        </span>
      </h2>
      <h3 className="text-5xl font-bold capitalize text-stone-100 md:text-6xl lg:text-7xl">
        {heading}
        <span className="animate-pulse text-emerald-400">.</span>
      </h3>
    </>
  );
};

export default Heading;
