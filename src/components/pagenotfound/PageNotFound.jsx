import { Link } from 'react-router-dom';
import tree from '../../assets/pixelTree.gif';

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-4 overflow-x-hidden bg-zinc-950 p-4">
      <img
        src={tree}
        className="pointer-events-none size-60 select-none md:size-96"
        alt="a pixel art gif of a tree blowing in the wind"
      />
      <h1 className="text-xl font-semibold uppercase text-zinc-50">
        404 page not found
      </h1>
      <Link to="/">
        <button
          className="select-none bg-emerald-400 px-8 py-3 text-lg font-bold capitalize text-zinc-50 ring ring-emerald-400 transition-all duration-150 ease-out hover:bg-white/0 lg:text-xl"
          style={{ textShadow: '0 0 3px black' }}
        >
          return to site
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
