import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
// import "./App.css";
import HeaderComponent from "../components/header";

function App() {
  return (
    <>
      <div className="bg-[#FFFFFF] min-h-screen ">
        <div className="p-4">
          <HeaderComponent />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
