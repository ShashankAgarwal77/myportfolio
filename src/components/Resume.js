import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1sIDSf-CHyNH-bwbjzhxUMZ7ED4zvooWE/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1sIDSf-CHyNH-bwbjzhxUMZ7ED4zvooWE/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
