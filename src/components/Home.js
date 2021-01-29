import React from 'react';
import image from '../home__img.svg';


export default function Home() {
  return (
    <main className='home__main flex flex-row-reverse justify-center content-center mt-8'>
      <div>
        <img src={image} alt='heatmap' />
      </div>
      <section className="home__main--content">
        <h1 className='text-5xl bold pr-6 mr-6'>
          <span className=' home__main--heading-span text-green-400'> Hi, <div> {"\n"} </div> </span> 
          I'm Shashank Agarwal<span className='text-green-400'>.</span>
        </h1>
        <p className='text-2xl text-purple-800'>
          Full Stack Designer and Developer
          <span className='text-green-400'>.</span>
        </p>
      </section>
    </main>
  );
}
