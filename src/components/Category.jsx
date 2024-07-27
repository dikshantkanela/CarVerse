import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Image, Stack } from '@chakra-ui/react';
import hatch from '../assets/hatch.jpg';
import suv from '../assets/suv.jpg';
import sedan from '../assets/sedan.jpg';
import luxury from '../assets/luxury.jpg';

const Category = () => {
  const [body, setBody] = useState("");

  const handleBodyChange = (selectedBody) => {
    setBody(selectedBody);
  };

  return (
    <>
      <div className='flex flex-row mt-[100px] ml-[120px] '>
        <div className='left flex flex-col'>
          <h1 className='text-5xl font-bold leading-[80px] '>
            Choose a category
          </h1>
          <p className='mt-10 w-[250px] text-gray-900 text-lg font-medium '>
            Choose a category that suits your lifestyle:
            Hatchbacks excel in city driving with their compact size and
            efficiency. SUVs provide spaciousness ideal for families and road
            trips. Sedans offer comfort and reliability for daily commuting.
            Luxury cars elevate your experience with unparalleled style and
            advanced features.
          </p>
        </div>

        <div className='right  flex flex-wrap ml-[20px] h-[550px] w-[900px] '>
          <div className='hatch'>
            <Card maxW='sm' className='h-[300px] m-2'>
              <CardBody>
                <Image src={hatch} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Link
                    to={{ pathname: '/search', state: { body: 'Hatchback' } }}
                  >
                    <button
                      onClick={() => handleBodyChange('Hatchback')}
                      type='button'
                      className='text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 px-9  text-center me-[60px] ml-[120px] mb-2'
                    >
                      Hatchback
                    </button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </div>
          <div className='suv'>
            <Card maxW='sm' className='h-[300px] m-2'>
              <CardBody>
                <Image src={suv} height={195} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Link to={{ pathname: '/suv', state: { body: 'SUV' } }}>
                    <button
                      onClick={() => handleBodyChange('SUV')}
                      type='button'
                      className='text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-9  py-2.5 text-center me-[60px] ml-[120px] mb-2'
                    >
                      SUV
                    </button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </div>
          <div className='sedan'>
            <Card maxW='sm' className='h-[300px] m-2'>
              <CardBody>
                <Image src={sedan} height={'190px'} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Link to={{ pathname: '/sedan', state: { body: 'Sedan' } }}>
                    <button
                      onClick={() => handleBodyChange('Sedan')}
                      type='button'
                      className='text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 px-9  text-center me-[60px] ml-[120px] mb-2'
                    >
                      Sedan
                    </button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </div>
          <div className='luxury'>
            <Card maxW='sm' className='h-[300px] m-2'>
              <CardBody>
                <Image src={luxury} height={'190px'} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Link
                    to={{ pathname: '/luxury', state: { body: 'Luxury' } }}
                  >
                    <button
                      onClick={() => handleBodyChange('Luxury')}
                      type='button'
                      className='text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5  px-9 text-center me-[60px] ml-[120px] mb-2'
                    >
                      Luxury
                    </button>
                  </Link>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
