import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import bannerImage from '../../assets/img_why.png.webp';

const Banner = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center py-14 justify-between">
      <div className='lg:flex-1'>
        <h1 className="text-4xl mb-2 font-semibold">Enhance Your Workflow <br/> with TaskFlow Pro</h1>
        <p>Welcome to TaskFlow Pro, your ultimate solution for streamlined task management. Supercharge your productivity, foster collaboration, and achieve your goals with our intuitive platform.</p>
        {/* {user ? ( */}
          <Link to='/dashboard'>
            <button className='btn btn-accent bg-black text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-black'>
              Let’s Explore
            </button>
          </Link>
        {/* ) : ( */}
          {/* <Link to='/login'>
            <button className='btn btn-accent bg-black text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-black'>
              Let’s Explore
            </button>
          </Link>
        )} */}
      </div>
      <div className='lg:flex-1'>
        <img src={bannerImage} alt="TaskFlow Pro Banner" />
      </div>
    </div>
  );
};

export default Banner;
