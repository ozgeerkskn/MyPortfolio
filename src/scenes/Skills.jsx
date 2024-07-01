import React from "react";
import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 md:flex md:justify-between md:pl-20">
          <motion.div
            className="md:w-1/2 lg:w-1/3"
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
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
          </motion.div>
        </div>

        <div
          className="bg-010026 min-h-screen flex items-center justify-center"
          style={{ marginTop: "-20vh" }}
        >
          <style>
            {`
                .avatar {
                    --radius: 14rem;
                    --d: calc(var(--i) / var(--total));
                    --r-offset: -0.15turn;
                    --r-amount: 1turn;
                    --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
                    transform: rotate(var(--r)) translate(var(--radius)) rotate(calc(-1 * var(--r)));
             
                }
                  @media (max-width: 768px) {
              .avatar {
                --radius: 10rem; /* Avatar boyutu */
             
              }
            }
            `}
          </style>
          <div className="mt-8 md:flex md:flex-wrap md:justify-center">
            <div className="mt-16 md:mt-0"></div>
          </div>
          <div
            style={{ "--total": 14 }}
            className="relative rounded-full grid size-72 [grid-template-areas:'stack'] place-content-center
        [&>label]:[grid-area:stack]
        [&>label]:size-20
        [&>label]:rounded-full
        [&>label]:grid
        [&>label]:place-content-center 
        [&>label]:bg-white/20
        [&>label]:relative
        [&>label]:text-sky-500
        [&>label]:text-xl
        [&>label]:transition-all 
        [&>label]:duration-500
        [&>label]:cursor-pointer
        [&>label]:ring-4
        [&>label]:ring-white/5
        [&_img]:rounded-full
        [&_img]:s-full
        [&_img]:object-cover
        [&_img]:transition-all
        [&_img]:duration-1000
        [&_img]:ease-in-out
        [&_svg]:transition-all
        [&_svg]:duration-500
        [&_svg]:ease-in-out
        [&_svg]:absolute
        [&_svg]:top-2/4
        [&_svg]:left-2/4
        [&_svg]:-translate-x-2/4
        [&_svg]:-translate-y-2/4
        [&_svg]:w-[125px]
        [&_svg]:opacity-0 
        [&_svg]:-z-10

        [&_input:checked+label]:transform-none
        [&_input:checked+label]:duration-1000
        [&_input:checked+label>img]:scale-[200%]
        [&_input:checked+label>svg]:opacity-100
        [&_input:checked+label>svg]:scale-[225%]
        [&_input:checked+label>svg]:rotate-45
        [&_input:checked+label>svg]:[transition-delay:700ms,500ms,2000ms]
        
        peer-checked/theme:before:[&_#center]:-inset-[3000%]
        peer-checked/theme:[&>label]:text-white
    "
          >
            <div
              id="center"
              className="absolute inset-0 m-auto size-32 bg-gradient-to-r from-blue-500 to-indigo-600 border border-white/40   rounded-full grid place-content-center uppercase font-semibold tracking-wider text-white text-lg  
        before:absolute 
            before:-inset-0
            before:bg-sky-950 
            before:rounded-full
            before:-z-10
            before:transition-all
            before:duration-1000
            peer-checked/theme:before:-inset-[3000%]
        
        "
            >
              Skills
            </div>

            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-1"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-1"
              id="avatar-1"
              className="avatar"
              style={{ "--i": 1 }}
            >
              <img
                src={require("../assets/restfulapi.png")}
                alt="RESTful API"
              />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    RESTful API - Backend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-2"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-2"
              id="avatar-2"
              className="avatar"
              style={{ "--i": 2 }}
            >
              <img src={require("../assets/postgre.png")} alt="PostgreSQL" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    PostgreSQL - Databases
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-3"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-3"
              id="avatar-3"
              className="avatar"
              style={{ "--i": 3 }}
            >
              <img src={require("../assets/mongo.png")} alt="MongoDB" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    MongoDB - Databases
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-4"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-4"
              id="avatar-4"
              className="avatar"
              style={{ "--i": 4 }}
            >
              <img src={require("../assets/express.png")} alt="Express.js" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    Express.js - Backend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-5"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-5"
              id="avatar-5"
              className="avatar"
              style={{ "--i": 5 }}
            >
              <img src={require("../assets/nodejs.png")} alt="Node.js" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    Node.js - Backend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-6"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-6"
              id="avatar-6"
              className="avatar"
              style={{ "--i": 6 }}
            >
              <img src={require("../assets/react.png")} alt="React.js" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    React.js - Frontend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-7"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-7"
              id="avatar-7"
              className="avatar"
              style={{ "--i": 7 }}
            >
              <img src={require("../assets/css.webp")} alt="CSS" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    CSS - Frontend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-8"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-8"
              id="avatar-8"
              className="avatar"
              style={{ "--i": 8 }}
            >
              <img src={require("../assets/html.webp")} alt="HTML" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    HTML - Frontend Development
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-9"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-9"
              id="avatar-9"
              className="avatar"
              style={{ "--i": 9 }}
            >
              <img src={require("../assets/java.png")} alt="Java" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    JAVA - Programming Languages
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-10"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-10"
              id="avatar-10"
              className="avatar"
              style={{ "--i": 10 }}
            >
              <img src={require("../assets/python.png")} alt="Python" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    Python - Programming Languages
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-11"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-11"
              id="avatar-11"
              className="avatar"
              style={{ "--i": 11 }}
            >
              <img src={require("../assets/c++_logo.jpg")} alt="C++" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    C++ - Programming Languages
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-12"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-12"
              id="avatar-12"
              className="avatar"
              style={{ "--i": 12 }}
            >
              <img src={require("../assets/jslogo.jpg")} alt="JavaScript" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    JavaScript - Programming Languages
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-13"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-13"
              id="avatar-13"
              className="avatar"
              style={{ "--i": 13 }}
            >
              <img src={require("../assets/git.jpg")} alt="Git" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    Git - Version Control
                  </textPath>
                </text>
              </svg>
            </label>
            <input
              type="radio"
              name="radio-avatar"
              id="radio-avatar-14"
              className="sr-only"
            />
            <label
              htmlFor="radio-avatar-14"
              id="avatar-14"
              className="avatar"
              style={{ "--i": 14 }}
            >
              <img src={require("../assets/heroku.png")} alt="Heroku" />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath xlinkHref="#circlePath">
                    Heroku - Deployment
                  </textPath>
                </text>
              </svg>
            </label>
          </div>

          {/* SVG şablonunu buraya ekle */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            width="0"
            height="0"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0"
              />
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
