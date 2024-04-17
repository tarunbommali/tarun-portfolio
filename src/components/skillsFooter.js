import React from "react";
import { FaLink } from "react-icons/fa";

export default function SkillsFooter() {
  return (
    <div className="flex flex-col   rounded-lg bg-[#f4f2ee]  absolute w-[100%] p-5	sm:flex-row justify-around">
      <ul className="flex flex-col ">
        <li className="text-[#191919] font-semibold self-start   mt-4 lg:mt-0 mb-2">
          <p className="font-semibold text-lg md:text-xl">Certifications</p>
          <hr className="footer-subtitle-line" />
        </li>
        <li className="text-md md:text-lg flex items-center">
          Namaste JavaScript by Akshay Saini
          <a
            href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708490336/Frontend/certificates/certificate_y6bbav.png"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <FaLink className="redirect-link-icon" />
          </a>
        </li>
        <li className="text-md md:text-lg flex items-center">
          PYTHON FOUNDATIONS
          <a
            href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510124/Frontend/certificates/Python_page-0001_tnrefc.jpg"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <FaLink className="redirect-link-icon" />
          </a>
        </li>
        <li className="text-md md:text-lg flex items-center">
          BUILD YOUR OWN RESPONSIVE WEBSITE
          <a
            href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510117/Frontend/certificates/Responsive_page-0001_qwmskz.jpg"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <FaLink className="redirect-link-icon" />
          </a>
        </li>
        <li className="text-md md:text-lg flex items-center">
          INTRODUCTION TO DATABASES
          <a
            href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510099/Frontend/certificates/Database_page-0001_wn2q21.jpg"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <FaLink className="redirect-link-icon" />
          </a>
        </li>
        <li className="text-md md:text-lg flex items-center">
          BUILD YOUR OWN STATIC WEBSITE
          <a
            href="https://res.cloudinary.com/drdgj0pch/image/upload/v1708510109/Frontend/certificates/Static_page-0001_klnsi8.jpg"
            target="_blank"
            rel="noreferrer"
            className="ml-3"
          >
            <FaLink className="redirect-link-icon" />
          </a>
        </li>
      </ul>

      <ul className="flex flex-col  ">
        <li className=" text-[#191919] font-semibold mt-4 lg:mt-0 mb-2">
          <p className="font-semibold text-lg md:text-xl ">
            Solved Popular Coding Question
          </p>
          <hr className="footer-subtitle-line" />
        </li>
        <li className="text-md md:text-lg">Reverse string</li>
        <li className="text-md md:text-lg">Longest common subsequence</li>
        <li className="text-md md:text-lg">Container with most water</li>
        <li className="text-md md:text-lg">Reverse linked list</li>
        <li className="text-md md:text-lg">K closest points to origin</li>
        <li className="text-md md:text-lg">Kth smallest element</li>
        <li className="text-md md:text-lg">Reverse words in a string</li>
      </ul>

      <ul className="flex flex-col">
        <li className="text-[#191919] font-semibold   mt-4 lg:mt-0 mb-2">
          <p className="font-semibold text-lg md:text-xl">Coding Profile</p>
          <hr className="footer-subtitle-line" />
        </li>
        <li>
          <a
            href="https://github.com/tarunbommali"
            target="_blank"
            className="text-md md:text-lg"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/profile/dizistarun"
            target="_blank"
            className="text-md md:text-lg"
            rel="noreferrer"
          >
            Haker Rank
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/tarunbommali/"
            target="_blank"
            className="text-md md:text-lg"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
}
