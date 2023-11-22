import React from "react";
import { Button } from "../../components/Button";
import SVG from "../../components/SVG";
import profilePic from "../../assets/admin.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
      <div className=" bg-blue-200 bg-opacity-25 w-[80%]  h-20 rounded-lg fixed  mt-6  ml-8">
        <div className="flex flex-row justify-between  items-center">
          <div>
            <Button
              type="submit"
              size="xs"
              className="w-16 "
              variants="primary"
            >
              Pages /
            </Button>

            <Button
              type="submit"
              size="xs"
              className="w-32 "
              variants="primary"
            >
              Main Dashboard
            </Button>
            <div className="text-3xl font-bold text-blue-950">
              Main Dashboard
            </div>
          </div>

          <div className="bg-white z-40 w-96 rounded-full h-14   flex flex-row items-center justify-evenly">
            <input
              type="text"
              name="text"
              id="#"
              placeholder="Search here"
              className="bg-blue-50 rounded-2xl w-52 p-2.5 h-[35px]   hover:bg-slate-200  "
            />

            <SVG
              width={32}
              height={32}
              viewBox="0 0 32 32"
              pathName="notificationIcon"
              fill="black"
              className="mt-[5px] "
            />

            <SVG
              width={32}
              height={32}
              viewBox="0 0 32 32"
              pathName="info"
              fill="black"
              className="mt-[5px] "
            />
            <SVG
              width={32}
              height={32}
              viewBox="0 0 32 32"
              pathName="nightMode"
              fill="black"
              className=" mt-[10px]"
            />
            <div>
              <img
                src={profilePic}
                className="w-[30px] h-[30px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Header;
