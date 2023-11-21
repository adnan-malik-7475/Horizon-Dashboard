import React from "react";

const SVGPath = {
  Search:
    "M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z",
  Home:
    "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  Cart:
    "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
  Graph:
    "M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z",
 Profile: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  Privacy:
    "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
   vector:
   "M215.278 199.103C215.278 178.894 207.315 159.512 193.14 145.222C178.965 130.932 159.739 122.903 139.693 122.903C119.646 122.903 100.421 130.932 86.2455 145.222C72.0705 159.512 64.107 178.894 64.107 199.103L139.693 199.103H215.278Z"
};

const SVG = ({
  fill,
  width,
  height,
  pathName,
  strokeWidth,
  strokeLinejoin,
  strokeLinecap,
  className,
  viewBox,
  strokeColor,
  pathName2,
  pathName3,
  pathName4,
}) => {
  const path = SVGPath[pathName];
  const path2 = SVGPath[pathName2];
  const path3 = SVGPath[pathName3];
  const path4 = SVGPath[pathName4];

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={viewBox}
      fill={fill}
    >
      <path
        d={path}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path2}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path3}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path4}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default SVG;