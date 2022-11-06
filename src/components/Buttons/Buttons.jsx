import React from 'react';
import './Buttons.css';
import { BsLinkedin } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

const Buttons = () => {
  return (
    <ul className="wrapper">
      <a
        target="_blank"
        href="https://www.instagram.com/rosa_tmj/"
        rel="noreferrer"
      >
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span>
            <RiInstagramFill />
          </span>
        </li>
      </a>
      <a
        target="_blank"
        href="https://github.com/RichardWallier"
        rel="noreferrer"
      >
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span>
            <AiFillGithub />
          </span>
        </li>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/richard-wallier-batista-a2655a213/"
        rel="noreferrer"
      >
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <span>
            <BsLinkedin />
          </span>
        </li>
      </a>
    </ul>
  );
};

export default Buttons;
