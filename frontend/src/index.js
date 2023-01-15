import React from "react";
import { RouterProvider, createBrowserRouter,useRouteError} from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import MyRules from './components/MyRules';
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import '../static/css/index.css';
const root = ReactDOM.createRoot(document.getElementById("app"));
function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}
const router = createBrowserRouter([
    {
        path: "/",
    element: (<div> <DashBoard /></div>),
    //errorElement: (<ErrorBoundary />),
    },
    {
     path: "/myrules",
     element:(<MyRules/>)
    }
]);
root.render(
  <RouterProvider router={router} />
);

