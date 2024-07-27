import React from 'react'
import indianCars from '../dataset'
const Sedan = () => {
    const data = indianCars.filter((car)=>{
        return car.bodyType==="Sedan"
    })
  
  return (
    <div>
      <h2 className="text-6xl mt-[100px] font-semibold my-5 text-center  text-blue-900">Sedans</h2>
    {data.map((selectedCar)=>{
        return(
            <div className='mt-[150px]'>

                <div className="flex flex-row gap-[400px]">
                    <div>

                    <img className='w-[450px] rounded-md' src={selectedCar.image} alt="" />
                    </div>
              <div >
              <h2 className="text-6xl font-semibold my-5  text-blue-900">{selectedCar.name}</h2>
        <p> <span className='font-semibold '>Brand:</span>  {selectedCar.brand}</p>
        <p> <span className='font-semibold '>Mileage:</span>  {selectedCar.mileage}</p>
        <p> <span className='font-semibold '>Cost:</span>  {selectedCar.cost}</p>
        <p> <span className='font-semibold '>Body Type: </span> {selectedCar.bodyType}</p>
        <p> <span className='font-semibold '>Power Figures:</span> {selectedCar.powerFigures}</p>
        <p> <span className='font-semibold '>Fuel Type:</span>  {selectedCar.fuelType}</p>
        <p> <span className='font-semibold '>Features:</span>  {selectedCar.features+","}</p>
              </div>
             
                </div>
               
            </div>
        )
    })}
    </div>
  )
}

export default Sedan
