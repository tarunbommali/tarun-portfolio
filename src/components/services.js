import React from "react";
import { servicesData } from "../utils/servicesData";

function Services() {
  return (
    <div className="flex flex-col">
      <>
        <h1 className="font-semibold p-3"> What I Can Do?</h1>
        <div className="flex flex-wrap m-5 ">
    {
      servicesData.map(service => (
        <li key={service.id} className="flex justify-center flex-col items-center  bg-[#f5fafd] p-3 ml-3 w-[200px] h-15 ">
            <img
              src={service.imgUrl}
              alt="...loading"
              className="w-[90px] h-[90px]"
            />
            <p className="font-semibold text-[#191919] pt-2">{service.displayText}</p>
        </li>
      ))
    }
         



        </div>

        
      </>
    </div>
  );
}

export default Services;
