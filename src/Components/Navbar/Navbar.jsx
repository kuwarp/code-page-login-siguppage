import React from "react";
import { motion } from "framer-motion";
// import link from "react-router-dom";

import images from "../../assets/wave.gif";
import "./nav.css";

const Navbar = ({ items, selectedId }) => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <motion.div transition={{ duration: 0.5, ease: "easeOut" }}>
            <img src={images} alt="logo" />
          </motion.div>
        </div>

        <ul className="links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="li-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="btn">
        
          <button className="btn-s" type="submit">
         <a href="http://www.login.com">
         Login/sign-up</a>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
