import React from "react";
import ThemeSetting from "./themeSetting";

export default function Setting() {
  return (
    <div className="flex flex-col items-center p-3 min-h-screen bg-[#f3f2ef]">
      <h1 className="font-semibold pb-3">Setting</h1>
      <ThemeSetting />
    </div>
  );
}
