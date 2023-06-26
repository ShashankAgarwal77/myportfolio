import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1frtizzIWYHBqi8jshXQjsXQ07R-8xBe5/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1frtizzIWYHBqi8jshXQjsXQ07R-8xBe5/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
