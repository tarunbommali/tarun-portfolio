import React from "react";
import { useState } from "react";


export default function ThemeSetting() {
  const [selectedOption, setSelectedOption] = useState("deviceSetting");

  const handleChange = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <div className="flex flex-col justify-start items-start w-[80%] p-10 bg-[#ffffff] rounded-xl">
      <p className="text-[#191919] font-semibold">Display</p>
      <p className="text-[#191919] font-medium">
        Choose how this protfolio experience looks for this device.
      </p>
      <fieldset className="flex flex-col">
        <div className="flex items-center mt-3">
          <input
            id="deviceSetting"
            className={selectedOption === "deviceSetting" ? "peer-draft" : ""}
            type="radio"
            name="status"
            checked={selectedOption === "deviceSetting"}
            onChange={handleChange}
          />
          <label
            htmlFor="deviceSetting"
            className={`ml-2 ${
              selectedOption === "deviceSetting"
                ? "peer-checked-deviceSetting:text-sky-500"
                : ""
            }`}
          >
            Device settings
          </label>
        </div>
        <div className="flex items-center mt-3">
          <input
            id="darkMode"
            className={selectedOption === "darkMode" ? "peer-published" : ""}
            type="radio"
            name="status"
            checked={selectedOption === "darkMode"}
            onChange={handleChange}
          />
          <label
            htmlFor="darkMode"
            className={`ml-2 ${
              selectedOption === "darkMode"
                ? "peer-checked-darkMode:text-sky-500"
                : ""
            }`}
          >
            Dark mode
          </label>
        </div>
        <div className="flex items-center mt-3">
          <input
            id="lightMode"
            className={selectedOption === "lightMode" ? "peer-published" : ""}
            type="radio"
            name="status"
            checked={selectedOption === "lightMode"}
            onChange={handleChange}
          />
          <label
            htmlFor="lightMode"
            className={`m-2 ${
              selectedOption === "lightMode"
                ? "peer-checked-lightMode:text-sky-500"
                : ""
            }`}
          >
            Light mode
          </label>
        </div>
        <div className="mt-5 text-[#666666] ">
          If you choose Device settings, this app will use the mode that's
          already selected in this device's settings.
        </div>
        <div className={selectedOption === "published" ? "block" : "hidden"}>
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
    </div>
  );
}
