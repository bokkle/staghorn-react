import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import GreenBall from './GreenBall';

const Contact = () => {
  return (
    <section className="flex justify-center bg-neutral-500 px-2 py-24">
      <div className="relative mb-10 min-h-[600px] w-full min-w-[300px] max-w-screen-2xl overflow-hidden rounded-xl bg-neutral-100 shadow-lg">
        <GreenBall />
        <div className="flex h-full w-full flex-col overflow-hidden rounded-xl lg:flex-row">
          <ContactInfo />
          <div className="z-10 h-full min-w-[300px] flex-1 bg-neutral-950 px-3 py-6">
            <h1 className="text-2xl font-bold tracking-wide text-neutral-100">
              let&apos;s have a chat!
            </h1>
            <p className="text-xl text-neutral-100">
              We&apos;re currently available for booking.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
