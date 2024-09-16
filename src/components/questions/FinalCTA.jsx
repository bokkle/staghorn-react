const FinalCTA = () => {
  return (
    <>
      <h4 className="mt-6 text-center text-2xl font-semibold text-zinc-50">
        You&apos;ve answered my questions! Take me to the contact section.
      </h4>
      <div className="mt-6 flex justify-center">
        <button
          className="relative mx-auto w-full max-w-[300px] select-none bg-emerald-600 p-3 font-sans font-bold uppercase text-zinc-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-700 hover:ring-emerald-700 active:scale-95 md:text-xl"
          style={{ textShadow: '0 0 3px black' }}
        >
          <a href="#contact" className="absolute inset-0" />
          contact
        </button>
      </div>
    </>
  );
};

export default FinalCTA;
