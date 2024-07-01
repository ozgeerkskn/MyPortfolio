import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-black p-8 w-full max-w-3xl mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-0 pb-[56.25%] relative"
        >
          <video controls className="absolute top-0 left-0 w-full h-full">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
