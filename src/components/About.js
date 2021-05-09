import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset -> url
        }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className='relative'>
      {/* <img
        src={bgImage}
        alt='nature'
        className='absolute w-full'
      /> */}
      <div className='p-5 md:p-10 lg:pt-12 container mx-auto relative'>
        <section className='about_container p-10 rounded-lg shadow-2xl lg:flex lg:p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt={author.name}
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive mt-5 text-3xl text-green-300 mb-4'>
              Hey There. I'm{' '}
              <span className='text-5xl text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='loniby3f'
                dataset='production'
              />
            </div>
            <div className=" social_heading text-3xl text-white mb-2">
              <h3>Social Media Handles 👇 </h3>
            </div>
            <div className='flex items-end'>
              <div>
                <a href="https://www.linkedin.com/in/shashank-agarwal11/">
                  <FaLinkedinIn className="text-white mr-4 hover:text-blue-700" size={28} /> 
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/boywhodesign/">
                  <FaInstagram className="text-white mr-4 hover:text-red-500" size={28} /> 
                </a>
              </div>
              <div>
                <a href="https://www.behance.net/shashankagarwal/">
                  <FaBehance className="text-white mr-4 hover:text-blue-600" size={28} /> 
                </a>
              </div> 
              <div>
                <a href="https://github.com/ShashankAgarwal77/">
                  <FaGithub className="text-white mr-4 hover:text-gray-600" size={28} /> 
                </a>
              </div>
              <div>
                <a href="https://mail.google.com/mail/u/?authuser=shashankagarwal.official@gmail.com/">
                  <FaMailBulk className="text-white mr-4 hover:text-red-700" size={28} /> 
                </a>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
