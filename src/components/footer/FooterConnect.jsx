import { RiFacebookBoxLine, RiInstagramLine } from 'react-icons/ri';

const FooterConnect = () => {
  return (
    <div className="flex flex-col gap-3 border-b border-zinc-700 pb-4 md:border-none">
      <h2 className="text-xl font-semibold capitalize text-zinc-50">connect</h2>
      <div className="flex gap-3">
        <a
          href="https://www.facebook.com/people/Staghorn-Tree-Service/100095581361451/"
          target="_blank"
        >
          <RiFacebookBoxLine className="text-4xl text-zinc-300 transition-colors duration-300 ease-out hover:text-[#1877f2]" />
        </a>
        <a
          href="https://www.instagram.com/staghorn_treeservice/"
          target="_blank"
        >
          <RiInstagramLine className="text-4xl text-zinc-300 transition-colors duration-300 ease-out hover:text-[#c13584]" />
        </a>
      </div>
      <p className="text-zinc-300 md:text-lg">416-270-6681</p>
      <p className="text-zinc-300 md:text-lg">
        staghorn.treeservices@gmail.com
      </p>
    </div>
  );
};

export default FooterConnect;
