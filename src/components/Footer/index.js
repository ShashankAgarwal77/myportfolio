import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

const Footer = ({ ...otherProps }) => {
  return (
    <footer className='footer_container text-green-700 bg-black-700'>
      <div className='flex flex-col justify-between w-full max-w-7xl mx-auto px-20 py-10 credits mt-5 text-black text-green-500 uppercase'>
        <div>
          <div className=' social_heading text-3xl text-white mb-5'>
            <h3>
              Let's Connect<span className='text-green-700'>.</span>
              <span role='img' aria-label='Look Down' className='look_down'>
                👇
              </span>{' '}
            </h3>
          </div>
          <div className='flex items-end justify-evenly mb-10'>
            <div class='social-media--handle social-div__behance'>
              <a href='https://www.behance.net/shashankagarwal/'>
                <FaBehance
                  className='behance text-white mr-4 hover:text-black transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div class='social-media--handle social-div__instagram'>
              <a href='https://www.instagram.com/boywhodesign/'>
                <FaInstagram
                  className='instagram text-white mr-4 hover:text-red-500 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div class='social-media--handle social-div__linkedin'>
              <a href='https://www.linkedin.com/in/shashank-agarwal11/'>
                <FaLinkedinIn
                  className='linkedin text-white mr-4 hover:text-blue-700 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div class='social-media--handle social-div__github'>
              <a href='https://github.com/ShashankAgarwal77/'>
                <FaGithub
                  className='github text-white mr-4 hover:text-gray-600 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div class='social-media--handle social-div__mail'>
              <a type='email' href='mailto:shashankagarwal.official@gmail.com'>
                <FaMailBulk
                  className='mail text-white mr-4 hover:text-red-700 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>

        <div className='text-xs'>
          {/* <p className='text-sm text-gray-700 text-lowercase'>
            {' '}
            This website is also created by me using ReactJS + Sanity.io{' '}
          </p> */}
          <p className='text-gray-600'>
            Created by me with{' '}
            <span role='img' aria-label='react, coffee and love'>
              ⚛️ ☕ &amp; ❤️
            </span>
          </p>
          <p className='text-gray-600 font-bold'>
            {' '}
            &#169; Shashank Agarwal, 2021{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
