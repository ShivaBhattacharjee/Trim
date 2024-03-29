import { Scissors } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' sticky top-0 flex items-center gap-0 backdrop-blur-lg border-b-2 border-white/10'>
      <Link href={"/"} className=" p-2 text-center ">
      <h1 className=" text-3xl w-full font-Montserrat uppercase tracking-wide font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">
        Trim
      </h1>
        <p className=' opacity-60 text-xs font-normal'>Shorten Your Links</p>
      </Link>
      <Scissors size={30} className=' opacity-60' />
    </nav>
  )
}

export default Navbar