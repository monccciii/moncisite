import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Navbar() {
  return (
    <div style={{fontFamily:"'Poppins', sans-serif"}} className='w-full opacity-85 z-10 font-bold absolute top-0 bg-black p-5'>
        <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1 }}
  >
        <p className='text-center text-white opacity-100'>MONCI</p>
        </motion.div>
    </div>
    
  )
}
