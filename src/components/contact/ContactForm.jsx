import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID', // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('There was an error sending the email:', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="bg-zinc-900 p-4 md:p-6 lg:p-10">
      <h3 className="text-xl font-semibold text-zinc-200 md:text-2xl">
        Let&apos;s have a chat!
      </h3>
      <h3 className="text-zinc-300 md:text-lg">
        We&apos;re currently available for booking
      </h3>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-semibold capitalize text-zinc-50 md:text-base"
          >
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="What's your name?"
            onChange={handleChange}
            className="border-b-[3px] border-zinc-100 bg-white/0 p-2 text-zinc-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-semibold capitalize text-zinc-50 md:text-base"
          >
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="What's your email?"
            onChange={handleChange}
            className="border-b-[3px] border-zinc-100 bg-white/0 p-2 text-zinc-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-semibold capitalize text-zinc-50 md:text-base"
          >
            message:
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            placeholder="How can we help?"
            onChange={handleChange}
            className="border-b-[3px] border-zinc-100 bg-white/0 p-2 text-zinc-100 focus:border-emerald-400 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-full max-w-[300px] p-2 font-bold uppercase text-slate-100 ring ring-emerald-400 hover:bg-emerald-400"
          style={{ textShadow: '0 0 3px black' }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
