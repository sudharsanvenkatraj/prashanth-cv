import React from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import './css/header.css'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    console.log("haiii", e)
    navigate(`/${e}`)
  }
  return (
    <>
      <header>
        <div class="header">
          <a href="/" class="logo"><RiAccountCircleFill />
          </a>
          <div class="header-right">
            <div class="search-container">
            </div>
            {/* <a class="active" href="/">Home</a> */}
            <button onClick={() => navigateHandler('home')}>Home</button>
            <button onClick={() => navigateHandler('aboutme')}>About me</button>
            <button onClick={() => navigateHandler('projects')}>Projects</button>
            <button onClick={() => navigateHandler('certificates')}>Certificates</button>
            {/* <a href="#contact">Blogs</a> */}
            {/* <a href="projects">Projects</a>
            <a href="certificates">Certificates</a> */}
          </div>
        </div>
      </header>
    </>
  )
};

