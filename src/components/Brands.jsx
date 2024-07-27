import React from 'react'
import { motion } from 'framer-motion';
import audi from '../assets/audi.jpg'
import bmw from '../assets/bmw.jpg'
import citroen from '../assets/citroen.jpg'
import honda from '../assets/honda.jpg'
import hyundai from '../assets/hyundai.jpg'
import jaguar from '../assets/jaguar.jpg'
import jeep from '../assets/jeep.jpg'
import kia from '../assets/kia.jpg'
import lamborghini from '../assets/lamborghini.jpg'
import landrover from '../assets/land-rover.jpg'
import mahindra from '../assets/mahindra.jpg'
import mercedes from '../assets/mercedes-benz.jpg'
import mg from '../assets/mg.jpg'
import ms from '../assets/ms.png'
import nissan from '../assets/nissan.jpg'
import renault from '../assets/renault.jpg'
import skoda from '../assets/skoda.jpg'
import tata from '../assets/tata.jpg'
import toyota from '../assets/toyota.jpg'
import volkswagen from '../assets/volkswagen.jpg'
import volvo from '../assets/volvo.jpg'

const imagePaths = [
    { src: audi, alt: 'Audi', link: 'https://www.audi.com' },
    { src: bmw, alt: 'BMW', link: 'https://www.bmw.com' },
    { src: citroen, alt: 'Citroen', link: 'https://www.citroen.com' },
    { src: honda, alt: 'Honda', link: 'https://www.honda.com' },
    { src: hyundai, alt: 'Hyundai', link: 'https://www.hyundai.com' },
    { src: jaguar, alt: 'Jaguar', link: 'https://www.jaguar.com' },
    { src: jeep, alt: 'Jeep', link: 'https://www.jeep.com' },
    { src: kia, alt: 'Kia', link: 'https://www.kia.com' },
    { src: lamborghini, alt: 'Lamborghini', link: 'https://www.lamborghini.com' },
    { src: landrover, alt: 'Land Rover', link: 'https://www.landrover.com' },
    { src: mahindra, alt: 'Mahindra', link: 'https://www.mahindra.com' },
    { src: mercedes, alt: 'Mercedes-Benz', link: 'https://www.mercedes-benz.com' },
    { src: mg, alt: 'MG', link: 'https://www.mgmotor.co.uk' },
    { src: ms, alt: 'Maruti Suzuki', link: 'https://www.marutisuzuki.com' },
    { src: nissan, alt: 'Nissan', link: 'https://www.nissan.com' },
    { src: renault, alt: 'Renault', link: 'https://www.renault.com' },
    { src: skoda, alt: 'Skoda', link: 'https://www.skoda-auto.com' },
    { src: tata, alt: 'Tata', link: 'https://www.tatamotors.com' },
    { src: toyota, alt: 'Toyota', link: 'https://www.toyota.com' },
    { src: volkswagen, alt: 'Volkswagen', link: 'https://www.volkswagen.com' },
    { src: volvo, alt: 'Volvo', link: 'https://www.volvocars.com' },
];

const Brands = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, y: -10, scale: 1 }}
                transition={{ type: 'tween', duration: 0.3 }}
                className='flex justify-center mb-[50px] mt-[150px]'
            >
                <h1 className='text-6xl font-bold text-black'>All Brands</h1>
            </motion.div>

            <div className="flex justify-center p-4">
                <div className="flex flex-wrap justify-center gap-[50px] mx-5">
                    {imagePaths.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                                velocity: 100,
                                ease: "easeIn",
                                dampingRatio: 0.8,
                                restDisplacementThreshold: 0.01,
                                restVelocityThreshold: 0.01,
                                overshoot: 100,
                            }}
                            className="p-2 rounded-md hover:shadow-lg shadow-black transition-shadow duration-300 ease-in-out "
                        >
                            <a target='_blank' rel='noopener noreferrer' href={image.link}>
                                <img
                                    className="w-[100px] h-auto rounded-md hover:opacity-80 transition-opacity duration-300 ease-in-out"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands;

