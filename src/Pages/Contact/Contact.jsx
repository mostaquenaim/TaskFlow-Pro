import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container mx-auto my-14">
      <h1 className="text-4xl font-semibold mb-8 text-center" data-aos="fade-up">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right">
          <img
            src="/src/assets/img_why.png.webp"
            alt="Contact TaskFlow Pro"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div data-aos="fade-left">
          <p className="text-xl mb-4">
            We'd love to hear from you! If you have any questions, feedback, or inquiries,
            feel free to reach out to us. Our dedicated support team is here to assist you.
          </p>
          <p className="text-xl">
            <strong>Email:</strong> info@taskflowpro.com
          </p>
          <p className="text-xl">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-xl">
            <strong>Address:</strong> 123 TaskFlow Street, Cityville, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
