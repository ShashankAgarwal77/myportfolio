import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1KH3zQpkg5jToo0Svd0Nu3tR6O81SMrYX/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1KH3zQpkg5jToo0Svd0Nu3tR6O81SMrYX/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
