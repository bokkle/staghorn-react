import Button from '../ui/Button';

const ContactForm = () => {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col gap-8">
      <form action="" method="POST" className="mt-6 flex w-full flex-col gap-6">
        <div className="w-full">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full max-w-[600px] border-b-[3px] border-gray-400 bg-transparent p-2 text-neutral-100 outline-none focus:border-green-400"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full max-w-[600px] border-b-[3px] border-gray-400 bg-transparent p-2 text-neutral-100 outline-none focus:border-green-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message"></label>
          <textarea
            type="text"
            id="message"
            rows="5"
            name="message"
            placeholder="Message"
            className="w-full max-w-[600px] border-b-[3px] border-gray-400 bg-transparent p-2 text-neutral-100 outline-none focus:border-green-400"
          ></textarea>
        </div>
      </form>
      <Button>send</Button>
    </div>
  );
};

export default ContactForm;
