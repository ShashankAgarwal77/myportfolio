import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1n24PvOY9NQT9tN8FY1I1MjW7WFMTBiRN/view?usp=sharing";
  }, []);

  return (
    <a
      href="https://drive.google.com/file/d/1n24PvOY9NQT9tN8FY1I1MjW7WFMTBiRN/view?usp=sharing"
      alt="product design resume"
    >
      Resume
    </a>
  );
}

export default Resume;
