import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <>
      <Head>
        <title>M O N C I</title>
        <meta name="description" content="MONCI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar />
      <motion.div
    initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1 }}
  >
      <div style={{fontFamily:"'Poppins', sans-serif"}}className='bg-[#292929] w-screen text-white font-extralight h-screen overflow-x-hidden '>
        <div className='bg-black mt-[10vh] h-[75vh] border-8'>
          <div className='flex h-full w-full'>
          <p className='mx-auto my-auto text-2xl text-center'>M O N C I </p>
          <div className='mx-auto my-auto'>
          <p className='text-2xl text-center'>M O N C I <br />
</p>      </div>
          <p className='mx-auto my-auto text-2xl text-center'>M O N C I </p>

          </div>

        </div>
        <motion.div
    initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 2, type: "tween" }}
    ><p className='text-center tracking-widest p-20 text-6xl'>MONCI WEB DEVELOPMENT</p>
 
  </motion.div>
        
  <motion.div
    initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 3, type: "tween" }}
    > 
          <p className='text-center tracking-widest p-20 text-5xl'>SHOP MONCI&apos;S SERVICES</p>

  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-2xl">
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #1<p className='mt-[1vh] tracking-wide'>1 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5 '>PACKAGE #2<p className='mt-[1vh] tracking-wide'>1 PAGE <br/>BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #3<p className='mt-[1vh] tracking-wide'>1 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #4<p className='mt-[1vh] tracking-wide'>3 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #5<p className='mt-[1vh] tracking-wide'>3 PAGE <br/>BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #6<p className='mt-[1vh] tracking-wide'>3 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #7<p className='mt-[1vh] tracking-wide'>5 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #8<p className='mt-[1vh] tracking-wide'>5 PAGE <br/>BACKEND<br/>RESPONSIVE DESIGN</p></div>
  <div className='bg-[#141414] rounded text-xl text-center p-5'>PACKAGE #9<p className='mt-[1vh] tracking-wide'>5 PAGE <br/>NO BACKEND<br/>RESPONSIVE DESIGN</p></div>
</div>
<motion.div
    initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1, type: "tween" }}
    > 
          <p className='mt-[10vh] tracking-widest text-center p-20 text-5xl'>NEED A CUSTOM PACKAGE?</p>

  </motion.div>
       
        <div className='h-[100vh] bg-[#292929]'></div>

      
      </div>
      </motion.div>
    </>
  )
}
