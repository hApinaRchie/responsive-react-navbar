import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="md:lg m-auto max-w-[1280px] font-sans text-2xl tracking-widest text-stone-300">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Layout;
