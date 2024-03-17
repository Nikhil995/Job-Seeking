import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF,  FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Nikhil.</div>
      <div>
      <Link to={"https://www.linkedin.com/in/nikhil-agrawal955"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.facebook.com/profile.php?id=100058994316096&mibextid=ZbWKwL"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/Nikhil995"} target="_blank">
          {/* <FaYoutube /> */}
          <FaGithub />
        </Link>
        
        <Link to={"https://www.instagram.com/nikhilagarwal955?igsh=MWl3cWx2bXYzaTJkbg=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
