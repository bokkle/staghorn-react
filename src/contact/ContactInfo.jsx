import { FaMobileAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { MdDiscount } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className="z-10 h-full min-w-[300px] flex-1 p-2 backdrop-blur-md">
      <h1 className="text-3xl font-bold tracking-wide text-neutral-900 lg:text-5xl">
        Contact us.
      </h1>
      <p className="mt-8 text-xl tracking-wide text-neutral-900">
        Staghorn proudly services the{' '}
        <span className="text-xl capitalize text-green-400">ottawa valley</span>
        .
      </p>
      <p className="mt-8 text-xl tracking-wide text-neutral-900">
        Text, call, email, or simply reach out through our contact form.
      </p>
      <div className="my-8 flex flex-col gap-8 text-neutral-900 lg:pl-12">
        <div className="flex items-center gap-2">
          <FaMobileAlt className="text-3xl" />
          <p className="text-xl">416-270-6681</p>
        </div>
        <div className="flex items-center gap-2">
          <MdAlternateEmail className="text-3xl" />
          <p className="text-xl">staghorn.treeservices@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <MdDiscount className="text-3xl" />
          <p className="text-xl capitalize">
            currently offering free estimates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
