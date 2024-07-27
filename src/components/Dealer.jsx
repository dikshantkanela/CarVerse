import React, { useState } from 'react';
import dealer from '../assets/deaeler.jpg';
import { Text } from '@chakra-ui/react';
import { easeIn, easeOut, motion } from 'framer-motion';
const Dealer = () => {
  const [city, setCity] = useState('');
  const [brand, setBrand] = useState('');
  
  const carBrandsInIndia = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata Motors",
    "Mahindra & Mahindra",
    "Kia",
    "Toyota",
    "Honda",
    "Volkswagen",
    "Renault",
    "Nissan",
    "Skoda",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Volvo",
    "Jeep",
    "MG Motor",
    "Land Rover",
    "Jaguar",
    "Porsche",
    "Lexus",
    "Mini",
    "Maserati",
    "Bentley",
    "Rolls-Royce",
    "Ferrari",
    "Lamborghini",
    "Tesla", 
    "Force Motors",
    "Isuzu",
    "Citroen" 
  ];
  
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '' && brand.trim() !== '') {
      window.open(`https://www.google.com/maps/search/${brand}+dealers+in+${city}`, '_blank');
    } else {
      alert('Please enter both a brand and a city.');
    }
  };

  return (
    <>
      <div className="flex flex-row my-10">
        <motiondiv className="left">
          <motion.img initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.8, ease:easeIn}} className="rounded-md ml-[80px] w-500" src={dealer} alt="Dealer" />
        </motiondiv>
        <div className="right ml-20 flex flex-col">
          <h1 className="text-5xl font-bold leading-80 text-center">
            <Text bgClip="text" bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998)">
              Find dealerships
            </Text>
          </h1>
          <p className="w-400 font-medium text-lg mt-8 ml-[225px]">
            Make car hunting easier by finding the nearest car showrooms and dealerships in your city
            just like this! Whether you're after a stylish sedan, a tough SUV, or any other type of
            vehicle, our directory makes it simple. Explore great deals and a variety of options close
            to home. Begin your quest for the perfect car now!
          </p>
        </div>
      </div>
      <div className="my-[150px]">
        <h2 className="text-3xl font-bold leading-80 text-center">
          <Text className="text-black">Enter your City and Brand :</Text>
        </h2>
        <div className="flex flex-row">
          <form className="max-w-sm mx-auto">
            <label htmlFor="brands" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">
              Brand
            </label>
            <select
              id="brands"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleBrandChange}
              value={brand}
            >
              <option value="">Choose a Brand</option>
              {carBrandsInIndia.map((brandName, index) => (
                <option key={index} value={brandName}>
                  {brandName}
                </option>
              ))}
            </select>
          </form>
          <form className="max-w-sm mx-auto">
            <label className="text-lg font-bold text-gray-900" htmlFor="default-input">
              City
            </label>
            <input
              onChange={handleChange}
              value={city}
              type="text"
              id="default-input"
              className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your City"
            />
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dealer;
