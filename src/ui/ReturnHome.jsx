import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReturnHome = () => {
  return (
    <Link to={'/'}>
      <button className="flex w-full max-w-[200px] items-center justify-center gap-2 bg-emerald-700 py-2 text-xl font-semibold capitalize text-zinc-50 ring ring-emerald-700 hover:bg-white/0">
        <FaArrowLeft className="text-base" /> return home
      </button>
    </Link>
  );
};

export default ReturnHome;
