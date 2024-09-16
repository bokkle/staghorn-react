import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import ContactInfo from './ContactInfo';

const ContactForm = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const message = {
    message: `user: ${formData.user_name}
    email: ${formData.user_email}
    message: ${formData.message}`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = await emailjs.send(serviceID, templateID, message, userID);
      console.log('Email successfully sent:', result.text);
      toast.success('Message sent! Looking forward to speaking with you.', {
        style: {
          fontSize: '22px',
          marginTop: '50px',
          background: 'rgb(167, 243, 208)',
          color: 'black',
          fontSmooth: 'antialiased',
        },
        duration: 8000,
      });
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (err) {
      console.error('There was an error sending the email:', err.text);
      toast.error('Failed to send. Please use a different contact method.', {
        style: {
          fontSize: '22px',
          marginTop: '50px',
          background: 'rgb(254, 205, 211)',
          color: 'black',
          fontSmooth: 'antialiased',
        },
        duration: 8000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-stone-700 bg-stone-900 p-4 md:p-6 lg:p-10">
      <h4 className="text-xl font-semibold text-stone-200 md:text-2xl">
        Let&apos;s have a chat!
      </h4>
      <p className="text-stone-300 md:text-lg">
        We&apos;re currently available for booking.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex select-none flex-col gap-8"
      >
        <div className="flex flex-col">
          <label
            htmlFor="user_name"
            className="text-sm font-semibold capitalize text-stone-50 md:text-base"
          >
            name:
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="mt-1 rounded-md border-b-[3px] border-stone-400 bg-stone-800 bg-white/0 p-2 text-stone-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="user_email"
            className="text-sm font-semibold capitalize text-stone-50 md:text-base"
          >
            email:
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="mt-1 rounded-md border-b-[3px] border-stone-400 bg-stone-800 bg-white/0 p-2 text-stone-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold capitalize text-stone-50 md:text-base"
          >
            message:
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            placeholder="Let us know how we can help"
            onChange={handleChange}
            className="mt-1 resize-none rounded-md border-b-[3px] border-stone-400 bg-stone-800 bg-white/0 p-2 text-stone-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-full max-w-[300px] select-none bg-emerald-600 p-3 font-sans font-bold uppercase text-stone-100 ring ring-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-700 hover:ring-emerald-700 active:scale-95 md:text-xl"
          style={{ textShadow: '0 0 3px black' }}
        >
          {isLoading ? (
            <span className="animate-pulse">sending...</span>
          ) : (
            <span>send</span>
          )}
        </button>
      </form>
      <ContactInfo />
    </div>
  );
};

export default ContactForm;
