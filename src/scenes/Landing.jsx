import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import PDFViewer from "../scenes/PDFViewer";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-1/3 z-10 mt-16 md:mt-32 p-10 flex justify-center md:order-2 ">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-pink before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/oe.png"
            />
          </div>
        ) : (
          <img alt="profile" className="z-10 w-full " src="assets/oe.png" />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Özge {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[35px] before:-top-[120px] before:z-[-1] "
            >
              Erkeskin
            </span>
          </p>

          <p className="mt-12 mb-7 text-xl text-center md:text-start">
            I am a <span className="text-red">computer engineer</span>. I'm
            interested in <span className="text-red"> software </span> and{" "}
            <span className="text-red">design technologies</span>. I'm becoming
            more and more proficient in rich interactive experiences for web
            applications. I work on developing professional web applications
            that are responsive and tailored to various requirements. I aim to
            expand my professional network and provide services to more
            individuals and organizations. Being{" "}
            <span className="text-red"> multidisciplinary </span> is a big part
            of my ethos. Whether it's software, design, development, video or
            UX; I'm there. My focus is on working on engaging and{" "}
            <span className="text-red"> interactive web applications </span>{" "}
            across the spectrum of devices and platforms. If you have an
            exciting project you are interested in working together on,{" "}
            <span className="text-red">contact me!</span>
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <PDFViewer />
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
