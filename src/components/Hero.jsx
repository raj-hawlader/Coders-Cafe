"use client";
import React, { useState } from 'react'
import Bgimage from '../../src/assets/bg-slate.png'
import blackCoffee from '../../src/assets/black.png'
import Navbar from './Navbar';
import {motion} from "framer-motion"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const bgimage = {
    backgroundImage: `url(${Bgimage})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
};

const Hero = () => {

 const [sidebar, setsidebar] = useState(false);
  return (
    <main style={bgimage}>
        <section className=' min-h-[750px] w-full font-font1'>
            <div className='container'>
            <Navbar sidebar={sidebar} setsidebar={setsidebar} />
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    <div className='text-[#F1DABF] mt-[100px] md:mt-0 p-1 space-y-28'>
                        <motion.h1 
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type:"spring",
                            stiffness:100,
                            damping:10,
                            delay:0.8
                         }}
                        className='text-7xl font-bold leading-tight ml-14'>Coders Cafe</motion.h1>
                        <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type:"spring",
                            stiffness:100,
                            damping:10,
                            delay:1
                         }}
                        className='relative'> 
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl '>Blvck Tumbler</h1>  
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus!</h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                        </motion.div>
                    </div>
                    <div className='relative'>
                        <motion.img
                        initial={{ opacity: 0, scale:0 }}
                        animate={{ opacity: 1, scale:1 }}
                        transition={{ 
                         type:"spring",
                         stiffness:100,
                         damping:10,
                         delay:0.4
                        }}
                        src={blackCoffee} alt="Coffee-img" className='relative z-40 h-[400px] md:h-[700px] img-shadow'/>
                        <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                         type:"spring",
                         stiffness:100,
                         damping:10,
                         delay:0.8
                         }}
                        className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px]  rounded-full z-10'></motion.div>
                        <div className='absolute -top-20 left-[200px] z-[1]'>
                            <motion.h1 
                            initial={{ opacity: 0, x:-100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                type:"spring",
                                stiffness:100,
                                damping:10,
                                delay:.8
                             }}
                            className='text-[165px] scale-150 font-bold text-[#1A1F25]/30 leading-none '>Blvck Tumbler</motion.h1>
                        </div>
                    </div>
                    <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1
                     }}
                    className='text-[#F1DABF] mt-[100px] md:mt-0 p-4 space-y-28 font-font1'>
                        <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Coders Cafe</h1>
                        <div className='relative'> 
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Blvck Lovers</h1>  
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos deserunt quis </h1>
                            </div>
                            <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-gray-900/40'></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {
                sidebar && (
                <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className='absolute top-0 right-0 z-10 w-[150px] h-full bg-gradient-to-b from-[#C87F12] to-primary/60 backdrop-blur-sm'>
                    <div className='text-white w-full h-full flex  flex-col items-center justify-center gap-5 text-2xl'>
                        <div className='w-[1px] h-[70px] bg-white'></div>
                        <div className='border-[1.5px] border-b-gray-50 rounded-full p-[6px]'><FaFacebookF/></div>
                        <div className='border-[1.5px] border-b-gray-50 rounded-full p-[6px]'><FaInstagram/></div>
                        <div className='border-[1.5px] border-b-gray-50 rounded-full p-[6px]'><FaTwitter/></div>
                        <div className='w-[1px] h-[70px] bg-white'></div>
                    </div>
                </motion.div>
                )
            }
        </section> 
    </main>
  )
}

export default Hero