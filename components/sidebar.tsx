import Head from 'next/head'
import Image from 'next/image'
import {RxHamburgerMenu} from 'react-icons/rx'
import { IconContext } from "react-icons";
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {HiWrenchScrewdriver} from 'react-icons/hi2'

export default function Sidebar() {
    const [variable, setVariable] = useState([0, 0]);
    const [screenWidth, setScreenWidth] = useState('lg')
    


  return (
    <div style={{fontFamily:"'Poppins', sans-serif"}} className='opacity-85 z-50 overflow-hidden font-bold fixed top-0 p-5'>
     <IconContext.Provider
      value={{ color: 'white'}}
    >
      <div>
        <RxHamburgerMenu onClick={() => {
            console.log('clicked')
            if (variable[0] < 1){
                setVariable(['25vw', '100vh'])
            } else {
                setVariable([0, 0])
            }
        }}/>
      </div>
    </IconContext.Provider>
    <motion.div
    initial={{ opacity: 0, width: variable[0], height: variable[1] }}
    animate={{ opacity: 1, width: variable[0], height:variable[1]}}
    transition={{ duration: 1 }}
  >
    <div className='absolute left-0 bg-black rounded-br-[60px] w-[35vw] sm:w-[25vw] h-full'>
    <p className='text-center text-white mb-[2vh] mt-[5vh] sm:mt-[0vh]'>M O N C I</p>
    <hr />
    <ul className='list-none text-white text-center mt-[5vh] font-light'>
    <div className='p-5 flex'>
            <li className="hover:transition-all duration-500 hover:text-green-500 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:pl-5"><span className='flex gap-2 items-center'><AiFillHome/>Home</span></li>
        </div>
        <div className='p-5 flex'>
            <li className="hover:transition-all duration-500 hover:text-green-500 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:pl-5"><span className='flex gap-2 items-center'><HiWrenchScrewdriver/>Services</span></li>
        </div>
        <div className='p-5 flex'>
            <li className="hover:transition-all duration-500 hover:text-green-500 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:pl-5"><span className='flex gap-2 items-center'><AiFillInfoCircle/>About</span></li>
        </div>
        <div className='p-5 flex'>
            <li className="hover:transition-all duration-500 hover:text-green-500 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:pl-5"><span className='flex gap-2 items-center'><MdEmail/>Contact</span></li>
        </div>
        <p className='mt-[10vh]'>Join our <a href='https://discord.gg/6F4ewM82bP' className='text-indigo-500'>Discord!</a></p>
    </ul>
    </div>
    </motion.div>
    </div>
    
  )
}
