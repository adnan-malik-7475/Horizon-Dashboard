import React from "react";
import SVG from "../../components/SVG";
import { Link } from "react-router-dom";
import MainDashbaord from "../../pages/mainDashboard";

const Sidebar = () => {
  return (
    <div className="w-[300px] flex justify-end h-screen border border-red-600">
      <div className="border-2  border-green-600 w-64">
        <div className="flex flex-row  text-3xl mt-12 ">
          <div className="w-full flex flex-row justify-center">
            <p className="font-bold mr-4 ">Horizon </p> Free
          </div>
        </div>

        <hr />

        <div className=" flex flex-row  mt-12">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Home"
            strokeColor="black"
            strokeLinecap="round"
            strokeWidth="1.5"
            fill="black"
          />

          <Link to="/MainDashboard">
            {" "}
            <button className="text-md font font-medium hover:bg-slate-300 ">
              {" "}
              Main Dashbaord{" "}
            </button>{" "}
          </Link>
        </div>

        <div className=" flex flex-row  mt-6">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Cart"
            fill=""
          />

          <Link to="/MarketPlace">
            <button className="text-md font font-medium">
              NFT MarketPlace
            </button>{" "}
          </Link>
        </div>

        <div className="flex flex-row  mt-6">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Graph"
            fill="black"
          />

          <Link to="/Datatables">
            {" "}
            <button className="text-md font font-medium">
              {" "}
              Data Tables
            </button>{" "}
          </Link>
        </div>
        <div className=" flex flex-row  mt-6">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Profile"
            fill="black"
          />

<Link to="/Profile">
            <button className="text-md font font-medium">
            Profile
            </button>{" "}
          </Link>        </div>

        <div className=" flex flex-row  mt-6">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Privacy"
            fill="black"
          />
<Link to="/SignUp">
            <button className="text-md font font-medium">
            Sign In
            </button>{" "}
          </Link>                </div>
        <div className=" flex flex-row  mt-6">
          <SVG
            width={24}
            height={24}
            viewBox="0 0 32 32"
            pathName="Home"
            fill="black"
          />
<Link to="/Admin">
            <button className="text-md font font-medium">
            RTL Admin
            </button>{" "}
          </Link>                </div>
      </div>
    </div>
  );
};

export default Sidebar;
