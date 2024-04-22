import SocialMediaIcons from "../components/SocialMediaIcons";

const getTime = () => {
  const d = new Date();
  const year = d.getFullYear();
  return year;
};

const Footer = () => {
  return (
    <footer className="h-58 bg-red pb-10">
      <div className="w-5/6 mx-auto flex flex-col items-center justify-center">
        <div className="  items-center">
          <SocialMediaIcons />
        </div>
        <div className="text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            ÖZGE ERKESKİN
          </p>
          <p className="font-playfair text-md text-yellow">
            © {getTime()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
