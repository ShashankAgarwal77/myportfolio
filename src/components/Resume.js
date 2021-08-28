import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1LSek99-ZwhciD9udMLeC5RwOW_rCdDf6/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1LSek99-ZwhciD9udMLeC5RwOW_rCdDf6/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
