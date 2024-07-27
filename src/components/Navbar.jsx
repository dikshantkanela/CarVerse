import React from 'react'
import logo from '../assets/logo.jpeg'
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Dropdown from './Dropdown'
const Navbar = () => {
  return (
  <div className='font-sans'>
 <nav className='flex flex-row items-center justify-around my-3'>
    <div className='flex flex-row items-center  ml-[-100px] '>
        <img className='w-[80px]' src={logo} alt="" />
        <h1 className='text-3xl font-semibold'>CarVerse</h1>
    </div>
    <div>
        <ul className='flex flex-row gap-6'>
            <li  className='hover:text-blue-800 text-blue-900'><a href="">Home</a> </li>
            <li className='hover:text-blue-900'><a href="">About Us</a> </li>
            <li className='hover:text-blue-900'><a href="">Contact Us</a> </li>
             <Dropdown/>
        </ul>
    </div>
    <div className='mr-[-90px]'> 
     <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={FaSearch} color="gray" />}
      />
      <Input type="text" size="md" bg={"whitesmoke"} placeholder="Search..." />
    </InputGroup>
    </div>
 </nav>
 </div>
 
  )
}

export default Navbar
