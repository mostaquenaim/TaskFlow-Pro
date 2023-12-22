import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container mx-auto my-14">
      <h1 className="text-4xl font-semibold mb-8 text-center" data-aos="fade-up">About TaskFlow Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right">
          <img
            src='/src/assets/img_why.png.webp'
            alt="About TaskFlow Pro"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div data-aos="fade-left">
          <p className="text-xl mb-4">
            TaskFlow Pro is more than just a task management platform; it's your ally in achieving
            unparalleled productivity and seamless collaboration. With a user-friendly interface and
            powerful features, TaskFlow Pro adapts to your workflow, making task management a breeze.
          </p>
          <p className="text-xl">
            Our mission is to empower individuals, teams, and organizations to elevate their efficiency
            and reach new heights. TaskFlow Pro is designed for developers, corporate professionals,
            bankers, and anyone looking to streamline their tasks and achieve their goals effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
