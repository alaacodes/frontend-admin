import React from "react";
import SearchAndIcons from "../../_components/search";

const FullProgramContent = () => {
  return (
    <div>
      <SearchAndIcons />
      <div
        className="h-[0px] border border-neutral-700 mt-1 mr-[35px] "
        style={{ opacity: "0.3" }}
      ></div>
      <div className="relative left-[217px] top-[-3px] w-[80px] h-[4px] bg-[#1163A2]"></div>
      <div>Full Program Content</div>
    </div>
  );
};

export default FullProgramContent;
