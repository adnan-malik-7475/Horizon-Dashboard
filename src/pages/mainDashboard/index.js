import React from "react";
import Sidebar from "../../commonComponents/sidebar";
import Header from "../../commonComponents/header";
import SVG from "../../components/SVG";
import PieChart from "../../components/dashBoardTable/PieChart";
import LineChart from "../../components/dashBoardTable/lineChart";
import ProgressBar from "../../components/dashBoardTable/progressBar";
import MyTable from "../../components/dashBoardTable/tablechart";
import BarChart from "../../components/dashBoardTable/barChart";
import ComplexTable from "../../components/dashBoardTable/complexTable";
import Tag from "../../components/dashboardTagsComponent/tagsComponent";

const GraphData = {
  lineChart: {
    Mon: 200,
    Tue: 500,
    Wed: 150,
    Thu: 550,
    Fri: 150,
    Sat: 550,
    Sun: 200,
  },
  weeklyRevenue: {
    product_a: [120, 200, 150, 80, 70, 110, 130],
    product_b: [10, 46, 64, "-", 0, "-", 0],
  },
};
const MainDashbaord = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="w-full   bg-slate-100">
          <Header />

          <div className="mt-32 w-[100rem] ">
            <div class="grid grid-cols-6  ml-8 space-x-0  ">
              <Tag
                isPrice={true}
                tagName={"Earnings"}
                pathName={"table"}
                tagPrice={"350.4"}
              />
              <Tag
                isPrice={true}
                tagName={"Spend This Month"}
                pathName={"dollarSign"}
                tagPrice={"642.39"}
              />

              <div className="w-60 h-24 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Sales</p>
                  <p className="text-blue-950 text-3xl font-medium">$574.34</p>
                  <div className="flex">
                    <p className="text-green-600">+23%</p>{" "}
                    <p className="ml-2">since las month</p>
                  </div>
                </div>
              </div>

              <div className="w-60 h-24 bg-white rounded-xl  flex flex-row  items-center">
                <div className="ml-6">
                  <p className="text-gray-600 text-sm">Your Balance</p>
                  <p className="text-blue-950 text-3xl font-medium">$1,000 </p>
                </div>
                <div className="ml-8 flex flex-row  mt-2 ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d4f7/3fc3/8d3afdb81f3eb3b661d5c8ae17c8c9f0?Expires=1701648000&Signature=dVW3lb8jy249RVqzTPDmRxr-gPldbw0DL0upfDD3LYZvsVu2U-LE1W2TxuNqqdd4Mp4RhZeO5NQ9sv-vuJS3TCYgCYUuxIBD-jB1MdBfCN4jCjoNgYyLl~7as0wUUuQq7Mng5SOMBgaLzflQaiONfsDZW5Wc921C2rQLYYrVXFplWJyJ-RzFOMoq7~O-zXW-kogdOxQth7DaPQzsV~2k6GBbNOoGV47xtbjxh38hapfy8q9KIOir8DWgCBns7ZOhRcqpEJy57va0WTCmqxfupWwkiKey7ny6WMGz4abHGtJ7TztGt-IioHVMNA8rbOp4XMGlWHikl1VjKAlz42nMnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    className="  bg-slate-300 rounded-full w-12 h-12   "
                  />
                  <SVG
                    width={40}
                    height={40}
                    pathName="dropdown"
                    className=" mt-4 rounded-full   "
                  />
                </div>
              </div>
              <Tag
                isPrice={false}
                tagName={"New Task"}
                pathName={"vector"}
                tagPrice={"154"}
              />
              <Tag
                isPrice={false}
                tagName={"Projects"}
                pathName={"fileIcon"}
                tagPrice={"2935"}
              />
            </div>

            <div className="ml-4 mt-8 ">
              <div className="flex flex-row w-full">
                <div className="h-[23rem] w-[47.8rem] ml-4 bg-white rounded-xl z-50">
                  <LineChart />
                </div>

                <div className="h-[23rem] w-[47.8rem] ml-6   bg-white rounded-xl z-50">
                  <ProgressBar />
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div className="h-[23rem] w-[47.8rem] ml-4 bg-white rounded-xl z-50">
                  <MyTable />
                </div>

                <div className="h-[23rem] w-[23.5rem] ml-6  bg-white rounded-xl z-50">
                  <BarChart />
                </div>
                <div className="h-[23rem] w-[23.5rem] ml-4 bg-white rounded-xl z-50">
                  <PieChart />
                </div>
              </div>

              <div className="mt-4 flex flex-row">
                <div className="h-[23rem] w-[47.8rem] ml-4 bg-white rounded-xl z-50">
                  <ComplexTable />
                </div>
                <div className="h-[23rem] w-[23.5rem] ml-6  bg-white rounded-xl z-50">
                  <BarChart />
                </div>
                <div className="h-[23rem] w-[23.5rem] ml-4 bg-white rounded-xl z-50">
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
