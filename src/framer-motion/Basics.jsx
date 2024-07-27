import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Basics = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.4, // Adjust threshold as needed
  });
  const buttons = [
    "HTML", "JavaScript", "React", "Framer Motion", "Tailwind CSS", "Bootstrap", 
    "Python", "Java", "Ruby", "Django", "Flask", "ML", "Frontend", "Backend", "Full Stack"
  ];
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
   <div>
        <motion.div animate={{x:100,rotate:50, }} transition={{ease:"easeOut", duration:2, type:'spring'}} className='flex flex-row justify-center items-center mt-[100px]'>

        <div className='bg-blue-900 h-[500px] w-[500px] text-center text-white'>FRAMER MOTION</div>
        </motion.div>
       <div className='flex flex-row justify-center my-[200px]'>
        <motion.div   initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} >
        <button className='bg-blue-600 rounded-md text-white px-3 py-2 '>CLICK ME</button>  
        </motion.div>
       
        </div> 

        <motion.div  initial={{opacity:0}} transition={{ease:"easeIn",duration:2}} whileInView={{opacity:1}}  className='bg-red-600 h-[100vh]'></motion.div>
        <motion.div  initial={{opacity:0}} transition={{ease:"easeIn",duraction:2}} whileInView={{opacity:1}} className='bg-blue-700 h-[100vh]'></motion.div>

        <div ref={ref} style={{ height: '100vh' }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
          
        }}
        transition={{ duration: 0.4 }}
      >
       <div className='h-[100vh]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis error commodi harum labore. Cupiditate amet repellendus labore provident veniam alias, reiciendis voluptate aliquid nulla, unde dolorem ipsa quasi iure.Lorem</div>
      </motion.div>
    </div>
  <div className='parent flex flex-col justify-center items-center'>
  <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:0.9}} transition={{type: 'spring', stiffness: 500, damping: 30}}> <div className='bg-gray-500 h-[500px] w-[800px] my-4'>Revolutionize your hackathon experience with our all-in-one platform tailored specifically for organizers.</div> </motion.div>
  <motion.div initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:0.9}}  transition={{ type: 'tween', duration: 1 }} > <div className='bg-gray-500 h-[500px] w-[800px] my-4'>CryptoGuru solves several problems related to accessing and understanding cryptocurrency information.</div> </motion.div>
  <motion.div
    // Initial position
    initial={{y:0}}
    whileInView={{y:-30}}
    while
      // Final position
     transition={{ duration: 0.5, ease:"easeIn" }} // Transition duration
    >
      <div className='bg-gray-500 h-[500px] w-[800px] my-4'>
        Revolutionize your hackathon experience with our all-in-one platform tailored specifically for organizers.
      </div>
    </motion.div>
    </div>
    <div className="grid grid-cols-6 grid-rows-3 grid-flow-row gap-2 gap-x-5 mx-[200px] my-[100px]">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 100,}}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{  type: 'spring', stiffness: 500, damping: 30, duration: 1,  velocity: 100 ,ease:"easeIn", dampingRatio: 0.8,
          restDisplacementThreshold: 0.01,
          restVelocityThreshold: 0.01,
          overshoot: 100, }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {button}
        </motion.button>
      ))}
    </div>
   
        </div>
 
  )
}

export default Basics
