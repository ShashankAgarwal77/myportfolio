import React from 'react';
import image from '../avatar.svg';

export default function Home() {
  return (
    <main className='home__main flex flex-row-reverse justify-evenly content-center mt-8 bg-black-100'>
      <div>
        <img src={image} alt='avatar for profile' />
      </div>
      <section className='home__main--content'>
        <h1 className='text-3xl bold pr-6 mr-6'>
          <span className=' home__main--heading-span text-green-400'>
            {' '}
            Hello! 👋 I'm <div> {'\n'} </div>{' '}
          </span>
          <span className=' text-white text-6xl'>Shashank Agarwal</span>
          <span className='text-green-400'>.</span>
        </h1>
        <p className='text-2xl text-white'>
          Full Stack Designer and Developer
          <span className='text-green-400'>.</span>
        </p>
        <br></br>
        <br></br>
        <p className='text-xl text-white'>I am known for belief in the power of creativity, minimalism and problem solving <div> {'\n'} </div> {' '} to create a more inclusive communities<span className='text-green-400'>.</span></p>
      </section>
    </main>
    
  );
}
