import React from 'react'

const Navbar = () => {
  return (
    <nav className=' sticky top-0 backdrop-blur-lg border-b-2 border-white/10'>
      <div className=" p-2 text-center w-32">
      <h1 className=" text-3xl w-full font-Montserrat uppercase tracking-wide font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">
        Trim
      </h1>
        <p className=' opacity-60 text-xs font-normal'>Shorten Your Links</p>
      </div>
    </nav>
  )
}

export default Navbar