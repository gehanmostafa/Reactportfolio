import "./Hero.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import ani5 from"../../animation/ani5.json" ;
import ani3 from "../../animation/ani3.json";

import { motion } from "framer-motion";
export default function Hero() {
  const animation2 = localStorage.getItem("activemode");
  const title = "Welcome to my portfolio!";
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };
  const spanvariance = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="photo">
          <img src="/title-modified.png" alt="photo" />
        </div>

        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="title"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={spanvariance}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        <div className="sub-title">
          I am Jihan, a fourth-year student at the Engineering College,
          specializing in front-end development. My passion lies in applying my
          knowledge and skills in designing and developing interactive websites
          and applications that enhance user experience. Presenting my projects
          in this portfolio reflects my ability to achieve innovative design
          goals and deliver creative solutions.
        </div>
        <div className="icons flex">
          <a
            className="icon icon-twitter"
            href="http://github.com/gehanmostafa"
            target="_blank"
          ></a>

          <a
            className="icon icon-instagram"
            href="http://github.com/gehanmostafa"
            target="_blank"
          ></a>

          <a
            className="icon icon-github"
            href="http://github.com/gehanmostafa"
            target="_blank"
          ></a>

          <a
            className="icon icon-linkedin-square"
            target="_blank"
            href="https://www.linkedin.com/in/jehan-mostafa-7a0164244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        {animation2 === "dark" ? (
          <Lottie animationData={ani5} style={{ width: 300, marginTop: 100 }} />
        ) : (
          <Lottie animationData={ani3} style={{ width: 300, marginTop: 100 }} />
        )}
      </div>
    </section>
  );
}
