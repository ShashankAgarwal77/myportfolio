import React from 'react';
// import image from '../avatar.svg';
import LottieAnimation from './Lottie';
import home from '../Animation/home_animation.json';

export default function Home() {
  return (
    <main className='home__main flex flex-row-reverse justify-between content-center my-8 bg-black-100'>
      <div id='home_image--container'>
        {/* <img id="home_image--container" src={image} alt='avatar for profile' /> */}
        <LottieAnimation lotti={home} height={450} width={450} />
      </div>
      <section className='home__main--content'>
        <h1 className='text-3xl bold pr-6 mr-6'>
          <span className=' home__main--heading-span text-green-400'>
            {' '}
            Hello! 👋 I'm <div> {'\n'} </div>{' '}
          </span>
          <span className=' home_header-span text-5xl leading-2 text-white md:text-6xl'>
            Shashank Agarwal
          </span>
          <span className='text-green-400'>.</span>
        </h1>
        <p className='home_header-p mt-3 text-xl uppercase md:text-2xl text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
          {' '}
          UX Designer and Developer
          <span className='text-green-400'>.</span>
        </p>
        <br></br>
        <br></br>
        <p className='text-lg mt-5 md:text-xl text-white'>
          <span className='home_p-span text-gray-500'>
            I am known for belief in the power of{' '}
          </span>
          <span className='p_creativity bg-gradient-to-r from-green-400 to-blue-500'>
            {' '}
            creativity{' '}
          </span>
          ,{' '}
          <span className='p_minimalism bg-gradient-to-r from-gray-700 to-gray-900'>
            {' '}
            minimalism{' '}
          </span>{' '}
          <span className='text-gray-500'>&amp;</span>
          <span className='p_problem bg-gradient-to-r from-red-500  to-red-800'>
            {' '}
            problem solving{' '}
          </span>{' '}
          <div> {'\n'} </div>{' '}
          <span className='home_p-span text-gray-500'>
            to create a more inclusive communities{' '}
          </span>
          <span className='text-green-400'>.</span>
        </p>
      </section>

    </main>
    
  );
}
