import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1TlRx7VCF1J0osoCSQ6eU_LAjYq_9Sv0i/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1TlRx7VCF1J0osoCSQ6eU_LAjYq_9Sv0i/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
