import React from 'react'
import HTMlImg from "../mediaFiles/html.png"
import CSSImg from "../mediaFiles/css.png"
import JavaScriptImg from "../mediaFiles/javascript.png"
import ReactImg from "../mediaFiles/react.png"
import NodeImg from "../mediaFiles/node.png"
import PythonImg from "../mediaFiles/python.png"
import GitHubImg from "../mediaFiles/github.png"
import TailwindImg from "../mediaFiles/tailwind.png"

const Skills = () => {
  return (
    <div id="skills" className='text-gray-300 w-full h-screen' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>

        {/* Page heading */}
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 ' >Experience</p>
          <p className='py-4'>These are the technologies I've worked with ; )</p>
        </div>

        {/* Container for images */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTMlImg} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSSImg} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScriptImg} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={NodeImg} alt="Node icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PythonImg} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHubImg} alt="GitHub icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailwindImg} alt="Tailwind icon" />
            <p className='my-4'>Tailwind</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Skills