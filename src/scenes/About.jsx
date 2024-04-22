import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-5 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        <div className="mt-16 md:mt-0"></div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-5 gap-32">
        {/* EXPERIENCE */}

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">01</p>
              <p className="font-platfair font-semibold text-3xl mt-3">
                Education
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-red absolute right-0 rounded top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Atılım University, Faculty of Engineering, Computer Engineering,
            Bachelor’s degree, 2018 – 2023
          </p>
        </motion.div>

        {/* EXPERIENCE */}

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">02</p>
              <p className="font-platfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-blue absolute rounded right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-semibold ">
            MİA TEKNOLOJİ - Long-term intern (7 months)
          </p>
          <p className="mt-5">
            Directorate of Information Security and Communication Technologies
          </p>
          <p className="mt-5 font-semibold">KAREL - Intern (1 months)</p>
          <p className="mt-5">
            Department of Database Software and Software Development
          </p>
        </motion.div>

        {/* TECHNOLOGIES*/}

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-platfair font-semibold text-5xl">03</p>
              <p className="font-platfair font-semibold text-3xl mt-3">
                Certifications
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-yellow absolute rounded right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <a
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-c48060ba-52ec-492c-bcc7-dfeecab82c23.pdf"
              style={{ textDecoration: "none", transition: "font-size 0.3s" }}
              className="hover:text-lg"
            >
              Business Analysis Fundamentals – ECBA, CCBA, CBAP endorsed, Udemy,
              January 2024
            </a>
          </p>
          <p className="mt-5">
            <a
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8349dfd0-face-4929-be43-423f18483e2d.pdf"
              style={{ textDecoration: "none", transition: "font-size 0.3s" }}
              className="hover:text-lg"
            >
              The Complete 2023 Web Development Bootcamp, Udemy, January 2024
            </a>
          </p>
          <p className="mt-5">
            <a
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-bd5dced8-c867-48e6-96bd-df0059da5460.pdf"
              style={{ textDecoration: "none", transition: "font-size 0.3s" }}
              className="hover:text-lg"
            >
              Beginning C++ Programming – From Beginner to Beyond, Udemy,
              September 2023
            </a>
          </p>
          <p className="mt-5">
            <a
              href="https://www.linkedin.com/in/oerkeskin/recent-activity/all/"
              style={{ textDecoration: "none", transition: "font-size 0.3s" }}
              className="hover:text-lg"
            >
              Honor Student Certificate, Atılım University, 2022 – 2023 Fall
              Term
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
