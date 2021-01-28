import react from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className='bg-green-400'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-green-100
                    hover:text-green-800 text-4xl font-bold cursive  tracking-widest'
          >
            Shashank
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800'
            activeClassName='text-green-100 bg-green-500'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800'
            activeClassName='text-green-100 bg-green-500'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800'
            activeClassName='text-green-100 bg-green-500'
          >
            About Me!
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.behance.net/shashankagarwal"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/shashank-agarwal11/"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/_iamtheshashank"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
