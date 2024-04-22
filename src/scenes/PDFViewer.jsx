import React from "react";
import resume from "../assets/resume.pdf";
const PDFViewer = () => {
  return (
    <div className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5">
      <button className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
        <a href={resume} download="resume">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default PDFViewer;
