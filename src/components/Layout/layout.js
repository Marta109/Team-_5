import React from "react";

import "./layout.scss";

const Layout = ({ children }) => {
  return <div className="app-layout">
    <main>{children}</main></div>;
};
export default Layout;
