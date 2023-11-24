import React from "react";
import SVG from "../SVG";

const Tag = ({
  pathName,
  tagName,
  tagPrice,
  isPrice,
  width = 44,
  height = 44,
}) => {
  return (
    <div className="w-60 h-24 bg-white rounded-xl flex flex-row  items-center ">
      <div className="ml-4">
        <SVG
          width={width}
          height={height}
          viewBox="0 0 32 32"
          pathName={pathName}
          fill="#4318FF"
          className="  bg-slate-300 rounded-full"
        />
      </div>
      <div className="ml-6">
        <p className="text-gray-600 text-sm">{tagName}</p>
        <p className="text-blue-950 text-3xl font-medium">
          {" "}
          {isPrice && <span>$</span>}
          {tagPrice}
        </p>
      </div>
    </div>
  );
};

export default Tag;
