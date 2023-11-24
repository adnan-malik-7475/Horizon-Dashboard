import React, { useState } from "react";

const ComplexTable = () => {
  const [tableData, setTableData] = useState([
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
  ]);

 

  return (
    // <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
        {tableData.map((item, index) => (
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
    // </div>
  );
};

export default ComplexTable;
