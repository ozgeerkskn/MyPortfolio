const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://www.linkedin.com/in/oerkeskin/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://github.com/ozgeerkskn"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
