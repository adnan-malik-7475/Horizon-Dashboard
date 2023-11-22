import React from "react";
import Sidebar from "../../commonComponents/sidebar";
import Header from "../../commonComponents/header";
import SVG from "../../components/SVG";
import PieChart from "../../components/dashBoardTable/PieChart";
import LineChart from "../../components/dashBoardTable/lineChart";
import ProgressBar from "../../components/dashBoardTable/progressBar";
import MyTable from "../../components/dashBoardTable/tablechart";
import BarChart from "../../components/dashBoardTable/barChart";

const MainDashbaord = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="h-screen w-full   bg-slate-100">
          <Header />

          <div className="mt-32 w-[100rem] ">
            <div class="grid grid-cols-6  ml-8 space-x-0  ">
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
                  <p className="text-blue-950 text-3xl font-medium">Hello </p>
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
                  <p className="text-blue-950 text-3xl font-medium"> Wolrd</p>
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
                  <p className="text-blue-950 text-3xl font-medium">Hello </p>
                </div>
              </div>
            </div>

            <div className="ml-4 mt-8 ">
              <div className="flex flex-row 97%">
                <div className="h-[20rem] w-[47rem] ml-4 bg-white rounded-xl z-50">
                  <LineChart />
                </div>

                <div className="h-[20rem] w-[47rem] ml-8   bg-white rounded-xl z-50">
                  <ProgressBar />

                  
                </div>

                
              </div>

              <div className="mt-4 flex flex-row">
              <div className="h-[20rem] w-[44rem] ml-4 bg-white rounded-xl z-50">
                 


<div className="h-[20rem] w-[45rem] ml-8   bg-white rounded-xl z-50">
  <MyTable/>
</div>

                  
                </div>


              
              <div className="h-[20rem] w-[23rem] ml-20 bg-white rounded-xl z-50">
                 <BarChart/>

                  
                  </div> 
                  <div className="h-[20rem] w-[23rem] ml-4 bg-white rounded-xl z-50">
                  <PieChart />

                  
                  </div> 
                   </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashbaord;
