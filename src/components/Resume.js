import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1fGyogJHOi7f497eCQ6tlFhUC44zwWaIP/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1fGyogJHOi7f497eCQ6tlFhUC44zwWaIP/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
