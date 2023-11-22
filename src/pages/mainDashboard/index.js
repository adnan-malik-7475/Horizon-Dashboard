import React from "react";
import Sidebar from "../../commonComponents/sidebar";
import Header from "../../commonComponents/header";

const MainDashbaord = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          {" "}
          <Sidebar />
        </div>

        <div>
          {" "}
          <Header />
        </div>
      </div>
    </div>
  );
};

export default MainDashbaord;
