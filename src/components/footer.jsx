import React from 'react'

function Footer() {
  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <p className='text-base/loose '>© 2025 Patra Sawali. All rights reserved.</p>
      <div className="flex gap-7">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
      </div>
      <div className='flex items-center gap-3'>
        <a href="https://github.com/szeeto">
          <i className='ri-github-fill ri-2x'></i>
        </a>
        <a href="https://www.instagram.com/patth.ra/">
          <i className='ri-instagram-fill ri-2x'></i>
        </a>
        <a href="https://twitter.com/SawaliPatr69098">
          <i className='ri-twitter-fill ri-2x'></i>
        </a>
        <a href="https://www.linkedin.com/in/patra-sawali-7a482138a/">
          <i className='ri-linkedin-fill ri-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
