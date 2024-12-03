import React from 'react'

const Footer = () => {
  return (
    <div className="bg-yellow-500 ">
      <hr className="mt-8 max-w-[1100px] shadow-lg mx-auto" />
      <div className=" w-full max-w-[1100px] m-auto p-4  flex flex-col sm:flex-row flex-wrap  gap-1  sm:justify-between ">
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold"><b>Rental-Car's</b></h3>

          <h4 className="text-sm font-medium opacity-90">Hyderabad</h4>
          <h4 className="text-sm font-medium opacity-90">Careers</h4>
          <h4 className="text-sm font-medium opacity-90">Rental Flow</h4>
          <h4 className="text-sm font-medium opacity-90">Policy</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold"><b>Contact's</b></h3>
          <h4 className="text-sm font-medium opacity-110">rentalcar@gmail.com</h4>
          <h4 className="text-sm font-medium opacity-110">+91 7543527832</h4>
          <h4 className="test-sm font-medium opacity-90">0200-2849-29</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold"><b>Service's</b></h3>
          <h4 className="text-sm font-medium opacity-90">Car Spare Parts</h4>
          <h4 className="text-sm font-medium opacity-90">Car Washing</h4>
          <h4 className="text-sm font-medium opacity-90">Car Rentals</h4>
          <h4 className="text-sm font-medium opacity-90">Car PPF</h4>

        </div>
      </div>
    </div>
  );
}

export default Footer