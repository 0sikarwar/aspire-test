import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
