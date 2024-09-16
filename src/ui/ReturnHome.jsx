import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReturnHome = () => {
  return (
    <Link to={'/'} className="w-[200px] select-none">
      <button className="flex w-[200px] items-center justify-center gap-2 bg-emerald-700 py-2 font-sans text-xl font-semibold capitalize text-stone-50 ring ring-emerald-700 transition-all duration-150 ease-linear hover:bg-emerald-800 hover:ring-emerald-800">
        <FaArrowLeft className="text-base" /> return home
      </button>
    </Link>
  );
};

export default ReturnHome;
