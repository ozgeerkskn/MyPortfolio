import React, { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Estate Project",
    img: "/assets/realestate.png",
    desc: "This project allows real estate agents to upload property listings to the site and helps users searching for properties to view suitable options. Users, agents, and administrators manage their activities through separate login pages. Developed as a full-stack application, the project utilizes Java Spring Boot and Hibernate for the backend, and React for the frontend, with Oracle as the database. The project structure includes configuration, controllers, data transfer objects (DTOs), models, repositories, requests, responses, services, and resources, optimizing user experience and data management while enhancing sustainability and easing the development process.",
  },
  {
    id: 2,
    title: "Flight Management System",
    img: "/assets/flight.png",
    desc: "This C++-developed aircraft management system streamlines various operational aspects of managing an airline fleet. It includes functionalities for scheduling flights, tracking aircraft maintenance, managing crew assignments, and handling passenger bookings. The system's architecture is designed to ensure efficient data management and seamless integration of various components. Utilizing object-oriented programming (OOP) principles, the software is robust, scalable, and easily maintainable. OOP principles enhance the modularity and reusability of the code, contributing to a more organized and efficient development process.",
  },
  {
    id: 3,
    title: "Multiple Travel Tracking Map",
    img: "/assets/multiple.png",
    desc: "The Multiple-Travel-Tracking-Map application is a simple travel journal system built using Express.js for the server-side and PostgreSQL as the database. It allows users to track the countries they have visited and manage user information, including names and preferred colors. Key features include user management, country tracking with autocomplete for country codes, and a homepage displaying visited countries and visit counts. The application also utilizes EJS for templating and body-parser for handling form data.",
  },
  {
    id: 4,
    title: "Web3 Project",
    img: "/assets/web3.png",
    desc: "The Web3-DBankApp is a decentralized banking application built using Web3 technologies. The project leverages JavaScript, CSS, HTML, and the Motoko programming language. It utilizes the Internet Computer platform to manage decentralized finance operations. Key features include the ability to start a local replica, deploy canisters, and proxy API requests for frontend development. The application is designed for both development and production environments, ensuring smooth operation and deployment processes.",
  },
  {
    id: 5,
    title: "Student Management System",
    img: "assets/student.png",
    desc: "The Student Management System is a Java Swing application designed to manage student records efficiently. Developed using Apache NetBeans IDE, it enables basic CRUD (Create, Read, Update, Delete) operations for student registrations, courses, and scores. The system features functionality for adding, editing, and deleting student and course information, as well as calculating and displaying students' grades based on their scores. It utilizes a MySQL database managed through phpMyAdmin and supports user authentication with predefined credentials, ensuring a secure and modular structure for easy updates and maintenance.",
  },
  {
    id: 6,
    title: "Automated Vulnerability Analysis Program",
    img: "/assets/avap.png",
    desc: "AVAP is a Python-based project developed on an Ubuntu platform designed for conducting internal network vulnerability scans. It identifies and reports system security weaknesses, providing detailed, downloadable reports. The tool requires authorized personnel to perform scans, ensuring security compliance. Users can schedule automatic scans and visualize results with graphical analysis, making it easier to interpret findings. The application features a user-friendly interface, enhancing usability for both technical and non-technical users.",
  },
  {
    id: 7,
    title: "Professional Web Site",
    img: "/assets/website.png",
    desc: "The Architectural Firm Professional Website is  featuring visually appealing slideshows to showcase the firm's portfolio and concise descriptions to introduce the company. Key features include a responsive design for optimal viewing on all devices, a project gallery, team profiles, and easy access to contact information. Additionally, it integrates a content management system (CMS) for easy updates, and SEO optimization to enhance search engine visibility, providing a robust online presence for the firm.",
  },
  {
    id: 7,
    title: "Capital Quiz",
    img: "/assets/capital.png",
    desc: "The Capital Quiz is a quiz application designed to test users' knowledge of capital cities. Developed using Express.js, it interacts with a PostgreSQL database to dynamically retrieve quiz questions. Key features include user interaction through a simple web interface, tracking correct answers, and monitoring the total count of correct responses. The application emphasizes ease of use and educational engagement, making it an effective tool for learning about world capitals.",
  },
  {
    id: 8,
    title: "Joke API",
    img: "/assets/jokeAPI.png",
    desc: "The JokeAPI is a web application that utilizes the JokeAPI to provide users with a fun and interactive experience. Users can input a word, such as their name, to receive a personalized joke. The application is developed using JavaScript, CSS, and EJS (Embedded JavaScript) templating. It includes server-side functionality with Express.js and interacts with the JokeAPI to fetch jokes. The project emphasizes user engagement through humor and personalized content delivery.",
  },
  {
    id: 9,
    title: "Blog App",
    img: "/assets/blog.png",
    desc: "The BlogApp is a web application built with Node.js and Express.js that allows users to write and view blog posts. It features a simple interface for creating posts with titles and content, storing them temporarily in the browser for session persistence. The application is ideal for quick and easy blog management without needing a database connection, making it a practical tool for casual blogging.",
  },
  {
    id: 10,
    title: "Cinema Booking App",
    img: "/assets/cinema.png",
    desc: "The Cinema Booking App is a web application developed with HTML, CSS, and JavaScript that allows users to select movies, choose seats, and calculate the total ticket price based on the number of seats selected. It offers an interactive interface for real-time seat availability and booking, ensuring a seamless and user-friendly experience for cinema-goers.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Daha az hareket

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20 h-screen">
        <img
          className="md:w-1/2 w-full object-cover rounded-lg"
          src={item.img}
          alt={item.title}
        />
        <motion.div className="md:w-1/2 w-full p-5" style={{ y }}>
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="mt-2">{item.desc}</p>
          <button className="mt-4 px-4 py-2 bg-yellow text-white font-bold rounded-full">
            See Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 w-full justify-center ">
        <div className="pt-8 md:flex md:justify-center md:pl-20">
          <motion.div
            className="md:w-1/3 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5 text-white pt-40">
              FEATURED <span className="text-red">WORKS</span>
            </p>
            <motion.div
              style={{ scaleX }}
              className={`progressBar h-0.5 w-full bg-gradient-rainblue  mb-5`}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
