import { FaMobileAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { MdDiscount } from 'react-icons/md';
import Button from '../ui/Button';

const Contact = () => {
  const contactInfo = [
    {
      info: '416-270-6681',
      icon: FaMobileAlt,
    },
    {
      info: 'staghorn.treeservices@gmail.com',
      icon: MdAlternateEmail,
    },
  ];

  return (
    <section className="flex min-h-[500px] justify-center bg-neutral-900">
      <div className="relative mb-10 min-h-full w-full min-w-[300px] max-w-screen-2xl bg-neutral-800">
        <div className="animate-moveLeftRight absolute left-[630px] top-28 h-[300px] w-[300px] rounded-full bg-green-700"></div>
        <div className="flex h-full w-full flex-col ring ring-purple-500 lg:flex-row">
          <div className="z-10 h-full min-w-[300px] flex-1 p-2 backdrop-blur-md">
            <h1 className="text-3xl font-bold tracking-wide text-neutral-100 lg:text-5xl">
              Contact us.
            </h1>
            <p className="mt-8 text-xl tracking-wide text-neutral-100">
              Staghorn proudly services the{' '}
              <span className="text-xl capitalize text-green-400">
                ottawa valley
              </span>
              .
            </p>
            <p className="mt-8 text-xl tracking-wide text-neutral-100">
              Text, call, email, or simply reach out through our contact form.
            </p>
            <div className="mt-8 pl-12 flex flex-col gap-6 border text-neutral-100">
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
          <div className="z-10 h-full min-w-[300px] flex-1 bg-neutral-900">
            <h1 className="text-2xl font-bold tracking-wide text-neutral-100">
              let&apos;s have a chat!
            </h1>
            <p className="text-xl text-neutral-100">
              We&apos;re currently available for booking.
            </p>
            <div className="mx-auto flex max-w-[600px] flex-col gap-8 ring ring-green-400">
              <form
                action=""
                method="POST"
                className="flex w-full flex-col gap-6"
              >
                <div className="w-full">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full max-w-[600px] bg-transparent p-2 text-neutral-100"
                  />
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full max-w-[600px] border bg-transparent p-2 text-neutral-100"
                  />
                </div>
                <div>
                  <label htmlFor="message"></label>
                  <textarea
                    type="text"
                    id="message"
                    rows="5"
                    name="message"
                    placeholder="Message"
                    className="w-full max-w-[600px] border bg-transparent p-2 text-neutral-100"
                  ></textarea>
                </div>
              </form>
              <Button>send</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
