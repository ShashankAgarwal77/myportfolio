import React, { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    window.location.href =
      'https://drive.google.com/file/d/1KP3ET0ZDyhVvW20-5A9TozigegXxd_9W/view?usp=sharing';
  }, []);

  return (
    <a
      href='https://drive.google.com/file/d/1KP3ET0ZDyhVvW20-5A9TozigegXxd_9W/view?usp=sharing'
      alt='product design resume'
    >
      Resume
    </a>
  );
}

export default Resume;
