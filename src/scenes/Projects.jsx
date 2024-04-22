import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.div
      variants={projectVariant}
      className="relative cursor-pointer"
      onClick={handleClick}
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img
        className=" m-5 w-[400px] h-[250px]"
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center "
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
      <div className="flex justify-center border-l-4 border-r-4 border-red ">
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
              w-[400px] h-[250px]  text-2xl font-playfair font-semibold "
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Project 1"
            description="It was developed so that users can manage their air travel transactions. "
          />
          <Project
            title="Project 2"
            description="Professional website for CAN Mimarlık"
            link="https://canmimarlik-777582d3ae84.herokuapp.com/"
          />

          {/* ROW 2 */}
          <Project title="Project 3" description="Daily to do list" />
          <div
            className="flex justify-center text-center items-center p-10 m-5 bg-yellow
            w-[400px] h-[250px] text-2xl font-playfair font-semibold "
          >
            AUTHENTICATION & SECURITY
          </div>
          <Project
            title="Project 5"
            description="It is a web-based travel diary application."
          />

          {/* ROW 3 */}
          <Project title="Project 6" description="Emoji library" />
          <Project
            title="Project 7"
            description="It is an automated vulnerability analysis program developed to detect system vulnerabilities of institutions in advance."
          />
          <div
            className="flex justify-center text-center items-center m-5 p-10 bg-blue
            w-[400px] h-[250px] text-2xl font-playfair font-semibold "
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
