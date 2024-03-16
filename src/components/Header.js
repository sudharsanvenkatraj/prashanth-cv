import React from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import './css/header.css'


export default function Header() {
  return (
    <>
      <header>
        <div class="header">
          <a href="/" class="logo"><RiAccountCircleFill />
          </a>
          <div class="header-right">
            <div class="search-container">
            </div>
            <a class="active" href="/">Home</a>
            <a href="aboutme">About me</a>
            {/* <a href="#contact">Blogs</a> */}
            <a href="projects">Projects</a>
            <a href="certificates">Certificates</a>
          </div>
        </div>
      </header>
    </>
  )
};

