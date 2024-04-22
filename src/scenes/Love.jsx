import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Love = () => {
  const processStyle = `mx-auto relative max-w-[300px] h-[300px] flex flex-col justify-center pt-16 mt-48 before:absolute before:top-[-90px] before:-ml-[80px] before:left-1/2`;

  return (
    <section id="love" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red ">
          I LOVE ..
        </p>
        <LineGradient width="w-1/3" />
      </motion.div>

      {/* PROCESS */}
      <div className="md:flex md:justify-between gap-8 pb-0">
        <motion.div
          className={`bg-blue ${processStyle} before:content-person2 w-1/4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-4xl mb-5 ">DIGITAL</p>
        </motion.div>
        <motion.div
          className={`bg-red ${processStyle} before:content-person5 w-1/4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-4xl mb-5">SOFTWARE</p>
        </motion.div>
        <motion.div
          className={`bg-purple ${processStyle} before:content-person3 w-1/4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-4xl mb-5">MY FAMILY</p>
        </motion.div>
        <motion.div
          className={`bg-indigo ${processStyle} before:content-person4 w-1/4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-4xl mb-5">
            UI/UX DESIGN
          </p>
        </motion.div>
        <motion.div
          className={`bg-orange ${processStyle} before:content-person1 w-1/4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-4xl mb-5">TRAVEL</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Love;
