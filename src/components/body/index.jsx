import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        border: "1px solid red",
        minHeight: "calc(100vh - 94px)",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Body;
