import React from 'react'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Budget = () => {
  return (
    <>
    <div className='my-[215px] '>
    <h1 className='text-6xl font-bold leading-[80px] text-center '>
<Text bgClip="text"bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998, )">Select a Car according to your budget...</Text>
</h1>
<motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{  type: 'spring', stiffness: 500, damping: 30, duration: 1,  velocity: 100 ,ease:"easeIn", dampingRatio: 0.8,
          restDisplacementThreshold: 0.01,
          restVelocityThreshold: 0.01,
          overshoot: 100, }}  className="flex flex-row flex-wrap gap-10 items-center justify-center ml-[400px] mt-14 w-[500px]">
      <Link to={{ pathname: '/underten' }}>
      <button type="submit" className="btn">Under 10 Lakhs</button>
      </Link>

      <Link to={{ pathname: '/underfifteen' }}>
     
<button type="submit" className="btn">Under 15 Lakhs</button>
     </Link>
     <Link to={{ pathname: '/undertwenty' }}>
     
<button type="submit" className="btn">Under 20 Lakhs</button>
     </Link>
     <Link to={{ pathname: '/underthirty' }}>
     
<button type="submit" className="btn">Under 30 Lakhs</button>
     </Link>
     <Link to={{ pathname: '/underfifity' }}>
     
<button type="submit" className="btn">Under 50 Lakhs</button>
     </Link>
     <Link to={{ pathname: '/underfifity' }}>
     
<button type="submit" className="btn">Above 50 Lakhs</button>
     </Link>

</motion.div>

    </div>
    </>
  )
}

export default Budget
