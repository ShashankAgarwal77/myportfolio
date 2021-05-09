import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
           title,
           date,
           place,
           description,
           projectType,
           link,
           tags
       }`,
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-black-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-white flex justify-center cursive'>
          {' '}
          My Projects
        </h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Welcome to my projects page!
        </h2>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='project_box relative rounded-lg shadow-xl bg-white p-16'>
                <div className='project_container flex flex-col '>
                  <h3 className='text-white text-2xl lg:text-3xl font-bold mb-2 hover:text-red-700'>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='flex flex-col text-gray-500 text-xs '>
                    <div>
                      <span>
                        <strong className='font-bold'>Finished on</strong>:{' '}
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span>
                        <strong className='font-bold'>Company</strong>:{' '}
                        {project.place}
                      </span>
                    </div>
                    <div>
                      <span>
                        <strong className='font-bold'>Type</strong>:{' '}
                        {project.projectType}
                      </span>
                    </div>
                    <p className='my-5 p-0 text-base md:text-lg text-gray-400 leading-relaxed'>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-red-500 font-bold hover:underline hover:text-green-400 text-xl'
                    >
                      View the Project{' '}
                      <span role='img' aria-label='right pointer'>
                        👉
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
