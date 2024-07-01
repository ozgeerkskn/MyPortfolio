import React, { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Modal from "../components/Modal"; // Modal bileşenini import edin

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, videoSrc, onProjectClick }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative cursor-pointer"
      onClick={() => onProjectClick(videoSrc)}
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img
        className="m-5 w-[400px] h-[250px]"
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");

  const handleProjectClick = (videoSrc) => {
    setCurrentVideoSrc(videoSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 m-5 bg-red
              w-[400px] h-[250px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Project 1"
            description="It was developed so that users can manage their air travel transactions."
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />
          <Project
            title="Project 2"
            description="Professional website for CAN Mimarlık"
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            description="Daily to do list"
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />
          <div
            className="flex justify-center text-center items-center p-10 m-5 bg-yellow
            w-[400px] h-[250px] text-2xl font-playfair font-semibold"
          >
            AUTHENTICATION & SECURITY
          </div>
          <Project
            title="Project 5"
            description="It is a web-based travel diary application."
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            description="Emoji library"
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />
          <Project
            title="Project 7"
            description="It is an automated vulnerability analysis program developed to detect system vulnerabilities of institutions in advance."
            videoSrc="/assets/Video.mp4"
            onProjectClick={handleProjectClick}
          />
          <div
            className="flex justify-center text-center items-center m-5 p-10 bg-blue
            w-[400px] h-[250px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={currentVideoSrc}
      />
    </section>
  );
};

export default Projects;
