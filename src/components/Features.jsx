import React from 'react'
import slot from '../assets/slot.jpeg'
import { motion ,useScroll} from 'framer-motion'
import { Button } from "@chakra-ui/react";
const Features = () => {
  const { scrollY } = useScroll();

  return (
    <div className='font-sans my-[100px]'>
      <div className="flex flex-row">
        <img src={slot} className=' shadow-xl rounded-md mx-[42px] w-[600px] h-[400px]' alt="" />
        <div className='flex flex-col mx-5 w-[50%] my-5'>
          <h2 className='text-5xl font-semibold '>Book a slot near your location</h2>
          <p className='w-[400px] my-5 text-lg'>{/* ... */}</p>
          <Button colorScheme='messenger' className='w-[130px]'>Book Now!</Button>
          {/* Animate content based on scrollY */}
          <motion.div
            style={{ transform: `translateY(${scrollY.get() * 0.2}px)` }} // Use transform and scrollY.get()
          >
            <p className='text-lg mt-5'>Fed up with the parking struggle? We've totally got your back! Book parking slots in your city at the most affordable prices, hassle-free. Our App aims to solve the urban problem of parking due to overcrowding of vehicles.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features


