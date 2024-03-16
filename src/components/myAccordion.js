import React, { useState } from "react";
import accordionData from "../utils/accordionData";

export default function MyAccordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id); // Toggle the selected item
  };

  
  return (
    <div className="flex min-h-[100vh] flex-col mt-[18px] items-center py-3 ">
        <h1 className="font-semibold mb-3">FAQ's</h1>
    
      {accordionData && accordionData.length > 0 ? (
        accordionData.map((dataItem) => (
          <div className="flex flex-col w-[60%] bg-white m-2 p-2 px-5 rounded-md shadow-md	" key={dataItem.id}>
            <div
              className="flex justify-between pb-2"
              onClick={() => handleSingleSelection(dataItem.id)} // Use arrow function to pass the id
            >
              <h2 className="font-semibold">{dataItem.question}</h2>
              <span className="font-semibold h-[20px] ">
                {selected === dataItem.id ? "-" : "+"} {/* Update the symbol based on selection */}
              </span>
            </div>
            {selected === dataItem.id && ( // Render answer if selected
              <div className="flex mt-1 text-start pt-3  border-[#606770]  border-t-[1px] border-w-[100%]">
                <h3 className="text-[#606770]">{dataItem.answer}</h3>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}
