import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaBriefcase, FaMoneyBill } from 'react-icons/fa';

const Members = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const userTypes = [
    {
      title: 'Developers',
      description: 'Optimize your project workflows and collaborate seamlessly with your team.',
      icon: <FaCode className="text-5xl mb-4 text-[#3498db]" />,
    },
    {
      title: 'Corporate Professionals',
      description: 'Efficiently manage tasks and enhance productivity in a corporate setting.',
      icon: <FaBriefcase className="text-5xl mb-4 text-[#27ae60]" />,
    },
    {
      title: 'Bankers',
      description: 'Streamline task management and improve organization in the banking sector.',
      icon: <FaMoneyBill className="text-5xl mb-4 text-[#f39c12]" />,
    },
    // Add more user types as needed
  ];

  return (
    <div className="my-14 container mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center" data-aos="fade-up">Who Benefits from TaskFlow Pro?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {userTypes.map((userType, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-4">
              {userType.icon}
            </div>
            <h2 className="text-xl font-semibold mb-4">{userType.title}</h2>
            <p className="text-gray-600">{userType.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
