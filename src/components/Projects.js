import React from 'react'
import NewsMonkeyImg from "../mediaFiles/newsmonkey.png"
import INotesImg from "../mediaFiles/inotes.png"
import BlogSpiritImg from "../mediaFiles/blogspirit.png"

const Projects = () => {
  return (
    <div id="projects" className='w-full h-screen text-gray-300'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Page heading */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>My projects</p>
          <p className='py-4'>Check some of my projects ; )</p>
        </div>

        {/* Container for cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* 1st card */}
          <div style={{backgroundImage: `url(${NewsMonkeyImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-div'>

            {/* Hower Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                News-Monkey Web app
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rahul02dahiya/NewsApp"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >GetCode</button></a>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div style={{backgroundImage: `url(${INotesImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-div'>

            {/* Hower Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Get iNoteBook
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rahul02dahiya/iNoteBook"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >GetCode</button></a>
              </div>
            </div>
          </div>

          {/* 3rd card  */}
          <div style={{backgroundImage: `url(${BlogSpiritImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto project-div'>

            {/* Hower Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Read & Upload blogs
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rahul02dahiya/BlogSpirit"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >GetCode</button></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects