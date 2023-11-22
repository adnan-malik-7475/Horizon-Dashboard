import React, { useState } from "react";

const MyTable = () => {
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

  const handleCheckboxChange = (index) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index].isChecked = !updatedTableData[index].isChecked;
      return updatedTableData;
    });
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="pb-4 bg-white"></div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-table">
        <thead class="text-md">
          <tr className="">
            <th className="w-[2px]"></th>
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
        
          {tableData.map((item, index) => (
            <tr key={index} classnamw="bg-white ">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                    className="w-4 h-4 bg-gray-100 "
                  />
                </div>
              </td>
              
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {item.name}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {item.progress}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {item.quantity}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
