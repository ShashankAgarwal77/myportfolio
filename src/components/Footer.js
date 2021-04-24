import React from 'react';
import {
  Box,
} from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <p
        className='text-sm text-green-500 flex justify-evenly'
        style={{ textAlign: 'center' }}
      >
        © 2021 Shashank Agarwal <div> {'\n'} </div> this website is developed by
        Shashank Agarwal with ReactJs + Sanity.io, ❤️ & ☕
      </p>
    </Box>
  );
};
export default Footer;
