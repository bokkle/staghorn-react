import { LuPhone, LuMail } from 'react-icons/lu';
import { MdOutlineSms } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <>
      <div className="mt-10 flex items-center justify-between">
        <div className="h-[2px] w-1/3 bg-slate-500"></div>
        <p className="capitalize text-slate-500">or</p>
        <div className="h-[2px] w-1/3 bg-slate-500"></div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <LuPhone className="text-4xl text-emerald-400" />
            <div className="h-[30px] w-[1px] bg-zinc-500" />
            <MdOutlineSms className="text-4xl text-emerald-400" />
          </div>
          <p className="text-slate-100 sm:text-lg md:text-xl">416-270-6681</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LuMail className="text-4xl text-emerald-400" />
          <p className="text-slate-100 sm:text-lg md:text-xl">
            staghorn.treeservices@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
