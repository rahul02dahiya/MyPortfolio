import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center pt-6 p-3'>
        <form method='POST' action="https://getform.io/f/8439b9cf-48bb-429f-9e3a-1973f8156046" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or send me an email - r2047865@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message' style={{resize:"none"}}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact