import React from "react";
import Sidebar from "../../commonComponents/sidebar";
import Header from "../../commonComponents/header";

const DataTables = () => {
  const data1 = [
    {
      name: "Horizon UI PRO",
      progress: "17.5%",
      quantity: 2458,
      date: "12 Jan 2021",
      isChecked: false,
    },
    {
      name: "Horizon UI FREE",
      progress: "10.8%",
      quantity: 1485,
      date: "21 Feb 2021",
      isChecked: true,
    },
    {
      name: "Weekly Update",
      progress: "21.3%",
      quantity: 1024,
      date: "13 Mar 2021",
      isChecked: true,
    },
    {
      name: "Venus 3D Asset",
      progress: "31.5%",
      quantity: 858,
      date: "24 Jan 2021",
      isChecked: true,
    },
    {
      name: "Marketplace",
      progress: "12.2%",
      quantity: 258,
      date: " 24 Oct 2022",
      isChecked: false,
    },
  ];

  const data2 = [
    {
      name: "Horizon UI PRO",
      progress: "17.5%",
      quantity: 2458,
      date: "12 Jan 2021",
      isChecked: true,
    },
    {
      name: "Horizon UI FREE",
      progress: "10.8%",
      quantity: 1485,
      date: "21 Feb 2021",
      isChecked: true,
    },
    {
      name: "Weekly Update",
      progress: "21.3%",
      quantity: 1024,
      date: "13 Mar 2021",
      isChecked: true,
    },
    {
      name: "Venus 3D Asset",
      progress: "31.5%",
      quantity: 858,
      date: "24 Jan 2021",
      isChecked: true,
    },
    {
      name: "Marketplace",
      progress: "12.2%",
      quantity: 258,
      date: " 24 Oct 2022",
      isChecked: true,
    },

    {
      name: "Horizon UI PRO",
      progress: "17.5%",
      quantity: 2458,
      date: "12 Jan 2021",
      isChecked: false,
    },
    {
      name: "Horizon UI FREE",
      progress: "10.8%",
      quantity: 1485,
      date: "21 Feb 2021",
      isChecked: false,
    },
    {
      name: "Weekly Update",
      progress: "21.3%",
      quantity: 1024,
      date: "13 Mar 2021",
      isChecked: false,
    },
    {
      name: "Venus 3D Asset",
      progress: "31.5%",
      quantity: 858,
      date: "24 Jan 2021",
      isChecked: false,
    },
    {
      name: "Marketplace",
      progress: "12.2%",
      quantity: 258,
      date: " 24 Oct 2022",
      isChecked: false,
    },
  ];

  return (
    <div>
      <div className="flex flex-row">
        <div>
          {" "}
          <Sidebar />
        </div>

        <div className="w-full   bg-slate-100">
          <Header />

          <div className="mt-28 ml-8 flex flex-row">
            
            <div className="w-[48rem] h-[47rem] bg-white rounded-xl z-50">
              <div className="w-[47rem] ml-4 mt-4">
            <p className="text-xl text-blue-950 font-semibold">Development Table</p>
              <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
                <thead class="text-md ">
                  <tr className="">
                    <th scope="col">Name</th>
                    <th scope="col" class=" py-3">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Progress
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data1.map((item, index) => (
                    <tr key={index} classname="bg-white ">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.progress}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div></div>

            <div className="w-[48rem] h-[47rem]  ml-4  bg-white rounded-xl z-50">
              <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
                <thead class="text-md">
                  <tr className="">
                    <th className="w-[2px] "></th>
                    <th scope="col">Name</th>
                    <th scope="col" class=" py-3">
                      Progress
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data2.map((item, index) => (
                    <tr key={index} classnamw="bg-white ">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id={`checkbox-table-search-${index}`}
                            type="checkbox"
                            checked={item.isChecked}
                            className="w-4 h-4 bg-gray-100 "
                          />
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.progress}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black object-cover transform duration-700 backdrop-opacity-100 hover:scale-125">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTables;
