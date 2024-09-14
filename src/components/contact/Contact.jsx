import { Fade, Slide } from 'react-awesome-reveal';
import Heading from '../../ui/Heading';
import ContactForm from './ContactForm';
import ContactImg from './ContactImg';

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} cascade>
          <Heading heading="Contact" subheading="Need an arborist?" />
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
