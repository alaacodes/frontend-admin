import React from "react";
import SearchAndIcons from "../../_components/search";

const PatronshipContent = () => {
  return (
    <div>
      <SearchAndIcons />
      <div
        className="h-[0px] border border-neutral-700 mt-1 mr-[35px] "
        style={{ opacity: "0.3" }}
      ></div>
      <div className="relative left-[107px] top-[-3px] w-[70px] h-[4px] bg-[#1163A2]"></div>
      <div>Patronship Content</div>
    </div>
  );
};

export default PatronshipContent;
