import React from "react";
import Sidebar from "../../commonComponents/sidebar";
import Header from "../../commonComponents/header";
import SVG from "../../components/SVG";
import Table from "../../components/dashBoardTable";
import CheckTable from "../../components/dashBoardTable/index"


// const tableData = [
//   {
//       "name": ["Marketplace", false],
//       "quantity": 2458,
//       "date": "12.Jan.2021",
//       "progress": 75.5
//     },
//     {
//       "name": ["Venus DB PRO", true],
//       "quantity": 1485,
//       "date": "21.Feb.2021",
//       "progress": 35.4
//     },
//     {
//       "name": ["Venus DS", true],
//       "quantity": 1024,
//       "date": "13.Mar.2021",
//       "progress": 25
//     },
//     {
//       "name": ["Venus 3D Asset", true],
//       "quantity": 858,
//       "date": "24.Jan.2021",
//       "progress": 100
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 258,
//       "date": "Oct 24, 2022",
//       "progress": 75.5
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 258,
//       "date": "Oct 24, 2022",
//       "progress": 75.5
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 258,
//       "date": "12.Jan.2021",
//       "progress": 75.5
//     },
//     {
//       "name": ["Venus DB PRO", false],
//       "quantity": 858,
//       "date": "21.Feb.2021",
//       "progress": 35.4
//     },
//     {
//       "name": ["Venus DS", false],
//       "quantity": 1024,
//       "date": "13.Mar.2021",
//       "progress": 25
//     },
//     {
//       "name": ["Venus 3D Asset", false],
//       "quantity": 258,
//       "date": "24.Jan.2021",
//       "progress": 100
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 1024,
//       "date": "Oct 24, 2022",
//       "progress": 75.5
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 258,
//       "date": "Oct 24, 2022",
//       "progress": 75.5
//     },
//     {
//       "name": ["Marketplace", false],
//       "quantity": 258,
//       "date": "Oct 24, 2022",
//       "progress": 75.5
//     }
//   ]



const MainDashbaord = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="h-screen w-full   bg-slate-100">
          <Header />

          <div className="mt-32 border-2 border-blue-800 ">
            <div class="grid grid-cols-6  ml-8 ">
              <div className="w-56 h-20 bg-white rounded-xl flex flex-row  items-center ">
                <div className="ml-4">
                  <SVG
                    width={44}
                    height={44}
                    viewBox="0 0 32 32"
                    pathName="table"
                    fill="#4318FF"
                    className="  bg-slate-300 rounded-full   "
                  />
                </div>
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Earnings</p>
                  <p className="text-blue-950 text-3xl font-medium">$350.4</p>
                </div>
              </div>
              

              <div className="w-52 h-24 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-4">
                  <SVG
                    width={44}
                    height={44}
                    viewBox="0 0 32 32"
                    pathName="dollarSign"
                    fill="#4318FF"
                    className="  bg-slate-300 rounded-full   "
                  />
                </div>
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Spend this month</p>
                  <p className="text-blue-950 text-3xl font-medium">$642.39</p>
                </div>
              </div>

              <div className="w-56 h-20 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Sales</p>
                  <p className="text-blue-950 text-3xl font-medium">$574.34</p>
                  <div className="flex">
                    <p className="text-green-600">+23%</p>{" "}
                    <p className="ml-2">since las month</p>
                  </div>
                </div>
              </div>



              <div className="w-56 h-20 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-4">
                  <SVG
                    width={44}
                    height={44}
                    viewBox="0 0 32 32"
                    pathName="dollarSign"
                    fill="#4318FF"
                    className="  bg-slate-300 rounded-full   "
                  />
                </div>
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Spend this month</p>
                  <p className="text-blue-950 text-3xl font-medium">$642.39</p>
                </div>
              </div>


              <div className="w-56 h-20 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-4">
                  <SVG
                    width={44}
                    height={44}
                    viewBox="0 0 32 32"
                    pathName="dollarSign"
                    fill="#4318FF"
                    className="  bg-slate-300 rounded-full   "
                  />
                </div>
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Spend this month</p>
                  <p className="text-blue-950 text-3xl font-medium">$642.39</p>
                </div>
              </div>


              <div className="w-56 h-20 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-4">
                  <SVG
                    width={44}
                    height={44}
                    viewBox="0 0 32 32"
                    pathName="dollarSign"
                    fill="#4318FF"
                    className="  bg-slate-300 rounded-full   "
                  />
                </div>
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Spend this month</p>
                  <p className="text-blue-950 text-3xl font-medium">$642.39</p>
                </div>
              </div>



             
  
   
     <CheckTable/>







            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashbaord;
