import React from "react";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import { Nav, NavbarContainer, MobileIcon, NavMenu } from "./NavbarElements";

// import { ReactComponent as Logo } from '../SVGs/logo.svg';
import Logo from "../SVGs/logo.svg";

export default function NavBar({ toggle }) {
  return (
    <header className=" flex bg-white-400">
      <div className="container mx-auto flex justify-between">
        <NavLink
          to="/"
          exact
          activeClassName="text-green"
          className="inline-flex items-center py-6 px-3 mr-4 text-white
                   text-4xl font-bold cursive  tracking-widest"
        >
          <img height={80} width={80} src={Logo} alt="Shashank Agarwal Logo" />
        </NavLink>
        <Nav className="flex py-3 px-3">
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {/* <NavLink
                to="/post"
                className="nav_link-btn inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-700 uppercase tracking-wide	"
                activeClassName="text-green-500"
              >
                Case Studies
              </NavLink> */}
              {/* <NavLink
                to="/project"
                className="nav_link-btn inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-700 uppercase tracking-wide"
                activeClassName="text-green-500"
              >
                Projects
              </NavLink> */}
              <NavLink
                to="/about"
                className="nav_link-btn inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-700 uppercase tracking-wide"
                activeClassName="text-green-500"
              >
                About
              </NavLink>
              <NavLink
                to="/resume"
                className="nav_link-btn inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-700 uppercase tracking-wide"
                activeClassName="text-green-500"
                target="_blank"
              >
                Resume
              </NavLink>
            </NavMenu>
          </NavbarContainer>
        </Nav>

        {/* <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.behance.net/shashankagarwal"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/shashank-agarwal11/"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/_iamtheshashank"
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div> */}
      </div>
    </header>
  );
}
