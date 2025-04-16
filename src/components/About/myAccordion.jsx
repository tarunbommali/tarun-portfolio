/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import accordionData from "../../utils/accordionData";

export default function MyAccordion({ themeStyles }) {
  const [selected, setSelected] = useState(null);

  // Using themeStyles directly
  const { textColor, borderColor, bgColor, shadowColor } = themeStyles;

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <>
      <div className="flex justify-center items-center font-light text-center mb-5 text-md md:text-lg">
        <h1 className={`border-b-2 pb-2 ${themeStyles.headingColor}`}>
          Common Inquiries
        </h1>
      </div>

      <div
        className={`flex justify-center items-center flex-col py-3 ${textColor}`}
      >
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div
              className={`flex flex-col justify-start rounded-md ${bgColor} ${shadowColor}   w-[100%] md:w-[80%] m-2 p-4 transition-all duration-300 hover:shadow-xl`}
              key={dataItem.id}
            >
              <div
                className={`flex justify-between items-center pb-2  cursor-pointer ${textColor} font-semibold text-sm md:text-lg`}
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h2 className="font-light">{dataItem.question}</h2>
                <span className="text-blue-500 ">
                  {selected === dataItem.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {selected === dataItem.id && (
                <div
                  className={`flex mt-1 text-start pt-3 border-t ${borderColor} w-full text-base leading-relaxed font-thin`}
                >
                  <h3 className={`${textColor}`}>{dataItem.answer}</h3>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-red-500 font-semibold">No Data Found</div>
        )}
      </div>
    </>
  );
}
