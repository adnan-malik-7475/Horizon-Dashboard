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
   "M215.278 199.103C215.278 178.894 207.315 159.512 193.14 145.222C178.965 130.932 159.739 122.903 139.693 122.903C119.646 122.903 100.421 130.932 86.2455 145.222C72.0705 159.512 64.107 178.894 64.107 199.103L139.693 199.103H215.278Z",

notificationIcon:
"M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z"
,
nightMode:
"M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z",

info:
"M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",  


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