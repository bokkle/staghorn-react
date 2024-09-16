import { Fade, Slide } from 'react-awesome-reveal';
import Heading from '../../ui/Heading';
import ContactForm from './ContactForm';
import ContactImg from './ContactImg';

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} triggerOnce>
          <Heading heading="Contact" subheading="Need an arborist?" />
          <p className="mt-2 max-w-3xl text-stone-300 lg:text-lg xl:text-2xl">
            Get in touch with us for expert tree care in the{' '}
            <strong className="font-semibold capitalize text-emerald-400">
              ottawa valley
            </strong>
            . You can email us through the contact form below, or select another
            contact method. We&apos;re currently offering{' '}
            <em className="text-emerald-400">free estimates</em>.
          </p>
        </Fade>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Slide triggerOnce duration={2000}>
            <ContactForm />
          </Slide>
          <ContactImg />
        </div>
      </div>
    </section>
  );
};

export default Contact;
