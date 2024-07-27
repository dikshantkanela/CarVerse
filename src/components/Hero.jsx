import React from 'react';
import { Text, Button } from "@chakra-ui/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { MdCall } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import hero from '../assets/VirtusGT.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Simplifying your Car Hunt with","Preview Cars Based on Budget with","Compare Any 2 Cars with","Get Car Sales Analytics with","Find a Car Dealer in your city with" ],
    loop: true,
  });

  return (
    <div className='font-sans flex flex-row my-[80px] mx-[42px]'>
      <div className='left flex flex-col mr-5 '>
    
<h1 className='text-6xl font-bold leading-[70px] '>
<span className='text-6xl font-bold text-black'>{text}</span>
<Cursor />
<Text bgClip="text"bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998, #00f5a0)">CarVerse</Text>
</h1>
<p className='text-lg mt-5 w-[699px]'> CarVerse, your go-to for everything cars! Browse our latest models, compare features and prices, and find the perfect fit, whether it's a versatile hatchback, roomy SUV, or comfy sedan. Our team of car enthusiasts is here to guide you, so you drive away with the car that fits your lifestyle best.Explore and discover your dream ride at CarVerse! </p>

<div className="reviews flex flex-row gap-5">

</div>

      </div>
      <motion.div
        className='right'
        initial={{ opacity: 0 }} // Initial state: invisible
        animate={{ opacity: 1 }} // Animate to opacity 1 (visible) on scroll
        variants={{
          visible: { opacity: 1 }, // Define animation variants
          hidden: { opacity: 0 },
        }}
      >
        <img src={hero} className='shadow-2xl bg-cover w-[1400px] h-[350px] rounded-md' alt="" />
      </motion.div>
    </div>
  );
}


export default Hero;


