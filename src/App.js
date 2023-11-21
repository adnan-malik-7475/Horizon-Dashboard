import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import "./App.css";
import MainDashbaord from "./pages/mainDashboard";
import MarketPlace from "./pages/marketPlace";
import DataTables from "./pages/dataTables";
import Profile from "./pages/profile";
import SignUp from "./pages/signUp";
import Admin from "./pages/admin";

const router = createBrowserRouter([
  {
    path: "/mainDashboard",
    element: <MainDashbaord/>,
  },
  {
    path: "/marketPlace",
    element: <MarketPlace/>,
  },
  {
    path: "/dataTables",
    element: <DataTables/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },

]);
function App() {
  return (

<div>
 
      <RouterProvider router={router} />
      </div> 
      )}

export default App;
