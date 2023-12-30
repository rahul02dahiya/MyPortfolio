import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from "../mediaFiles/me.png"
import resume from "../mediaFiles/resume.pdf"

const Navbar = () => {

  const [ham, setHam] = useState(false);

  const handleHamClick = () => setHam(!ham)

  const handleDownload = () => {
    
    const resumeUrl = resume;

    // Create a temporary anchor element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the file URL
    downloadLink.href = resumeUrl;

    // Setting up the download attribute with the desired file name
    downloadLink.download = "RahulResume.pdf";

    // Append the anchor element to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-[#0a192f]'>
        <div>
          <img src={logo} alt="MyLogo" style={{ borderRadius: "50%", width: "50px" }} />
        </div>

        {/* Menu for widescreen */}

        <ul className='hidden md:flex'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger for mobile*/}
        <div onClick={handleHamClick} className='md:hidden z-10 '>
          {ham ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu for mobile */}
        <ul className={ham ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>ContactUs</li>
        </ul>

        {/* Social media handles */}
        <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>

          <ul>
            <li className='w-[160px] h-[60px] bg-[#5dce9f] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-200 '
                href="#contact">
                Email <HiOutlineMail size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] bg-[#0077b5] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://www.linkedin.com/in/rahul-dahiya-279720220/" target="_blank">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://github.com/rahul02dahiya" target="_blank">
                GitHub <FaGithub size={30} />
              </a>
            </li>

            <li className='w-[160px] h-[60px] bg-[#ff436c] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-200'
                href="https://www.instagram.com/rddahiya3/" target="_blank">
                Instagram <AiFillInstagram size={30} />
              </a>
            </li>      

            <li onClick={handleDownload} className='w-[160px] h-[60px] bg-[#ffffff20] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-200'>
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>      
          </ul>

        </div>
      </nav>
    </>
  )
}
export default Navbar