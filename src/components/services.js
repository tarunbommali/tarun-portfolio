import React from "react";
import { servicesData } from "../utils/servicesData";

function Services() {
  return (
    <div className="flex flex-col">
      <>
        <h1 className="font-semibold p-3"> What I Can Do?</h1>
        <ul className="flex flex-row flex-wrap items-center">
    {
      servicesData.map(service => (
        <li key={service.id} className="flex flex-col items-center w-[400px] bg-white  rounded-md shadow-md m-2 p-2 px-3  lg:justify-center w-[200px] m-2 p-2 px-5">
            <img
              src={service.imgUrl}
              alt="...loading"
              className="w-[90px] h-[90px]"
            />
            <p className="font-semibold text-[#191919] pt-2">{service.displayText}</p>
        </li>
      ))
    }
         



        </ul>

        
      </>
    </div>
  );
}

export default Services;
