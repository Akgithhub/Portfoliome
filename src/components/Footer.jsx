import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />

        <h2>Amaan Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/web-devloper-amaan-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=72vwq48uc200&utm_content=ml1zlip"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Akgithhub/Akgithhub.git" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
