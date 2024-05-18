import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi'; 
import { FaMedal } from 'react-icons/fa';


import './navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a 
        href='#' 
        onClick={() => setActive("#")} 
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a 
        href='#about' 
        onClick={() => setActive("#about")} 
        className={active === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a 
        href='#skills' 
        onClick={() => setActive("#skills")} 
        className={active === "#skills" ? "active" : ""}
      >
        <FaMedal/>
      </a>
      <a 
        href='#projects' 
        onClick={() => setActive("#projects")} 
        className={active === "#projects" ? "active" : ""}
      >
        <GoChecklist />
      </a>
      <a 
        href='#contact' 
        onClick={() => setActive("#contact")} 
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail /> 
      </a>
    </nav>
  );
}

export default Navbar;
