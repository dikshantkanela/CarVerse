import React, { useState } from 'react';
import indianCars from '../dataset';
import { Text } from '@chakra-ui/react';
import battle from '../assets/battle.jpg';
import { easeInOut, motion } from 'framer-motion';
import versus from '../assets/versus.png';
import { Card,CardBody,Image,Stack } from '@chakra-ui/react';
const Compare = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [carA, setCarA] = useState('');
  const [carB, setCarB] = useState('');

  // Function to handle Compare button click
  const handleButtonActive = () => {
    if (carA && carB) {
      setButtonActive(true);
    } else {
      alert('Please select both cars to compare.');
    }
  };

  // Function to handle selection of Car A
  const handleCarAChange = (event) => {
    setCarA(event.target.value);
  };

  // Function to handle selection of Car B
  const handleCarBChange = (event) => {
    setCarB(event.target.value);
  };


  const getCarDetails = (carName) => {
    const selectedCar = indianCars.find(car => car.name === carName);
    return selectedCar ? (
      <div className="mt-4">

<Card maxW='sm' className='h-[530px] w-[500px] m-2'>
  <CardBody>
    <Image className='w-[300px]'
  
     src={selectedCar.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
    <h2 className="text-lg font-semibold text-center text text-blue-900">{selectedCar.name}</h2>
        <p> <span className='font-semibold  '>Brand:</span>  {selectedCar.brand}</p>
        <p> <span className='font-semibold '>Mileage:</span>  {selectedCar.mileage}</p>
        <p> <span className='font-semibold '>Cost:</span>  {selectedCar.cost}</p>
        <p> <span className='font-semibold '>Body Type: </span> {selectedCar.bodyType}</p>
        <p> <span className='font-semibold '>Power Figures:</span> {selectedCar.powerFigures}</p>
        <p> <span className='font-semibold '>Fuel Type:</span>  {selectedCar.fuelType}</p>
        <p> <span className='font-semibold '>Features:</span>  {selectedCar.features+","}</p>
     
    </Stack>
  </CardBody>
 
 
</Card >


      
      </div>
    ) : null;
  };
  return (
    <>
      <div className='flex flex-row mt-[80px] mb-10'>
        <motion.div className="left w-[800px] aspect-w-19 p-[100px] aspect-h-12">
          <motion.img
            transition={{ duration: 0.5, ease: easeInOut }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border rounded-md"
            src={battle}
            alt=""
          />
        </motion.div>

        <div className='right flex flex-col'>
          <h1 className='text-5xl font-bold leading-[80px] text-center mt-[76px] mr-[10px]'>
            <Text bgClip="text" bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998)">Compare any two Cars</Text>
          </h1>
          <p className='w-[400px] text-lg font-medium'>
            When comparing two cars, look at performance, fuel efficiency, safety features, and value. Car A might have better mileage and be more budget-friendly, while Car B could offer a more powerful engine and advanced safety features. Consider which aspects matter most to you to decide which car is the better fit.
          </p>
        </div>
      </div>

      <div className='flex flex-row mb-[200px]'>
        <form className="max-w-sm mx-auto">
          <label htmlFor="carA" className="block mb-4 text-lg ml-10 font-medium text-gray-900 dark:text-white">Car A</label>
          <select
            id="carA"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={carA}
            onChange={handleCarAChange}
          >
            <option value="">Choose Car A</option>
            {indianCars.map((car, index) => (
              <option key={index} value={car.name}>{car.name}</option>
            ))}
          </select>
        </form>

        <div className="flex flex-col items-center justify-center">
          <motion.img
            className='w-[100px] ml-[10px] mb-7'
            transition={{ duration: 0.5, ease: easeInOut }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={versus}
            alt=""
          />
          <button
            onClick={handleButtonActive}
            type="button"
            className="text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2 px-10 text-center me-[60px] ml-[60px] mb-2"
          >
            COMPARE
          </button>
        </div>

        <form className="max-w-sm mx-auto">
          <label htmlFor="carB" className="block mb-4 ml-10 text-lg font-medium text-gray-900 dark:text-white">Car B</label>
          <select
            id="carB"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={carB}
            onChange={handleCarBChange}
          >  
            <option value="">Choose Car B</option>
            {indianCars.map((car, index) => (
              <option key={index} value={car.name}>{car.name}</option>
            ))}
          </select>
        </form>
      </div>

      {buttonActive && (
        <div className='mt-[-150px]'>
         
          <h1 className='text-5xl font-bold leading-[80px] text-center mt-[76px] mr-[10px]'>

          
            <Text className='mb-[60px]' bgClip="text" bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998)">Comparision Results</Text>
          </h1>
          <div className='flex flex-row justify-center gap-[400px]'>
          <div>
                <h3 className="text-lg font-medium mb-2 text-center">Car A Details:</h3>
                {carA && getCarDetails(carA)}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-center">Car B Details:</h3>
                {carB && getCarDetails(carB)}
              </div>
         
</div>
              
        </div>
      )}
    
    </>
  );
}

export default Compare;
