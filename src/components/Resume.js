import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1rRqH16Y1Aici7lqysiNlP-DgRfHvh2Qz/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1rRqH16Y1Aici7lqysiNlP-DgRfHvh2Qz/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
