import React from "react";
import SVG from "../../components/SVG";
import { Link } from "react-router-dom";
import MainDashbaord from "../../pages/mainDashboard";

const Sidebar = () => {
  return (
    <div className="w-[300px] flex justify-end h-screen border border-red-600 ">
      <div className="border-2  border-green-600 w-64">
        <div className="flex flex-row  text-3xl mt-12 ">
          <div className="w-full flex flex-row justify-center">
            <p className="font-bold mr-4 ">Horizon </p> Free
          </div>
        </div>

        <hr  className="mt-4"/>

        <div className=" flex flex-row  mt-8 text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Home"
            strokeColor="gray"
            strokeLinecap="round"
            strokeWidth="1.5"
            fill="black"
          />

          <Link to="/MainDashboard">
            {" "}
            <button className="text-md font font-medium hover:bg-slate-300 ml-[10px]  ">
              {" "}
              Main Dashbaord{" "}
            </button>{" "}
          </Link>
        </div>

        <div className=" flex flex-row  mt-6 text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Cart"
            fill=""
          />

          <Link to="/MarketPlace">
            <button className="text-md font font-medium ml-[10px]" >
              NFT MarketPlace
            </button>{" "}
          </Link>
        </div>

        <div className="flex flex-row  mt-6 text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Graph"
            fill="black"
          />

          <Link to="/Datatables">
            {" "}
            <button className="text-md font font-medium ml-[10px]">
              {" "}
              Data Tables
            </button>{" "}
          </Link>
        </div>
        <div className=" flex flex-row  mt-6  text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Profile"
            fill="black"
          />

<Link to="/Profile">
            <button className="text-md font font-medium ml-[10px] active:bg-black">
            Profile
            </button>{" "}
          </Link>        </div>

        <div className=" flex flex-row  mt-6 text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Privacy"
            fill="black"
          />
<Link to="/SignUp">
            <button className="text-md font font-medium ml-[10px] active:bg-black">
            Sign In
            </button>{" "}
          </Link>                </div>
        <div className=" flex flex-row  mt-6 text-gray-500">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Home"
            fill="black"
          />
<Link to="/Admin">
            <button className="text-md font font-medium ml-[10px]">
            RTL Admin
            </button>{" "}
          </Link>                </div>
      </div>
    </div>
  );
};

export default Sidebar;
