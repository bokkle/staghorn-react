import Heading from '../../ui/Heading';
import ContactForm from './ContactForm';
import ContactImg from './ContactImg';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-zinc-950 px-4 py-16 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <Heading heading="Contact" subheading="Need an arborist?" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ContactForm />
          <ContactImg />
        </div>
      </div>
    </section>
  );
};

export default Contact;
