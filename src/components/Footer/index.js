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
            <h3>Let's Connect<span className='text-green-700'>.</span>👇 </h3>
          </div>
          <div className='flex items-end justify-evenly mb-10'>
            <div>
              <a href='https://www.linkedin.com/in/shashank-agarwal11/'>
                <FaLinkedinIn
                  className='text-white mr-4 hover:text-blue-700 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/boywhodesign/'>
                <FaInstagram
                  className='text-white mr-4 hover:text-red-500 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div>
              <a href='https://www.behance.net/shashankagarwal/'>
                <FaBehance
                  className='text-white mr-4 hover:text-blue-600 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div>
              <a href='https://github.com/ShashankAgarwal77/'>
                <FaGithub
                  className='text-white mr-4 hover:text-gray-600 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
            <div>
              <a href='https://mail.google.com/mail/u/?authuser=shashankagarwal.official@gmail.com/'>
                <FaMailBulk
                  className='text-white mr-4 hover:text-red-700 transition duration-500 ease-in-out'
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          {/* <p className='text-sm text-gray-700 text-lowercase'>
            {' '}
            This website is also created by me using ReactJS + Sanity.io{' '}
          </p> */}
          <p className='text-gray-600'>Created by me with ⚛️ ❤️ &amp; ☕</p>
          <p className='text-gray-600 font-bold'> &#169; Shashank Agarwal, 2021 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
