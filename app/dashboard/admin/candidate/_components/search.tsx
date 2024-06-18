"use client";

import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import Setting from "../../../../../public/Setting.svg";
import Notification from "../../../../../public/Notification.svg";
import Menu from "../../../../../public/Menu.svg";
import Polygon from "../../../../../public/Polygon.svg";

const SearchAndIcons: React.FC = () => {
  const [activeButton, setActiveButton] = useState("All");
  const buttonData = ["All", "Patronship", "Full Program"];

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-6 mb-[-40px]">
        <div className="search-container flex ml-[10px] items-center border border-[#ccc] rounded-md p-[5px] h-[40px]">
          <SearchIcon
            style={{
              width: "auto",
              height: "25px",
              marginTop: "4px",
              marginBottom: "4px",
              marginLeft: "8px",
              marginRight: "8px",
              color: "#C41F69",
            }}
          />
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search Course"
              className="px-2 py-1 focus:outline-none ml-[10px] placeholder-gray-301 font-almarai"
            />
            <img className="h-[13px] mr-[2px]" src={Polygon.src} alt="" />
            <div className="absolute top-1/2 left-[5px] h-7 w-px bg-gray-400 transform -translate-y-1/2  "></div>
          </div>
        </div>
        <div className="flex items-center ml-[600px] mr-[15px]">
          <img className="h-[20px]" src={Setting.src} alt="" />
          <img className="h-[20px] ml-[20px]" src={Notification.src} alt="" />
          <img className="h-[15px] ml-[20px]" src={Menu.src} alt="" />
        </div>
      </div>
      <div
        className="mt-10 mb-4 mr-[35px]"
        style={{ border: "0.1px #404040 solid", opacity: "0.3" }}
      ></div>
      <div className="text-sky-700 text-[30px] font-bold font-['B612'] ml-7 mb-5">
        Candidates
      </div>
      <div className="flex gap-10 ml-12 mt-19">
        {buttonData.map((buttonName) => (
          <div key={buttonName}>
            <a
              href={`${buttonName.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-neutral-700 text-1xl font-normal font-['B612'] ${
                activeButton === buttonName ? "active-style" : ""
              }`}
              onClick={() => handleClick(buttonName)}
            >
              {buttonName}
            </a>
          </div>
        ))}
      </div>
      {activeButton === "All" && <div id="all-content"></div>}
      {activeButton === "Patronship" && <div id="patronship-content"></div>}
      {activeButton === "Full Program" && <div id="full-program-content"></div>}
    </div>
  );
};

export default SearchAndIcons;
