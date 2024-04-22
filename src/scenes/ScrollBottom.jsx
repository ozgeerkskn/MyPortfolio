import React from "react";

const ScrollBottom = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-end mt-20 pt-15 ">
      <button
        className="scroll-to-top-button bg-yellow w-10 h-10 cursor-pointer items-center"
        onClick={scrollToBottom}
      >
        ↓
      </button>
    </div>
  );
};

export default ScrollBottom;
