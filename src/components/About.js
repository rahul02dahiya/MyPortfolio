import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full h-screen text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>

          <div></div>
          </div>

          <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>

            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Rahul. Let's get started</p>
            </div>

            <div>
              <p>I have a deep interest in development and have made many projects using Vanilla as well as ReactJS apart from that. I also have knowledge of C/C++, SQL, DBMS, and Python. I see myself as a disciplined student and want to make a career in the IT industry.</p>
            </div>


        </div>
      </div>
    </div>
  )
}

export default About